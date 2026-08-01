import type { APIRoute } from 'astro';
import { absolutePageUrl } from '../data/page-sitemap';
import { getBlogSitemapEntries } from '../data/blog/helpers';
import { escapeXml, renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/** Dedicated blog sitemap (index + posts across locales). */
export const GET: APIRoute = () => {
	const urls = getBlogSitemapEntries().map((entry) => {
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

		return `  <url>
    <loc>${escapeXml(absolutePageUrl(entry.path))}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>${imageBlock}
  </url>`;
	});

	return new Response(renderUrlsetXml(urls), { headers: sitemapResponseHeaders });
};
