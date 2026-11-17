# school

Lecture notes from my Computer Science degree at Machon Lev, at
[school.benjitusk.com](https://school.benjitusk.com). An Astro site, built like
[Thoughts](https://thoughts.benjitusk.com) and the
[Engineering notebook](https://notebook.benjitusk.com).

Found a mistake? Every note links to its source here; edit it and open a pull
request, or [open an issue](https://github.com/benjitusk/Computer-Science-Notes/issues/new).

## Running it

```sh
npm install
npx astro dev --background   # http://localhost:4321; stop with `npx astro dev stop`
npm run build                # dist/, then the Pagefind search index
npm run preview              # the build, search included
```

Search only exists after a build: Pagefind indexes `dist/`.

## Where things live

| Path                          | What                                                                        |
| ----------------------------- | --------------------------------------------------------------------------- |
| `src/content/notes/<course>/` | One Markdown file per note, served at `/<course>/<note>/`                   |
| `src/content/courses/`        | One file per course: title, year, semester; the body is the course intro    |
| `src/assets/notes/<course>/`  | Images in notes (optimized by Astro)                                        |
| `public/drawings/`            | Excalidraw drawings, a light and a dark SVG each                            |
| `src/lib/markdown/`           | The Markdown extras: KaTeX (with `preamble.tex`), line breaks, image widths |
| `src/styles/tokens.css`       | Every colour, size and spacing value                                        |
| `docs/STYLEGUIDE.md`          | How notes are written and how the site looks                                |

## History

Until November 2026 the notes were an Obsidian vault published with
mkdocs-material on GitHub Pages. `scripts/convert-obsidian.mjs` moved them here
once (wikilinks, embeds and all); the old GitHub Pages URLs now redirect to the
new ones (`.github/workflows/github-pages.yml`).

## Deploying

Pushing to `main` builds the site and deploys it to the `school-benjitusk`
Firebase Hosting site in the shared `benjitusk` project. Pull requests get a
preview channel.
