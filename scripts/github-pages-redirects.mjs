// Builds the redirect-only site that replaces the old notes at
// https://benjitusk.github.io/Computer-Science-Notes/, so links people saved
// and shared keep working. Deployed by .github/workflows/github-pages.yml.
//
//   node scripts/github-pages-redirects.mjs   → github-pages/
//
// Every old page (from scripts/redirects.json) becomes a tiny page that sends
// the reader to the note's new URL, keeping any #heading. A course's old
// "00. Note" page goes to the course. Anything else lands on the 404 page,
// which searches the new site for the last part of the old path.

import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://school.benjitusk.com';
const OUT = 'github-pages';
const redirects = JSON.parse(fs.readFileSync('scripts/redirects.json', 'utf8'));

/** Old folder → new course URL, from any note that lived in it. */
const courses = new Map();
for (const [from, to] of Object.entries(redirects)) {
    courses.set(path.posix.dirname(from), to.split('/').slice(0, 2).join('/') + '/');
}
for (const [folder, course] of courses) redirects[`${folder}/00. Note/`] = course;
redirects['/'] = '/';
redirects['/about/'] = '/about/';

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function page(target, script) {
    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>These notes moved to ${escape(new URL(SITE).host)}</title>
<meta name="robots" content="noindex">
${target ? `<link rel="canonical" href="${escape(target)}">\n<meta http-equiv="refresh" content="0; url=${escape(target)}">` : ''}
<script>${script}</script>
</head>
<body>
<p>These notes moved to <a href="${escape(target ?? SITE)}">${escape(target ?? SITE)}</a>.</p>
</body>
</html>
`;
}

fs.rmSync(OUT, { recursive: true, force: true });
for (const [from, to] of Object.entries(redirects)) {
    const target = SITE + to;
    const file = path.join(OUT, from, 'index.html');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    // The script keeps the #heading, which the meta refresh would drop.
    fs.writeFileSync(file, page(target, `location.replace(${JSON.stringify(target)} + location.hash)`));
}

// Unknown old paths: search the new site for the page's old name.
const search = `
var parts = location.pathname.replace(/\\/$/, '').split('/');
var name = decodeURIComponent(parts[parts.length - 1] || '').replace(/^\\d+\\.\\s*/, '');
location.replace(${JSON.stringify(SITE)} + (name && name !== 'Computer-Science-Notes' ? '/search/?q=' + encodeURIComponent(name) : '/'));`;
fs.writeFileSync(path.join(OUT, '404.html'), page(undefined, search));
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

console.log(`${Object.keys(redirects).length} redirects in ${OUT}/`);
