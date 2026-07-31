import type { APIRoute } from 'astro';
import { absolutePageUrl, pageSitemapEntries } from '../data/page-sitemap';
import { hreflangLinksXml, resolvePageIdFromPath } from '../data/i18n/routing';
import { escapeXml, renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/** Primary English page sitemap with Google image extensions and hreflang alternates. */
export const GET: APIRoute = () => {
	const urls = pageSitemapEntries.map((entry) => {
		const images = entry.images
			.map(
				(image) => `    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`,
			)
			.join('\n');

		const imageBlock = images ? `\n${images}` : '';
		const pageId = resolvePageIdFromPath(entry.path);
		const hreflangBlock = pageId ? `\n${hreflangLinksXml(pageId, escapeXml)}` : '';

		return `  <url>
    <loc>${escapeXml(absolutePageUrl(entry.path))}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>${hreflangBlock}${imageBlock}
  </url>`;
	});

	const xml = renderUrlsetXml(urls);

	return new Response(xml, { headers: sitemapResponseHeaders });
};
