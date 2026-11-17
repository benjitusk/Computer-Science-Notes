// One-off migration: the Obsidian vault in docs/ → Astro content in src/content/.
//
//   node scripts/convert-obsidian.mjs
//
// What it does:
//   - Every note becomes src/content/notes/<course>/<slug>.md with frontmatter
//     (title, order, section). The course comes from the folder the note sat in.
//   - Every course folder becomes src/content/courses/<course>.md (title, year,
//     semester, unlisted). A course's "00. Note.md" credit line becomes its body.
//   - [[wikilinks]] become Markdown links to the note's new URL, with heading
//     anchors slugged the way Astro slugs headings.
//   - ![[image.png]] embeds become Markdown images, copied into
//     src/assets/notes/<course>/. A width (`|300` or `{width=300}`) is kept as
//     `{width=300}`, which src/lib/markdown/image-width.js applies.
//   - ![[drawing.excalidraw]] embeds become a light/dark pair of SVGs in
//     public/drawings/, swapped by the theme in CSS.
//   - ==highlights== become <mark>.
//   - $$…$$ display math always sits on its own lines, which the parser needs.
//   - redirects.json maps each old GitHub Pages path to its new path.
//
// Single newlines are left alone: src/lib/markdown/line-breaks.js renders them
// as <br>, like Obsidian (and mkdocs' nl2br) did.
//
// Prints everything it couldn't resolve. Safe to rerun: it rewrites its outputs.
//
// It ran once, and docs/ was deleted in the same commit; to rerun it, check out
// the commit before that one.

import fs from 'node:fs';
import path from 'node:path';
import GithubSlugger, { slug as githubSlug } from 'github-slugger';

const VAULT = 'docs';
const NOTES_OUT = 'src/content/notes';
const COURSES_OUT = 'src/content/courses';
const ASSETS_OUT = 'src/assets/notes';
const DRAWINGS_OUT = 'public/drawings';
const FILES_OUT = 'public/files';

/** Folders that aren't notes. */
const SKIP_DIRS = new Set(['assets', 'excalidraw', 'javascripts']);
/** Pages that become hand-written Astro pages instead (home, about). */
const SKIP_FILES = new Set(['index.md', 'about.md']);

const ROMAN = { I: 1, II: 2, III: 3, IV: 4 };
const WORD_NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

/** @type {string[]} */
const problems = [];

// ---------------------------------------------------------------------------
// Walk the vault

/** @param {string} dir @returns {string[]} */
function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return SKIP_DIRS.has(entry.name) && dir === VAULT ? [] : walk(full);
        return [full];
    });
}

const noteFiles = walk(VAULT).filter(
    (f) => f.endsWith('.md') && !(path.dirname(f) === VAULT && SKIP_FILES.has(path.basename(f)))
);

/** Media anywhere in the vault (drawings included), by lowercased basename: Obsidian resolves embeds by name. */
const media = new Map();
for (const file of [...walk(VAULT), ...walk(path.join(VAULT, 'excalidraw'))]) {
    if (!file.endsWith('.md')) media.set(path.basename(file).toLowerCase(), file);
}

// ---------------------------------------------------------------------------
// Names and slugs

