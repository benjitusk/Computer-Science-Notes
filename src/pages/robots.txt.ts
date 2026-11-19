import type { APIRoute } from 'astro';

// Everything may be crawled except Pagefind's index, which is search data, not pages. Unlisted
// courses aren't blocked here on purpose: they carry a noindex tag, and a crawler that can't
// fetch a page never sees it.
export const GET: APIRoute = ({ site }) =>
    new Response(
        `User-agent: *\nAllow: /\nDisallow: /pagefind/\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`,
        { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
    );
