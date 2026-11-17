// Generates src/assets/og/background.png, the backdrop for every Open Graph
// card (see src/pages/og/[...route].ts). Titles and descriptions are drawn on
// top of it at build time; this image holds everything that's the same on
// every card: ruled paper, the red margin, and the footer with the brand.
//
// Drawn with CanvasKit, the same renderer astro-og-canvas uses, so the footer
// is set in the real Instrument Sans.
//
// Run after changing the branding or palette:  npm run og:background

import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import init from 'canvaskit-wasm/full';

const { resolve } = createRequire(import.meta.url);
const CanvasKit = await init({ locateFile: (file) => resolve(`canvaskit-wasm/bin/full/${file}`) });

const W = 1200;
const H = 630;
const PAD = 120; // matches `padding` in the OG route; text starts right of the margin
const MARGIN_X = 88;
const RULE_GAP = 42;
const FOOTER_Y = 540;

// Palette from src/styles/tokens.css (light theme).
const paper = [251, 250, 245];
const ink = [31, 36, 48];
const subtle = [115, 122, 140];
const rule = [219, 228, 243];
const margin = [224, 138, 128];
const accent = [44, 86, 201];
const surface = [255, 255, 255];

// Branding from src/consts.ts and the site URL in astro.config.mjs.
const brand = 'school';
const author = 'Benji Tusk';
const domain = 'school.benjitusk.com';

const assets = './src/assets/og';
const color = (rgb, alpha = 1) => CanvasKit.Color(...rgb, alpha);
const paint = (rgb, { stroke = 0, round = false } = {}) => {
    const p = new CanvasKit.Paint();
    p.setColor(color(rgb));
    p.setAntiAlias(true);
    if (stroke) {
        p.setStyle(CanvasKit.PaintStyle.Stroke);
        p.setStrokeWidth(stroke);
        if (round) p.setStrokeCap(CanvasKit.StrokeCap.Round);
    }
    return p;
};

const image = CanvasKit.MakeSurface(W, H);
const canvas = image.getCanvas();

// Ruled paper, stopping at the footer, and the red margin line.
canvas.clear(color(paper));
for (let y = RULE_GAP * 2; y < FOOTER_Y; y += RULE_GAP) {
    canvas.drawRect(CanvasKit.XYWHRect(0, y, W, 2), paint(rule));
}
canvas.drawRect(CanvasKit.XYWHRect(MARGIN_X, 0, 3, H), paint(margin));
canvas.drawRect(CanvasKit.XYWHRect(0, FOOTER_Y, W, H - FOOTER_Y), paint(paper));

const fontMgr = CanvasKit.FontMgr.FromData(
    await fs.readFile(`${assets}/InstrumentSans-Bold.woff`),
    await fs.readFile(`${assets}/InstrumentSans-Regular.woff`)
);

function paragraph(text, rgb, { size, weight }) {
    const textStyle = {
        color: color(rgb),
        fontFamilies: ['Instrument Sans'],
        fontSize: size,
        fontStyle: { weight: CanvasKit.FontWeight[weight] },
    };
    const builder = CanvasKit.ParagraphBuilder.Make(new CanvasKit.ParagraphStyle({ textStyle }), fontMgr);
    builder.addText(text);
    const para = builder.build();
    para.layout(W);
    return para;
}

const middle = FOOTER_Y + (H - FOOTER_Y) / 2;

// The logo: a little ruled page, as in Branding.astro (a 32-unit viewBox, drawn at 40px).
const LOGO = 40;
const s = LOGO / 32;
const x0 = PAD;
const y0 = middle - LOGO / 2;
const page = CanvasKit.RRectXY(CanvasKit.XYWHRect(x0 + 3 * s, y0 + 2 * s, 26 * s, 28 * s), 4 * s, 4 * s);
canvas.drawRRect(page, paint(surface));
canvas.drawRRect(page, paint(ink, { stroke: 2 * s }));
for (const [y, end] of [
    [10, 25],
    [15, 25],
    [20, 25],
    [25, 21],
]) {
    canvas.drawLine(x0 + 14 * s, y0 + y * s, x0 + end * s, y0 + y * s, paint(accent, { stroke: 2 * s, round: true }));
}
canvas.drawLine(x0 + 10 * s, y0 + 3 * s, x0 + 10 * s, y0 + 29 * s, paint(margin, { stroke: 2 * s }));

const name = paragraph(brand, ink, { size: 30, weight: 'Bold' });
const by = paragraph(`· ${author}`, subtle, { size: 22, weight: 'Normal' });
const nameX = PAD + LOGO + 12;
canvas.drawParagraph(name, nameX, middle - name.getHeight() / 2);
canvas.drawParagraph(
    by,
    nameX + name.getMaxIntrinsicWidth() + 10,
    middle - name.getHeight() / 2 + (name.getAlphabeticBaseline() - by.getAlphabeticBaseline())
);

const url = paragraph(domain, accent, { size: 22, weight: 'Normal' });
canvas.drawParagraph(url, W - 80 - url.getMaxIntrinsicWidth(), middle - url.getHeight() / 2);

const bytes = image.makeImageSnapshot().encodeToBytes(CanvasKit.ImageFormat.PNG, 100);
image.dispose();
await fs.writeFile(`${assets}/background.png`, bytes);

console.log(`background.png ${W}×${H}, ${Math.round(bytes.length / 1024)} KB`);
