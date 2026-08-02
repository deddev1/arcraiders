import type { APIRoute } from 'astro';
import { getBlogSitemapEntries } from '../data/blog/helpers';
import { siteConfig } from '../data/site';
import { latestPageLastmod } from '../data/sitemap-meta';
import { escapeXml } from '../data/sitemap-xml';

export const prerender = true;

/**
 * Sitemap index: English pages + image sitemap.
 * Non-English locale sitemaps are omitted while translations are thin UX-only
 * (English is the official canonical / x-default language).
 */
export const GET: APIRoute = () => {
	const pageLastmod = latestPageLastmod();
	// sitemap.xml also contains blog URLs, so its lastmod must cover the newest post update.
	const englishLastmod = getBlogSitemapEntries().reduce(
		(max, entry) => (entry.lastmod > max ? entry.lastmod : max),
		pageLastmod,
	);

	const subSitemaps: { loc: string; lastmod: string }[] = [
		{ loc: new URL('/sitemap.xml', siteConfig.url).href, lastmod: englishLastmod },
		{ loc: new URL('/sitemap-images.xml', siteConfig.url).href, lastmod: pageLastmod },
	];

	const entries = subSitemaps
		.map(
			({ loc, lastmod }) => `  <sitemap>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
  </sitemap>`,
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
