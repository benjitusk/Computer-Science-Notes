// @ts-check
// "Last updated" for a note: the date of the newest commit that changed it.
//
//   - `updatedDate` in frontmatter always wins.
//   - History follows renames, so a note keeps the dates it earned in the
//     Obsidian vault (docs/…) before the migration moved it.
//   - Commits in .git-blame-ignore-revs (the migration itself) don't count.
//   - Uncommitted edits fall back to the file's modification time.
//
// Build-time only: it shells out to git, and CI must check out full history
// (see `fetch-depth` in .github/workflows). Without git, notes simply have no
// date rather than failing the build.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const CONTENT_DIR = 'src/content/notes';

/** @param {string[]} args */
function git(args) {
    try {
        return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    } catch {
        return undefined;
    }
}

/** @type {Set<string> | undefined} */
let ignored;
function ignoredRevs() {
    if (!ignored) {
        const file = fs.existsSync('.git-blame-ignore-revs') ? fs.readFileSync('.git-blame-ignore-revs', 'utf8') : '';
        ignored = new Set(file.split('\n').filter((line) => /^[0-9a-f]{40}$/.test(line.trim())));
    }
    return ignored;
}

/** @type {Map<string, Date | undefined>} */
const cache = new Map();

/**
 * @param {{ id: string, data: { updatedDate?: Date } }} note
 * @returns {Date | undefined}
 */
export function lastUpdated({ id, data }) {
    if (data.updatedDate) return data.updatedDate;
    const file = `${CONTENT_DIR}/${id}.md`;
    if (cache.has(file)) return cache.get(file);

    let date;
    if (fs.existsSync(file) && git(['status', '--porcelain', '--', file])?.trim()) {
        date = new Date(fs.statSync(file).mtimeMs);
    } else {
        const log = git(['log', '--follow', '--format=%H %cI', '--', file]) ?? '';
        const newest = log
            .split('\n')
            .map((line) => line.split(' '))
            .find(([hash, iso]) => hash && iso && !ignoredRevs().has(hash));
        date = newest ? new Date(newest[1]) : undefined;
    }
    cache.set(file, date);
    return date;
}
