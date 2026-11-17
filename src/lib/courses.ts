import { getCollection, type CollectionEntry } from 'astro:content';

export type Course = CollectionEntry<'courses'>;
export type Note = CollectionEntry<'notes'>;

/** Semesters in the order they happened within a year. */
const SEMESTERS = ['Semester I', 'Semester II', 'Semester Elul'] as const;

/** A note's course id: the folder it lives in. */
export const courseOf = (note: Note) => note.id.split('/')[0];

/** The note's URL, which is its id: /calculus-1/limits/. */
export const noteUrl = (note: Note) => `/${note.id}/`;
export const courseUrl = (course: Course) => `/${course.id}/`;

/** Lecture order, then unnumbered notes by title. Sections (Homework) come after the main notes. */
function compareNotes(a: Note, b: Note) {
    return (
        Number(Boolean(a.data.section)) - Number(Boolean(b.data.section)) ||
        (a.data.section ?? '').localeCompare(b.data.section ?? '') ||
        (a.data.order ?? Infinity) - (b.data.order ?? Infinity) ||
        a.data.title.localeCompare(b.data.title)
    );
}

/** "Year 2 · Semester I", or undefined for courses outside the degree. */
export function termLabel(course: Course) {
    const { year, semester } = course.data;
    if (!year) return undefined;
    return [`Year ${year}`, semester].filter(Boolean).join(' · ');
}

/** The published notes of a course, in reading order. */
export async function notesOf(course: Course) {
    const notes = await getCollection('notes', (note) => !note.data.draft && courseOf(note) === course.id);
    return notes.sort(compareNotes);
}

/** Notes grouped by section; the main notes have section undefined. */
export function bySection(notes: Note[]) {
    const groups = new Map<string | undefined, Note[]>();
    for (const note of notes) groups.set(note.data.section, [...(groups.get(note.data.section) ?? []), note]);
    return [...groups].map(([section, notes]) => ({ section, notes }));
}

/**
 * Listed courses for the home page: by year, then semester, each with its notes.
 * Courses outside the degree (guides, parasha notes) come last under `year: undefined`.
 */
export async function coursesByYear() {
    const courses = await getCollection('courses', (course) => !course.data.unlisted);
    const withNotes = await Promise.all(courses.map(async (course) => ({ course, notes: await notesOf(course) })));
    const years = new Map<number | undefined, typeof withNotes>();
    for (const entry of withNotes.filter((entry) => entry.notes.length > 0)) {
        const year = entry.course.data.year;
        years.set(year, [...(years.get(year) ?? []), entry]);
    }
    const semesterIndex = (course: Course) =>
        course.data.semester ? SEMESTERS.indexOf(course.data.semester) : SEMESTERS.length;
    return [...years]
        .sort(([a], [b]) => (a ?? Infinity) - (b ?? Infinity))
        .map(([year, entries]) => ({
            year,
            courses: entries.sort(
                (a, b) =>
                    semesterIndex(a.course) - semesterIndex(b.course) ||
                    a.course.data.title.localeCompare(b.course.data.title)
            ),
        }));
}
