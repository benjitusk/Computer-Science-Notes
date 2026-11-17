## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Astro caches each note's rendered HTML until the note changes. Changes in `src/lib/markdown/` (and updates to the
Markdown packages) clear that cache by themselves (`src/lib/markdown/cache-key.js`), so don't delete `.astro/` by
hand. Never delete it while a dev server is running: the server re-renders every note without the Markdown plugins
and saves that. If notes ever show raw `$math$` or `[!callout]` text locally, stop the dev server, delete `.astro/`,
and start it again.

## Writing notes

Notes live in `src/content/notes/<course>/<slug>.md` and are plain Markdown (not MDX: `{` in LaTeX would read as
JSX). Styling rules and the supported syntax are in `docs/STYLEGUIDE.md`. The Obsidian syntax (`[[links]]`,
`![[embeds]]`) was converted once; don't add it back.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles](https://docs.astro.build/en/guides/styling/)
