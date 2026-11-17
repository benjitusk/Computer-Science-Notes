import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION } from '../../consts';
import { courseOf, termLabel } from '../../lib/courses';

/**
 * Open Graph cards: one 1200×630 PNG per page, rendered at build time.
 *
 * Keys mirror page paths — `/` → `/og/index.png`, `/calculus-1/limits/` →
 * `/og/calculus-1/limits.png` — and BaseHead derives the same key from the
 * page URL, so a new page only needs an entry here. Courses and notes are
 * added automatically.
 */
type Card = { title: string; description: string };

const staticPages: Record<string, Card> = {
    'index': { title: 'My school notes, tidied up for you', description: SITE_DESCRIPTION },
    'about': { title: 'About', description: 'About Benji Tusk and these notes.' },
    'search': { title: 'Search the notes', description: SITE_DESCRIPTION },
    '404': { title: 'Page not found', description: SITE_DESCRIPTION },
};

const courses = await getCollection('courses');
const notes = await getCollection('notes', (note) => !note.data.draft);
const courseById = new Map(courses.map((course) => [course.id, course]));

/** "Calculus I · Year 1 · Semester II" */
const courseLine = (id: string) => {
    const course = courseById.get(id);
    return course ? [course.data.title, termLabel(course)].filter(Boolean).join(' · ') : '';
};

const pages: Record<string, Card> = {
    ...staticPages,
    ...Object.fromEntries(
        courses.map((course) => [
            course.id,
            { title: course.data.title, description: termLabel(course) ?? 'Notes from outside the syllabus' },
        ])
    ),
    ...Object.fromEntries(
        notes.map((note) => [note.id, { title: note.data.title, description: courseLine(courseOf(note)) }])
    ),
};

// Palette from src/styles/tokens.css (light theme): --text, --text-muted.
const INK: [number, number, number] = [31, 36, 48];
const MUTED: [number, number, number] = [83, 90, 107];

export const { getStaticPaths, GET } = await OGImageRoute({
    pages,
    getImageOptions: (_path, page: Card) => ({
        title: page.title,
        description: page.description,
        // Ruled paper, red margin, and footer (scripts/og-background.mjs).
        bgImage: { path: './src/assets/og/background.png', fit: 'cover' },
        padding: 120,
        // CanvasKit names families by each font's own name table.
        fonts: ['./src/assets/og/InstrumentSans-SemiBold.woff', './src/assets/og/SourceSerif4-Regular.woff'],
        font: {
            title: {
                families: ['Instrument Sans'],
                weight: 'SemiBold',
                size: 72,
                lineHeight: 1.05,
                color: INK,
            },
            description: {
                families: ['Source Serif 4'],
                weight: 'Normal',
                size: 34,
                lineHeight: 1.4,
                color: MUTED,
            },
        },
        // Inside node_modules/.astro so the CI build cache keeps rendered cards.
        cacheDir: './node_modules/.astro/og-canvas',
    }),
});
