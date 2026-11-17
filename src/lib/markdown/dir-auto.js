// @ts-check
// Hebrew in the Torah notes: each block picks its own direction from its first
// strong character, so a Hebrew quote reads right to left inside an English note.

import { defineHastPlugin } from 'satteri';

export const satteriDirAuto = defineHastPlugin({
    name: 'dir-auto',
    element: {
        filter: ['p', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'td', 'th', 'dt', 'dd'],
        visit(node, ctx) {
            if (!('dir' in node.properties)) ctx.setProperty(node, 'dir', 'auto');
        },
    },
});
