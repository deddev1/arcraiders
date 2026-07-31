import type { APIRoute } from 'astro';
import { siteConfig } from '../data/site';
import { i18nLocaleCodes, localeSitemapUrl } from '../data/sitemap-locale';
import { SITEMAP_LASTMOD } from '../data/sitemap-meta';
import { escapeXml } from '../data/sitemap-xml';

export const prerender = true;

/** Sitemap index: English pages + 21 locale sitemaps + image sitemap. */
export const GET: APIRoute = () => {
	const lastmod = SITEMAP_LASTMOD;
	const subSitemaps = [
		new URL('/sitemap.xml', siteConfig.url).href,
		...i18nLocaleCodes.map((locale) => localeSitemapUrl(locale)),
		new URL('/sitemap-images.xml', siteConfig.url).href,
	];

	const entries = subSitemaps
		.map(
			(loc) => `  <sitemap>
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
