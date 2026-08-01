import { siteConfig } from './site';
import { fortniteImages } from './fortnite';
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
				fortniteImages.hero,
				'Fortnite Cheats | Fortnite ESP & Aimbot',
				'Premium Fortnite cheats homepage hero featuring Fortnite ESP and Aimbot',
			),
			img(
				fortniteImages.aimbotCombat,
				'Fortnite Aimbot combat | Fortnite Cheats',
				'Fortnite Aimbot squad deck combat preview on Fortnite Cheats',
			),
			img(
				fortniteImages.espWallhack,
				'Fortnite ESP map | Fortnite Wallhack',
				'Fortnite ESP map visibility showing rivals, squads and loot on Fortnite',
			),
			img(
				fortniteImages.squadFight,
				'Fortnite squad fight | Fortnite Cheats',
				'Fortnite squad fight still for Fortnite cheats ESP and Aimbot',
			),
			img(
				fortniteImages.loadoutBuilder,
				'Fortnite loadout builder | Fortnite Cheats',
				'Fortnite loadout builder screen for Fortnite cheats packages',
			),
			img(
				fortniteImages.cover,
				'Fortnite Cheats cover',
				'Cover art for Fortnite cheats product and pricing pages',
			),
			img(
				fortniteImages.headerArt,
				'Fortnite header art',
				'Fortnite header art used across Fortnite Cheats',
			),
			img(
				fortniteImages.battleRoyaleCombat,
				'Fortnite battle royale combat | Fortnite Cheats',
				'Fortnite battle royale combat preview for Fortnite Cheats Aimbot',
			),
		],
	},
	{
		path: '/fortnite-aimbot/',
		images: [
			img(
				fortniteImages.aimbotCombat,
				'Fortnite Aimbot | Fortnite Cheats',
				'Lock onto targets with Fortnite Aimbot combat preview for Fortnite',
			),
			img(
				fortniteImages.squadFight,
				'Fortnite Aimbot squad fight | Fortnite',
				'Fortnite Aimbot squad fight reference with customizable smoothness and hotkeys',
			),
			img(
				fortniteImages.headerArt,
				'Fortnite Aimbot header | Fortnite Cheats',
				'Fortnite Aimbot supporting visual for Fortnite Cheats',
			),
		],
	},
	{
		path: '/fortnite-esp/',
		images: [
			img(
				fortniteImages.espWallhack,
				'Fortnite ESP | Fortnite Wallhack',
				'Fortnite ESP map preview displaying rival players, squads, loot and distances',
			),
			img(
				fortniteImages.aimbotCombat,
				'Fortnite ESP player visibility | Fortnite',
				'Fortnite ESP player visibility support visual for Fortnite wallhack',
			),
			img(
				fortniteImages.squadFight,
				'Fortnite ESP squad context | Fortnite',
				'Fortnite ESP squad and loot context for Fortnite Cheats',
			),
		],
	},
	{
		path: '/undetected-fortnite-cheats/',
		images: [
			img(
				fortniteImages.espWallhack,
				'Undetected Fortnite Cheats 2026 | ESP & Aimbot',
				'Undetected Fortnite cheats ESP wallhack preview for Fortnite on Windows PC',
			),
			img(
				fortniteImages.aimbotCombat,
				'Undetected Fortnite Aimbot | Fortnite Cheats',
				'Undetected Fortnite Aimbot combat preview bundled with ESP and radar',
			),
		],
	},
	{
		path: '/fortnite-wallhack/',
		images: [
			img(
				fortniteImages.espWallhack,
				'Fortnite Wallhack 2026 | Fortnite ESP',
				'Fortnite wallhack ESP showing enemy players and loot through walls',
			),
			img(
				fortniteImages.squadFight,
				'Fortnite wallhack squad fight | Fortnite Cheats',
				'Fortnite wallhack reference during Fortnite squad fight',
			),
		],
	},
	{
		path: '/fortnite-radar-hack/',
		images: [
			img(
				fortniteImages.squadFight,
				'Fortnite Radar Hack 2026 | 2D Threat Overlay',
				'Fortnite radar hack 2D overlay for nearby player awareness',
			),
			img(
				fortniteImages.espWallhack,
				'Fortnite radar and ESP | Fortnite Cheats',
				'Fortnite radar hack paired with ESP wallhack on Fortnite Cheats',
			),
		],
	},
	{
		path: '/eac-bypass-fortnite/',
		images: [
			img(
				fortniteImages.headerArt,
				'EAC Bypass Guide 2026 | Fortnite Cheats',
				'Easy Anti-Cheat (EAC) maintenance guide for undetected Fortnite cheats',
			),
			img(
				fortniteImages.hero,
				'Fortnite Easy Anti-Cheat (EAC) update hero | Fortnite Cheats',
				'Fortnite cheats hero for EAC bypass and patch maintenance',
			),
		],
	},
	{
		path: '/fortnite-cheats-2026/',
		images: [
			img(
				fortniteImages.hero,
				'Fortnite Cheats 2026 | ESP, Wallhack, Radar & Aimbot',
				'Fortnite cheats 2026 buyer guide hero for Fortnite',
			),
			img(
				fortniteImages.cheatsPackage,
				'Fortnite Cheats 2026 package | Fortnite',
				'Fortnite cheats 2026 package with ESP wallhack radar and Aimbot',
			),
		],
	},
	{
		path: '/fortnite-hacks/',
		images: [
			img(fortniteImages.battleRoyaleCombat, 'Fortnite Hacks 2026 | ESP & Aimbot', 'Fortnite hacks battle royale combat preview for undetected PC package'),
			img(fortniteImages.espWallhack, 'Fortnite Hacks ESP | Fortnite Cheats', 'Fortnite hacks ESP wallhack overlay for Fortnite'),
		],
	},
	{
		path: '/fortnite-cheat-download/',
		images: [
			img(fortniteImages.cheatsPackage, 'Fortnite Cheat Download 2026 | Instant Delivery', 'Fortnite cheat download package with ESP wallhack and Aimbot'),
			img(fortniteImages.cover, 'Fortnite Cheat Download cover | Fortnite', 'Fortnite cheat download license delivery visual'),
		],
	},
	{
		path: '/fortnite-mod-menu/',
		images: [
			img(fortniteImages.loadoutBuilder, 'Fortnite Mod Menu 2026 | In-Client Toggles', 'Fortnite mod menu loadout builder for ESP and Aimbot toggles'),
			img(fortniteImages.aimbotCombat, 'Fortnite Mod Menu Aimbot | Fortnite Cheats', 'Fortnite mod menu Aimbot controls preview'),
		],
	},
	{
		path: '/fortnite-soft-aim/',
		images: [
			img(fortniteImages.aimbotCombat, 'Fortnite Soft Aim 2026 | Smooth Aimbot', 'Fortnite soft aim combat preview with smooth Aimbot settings'),
			img(fortniteImages.squadFight, 'Fortnite Soft Aim squad fight | Fortnite', 'Fortnite soft aim squad fight reference'),
		],
	},
	{
		path: '/best-fortnite-cheats/',
		images: [
			img(fortniteImages.hero, 'Best Fortnite Cheats 2026 | ESP & Aimbot', 'Best Fortnite cheats 2026 buyer guide hero'),
			img(fortniteImages.cheatsPackage, 'Best Fortnite Cheats package | Fortnite', 'Best Fortnite cheats package with full feature stack'),
		],
	},
	{
		path: '/fortnite-aimbot-hack/',
		images: [
			img(fortniteImages.aimbotCombat, 'Fortnite Aimbot Hack 2026 | Undetected', 'Fortnite aimbot hack combat preview for undetected aim assist'),
			img(fortniteImages.headerArt, 'Fortnite Aimbot Hack header | Fortnite Cheats', 'Fortnite aimbot hack supporting visual'),
		],
	},
	{
		path: '/fortnite-esp-hack/',
		images: [
			img(fortniteImages.espWallhack, 'Fortnite ESP Hack 2026 | Player Wallhack', 'Fortnite ESP hack wallhack showing player visibility'),
			img(fortniteImages.playerEsp, 'Fortnite ESP Hack player overlay | Fortnite', 'Fortnite ESP hack player overlay preview'),
		],
	},
	{
		path: '/fortnite-unlock-all/',
		images: [
			img(fortniteImages.playerEsp, 'Fortnite Unlock All 2026 | Loadout Guide', 'Fortnite unlock all player ESP loadout guide visual'),
			img(fortniteImages.loadoutBuilder, 'Fortnite Unlock All loadout | Fortnite Cheats', 'Fortnite unlock all loadout builder reference'),
		],
	},
	{
		path: '/features/',
		images: [
			img(
				fortniteImages.hero,
				'Fortnite Cheat Features | ESP & Aimbot for Fortnite',
				'Explore Fortnite cheat features: advanced Fortnite ESP and precise Aimbot',
			),
			img(
				fortniteImages.aimbotCombat,
				'Fortnite Aimbot feature | Fortnite Cheats',
				'Fortnite Aimbot feature still with customizable settings for Fortnite',
			),
			img(
				fortniteImages.espWallhack,
				'Fortnite ESP feature | Fortnite Cheats',
				'Fortnite ESP feature still with item filters and distance display',
			),
			img(
				fortniteImages.squadFight,
				'Fortnite cheat features squad | Fortnite',
				'Fortnite Cheats feature still for ESP wallhack and Aimbot overview',
			),
		],
	},
	{
		path: '/pricing/',
		images: [
			img(
				fortniteImages.cover,
				'Fortnite Cheat Pricing | Monthly & Lifetime Plans',
				'Fortnite cheats pricing cover for monthly $35 and lifetime $150 plans',
			),
			img(
				fortniteImages.cheatsPackage,
				'Fortnite Cheats package pricing',
				'Fortnite ESP and Aimbot package visual for Fortnite cheats pricing',
			),
			img(
				fortniteImages.loadoutBuilder,
				'Fortnite pricing squad builder | Fortnite',
				'Fortnite loadout builder still on Fortnite cheats pricing page',
			),
			img(
				fortniteImages.squadFight,
				'Fortnite pricing combat | Fortnite Cheats',
				'Combat still supporting Fortnite cheats pricing plans',
			),
		],
	},
	{
		path: '/setup/',
		images: [
			img(
				fortniteImages.squadFight,
				'Fortnite Cheat Setup | Install Guide for Windows',
				'Setup guide main image for installing Fortnite cheats on Windows PC',
			),
			img(
				fortniteImages.aimbotCombat,
				'Fortnite cheat setup Aimbot | Fortnite',
				'Setup guide Aimbot configuration visual for Fortnite cheats',
			),
			img(
				fortniteImages.cover,
				'Fortnite cheat setup cover | Fortnite Cheats',
				'Setup guide cover for quick Fortnite ESP and Aimbot configuration',
			),
		],
	},
	{
		path: '/updates/',
		images: [
			img(
				fortniteImages.squadFight,
				'Fortnite Cheat Status | Update Log & Patches',
				'Fortnite cheat status and update log visual for Fortnite compatibility',
			),
			img(
				fortniteImages.hero,
				'Fortnite cheat updates hero | Fortnite Cheats',
				'Fortnite ESP and Aimbot patch status hero for Fortnite cheats',
			),
			img(
				fortniteImages.espWallhack,
				'Fortnite cheat updates ESP | Fortnite',
				'Fortnite ESP maintenance still for Fortnite cheat update log',
			),
		],
	},
	{
		path: '/faq/',
		images: [
			img(
				fortniteImages.loadoutBuilder,
				'Fortnite Cheats FAQ | Common Questions Answered',
				'FAQ visual for Fortnite cheats setup, delivery and refund questions',
			),
			img(
				fortniteImages.espWallhack,
				'Fortnite Cheats FAQ ESP | Fortnite',
				'FAQ ESP support visual explaining how Fortnite ESP works on Fortnite',
			),
			img(
				fortniteImages.headerArt,
				'Fortnite Cheats FAQ header | Fortnite Cheats',
				'FAQ support context art for Fortnite Cheats',
			),
		],
	},
	{
		path: '/support/',
		images: [
			img(
				fortniteImages.headerArt,
				'Fortnite Cheat Support | Help Center & Contact',
				'Support page visual for Fortnite cheats help center and contact',
			),
			img(
				fortniteImages.aimbotCombat,
				'Fortnite Cheat Support Aimbot help | Fortnite',
				'Support visual for Fortnite Aimbot help, license and billing questions',
			),
			img(
				fortniteImages.cover,
				'Fortnite Cheat Support cover | Fortnite Cheats',
				'Support cover for Fortnite cheats technical help',
			),
		],
	},
	{
		path: '/refund-policy/',
		images: [
			img(
				fortniteImages.cover,
				'Refund Policy | Fortnite Cheats',
				'Refund policy image for Fortnite cheats eligibility and license terms',
			),
			img(
				fortniteImages.cheatsPackage,
				'Fortnite Cheats refund package',
				'Package visual for Fortnite cheats refund policy instructions',
			),
		],
	},
	{
		path: '/privacy-policy/',
		images: [
			img(
				fortniteImages.aimbotCombat,
				'Privacy Policy | Fortnite Cheats',
				'Privacy policy image for Fortnite cheats data and order handling',
			),
			img(
				fortniteImages.hero,
				'Fortnite Cheats privacy policy hero',
				'Privacy policy hero for Fortnite cheats site usage details',
			),
		],
	},
	{
		path: '/terms/',
		images: [
			img(
				fortniteImages.squadFight,
				'Terms of Use | Fortnite Cheats',
				'Terms of use image for Fortnite cheats license agreement',
			),
			img(
				fortniteImages.headerArt,
				'Fortnite Cheats terms header',
				'Terms support visual for Fortnite ESP and Aimbot purchase conditions',
			),
			img(
				fortniteImages.cover,
				'Fortnite Cheats terms cover',
				'Terms cover for Fortnite cheats usage guidelines',
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
export const imageSitemapEntries: SitemapImage[] = fortniteImages.sitemap.map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
