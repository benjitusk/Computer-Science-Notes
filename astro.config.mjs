// @ts-check

import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import satteriCallouts from 'satteri-callouts';
import { satteriEmoji } from 'satteri-emoji';
import og from 'astro-og';
import { existsSync } from 'node:fs';
import { satteriDirAuto } from './src/lib/markdown/dir-auto.js';
import { satteriImageWidth } from './src/lib/markdown/image-width.js';
import { satteriKatex } from './src/lib/markdown/katex.js';
import { satteriLineBreaks } from './src/lib/markdown/line-breaks.js';

// Dev-only live-preview editor at /__edit, from a sibling checkout of astro-mdx-editor. It isn't a
// dependency: where that folder doesn't exist (CI, other machines), the site builds without it.
const editorEntry = new URL('../astro-mdx-editor/src/index.ts', import.meta.url);
const mdxEditor = existsSync(editorEntry) ? (await import(editorEntry.href)).default : null;

// https://astro.build/config
export default defineConfig({
    site: 'https://school.benjitusk.com',
    // astro-og: dev toolbar app that previews each page's social share card.
    integrations: [
        sitemap(),
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
            hastPlugins: [satteriKatex, satteriCallouts({ theme: 'obsidian' }), satteriImageWidth, satteriDirAuto],
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
