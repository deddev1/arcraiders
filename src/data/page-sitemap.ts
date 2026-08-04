import { siteConfig } from './site';
import { rustImages } from './rust';
import { englishPaths, pageIds, type PageId } from './i18n/routing';
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

/**
 * Canonical page → image map for Google page + image discovery.
 * Image titles/captions match on-page SEO language.
 * Priority/changefreq/lastmod come from pageSitemapMeta — only images live here.
 */
/** Manual image assignments per English URL — paths must match englishPaths in routing.ts. */
const manualPageSitemapEntries: { path: string; images: SitemapImage[] }[] = [
	{
		path: '/',
		images: [
			img(
				rustImages.hero,
				'Rust Cheats | Rust ESP & Aimbot',
				'Premium Rust cheats homepage hero featuring Rust ESP and Aimbot',
			),
			img(
				rustImages.aimbotCombat,
				'Rust Aimbot combat | Rust Cheats',
				'Rust Aimbot squad deck combat preview on Rust Cheats',
			),
			img(
				rustImages.espWallhack,
				'Rust ESP map | Rust Wallhack',
				'Rust ESP map visibility showing rivals, squads and loot on Rust',
			),
			img(
				rustImages.squadFight,
				'Rust squad fight | Rust Cheats',
				'Rust squad fight still for Rust cheats ESP and Aimbot',
			),
			img(
				rustImages.loadoutBuilder,
				'Rust loadout builder | Rust Cheats',
				'Rust loadout builder screen for Rust cheats packages',
			),
			img(
				rustImages.cover,
				'Rust Cheats cover',
				'Cover art for Rust cheats product and pricing pages',
			),
			img(
				rustImages.headerArt,
				'Rust header art',
				'Rust header art used across Rust Cheats',
			),
			img(
				rustImages.battleRoyaleCombat,
				'Rust survival combat | Rust Cheats',
				'Rust survival combat preview for Rust Cheats Aimbot',
			),
		],
	},
	{
		path: '/rust-aimbot/',
		images: [
			img(
				rustImages.aimbotCombat,
				'Rust Aimbot | Rust Cheats',
				'Lock onto targets with Rust Aimbot combat preview for Rust',
			),
			img(
				rustImages.squadFight,
				'Rust Aimbot squad fight | Rust',
				'Rust Aimbot squad fight reference with customizable smoothness and hotkeys',
			),
			img(
				rustImages.headerArt,
				'Rust Aimbot header | Rust Cheats',
				'Rust Aimbot supporting visual for Rust Cheats',
			),
		],
	},
	{
		path: '/rust-esp/',
		images: [
			img(
				rustImages.espWallhack,
				'Rust ESP | Rust Wallhack',
				'Rust ESP map preview displaying rival players, squads, loot and distances',
			),
			img(
				rustImages.aimbotCombat,
				'Rust ESP player visibility | Rust',
				'Rust ESP player visibility support visual for Rust wallhack',
			),
			img(
				rustImages.squadFight,
				'Rust ESP squad context | Rust',
				'Rust ESP squad and loot context for Rust Cheats',
			),
		],
	},
	{
		path: '/undetected-rust-cheats/',
		images: [
			img(
				rustImages.espWallhack,
				'Undetected Rust Cheats 2026 | ESP & Aimbot',
				'Undetected Rust cheats ESP wallhack preview for Rust on Windows PC',
			),
			img(
				rustImages.aimbotCombat,
				'Undetected Rust Aimbot | Rust Cheats',
				'Undetected Rust Aimbot combat preview bundled with ESP and radar',
			),
		],
	},
	{
		path: '/rust-wallhack/',
		images: [
			img(
				rustImages.espWallhack,
				'Rust Wallhack 2026 | Rust ESP',
				'Rust wallhack ESP showing enemy players and loot through walls',
			),
			img(
				rustImages.squadFight,
				'Rust wallhack squad fight | Rust Cheats',
				'Rust wallhack reference during Rust squad fight',
			),
		],
	},
	{
		path: '/rust-radar-hack/',
		images: [
			img(
				rustImages.squadFight,
				'Rust Radar Hack 2026 | 2D Threat Overlay',
				'Rust radar hack 2D overlay for nearby player awareness',
			),
			img(
				rustImages.espWallhack,
				'Rust radar and ESP | Rust Cheats',
				'Rust radar hack paired with ESP wallhack on Rust Cheats',
			),
		],
	},
	{
		path: '/eac-bypass-rust/',
		images: [
			img(
				rustImages.headerArt,
				'EAC Bypass Guide 2026 | Rust Cheats',
				'Easy Anti-Cheat (EAC) maintenance guide for undetected Rust cheats',
			),
			img(
				rustImages.hero,
				'Rust Easy Anti-Cheat (EAC) update hero | Rust Cheats',
				'Rust cheats hero for EAC bypass and patch maintenance',
			),
		],
	},
	{
		path: '/rust-cheats-2026/',
		images: [
			img(
				rustImages.hero,
				'Rust Cheats 2026 | ESP, Wallhack, Radar & Aimbot',
				'Rust cheats 2026 buyer guide hero for Rust',
			),
			img(
				rustImages.cheatsPackage,
				'Rust Cheats 2026 package | Rust',
				'Rust cheats 2026 package with ESP wallhack radar and Aimbot',
			),
		],
	},
	{
		path: '/rust-hacks/',
		images: [
			img(rustImages.battleRoyaleCombat, 'IsleCheat 2026 | ESP & Aimbot', 'IsleCheat survival combat preview for undetected PC package'),
			img(rustImages.espWallhack, 'IsleCheat ESP | Rust Cheats', 'IsleCheat ESP wallhack overlay for Rust'),
		],
	},
	{
		path: '/rust-cheat-download/',
		images: [
			img(rustImages.cheatsPackage, 'Rust Cheat Download 2026 | Instant Delivery', 'Rust cheat download package with ESP wallhack and Aimbot'),
			img(rustImages.cover, 'Rust Cheat Download cover | Rust', 'Rust cheat download license delivery visual'),
		],
	},
	{
		path: '/rust-mod-menu/',
		images: [
			img(rustImages.loadoutBuilder, 'Rust Mod Menu 2026 | In-Client Toggles', 'Rust mod menu loadout builder for ESP and Aimbot toggles'),
			img(rustImages.aimbotCombat, 'Rust Mod Menu Aimbot | Rust Cheats', 'Rust mod menu Aimbot controls preview'),
		],
	},
	{
		path: '/rust-soft-aim/',
		images: [
			img(rustImages.aimbotCombat, 'Rust Soft Aim 2026 | Smooth Aimbot', 'Rust soft aim combat preview with smooth Aimbot settings'),
			img(rustImages.squadFight, 'Rust Soft Aim squad fight | Rust', 'Rust soft aim squad fight reference'),
		],
	},
	{
		path: '/best-rust-cheats/',
		images: [
			img(rustImages.hero, 'Best Rust Cheats 2026 | ESP & Aimbot', 'Best Rust cheats 2026 buyer guide hero'),
			img(rustImages.cheatsPackage, 'Best Rust Cheats package | Rust', 'Best Rust cheats package with full feature stack'),
		],
	},
	{
		path: '/rust-aimbot-hack/',
		images: [
			img(rustImages.aimbotCombat, 'Rust Aimbot Hack 2026 | Undetected', 'Rust aimbot hack combat preview for undetected aim assist'),
			img(rustImages.headerArt, 'Rust Aimbot Hack header | Rust Cheats', 'Rust aimbot hack supporting visual'),
		],
	},
	{
		path: '/rust-esp-hack/',
		images: [
			img(rustImages.espWallhack, 'Rust ESP Hack 2026 | Player Wallhack', 'Rust ESP hack wallhack showing player visibility'),
			img(rustImages.playerEsp, 'Rust ESP Hack player overlay | Rust', 'Rust ESP hack player overlay preview'),
		],
	},
	{
		path: '/rust-unlock-all/',
		images: [
			img(rustImages.playerEsp, 'Rust Unlock All 2026 | Loadout Guide', 'Rust unlock all player ESP loadout guide visual'),
			img(rustImages.loadoutBuilder, 'Rust Unlock All loadout | Rust Cheats', 'Rust unlock all loadout builder reference'),
		],
	},
	{
		path: '/features/',
		images: [
			img(
				rustImages.hero,
				'Rust Cheat Features | ESP & Aimbot for Rust',
				'Explore Rust cheat features: advanced Rust ESP and precise Aimbot',
			),
			img(
				rustImages.aimbotCombat,
				'Rust Aimbot feature | Rust Cheats',
				'Rust Aimbot feature still with customizable settings for Rust',
			),
			img(
				rustImages.espWallhack,
				'Rust ESP feature | Rust Cheats',
				'Rust ESP feature still with item filters and distance display',
			),
			img(
				rustImages.squadFight,
				'Rust cheat features squad | Rust',
				'Rust Cheats feature still for ESP wallhack and Aimbot overview',
			),
		],
	},
	{
		path: '/pricing/',
		images: [
			img(
				rustImages.cover,
				'Rust Cheat Pricing | Monthly & Lifetime Plans',
				'Rust cheats pricing cover for monthly $35 and lifetime $150 plans',
			),
			img(
				rustImages.cheatsPackage,
				'Rust Cheats package pricing',
				'Rust ESP and Aimbot package visual for Rust cheats pricing',
			),
			img(
				rustImages.loadoutBuilder,
				'Rust pricing squad builder | Rust',
				'Rust loadout builder still on Rust cheats pricing page',
			),
			img(
				rustImages.squadFight,
				'Rust pricing combat | Rust Cheats',
				'Combat still supporting Rust cheats pricing plans',
			),
		],
	},
	{
		path: '/setup/',
		images: [
			img(
				rustImages.squadFight,
				'Rust Cheat Setup | Install Guide for Windows',
				'Setup guide main image for installing Rust cheats on Windows PC',
			),
			img(
				rustImages.aimbotCombat,
				'Rust cheat setup Aimbot | Rust',
				'Setup guide Aimbot configuration visual for Rust cheats',
			),
			img(
				rustImages.cover,
				'Rust cheat setup cover | Rust Cheats',
				'Setup guide cover for quick Rust ESP and Aimbot configuration',
			),
		],
	},
	{
		path: '/updates/',
		images: [
			img(
				rustImages.squadFight,
				'Rust Cheat Status | Update Log & Patches',
				'Rust cheat status and update log visual for Rust compatibility',
			),
			img(
				rustImages.hero,
				'Rust cheat updates hero | Rust Cheats',
				'Rust ESP and Aimbot patch status hero for Rust cheats',
			),
			img(
				rustImages.espWallhack,
				'Rust cheat updates ESP | Rust',
				'Rust ESP maintenance still for Rust cheat update log',
			),
		],
	},
	{
		path: '/faq/',
		images: [
			img(
				rustImages.loadoutBuilder,
				'Rust Cheats FAQ | Common Questions Answered',
				'FAQ visual for Rust cheats setup, delivery and refund questions',
			),
			img(
				rustImages.espWallhack,
				'Rust Cheats FAQ ESP | Rust',
				'FAQ ESP support visual explaining how Rust ESP works on Rust',
			),
			img(
				rustImages.headerArt,
				'Rust Cheats FAQ header | Rust Cheats',
				'FAQ support context art for Rust Cheats',
			),
		],
	},
	{
		path: '/support/',
		images: [
			img(
				rustImages.headerArt,
				'Rust Cheat Support | Help Center & Contact',
				'Support page visual for Rust cheats help center and contact',
			),
			img(
				rustImages.aimbotCombat,
				'Rust Cheat Support Aimbot help | Rust',
				'Support visual for Rust Aimbot help, license and billing questions',
			),
			img(
				rustImages.cover,
				'Rust Cheat Support cover | Rust Cheats',
				'Support cover for Rust cheats technical help',
			),
		],
	},
	{
		path: '/refund-policy/',
		images: [
			img(
				rustImages.cover,
				'Refund Policy | Rust Cheats',
				'Refund policy image for Rust cheats eligibility and license terms',
			),
			img(
				rustImages.cheatsPackage,
				'Rust Cheats refund package',
				'Package visual for Rust cheats refund policy instructions',
			),
		],
	},
	{
		path: '/privacy-policy/',
		images: [
			img(
				rustImages.aimbotCombat,
				'Privacy Policy | Rust Cheats',
				'Privacy policy image for Rust cheats data and order handling',
			),
			img(
				rustImages.hero,
				'Rust Cheats privacy policy hero',
				'Privacy policy hero for Rust cheats site usage details',
			),
		],
	},
	{
		path: '/terms/',
		images: [
			img(
				rustImages.squadFight,
				'Terms of Use | Rust Cheats',
				'Terms of use image for Rust cheats license agreement',
			),
			img(
				rustImages.headerArt,
				'Rust Cheats terms header',
				'Terms support visual for Rust ESP and Aimbot purchase conditions',
			),
			img(
				rustImages.cover,
				'Rust Cheats terms cover',
				'Terms cover for Rust cheats usage guidelines',
			),
		],
	},
];

