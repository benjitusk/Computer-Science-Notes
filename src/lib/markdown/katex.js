// @ts-check
// Renders math with KaTeX at build time, so pages ship HTML and CSS, no math JS.
//
// The parser (features.math) leaves `$…$` as <code class="math-inline"> and
// `$$…$$` as <pre><code class="math-display">; this swaps each for KaTeX's HTML.
// Macros from preamble.tex (\R, \pset, \p, …) are available in every note, and
// a \newcommand in one formula carries on to the rest of that note (as it did
// under MathJax), but not into other notes.
// A formula KaTeX can't parse renders in red with the error as its title,
// rather than failing the build.

import fs from 'node:fs';
import katex from 'katex';
import { defineHastPlugin } from 'satteri';

/** `\gdef \pset#1{\mathcal{P}(#1)}` → { '\\pset': '\\mathcal{P}(#1)' } */
function readPreamble() {
    const source = fs.readFileSync(new URL('./preamble.tex', import.meta.url), 'utf8');
    /** @type {Record<string, string>} */
    const macros = {};
    for (const match of source.matchAll(/^\\gdef\s*(\\[a-zA-Z]+)(?:#\d)*\{(.*)\}\s*$/gm)) {
        macros[match[1]] = match[2];
    }
    return macros;
}

const macros = readPreamble();

/**
 * The index of the brace that closes the group opening at `open`.
 * @param {string} tex @param {number} open
 */
function closingBrace(tex, open) {
    let depth = 0;
    for (let i = open; i < tex.length; i++) {
        if (tex[i] === '\\') i++;
        else if (tex[i] === '{') depth++;
        else if (tex[i] === '}' && --depth === 0) return i;
    }
    return -1;
}

/**
 * MathJax-isms KaTeX doesn't take:
 *   - plain TeX `\cases{a & b \\ c & d}`, whose second column is text, so the
 *     notes wrap math there in `$…$`; it becomes `\begin{cases}` without them.
 *   - `{align}` inside inline math, which MathJax allowed; inline it's `{aligned}`.
 * @param {string} tex @param {boolean} displayMode
 */
function adapt(tex, displayMode) {
    let at;
    while ((at = tex.indexOf('\\cases{')) !== -1) {
        const open = at + '\\cases'.length;
        const close = closingBrace(tex, open);
        if (close === -1) break;
        const body = tex.slice(open + 1, close).replace(/\$/g, '');
        tex = `${tex.slice(0, at)}\\begin{cases}${body}\\end{cases}${tex.slice(close + 1)}`;
    }
    if (!displayMode) tex = tex.replace(/\\(begin|end)\{align\*?\}/g, '\\$1{aligned}');
    return tex;
}

/** @param {string} tex @param {boolean} displayMode @param {Record<string, string>} documentMacros */
function render(tex, displayMode, documentMacros) {
    return katex.renderToString(adapt(tex, displayMode), {
        displayMode,
        macros: documentMacros,
        // \newcommand defines for the whole document rather than this formula's group.
        globalGroup: true,
        throwOnError: false,
        strict: 'ignore',
    });
}

/** This note's macros: the preamble plus whatever its formulas have defined so far. */
const documentMacros = (/** @type {{ data: Record<string, any> }} */ ctx) => (ctx.data.katexMacros ??= { ...macros });

/** @param {unknown} className @param {string} name */
const hasClass = (className, name) => Array.isArray(className) && className.includes(name);

export const satteriKatex = defineHastPlugin({
    name: 'katex',
    element: {
        filter: ['pre', 'code'],
        visit(node, ctx) {
            if (node.tagName === 'code' && hasClass(node.properties.className, 'math-inline')) {
                return { type: 'raw', value: render(ctx.textContent(node), false, documentMacros(ctx)) };
            }
            if (node.tagName === 'pre') {
                const code = node.children.find((child) => child.type === 'element');
                if (code?.type === 'element' && hasClass(code.properties.className, 'math-display')) {
                    return { type: 'raw', value: render(ctx.textContent(code), true, documentMacros(ctx)) };
                }
            }
        },
    },
});
