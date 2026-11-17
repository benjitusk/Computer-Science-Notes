// @ts-check
// A single newline is a line break, as in Obsidian (and mkdocs' nl2br before
// this site): notes were written line by line, and joining the lines into one
// paragraph would run definitions, steps and proof lines together.

import { defineMdastPlugin } from 'satteri';

export const satteriLineBreaks = defineMdastPlugin({
    name: 'line-breaks',
    text(node, ctx) {
        if (!node.value.includes('\n')) return;
        const lines = node.value.split('\n');
        /** @type {import('mdast').PhrasingContent[]} */
        const nodes = [];
        lines.forEach((line, i) => {
            if (i > 0) nodes.push({ type: 'break' });
            // Indentation at the start of a continuation line was only for the editor.
            const value = i > 0 ? line.replace(/^[ \t]+/, '') : line;
            if (value) nodes.push({ type: 'text', value });
        });
        ctx.replaceNode(node, nodes);
    },
});