/** "Calculus I" → "calculus-1", "Data Structures II" → "data-structures-2". */
function slugify(name) {
    const arabic = name.replace(/\b(I{1,3}|IV)$/, (numeral) => String(ROMAN[numeral]));
    return githubSlug(arabic.replace(/[—–]/g, ' ').replace(/['’]/g, ''))
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

/** "Year II" → 2. */
function yearNumber(name) {
    const match = /^Year (I{1,3}|IV)$/.exec(name);
    return match ? ROMAN[match[1]] : undefined;
}

/**
 * Where a note sits: its course and (for nested folders like Homework) a section.
 * @param {string} file
 */
function placement(file) {
    const parts = path.relative(VAULT, path.dirname(file)).split(path.sep).filter(Boolean);
    const year = yearNumber(parts[0] ?? '');
    if (year) {
        // Year/Semester/Course[/Section]; a note directly under a year is a guide.
        if (parts.length === 1) return { courseName: 'Guides', year, semester: undefined, section: undefined };
        const [, semester, courseName, ...rest] = parts;
        return { courseName, year, semester, section: rest.join(' / ') || undefined };
    }
    // Outside the year folders (Parasha Notes/Sefer Shemot): the top folder is the course.
    const [courseName, ...rest] = parts;
    return { courseName, year: undefined, semester: undefined, section: rest.join(' / ') || undefined };
}

/**
 * "03. Conditional Probability" → { order: 3, title: "Conditional Probability" };
 * "Torah and Tech Week Four" → { order: 4, title: "Week Four" }.
 * @param {string} base filename without .md
 * @param {string} courseName
 */
function titleAndOrder(base, courseName) {
    const numbered = /^(\d+)\.\s+(.*)$/.exec(base);
    if (numbered) return { order: Number(numbered[1]), title: numbered[2].trim() };
    let title = base;
    if (title.startsWith(courseName + ' ')) title = title.slice(courseName.length + 1);
    const week = /^Week (\w+)$/i.exec(title);
    if (week) {
        const n = WORD_NUMBERS.indexOf(week[1].toLowerCase());
        return { order: n >= 0 ? n : Number(week[1]) || undefined, title };
    }
    return { order: undefined, title };
}

// ---------------------------------------------------------------------------
// Index every note before converting any, so links can resolve forward.

/** @typedef {{ file: string, course: string, slug: string, title: string, order?: number, section?: string, url: string, oldPath: string }} Note */

/** @type {Map<string, { slug: string, name: string, year?: number, semester?: string, unlisted: boolean, credit?: string }>} */
const courses = new Map();
/** @type {Note[]} */
const notes = [];
/** Lowercased basename (no .md) → notes with that name (two courses both have "01. Introduction"). */
const byName = new Map();

/** awesome-pages `hide: true` hid these folders from the mkdocs nav; they stay unlisted. */
function hiddenInNav(file) {
    let dir = path.dirname(file);
    while (dir.startsWith(VAULT) && dir !== VAULT) {
        const pages = path.join(dir, '.pages');
        if (fs.existsSync(pages) && /hide:\s*true/.test(fs.readFileSync(pages, 'utf8'))) return true;
        dir = path.dirname(dir);
    }
    return false;
}

for (const file of noteFiles) {
    const base = path.basename(file, '.md');
    const { courseName, year, semester, section } = placement(file);
    const course = slugify(courseName);
    if (!courses.has(course)) {
        courses.set(course, { slug: course, name: courseName, year, semester, unlisted: hiddenInNav(file) });
    }

    // A course's "00. Note.md" is the credit line for its lecturer, not a note.
    if (base === '00. Note') {
        courses.get(course).credit = fs.readFileSync(file, 'utf8').trim();
        continue;
    }

    const { title, order } = titleAndOrder(base, courseName);
    const slug = slugify(title);
    const note = {
        file,
        course,
        slug,
        title,
        order,
        section,
        url: `/${course}/${slug}/`,
        // mkdocs served docs/Foo/Bar.md at /Computer-Science-Notes/Foo/Bar/.
        oldPath: '/' + path.relative(VAULT, file).replace(/\.md$/, '/'),
    };
    byName.set(base.toLowerCase(), [...(byName.get(base.toLowerCase()) ?? []), note]);
    notes.push(note);
}

// Slugs must be unique within a course.
const seen = new Set();
for (const note of notes) {
    const key = `${note.course}/${note.slug}`;
    if (seen.has(key)) problems.push(`Two notes slug to ${key}`);
    seen.add(key);
}

// ---------------------------------------------------------------------------
// Heading anchors, slugged like Astro (github-slugger over the heading's text).

/** Rough plain text of a Markdown heading, the way it renders. */
function headingText(markdown) {
    return markdown
        .replace(/\$([^$]*)\$/g, '$1') // math renders as KaTeX; its text is close enough
        .replace(/[*_`~=]/g, '')
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/<[^>]+>/g, '')
        .trim();
}

/** @type {Map<string, Map<string, string>>} note file → (normalized heading → anchor) */
const anchors = new Map();

/** Obsidian matches heading links loosely; so do we. */
const normalize = (s) => headingText(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');

for (const note of notes) {
    const slugger = new GithubSlugger();
    const map = new Map();
    let fenced = false;
    for (const line of fs.readFileSync(note.file, 'utf8').split('\n')) {
        if (/^\s*(```|~~~)/.test(line)) fenced = !fenced;
        const match = !fenced && /^(?:>\s?)*#{1,6}\s+(.*?)\s*#*\s*$/.exec(line);
        if (match) {
            const id = slugger.slug(headingText(match[1]));
            if (!map.has(normalize(match[1]))) map.set(normalize(match[1]), id);
        }
    }
    anchors.set(note.file, map);
}

// ---------------------------------------------------------------------------
// Converting a note

/** Files already copied, so two embeds of one image share it. @type {Map<string, string>} */
const copied = new Map();

/** Copy an attachment into the course's asset folder; returns the path relative to the note. */
function copyImage(source, note) {
    const ext = path.extname(source).toLowerCase();
    const name = slugify(path.basename(source, path.extname(source))) + ext;
    const dest = path.join(ASSETS_OUT, note.course, name);
    if (!copied.has(source + dest)) {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(source, dest);
        copied.set(source + dest, dest);
    }
    return path.relative(path.join(NOTES_OUT, note.course), dest).split(path.sep).join('/');
}

function copyPublic(source, dir) {
    const name = slugify(path.basename(source, path.extname(source))) + path.extname(source).toLowerCase();
    fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(source, path.join(dir, name));
    return name;
}

/** An Excalidraw embed → light and dark <img>, or undefined if there's no exported SVG. */
function drawing(target, alt) {
    const name = path.basename(target).replace(/\.md$/, '');
    const light = media.get(`${name}.light.svg`.toLowerCase());
    const dark = media.get(`${name}.dark.svg`.toLowerCase());
    if (!light || !dark) return undefined;
    const file = slugify(name.replace(/\.excalidraw$/, ''));
    fs.copyFileSync(light, path.join(DRAWINGS_OUT, `${file}.light.svg`));
    fs.copyFileSync(dark, path.join(DRAWINGS_OUT, `${file}.dark.svg`));
    const altAttr = alt.replace(/"/g, '&quot;');
    return (
        `<span class="drawing">` +
        `<img class="drawing__light" src="/drawings/${file}.light.svg" alt="${altAttr}" loading="lazy" decoding="async">` +
        `<img class="drawing__dark" src="/drawings/${file}.dark.svg" alt="${altAttr}" loading="lazy" decoding="async">` +
        `</span>`
    );
}

/**
 * Rewrite one embed or link. `bang` is "!" for embeds.
 * @param {Note} note
 */
function convertWikilink(bang, inner, trailingAttr, note) {
    const [targetPart, aliasPart] = inner.split('|');
    const alias = aliasPart?.trim();
    const [target, heading] = targetPart.split('#');
    const width = trailingAttr ?? (alias && /^\d+(x\d+)?$/.test(alias) ? `{width=${alias.split('x')[0]}}` : '');

    if (bang) {
        if (/\.excalidraw(\.md)?$/i.test(target)) {
            const html = drawing(target.trim(), alias && !/^\d/.test(alias) ? alias : '');
            if (html) return html;
            problems.push(`${note.file}: no exported SVG for drawing ${target}`);
            return '';
        }
        const source = media.get(path.basename(target.trim()).toLowerCase());
        if (!source) {
            problems.push(`${note.file}: missing attachment ${target}`);
            return '';
        }
        if (/\.pdf$/i.test(source)) {
            return `[${path.basename(source)}](/files/${copyPublic(source, FILES_OUT)})`;
        }
        const alt = alias && !/^\d/.test(alias) ? alias : '';
        return `![${alt}](${copyImage(source, note)})${width}`;
    }

    // A link. Same-page heading links have no target.
    // Two notes can share a name; like Obsidian, prefer the one closest to the linking note.
    const candidates = target.trim() ? byName.get(path.basename(target.trim()).toLowerCase()) ?? [] : [note];
    const linked = candidates.find((n) => n.course === note.course) ?? candidates[0];
    if (!linked) {
        const file = media.get(path.basename(target.trim()).toLowerCase());
        if (file && /\.pdf$/i.test(file)) return `[${alias ?? path.basename(file)}](/files/${copyPublic(file, FILES_OUT)})`;
        problems.push(`${note.file}: unresolved link [[${inner}]]`);
        return alias ?? target;
    }
    let href = linked === note ? '' : linked.url;
    if (heading) {
        const anchor = anchors.get(linked.file)?.get(normalize(heading));
        if (anchor) href += `#${anchor}`;
        else problems.push(`${note.file}: no heading "${heading}" in ${linked.title}`);
    }
    const text = alias ?? (heading && !target.trim() ? heading : linked === note ? heading : linked.title);
    return `[${text}](${href || '#'})`;
}

/**
 * Split text into code (left alone) and prose (converted) segments: fenced
 * blocks and inline code spans are passed through untouched.
 */
function mapProse(text, fn) {
    const parts = text.split(/(^[ \t>]*(?:```|~~~)[^\n]*\n[\s\S]*?^[ \t>]*(?:```|~~~)[ \t]*$|`[^`\n]+`)/m);
    return parts.map((part, i) => (i % 2 ? part : fn(part))).join('');
}

/** ==text== → <mark>text</mark>, skipping math. */
function highlights(prose) {
    return prose
        .split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/)
        .map((part, i) => (i % 2 ? part : part.replace(/==(?=\S)([^=\n]+?)(?<=\S)==/g, '<mark>$1</mark>')))
        .join('');
}

/**
 * Put every $$…$$ on its own lines. Obsidian renders `$$x$$` mid-paragraph and
 * `$$\begin{x}…\end{x}$$` with content on the fence lines; the parser only
 * takes fences that stand alone. New lines keep the container prefix (`> ` in
 * callouts, indentation in lists) of the line the math started on.
 */
function displayMath(prose) {
    return prose.replace(/(^[^\n]*?)\$\$([\s\S]+?)\$\$([^\n]*)/gm, (match, before, body, after) => {
        const prefix = /^[ \t]*(?:>[ \t]?)*[ \t]*(?:(?:[-*+]|\d+\.)[ \t]+)?/.exec(before)[0];
        // Continuation lines of a list item are indented instead of re-marked.
        const cont = prefix.replace(/(?:[-*+]|\d+\.)([ \t]+)$/, (m, gap) => ' '.repeat(m.length - gap.length) + gap);
        const lead = before.slice(prefix.length);
        const lines = body.split('\n').map((line, i) => (i === 0 ? line : line.replace(/^[ \t]*(?:>[ \t]?)*/, '')));
        const inner = lines
            .map((line) => line.trim())
            .filter((line, i, all) => line || (i > 0 && i < all.length - 1))
            .map((line) => cont + line);
        const out = [];
        if (lead.trim()) out.push(prefix + lead.trimEnd(), cont.trimEnd() ? cont.trimEnd() : '');
        out.push((lead.trim() ? cont : prefix) + '$$', ...inner, cont + '$$');
        if (after.trim()) out.push(cont.trimEnd() ? cont.trimEnd() : '', cont + after.trim());
        return out.filter((line, i) => line !== '' || (i > 0 && i < out.length - 1)).join('\n');
    });
}

/**
 * `text` then `---` on the next line is a setext heading in CommonMark, which
 * turned a callout's first paragraph into an <h2>. Every one of them in the
 * vault was meant as a horizontal rule, so put a blank line before it.
 */
function rules(prose) {
    return prose.replace(/^([^\n]*\S[^\n]*)\n((?:>[ \t]?)*)([ \t]*-{3,}[ \t]*)$/gm, (match, line, quote, rule) =>
        /^(?:>[ \t]?)*[ \t]*$/.test(line) ? match : `${line}\n${quote.trimEnd()}\n${quote}${rule}`
    );
}

/** Typos Obsidian's renderer forgave, fixed at the source. [file, find, replace] */
const FIXES = [
    // Two inline formulas written back to back read as a $$ display fence.
    ['04. Cardinality.md', '$f:$$\\N\\times\\N\\to\\N$', '$f:\\N\\times\\N\\to\\N$'],
    // \u is a KaTeX built-in (an accent), so it has to be redefined, not defined.
    ['02. Uniform Sample Space.md', '\\newcommand{\\u}', '\\renewcommand{\\u}'],
    // An empty display formula, which Obsidian drew as nothing.
    ['09. Cache.md', '\n\t$$$$\n', '\n'],
];

/** @param {Note} note */
function convertBody(source, note) {
    for (const [file, find, replace] of FIXES) {
        if (path.basename(note.file) !== file) continue;
        if (!source.includes(find)) problems.push(`${note.file}: fix no longer applies: ${find}`);
        source = source.replaceAll(find, replace);
    }
    return mapProse(source, (prose) => {
        let out = prose.replace(/(!?)\[\[([^\]\n]+)\]\](\{width=\d+\})?/g, (m, bang, inner, attr) =>
            convertWikilink(bang, inner, attr, note)
        );
        out = displayMath(out);
        out = rules(out);
        out = highlights(out);
        return out;
    });
}

/** YAML-safe scalar. */
const yamlString = (s) => JSON.stringify(s);

function frontmatter(fields) {
    const lines = Object.entries(fields)
        .filter(([, v]) => v !== undefined && v !== false)
        .map(([k, v]) => `${k}: ${typeof v === 'string' ? yamlString(v) : v}`);
    return `---\n${lines.join('\n')}\n---\n\n`;
}

// ---------------------------------------------------------------------------
// Write everything

for (const dir of [NOTES_OUT, COURSES_OUT, ASSETS_OUT, DRAWINGS_OUT, FILES_OUT]) {
    fs.rmSync(dir, { recursive: true, force: true });
    fs.mkdirSync(dir, { recursive: true });
}

for (const note of notes) {
    const source = fs.readFileSync(note.file, 'utf8').replace(/\r\n/g, '\n');
    const body = convertBody(source, note).replace(/^\s*\n/, '').trimEnd() + '\n';
    const out = path.join(NOTES_OUT, note.course, `${note.slug}.md`);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, frontmatter({ title: note.title, order: note.order, section: note.section }) + body);
}

// Loose files in the vault root (lecture PDFs) are still linked from outside, so keep them.
for (const name of fs.readdirSync(VAULT)) {
    if (/\.pdf$/i.test(name)) copyPublic(path.join(VAULT, name), FILES_OUT);
}

for (const course of courses.values()) {
    const fields = {
        title: course.name,
        year: course.year,
        semester: course.semester,
        unlisted: course.unlisted,
    };
    const credit = course.credit
        ? convertBody(course.credit, /** @type {Note} */ ({ file: course.name, course: course.slug })) + '\n'
        : '';
    fs.writeFileSync(path.join(COURSES_OUT, `${course.slug}.md`), frontmatter(fields) + credit);
}

const redirects = Object.fromEntries(notes.map((n) => [n.oldPath, n.url]));
fs.writeFileSync('scripts/redirects.json', JSON.stringify(redirects, null, 2) + '\n');

console.log(`${notes.length} notes in ${courses.size} courses.`);
if (problems.length) {
    console.log(`\n${problems.length} things to check:`);
    for (const problem of problems) console.log('  ' + problem);
}
