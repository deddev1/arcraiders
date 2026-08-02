import type { APIRoute } from 'astro';

import {
	buildAllI18nSitemapEntries,
	renderLocaleSitemapUrlBlock,
} from '../data/sitemap-locale';
import { renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/**
 * Legacy aggregate locale sitemap — intentionally empty under the English-only
 * SEO policy (thin translations are UX routes, not index targets).
 * Kept so old GSC submissions resolve to an empty urlset instead of 404.
 */
export const GET: APIRoute = () => {
	const entries = buildAllI18nSitemapEntries();
	const xml = renderUrlsetXml(entries.map(renderLocaleSitemapUrlBlock));

	return new Response(xml, { headers: sitemapResponseHeaders });
};
