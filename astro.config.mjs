// @ts-check

import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import satteriCallouts from 'satteri-callouts';
import { satteriEmoji } from 'satteri-emoji';
import og from 'astro-og';
import { existsSync, readFileSync } from 'node:fs';
import { withCacheKey } from './src/lib/markdown/cache-key.js';
import { satteriDirAuto } from './src/lib/markdown/dir-auto.js';
import { satteriImageWidth } from './src/lib/markdown/image-width.js';
import { satteriKatex } from './src/lib/markdown/katex.js';
import { satteriCalloutLineBreaks, satteriLineBreaks } from './src/lib/markdown/line-breaks.js';

// Dev-only live-preview editor at /__edit, from a sibling checkout of astro-mdx-editor. It isn't a
// dependency: where that folder doesn't exist (CI, other machines), the site builds without it.
const editorEntry = new URL('../astro-mdx-editor/src/index.ts', import.meta.url);
const mdxEditor = existsSync(editorEntry) ? (await import(editorEntry.href)).default : null;

// The sitemap goes by what each built page says about itself (it's written after every page):
// pages tagged noindex (unlisted courses, search) are left out, and a note's <lastmod> is its
// article:modified_time, so the sitemap and the page never disagree.
const outDir = new URL('./dist/', import.meta.url);
/** The built HTML of a sitemap URL, or '' if there's no file for it. @param {string} url */
function builtPage(url) {
    const file = new URL(`.${new URL(url).pathname}index.html`, outDir);
    return existsSync(file) ? readFileSync(file, 'utf8') : '';
}

// https://astro.build/config
export default defineConfig({
    site: 'https://school.benjitusk.com',
    // astro-og: dev toolbar app that previews each page's social share card.
    // mdx: notes are plain .md, but the editor needs it to preview the raw HTML in them (drawings, <u>, <mark>).
    integrations: [
        mdx(),
        sitemap({
            filter: (page) => !/<meta name="robots" content="noindex"/.test(builtPage(page)),
            serialize(item) {
                const date = /property="article:modified_time" content="([^"]+)"/.exec(builtPage(item.url))?.[1];
                return date ? { ...item, lastmod: date } : item;
            },
        }),
        og(),
        mdxEditor?.({
            collections: {
                // A note's id is "<course>/<slug>", which is also its URL.
                notes: { pageUrl: (/** @type {string} */ id) => `/${id}/` },
            },
            emoji: { shortcodes: ['github', 'cldr'] },
            images: { dir: 'src/assets/notes/{id}' },
        }),
    ].filter(Boolean),

    markdown: {
        shikiConfig: {
            themes: { light: 'github-light', dark: 'github-dark' },
        },
        processor: satteri({
            // The Obsidian-flavoured Markdown the notes were written in: $math$,
            // definition lists, ^superscript^ and ~subscript~, smart quotes.
            features: {
                math: true,
                definitionList: true,
                superscript: true,
                subscript: true,
                smartPunctuation: true,
            },
            mdastPlugins: [satteriLineBreaks, satteriEmoji({ shortcodes: ['github', 'cldr'] })],
            hastPlugins: [
                // Stamped so that changing any plugin re-renders every note (see cache-key.js).
                withCacheKey(satteriKatex),
                satteriCallouts({ theme: 'obsidian' }),
                satteriCalloutLineBreaks,
                satteriImageWidth,
                satteriDirAuto,
            ],
        }),
    },

    // Self-hosted via Astro's font pipeline (fetched at build, served locally).
    fonts: [
        {
            provider: fontProviders.google(),
            name: 'Source Serif 4',
            cssVariable: '--font-source-serif',
            weights: [400, 600],
            styles: ['normal', 'italic'],
            subsets: ['latin'],
            fallbacks: ['Georgia', 'serif'],
        },
        {
            provider: fontProviders.google(),
            name: 'Instrument Sans',
            cssVariable: '--font-instrument',
            weights: [400, 500, 600, 700],
            styles: ['normal'],
            subsets: ['latin'],
            fallbacks: ['system-ui', 'sans-serif'],
        },
        {
            provider: fontProviders.google(),
            name: 'JetBrains Mono',
            cssVariable: '--font-jetbrains',
            weights: [400, 600],
            styles: ['normal'],
            subsets: ['latin'],
            fallbacks: ['ui-monospace', 'monospace'],
        },
        {
            provider: fontProviders.google(),
            name: 'Frank Ruhl Libre',
            cssVariable: '--font-frank-ruhl',
            weights: [400, 600],
            styles: ['normal'],
            subsets: ['hebrew'],
            fallbacks: ['serif'],
        },
    ],
});
