import type { PageId } from './i18n/routing';

/** Shared lastmod for all sitemaps (YYYY-MM-DD). Update when content changes. */
export const SITEMAP_LASTMOD = '2026-07-31';

export type SitemapFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

export type PageSitemapMeta = {
	priority: number;
	changefreq: SitemapFreq;
	/** Priority for non-English locale URLs in sitemap-i18n.xml */
	i18nPriority: number;
};

/**
 * SEO priority and crawl hints per page — keyed by PageId (single source of truth).
 * English URLs use `priority`; localized URLs use `i18nPriority`.
 */
export const pageSitemapMeta: Record<PageId, PageSitemapMeta> = {
	home: { priority: 1.0, changefreq: 'daily', i18nPriority: 0.88 },
	undetected: { priority: 0.98, changefreq: 'weekly', i18nPriority: 0.87 },
	'cheats-2026': { priority: 0.98, changefreq: 'weekly', i18nPriority: 0.87 },
	hacks: { priority: 0.97, changefreq: 'weekly', i18nPriority: 0.86 },
	'cheat-download': { priority: 0.96, changefreq: 'weekly', i18nPriority: 0.85 },
	'mod-menu': { priority: 0.96, changefreq: 'weekly', i18nPriority: 0.85 },
	'soft-aim': { priority: 0.95, changefreq: 'weekly', i18nPriority: 0.85 },
	'best-cheats': { priority: 0.98, changefreq: 'weekly', i18nPriority: 0.87 },
	'aimbot-hack': { priority: 0.95, changefreq: 'weekly', i18nPriority: 0.85 },
	'esp-hack': { priority: 0.97, changefreq: 'weekly', i18nPriority: 0.86 },
	'unlock-all': { priority: 0.94, changefreq: 'weekly', i18nPriority: 0.84 },
	wallhack: { priority: 0.97, changefreq: 'weekly', i18nPriority: 0.86 },
	radar: { priority: 0.97, changefreq: 'weekly', i18nPriority: 0.86 },
	'eac-bypass': { priority: 0.96, changefreq: 'weekly', i18nPriority: 0.85 },
	'fortnite-esp': { priority: 0.95, changefreq: 'weekly', i18nPriority: 0.85 },
	'fortnite-aimbot': { priority: 0.95, changefreq: 'weekly', i18nPriority: 0.85 },
	pricing: { priority: 0.95, changefreq: 'weekly', i18nPriority: 0.85 },
	features: { priority: 0.9, changefreq: 'weekly', i18nPriority: 0.84 },
	setup: { priority: 0.9, changefreq: 'weekly', i18nPriority: 0.84 },
	updates: { priority: 0.9, changefreq: 'daily', i18nPriority: 0.84 },
	faq: { priority: 0.8, changefreq: 'monthly', i18nPriority: 0.82 },
	support: { priority: 0.8, changefreq: 'monthly', i18nPriority: 0.82 },
	privacy: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35 },
	refund: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35 },
	terms: { priority: 0.4, changefreq: 'yearly', i18nPriority: 0.35 },
};

/** Expected URL counts for sitemap validation. */
export const SITEMAP_COUNTS = {
	englishPages: 25,
	i18nLocales: 21,
	pagesPerLocale: 25,
	i18nUrls: 21 * 25,
	totalIndexablePages: 25 + 21 * 25,
	hreflangLinksPerUrl: 23,
	/** sitemap-index.xml: EN + 21 locale sitemaps + images */
	sitemapIndexEntries: 1 + 21 + 1,
} as const;
