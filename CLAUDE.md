## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Astro caches rendered Markdown by file content, not by plugin. After changing anything in `src/lib/markdown/`,
delete `.astro/` and `node_modules/.astro/` before building, or notes keep their old HTML.

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
