# Style guide

## The look

Two rooms of one school. By day the site is a page of ruled notebook paper:
blue lines, a red margin, ballpoint-blue ink for links. By night it's the
chalkboard: green-black slate, chalk-white text, yellow chalk for links.

- **Colours** come only from `src/styles/tokens.css`, and every one is defined
  for both themes. Never write a hex value in a component.
- **The red margin** (`--margin`) is decoration with one meaning: "this is a
  page of notes". It runs down the left of the hero, each course card, each
  note, and the course intro. Don't use it for errors or emphasis.
- **The highlighter** (`--highlight`) is only for `==highlighted==` text and
  search matches.
- **Type:** Source Serif 4 for reading (note bodies, ledes), Instrument Sans
  for everything else (headings, UI), JetBrains Mono for code. Frank Ruhl Libre
  covers Hebrew.

## Writing a note

A note is a Markdown file in `src/content/notes/<course>/`:

```md
---
title: 'Conditional Probability'
order: 3 # lecture number; sets the order and the "Note 03" label
section: Homework # optional: groups the note under a heading on the course page
---
```

What works in the body, beyond standard Markdown:

| Syntax                                     | Result                                            |
| ------------------------------------------ | ------------------------------------------------- |
| `$x^2$`, `$$ … $$`                         | KaTeX. `$$` goes on its own line, above and below |
| `\R`, `\pset{A}`, `\p` …                   | Macros from `src/lib/markdown/preamble.tex`       |
| `> [!example] Title`                       | Callouts, Obsidian style (note, tip, warning, …)  |
| One newline                                | A line break, as in Obsidian                      |
| `<mark>text</mark>`                        | Highlighted text                                  |
| `![](../../assets/notes/x.png){width=300}` | An image at a set width                           |
| `Term` / `: definition`                    | Definition lists                                  |
| `^sup^`, `~sub~`                           | Superscript and subscript                         |

Links between notes are ordinary links to the note's URL:
`[the chain rule](/calculus-1/differentiability-and-derivatives/#chain-rule)`.

Drawings are an `<img>` pair, one per theme, from `public/drawings/`:

```html
<span class="drawing"
    ><img class="drawing__light" src="/drawings/x.light.svg" alt="" /><img
        class="drawing__dark"
        src="/drawings/x.dark.svg"
        alt=""
/></span>
```

## A new course

Add `src/content/courses/<slug>.md` with `title`, `year` and `semester`
(`Semester I`, `Semester II` or `Semester Elul`). Its body, if any, shows under
the title on the course page. `unlisted: true` keeps it off the home page and
out of search, but its pages stay up.