/** Per-page image extensions keyed by PageId — merged into canonical sitemap entries. */
const pageImagesById: Record<PageId, SitemapImage[]> = Object.fromEntries(
	manualPageSitemapEntries.map((entry) => {
		const pageId = pageIds.find((id) => englishPaths[id] === entry.path);
		if (!pageId) throw new Error(`Sitemap entry path not in englishPaths: ${entry.path}`);
		return [pageId, entry.images];
	}),
) as Record<PageId, SitemapImage[]>;

// Fail fast if manual entries miss a routed page or include unknown paths.
for (const pageId of pageIds) {
	if (!pageImagesById[pageId]?.length) {
		throw new Error(`[sitemap] No images configured for pageId: ${pageId}`);
	}
}
const manualPathSet = new Set(manualPageSitemapEntries.map((e) => e.path));
for (const pageId of pageIds) {
	if (!manualPathSet.has(englishPaths[pageId])) {
		throw new Error(`[sitemap] Missing manual sitemap entry for ${pageId} (${englishPaths[pageId]})`);
	}
}

/**
 * Canonical English sitemap entries — always includes every pageId from routing.
 * Priority/changefreq from sitemap-meta; images from manualPageSitemapEntries.
 */
export const pageSitemapEntries: PageSitemapEntry[] = pageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: meta.lastmod,
		images: pageImagesById[pageId],
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
