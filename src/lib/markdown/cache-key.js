// @ts-check
// Astro keeps each note's rendered HTML (in .astro/data-store.json) until the
// note's file changes. It throws the whole cache away when astro.config
// changes, but it compares the config as JSON, where a plugin is only its name:
// an edit to a plugin's code, or a plugin package update, goes unnoticed and
// notes keep their old HTML.
//
// withCacheKey stamps a plugin with a digest of this folder and the versions of
// the Markdown packages, so any such change reads as a config change and Astro
// re-renders every note. (Deleting .astro/ by hand does the same, but not while
// a dev server is running: it re-renders without the plugins and saves that.)

import { createHash } from 'node:crypto';
import fs from 'node:fs';

const PACKAGES = ['satteri', 'satteri-callouts', 'satteri-emoji', 'katex'];

function digest() {
    const hash = createHash('sha256');
    const dir = new URL('./', import.meta.url);
    for (const name of fs.readdirSync(dir).sort()) hash.update(name).update(fs.readFileSync(new URL(name, dir)));
    // Read directly: some of these packages' exports don't include package.json.
    for (const name of PACKAGES) {
        const pkg = new URL(`../../../node_modules/${name}/package.json`, import.meta.url);
        hash.update(`${name}@${JSON.parse(fs.readFileSync(pkg, 'utf8')).version}`);
    }
    return hash.digest('hex').slice(0, 16);
}

/**
 * @template {object} T
 * @param {T} plugin
 * @returns {T & { cacheKey: string }}
 */
export function withCacheKey(plugin) {
    return { ...plugin, cacheKey: digest() };
}
