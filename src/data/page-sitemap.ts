import { siteConfig } from './site';
import { rustImages } from './rust';
import { englishPaths, sitemapPageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	lastmod: string;
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

/** Sitemap image assignments for indexable pages only (see sitemapPageIds in routing.ts). */
const sitemapImagesByPageId: Partial<Record<PageId, SitemapImage[]>> = {
	home: [
		img(rustImages.hero, 'Arc Raiders Hacks', 'Arc Raiders Hacks homepage hero'),
		img(rustImages.espWallhack, 'Arc Raiders ESP', 'Arc Raiders ESP wallhack overlay'),
		img(rustImages.aimbotCombat, 'Arc Raiders Aimbot', 'Arc Raiders Aimbot combat preview'),
	],
	hacks: [
		img(rustImages.battleRoyaleCombat, 'Arc Raiders Hacks', 'Arc Raiders Hacks pillar page'),
		img(rustImages.espWallhack, 'Arc Raiders Hacks ESP', 'Arc Raiders Hacks ESP preview'),
	],
	'rust-esp': [
		img(rustImages.espWallhack, 'Arc Raiders ESP', 'Arc Raiders ESP wallhack overlay'),
		img(rustImages.playerEsp, 'Arc Raiders player ESP', 'Arc Raiders player ESP markers'),
	],
	'rust-aimbot': [
		img(rustImages.aimbotCombat, 'Arc Raiders Aimbot', 'Arc Raiders Aimbot combat preview'),
		img(rustImages.squadFight, 'Arc Raiders Aimbot squad fight', 'Arc Raiders Aimbot in squad combat'),
	],
	wallhack: [
		img(rustImages.espWallhack, 'Arc Raiders Wallhack', 'Arc Raiders wallhack ESP view'),
	],
	radar: [
		img(rustImages.squadFight, 'Arc Raiders Radar', 'Arc Raiders radar hack overlay'),
	],
	features: [
		img(rustImages.hero, 'Arc Raiders Hacks Features', 'Arc Raiders Hacks feature overview'),
		img(rustImages.loadoutBuilder, 'Arc Raiders Hacks menu', 'Arc Raiders Hacks in-client controls'),
	],
	pricing: [
		img(rustImages.cover, 'Arc Raiders Hacks Pricing', 'Arc Raiders Hacks license plans'),
		img(rustImages.cheatsPackage, 'Arc Raiders Hacks package', 'Arc Raiders Hacks product package'),
	],
	setup: [
		img(rustImages.squadFight, 'Arc Raiders Hacks Setup', 'Arc Raiders Hacks installation guide'),
	],
	updates: [
		img(rustImages.hero, 'Arc Raiders Hacks Updates', 'Arc Raiders Hacks patch status'),
	],
	faq: [
		img(rustImages.loadoutBuilder, 'Arc Raiders Hacks FAQ', 'Arc Raiders Hacks frequently asked questions'),
	],
	support: [
		img(rustImages.headerArt, 'Arc Raiders Hacks Support', 'Arc Raiders Hacks help center'),
	],
	privacy: [
		img(rustImages.cover, 'Arc Raiders Hacks Privacy Policy', 'Arc Raiders Hacks privacy policy'),
	],
	refund: [
		img(rustImages.cover, 'Arc Raiders Hacks Refund Policy', 'Arc Raiders Hacks refund policy'),
	],
	terms: [
		img(rustImages.squadFight, 'Arc Raiders Hacks Terms', 'Arc Raiders Hacks terms of use'),
	],
};

for (const pageId of sitemapPageIds) {
	if (!sitemapImagesByPageId[pageId]?.length) {
		throw new Error(`[sitemap] No images configured for sitemap pageId: ${pageId}`);
	}
}

/** Canonical English sitemap entries — core arc-raiders-hacks URLs only. */
export const pageSitemapEntries: PageSitemapEntry[] = sitemapPageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: meta.lastmod,
		images: sitemapImagesByPageId[pageId]!,
	};
});

/** Unique keyword images for the dedicated image sitemap. */
export const imageSitemapEntries: SitemapImage[] = rustImages.sitemap.map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
