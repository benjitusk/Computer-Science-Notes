// @ts-check
// `![](diagram.png){width=300}` sets the image's width, the attr_list syntax the
// notes used under mkdocs. The `{width=…}` text right after an image is removed.

import { defineHastPlugin } from 'satteri';

const ATTR = /^\{width=(\d+)\}/;

export const satteriImageWidth = defineHastPlugin({
    name: 'image-width',
    text(node, ctx) {
        const match = ATTR.exec(node.value);
        if (!match) return;
        const parent = ctx.parent(node);
        const index = ctx.indexOf(node);
        const previous = index === undefined ? undefined : parent.children[index - 1];
        if (previous?.type !== 'element' || previous.tagName !== 'img') return;
        ctx.setProperty(previous, 'width', Number(match[1]));
        return { ...node, value: node.value.slice(match[0].length) };
    },
});
