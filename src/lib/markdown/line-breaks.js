// @ts-check
// A single newline is a line break, as in Obsidian (and mkdocs' nl2br before
// this site): notes were written line by line, and joining the lines into one
// paragraph would run definitions, steps and proof lines together.

import { defineHastPlugin, defineMdastPlugin } from 'satteri';

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

/**
 * satteri-callouts drops every <br> from a callout's first paragraph (it
 * splits the title off at the first newline), which leaves that paragraph's
 * lines run together. Run after it: a paragraph with newlines but no <br>
 * can only be one of those, so its newlines become breaks again.
 */
export const satteriCalloutLineBreaks = defineHastPlugin({
    name: 'callout-line-breaks',
    element: {
        filter: ['p'],
        visit(node) {
            const children = node.children;
            if (children.some((child) => child.type === 'element' && child.tagName === 'br')) return;
            if (!children.some((child) => child.type === 'text' && child.value.includes('\n'))) return;
            /** @type {import('hast').Element} */
            const br = { type: 'element', tagName: 'br', properties: {}, children: [] };
            return {
                ...node,
                children: children.flatMap((child) => {
                    if (child.type !== 'text' || !child.value.includes('\n')) return [child];
                    return child.value.split('\n').flatMap((value, i) => {
                        /** @type {import('hast').ElementContent[]} */
                        const parts = i > 0 ? [{ ...br }] : [];
                        if (value) parts.push({ type: 'text', value });
                        return parts;
                    });
                }),
            };
        },
    },
});
