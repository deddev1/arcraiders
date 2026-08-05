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
				'Arc Raiders Hacks | Rust ESP & Aimbot',
				'Premium Rust cheats homepage hero featuring Rust ESP and Aimbot',
			),
			img(
				rustImages.aimbotCombat,
				'Rust Aimbot combat | Arc Raiders Hacks',
				'Rust Aimbot squad deck combat preview on Arc Raiders Hacks',
			),
			img(
				rustImages.espWallhack,
				'Rust ESP map | Rust Wallhack',
				'Rust ESP map visibility showing rivals, squads and loot on Rust',
			),
			img(
				rustImages.squadFight,
				'Rust squad fight | Arc Raiders Hacks',
				'Rust squad fight still for Arc Raiders cheats ESP and Aimbot',
			),
			img(
				rustImages.loadoutBuilder,
				'Rust loadout builder | Arc Raiders Hacks',
				'Rust loadout builder screen for Arc Raiders cheats packages',
			),
			img(
				rustImages.cover,
				'Arc Raiders Hacks cover',
				'Cover art for Arc Raiders cheats product and pricing pages',
			),
			img(
				rustImages.headerArt,
				'Rust header art',
				'Rust header art used across Arc Raiders Hacks',
			),
			img(
				rustImages.battleRoyaleCombat,
				'Rust survival combat | Arc Raiders Hacks',
				'Rust survival combat preview for Arc Raiders Cheats Aimbot',
			),
		],
	},
	{
		path: '/rust-aimbot/',
		images: [
			img(
				rustImages.aimbotCombat,
				'Rust Aimbot | Arc Raiders Hacks',
				'Lock onto targets with Rust Aimbot combat preview for Arc Raiders',
			),
			img(
				rustImages.squadFight,
				'Rust Aimbot squad fight | Rust',
				'Rust Aimbot squad fight reference with customizable smoothness and hotkeys',
			),
			img(
				rustImages.headerArt,
				'Rust Aimbot header | Arc Raiders Hacks',
				'Rust Aimbot supporting visual for Arc Raiders Cheats',
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
				'Rust ESP player visibility support visual for Arc Raiders wallhack',
			),
			img(
				rustImages.squadFight,
				'Rust ESP squad context | Rust',
				'Rust ESP squad and loot context for Arc Raiders Cheats',
			),
		],
	},
	{
		path: '/undetected-rust-cheats/',
		images: [
			img(
				rustImages.espWallhack,
				'Undetected Arc Raiders Hacks 2026 | ESP & Aimbot',
				'Undetected Rust cheats ESP wallhack preview for Arc Raiders on Windows PC',
			),
			img(
				rustImages.aimbotCombat,
				'Undetected Rust Aimbot | Arc Raiders Hacks',
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
				'Rust wallhack squad fight | Arc Raiders Hacks',
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
				'Rust radar and ESP | Arc Raiders Hacks',
				'Rust radar hack paired with ESP wallhack on Arc Raiders Hacks',
			),
		],
	},
	{
		path: '/eac-bypass-rust/',
		images: [
			img(
				rustImages.headerArt,
				'EAC Bypass Guide 2026 | Arc Raiders Hacks',
				'Easy Anti-Cheat (EAC) maintenance guide for undetected Rust cheats',
			),
			img(
				rustImages.hero,
				'Rust Easy Anti-Cheat (EAC) update hero | Arc Raiders Hacks',
				'Rust cheats hero for EAC bypass and patch maintenance',
			),
		],
	},
	{
		path: '/rust-cheats-2026/',
		images: [
			img(
				rustImages.hero,
				'Arc Raiders Hacks 2026 | ESP, Wallhack, Radar & Aimbot',
				'Rust cheats 2026 buyer guide hero for Arc Raiders',
			),
			img(
				rustImages.cheatsPackage,
				'Arc Raiders Hacks 2026 package | Rust',
				'Rust cheats 2026 package with ESP wallhack radar and Aimbot',
			),
		],
	},
	{
		path: '/rust-hacks/',
		images: [
			img(rustImages.battleRoyaleCombat, 'Arc Raiders Hacks 2026 | ESP & Aimbot', 'Arc Raiders Hacks survival combat preview for undetected PC package'),
			img(rustImages.espWallhack, 'Arc Raiders Hacks ESP | Arc Raiders Hacks', 'Arc Raiders Hacks ESP wallhack overlay for Arc Raiders'),
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
			img(rustImages.aimbotCombat, 'Rust Mod Menu Aimbot | Arc Raiders Hacks', 'Rust mod menu Aimbot controls preview'),
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
			img(rustImages.hero, 'Best Arc Raiders Hacks 2026 | ESP & Aimbot', 'Best Rust cheats 2026 buyer guide hero'),
			img(rustImages.cheatsPackage, 'Best Arc Raiders Hacks package | Rust', 'Best Rust cheats package with full feature stack'),
		],
	},
	{
		path: '/rust-aimbot-hack/',
		images: [
			img(rustImages.aimbotCombat, 'Rust Aimbot Hack 2026 | Undetected', 'Rust aimbot hack combat preview for undetected aim assist'),
			img(rustImages.headerArt, 'Rust Aimbot Hack header | Arc Raiders Hacks', 'Rust aimbot hack supporting visual'),
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
			img(rustImages.loadoutBuilder, 'Rust Unlock All loadout | Arc Raiders Hacks', 'Rust unlock all loadout builder reference'),
		],
	},
	{
		path: '/features/',
		images: [
			img(
				rustImages.hero,
				'Rust Cheat Features | ESP & Aimbot for Arc Raiders',
				'Explore Rust cheat features: advanced Rust ESP and precise Aimbot',
			),
			img(
				rustImages.aimbotCombat,
				'Rust Aimbot feature | Arc Raiders Hacks',
				'Rust Aimbot feature still with customizable settings for Arc Raiders',
			),
			img(
				rustImages.espWallhack,
				'Rust ESP feature | Arc Raiders Hacks',
				'Rust ESP feature still with item filters and distance display',
			),
			img(
				rustImages.squadFight,
				'Rust cheat features squad | Rust',
				'Arc Raiders Hacks feature still for ESP wallhack and Aimbot overview',
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
				'Arc Raiders Hacks package pricing',
				'Rust ESP and Aimbot package visual for Arc Raiders cheats pricing',
			),
			img(
				rustImages.loadoutBuilder,
				'Rust pricing squad builder | Rust',
				'Rust loadout builder still on Rust cheats pricing page',
			),
			img(
				rustImages.squadFight,
				'Rust pricing combat | Arc Raiders Hacks',
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
				'Setup guide Aimbot configuration visual for Arc Raiders cheats',
			),
			img(
				rustImages.cover,
				'Rust cheat setup cover | Arc Raiders Hacks',
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
				'Rust cheat status and update log visual for Arc Raiders compatibility',
			),
			img(
				rustImages.hero,
				'Rust cheat updates hero | Arc Raiders Hacks',
				'Rust ESP and Aimbot patch status hero for Arc Raiders cheats',
			),
			img(
				rustImages.espWallhack,
				'Rust cheat updates ESP | Rust',
				'Rust ESP maintenance still for Arc Raiders cheat update log',
			),
		],
	},
	{
		path: '/faq/',
		images: [
			img(
				rustImages.loadoutBuilder,
				'Arc Raiders Hacks FAQ | Common Questions Answered',
				'FAQ visual for Arc Raiders cheats setup, delivery and refund questions',
			),
			img(
				rustImages.espWallhack,
				'Arc Raiders Hacks FAQ ESP | Rust',
				'FAQ ESP support visual explaining how Rust ESP works on Rust',
			),
			img(
				rustImages.headerArt,
				'Arc Raiders Hacks FAQ header | Arc Raiders Hacks',
				'FAQ support context art for Arc Raiders Cheats',
			),
		],
	},
	{
		path: '/support/',
		images: [
			img(
				rustImages.headerArt,
				'Rust Cheat Support | Help Center & Contact',
				'Support page visual for Arc Raiders cheats help center and contact',
			),
			img(
				rustImages.aimbotCombat,
				'Rust Cheat Support Aimbot help | Rust',
				'Support visual for Arc Raiders Aimbot help, license and billing questions',
			),
			img(
				rustImages.cover,
				'Rust Cheat Support cover | Arc Raiders Hacks',
				'Support cover for Arc Raiders cheats technical help',
			),
		],
	},
	{
		path: '/refund-policy/',
		images: [
			img(
				rustImages.cover,
				'Refund Policy | Arc Raiders Hacks',
				'Refund policy image for Arc Raiders cheats eligibility and license terms',
			),
			img(
				rustImages.cheatsPackage,
				'Arc Raiders Hacks refund package',
				'Package visual for Arc Raiders cheats refund policy instructions',
			),
		],
	},
	{
		path: '/privacy-policy/',
		images: [
			img(
				rustImages.aimbotCombat,
				'Privacy Policy | Arc Raiders Hacks',
				'Privacy policy image for Arc Raiders cheats data and order handling',
			),
			img(
				rustImages.hero,
				'Arc Raiders Hacks privacy policy hero',
				'Privacy policy hero for Arc Raiders cheats site usage details',
			),
		],
	},
	{
		path: '/terms/',
		images: [
			img(
				rustImages.squadFight,
				'Terms of Use | Arc Raiders Hacks',
				'Terms of use image for Arc Raiders cheats license agreement',
			),
			img(
				rustImages.headerArt,
				'Arc Raiders Hacks terms header',
				'Terms support visual for Arc Raiders ESP and Aimbot purchase conditions',
			),
			img(
				rustImages.cover,
				'Arc Raiders Hacks terms cover',
				'Terms cover for Arc Raiders cheats usage guidelines',
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
