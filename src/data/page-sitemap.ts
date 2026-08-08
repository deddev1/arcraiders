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
		img(rustImages.squadFight, 'Arc Raiders Hacks wallhack', 'Arc Raiders Hacks wallhack preview'),
	],
	'rust-esp': [
		img(rustImages.playerEsp, 'Arc Raiders ESP', 'Arc Raiders ESP overlay'),
		img(rustImages.espWallhack, 'Arc Raiders ESP UI', 'Arc Raiders ESP wallhack UI'),
	],
	'rust-aimbot': [
		img(rustImages.aimbotCombat, 'Arc Raiders Aimbot', 'Arc Raiders Aimbot combat preview'),
		img(rustImages.battleRoyaleIsland, 'Arc Raiders Aimbot UI', 'Arc Raiders Aimbot settings UI'),
	],
	wallhack: [
		img(rustImages.squadFight, 'Arc Raiders Wallhack', 'Arc Raiders wallhack ESP view'),
		img(rustImages.espWallhack, 'Arc Raiders Wallhack UI', 'Arc Raiders wallhack controls'),
	],
	radar: [
		img(rustImages.zeroBuildMode, 'Arc Raiders Radar', 'Arc Raiders radar hack overlay'),
		img(rustImages.rebootFight, 'Arc Raiders soft aim', 'Arc Raiders soft aim overlay'),
	],
	features: [
		img(rustImages.loadoutBuilder, 'Arc Raiders Hacks Features', 'Arc Raiders Hacks feature menu'),
		img(rustImages.headerArt, 'Arc Raiders Hacks panel', 'Arc Raiders Hacks control panel'),
	],
	pricing: [
		img(rustImages.cover, 'Arc Raiders Hacks Pricing', 'Arc Raiders Hacks license plans'),
		img(rustImages.cheatsPackage, 'Arc Raiders Hacks package', 'Arc Raiders Hacks cheats menu'),
	],
	setup: [
		img(rustImages.headerArt, 'Arc Raiders Hacks Setup', 'Arc Raiders Hacks installation guide'),
		img(rustImages.zeroBuildCombat, 'Arc Raiders Hacks status', 'Arc Raiders Hacks online status'),
	],
	updates: [
		img(rustImages.zeroBuildCombat, 'Arc Raiders Hacks Updates', 'Arc Raiders Hacks patch status'),
		img(rustImages.hero, 'Arc Raiders Hacks hero', 'Arc Raiders Hacks combat overview'),
	],
	faq: [
		img(rustImages.cheatsPackage, 'Arc Raiders Hacks FAQ', 'Arc Raiders Hacks frequently asked questions'),
		img(rustImages.loadoutBuilder, 'Arc Raiders Hacks menu', 'Arc Raiders Hacks in-client controls'),
	],
	support: [
		img(rustImages.espWallhack, 'Arc Raiders Hacks Support', 'Arc Raiders Hacks help center'),
		img(rustImages.cover, 'Arc Raiders Hacks cover', 'Arc Raiders Hacks product cover'),
	],
	privacy: [
		img(rustImages.cover, 'Arc Raiders Hacks Privacy Policy', 'Arc Raiders Hacks privacy policy'),
	],
	refund: [
		img(rustImages.zeroBuildCombat, 'Arc Raiders Hacks Refund Policy', 'Arc Raiders Hacks refund policy'),
	],
	terms: [
		img(rustImages.headerArt, 'Arc Raiders Hacks Terms', 'Arc Raiders Hacks terms of use'),
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
