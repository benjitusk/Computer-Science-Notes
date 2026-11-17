import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Courses: one file per course in src/content/courses/. The body (optional) is
 * shown at the top of the course page, e.g. the credit to the lecturer.
 */
const courses = defineCollection({
    loader: glob({ base: './src/content/courses', pattern: '*.md' }),
    schema: z.object({
        title: z.string(),
        /** Year of the degree, 1–3. Courses without one (guides, parasha notes) list under "Other". */
        year: z.number().int().optional(),
        /** "Semester I", "Semester II" or "Semester Elul" (the summer one). */
        semester: z.enum(['Semester I', 'Semester II', 'Semester Elul']).optional(),
        /** One line under the title on the home page and course page. */
        description: z.string().optional(),
        /** Reachable by URL, but left off the home page (homework solutions, mostly). */
        unlisted: z.boolean().optional(),
    }),
});

/**
 * Notes: src/content/notes/<course>/<slug>.md, served at /<course>/<slug>/.
 * The folder is the course, so notes don't name it themselves.
 */
const notes = defineCollection({
    loader: glob({ base: './src/content/notes', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        /** Position in the course, usually the lecture number. Unnumbered notes sort after, by title. */
        order: z.number().optional(),
        /** A group within the course, e.g. "Homework". */
        section: z.string().optional(),
        description: z.string().optional(),
        /** Override the git-derived "last updated" date. */
        updatedDate: z.coerce.date().optional(),
        draft: z.boolean().optional(),
    }),
});

export const collections = { courses, notes };
