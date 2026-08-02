import { siteConfig } from './site';

/**
 * Keyword-named Fortnite assets for crawlable image SEO.
 * Filenames intentionally include primary search terms (esp, aimbot, wallhack, etc.).
 */
export const fortniteImages = {
	hero: '/images/fortnite-cheats-hero.webp',
	cover: '/images/fortnite-cheats-cover.webp',
	logo: siteConfig.logo,
	loadoutBuilder: '/images/fortnite-loadout-builder.webp',
	aimbotCombat: '/images/fortnite-cheats-aimbot-combat.webp',
	squadFight: '/images/fortnite-squad-fight.webp',
	espWallhack: '/images/fortnite-cheats-esp-wallhack.webp',
	cheatsPackage: '/images/fortnite-cheats-package.webp',
	headerArt: '/images/fortnite-header-art.webp',
	battleRoyaleCombat: '/images/fortnite-battle-royale-combat.webp',
	rebootFight: '/images/fortnite-reboot-van-fight.webp',
	playerEsp: '/images/fortnite-player-esp.webp',
	zeroBuildCombat: '/images/fortnite-zero-build-combat.webp',
	zeroBuildMode: '/images/fortnite-zero-build-mode.webp',
	// island-map.webp is a byte-identical copy of cheats-package.webp — point at a
	// distinct existing asset so named lookups never reintroduce the duplicate.
	battleRoyaleIsland: '/images/fortnite-cheats-cover.webp',
	// Product thumbs + main preview share this single list (ProductCard click handler).
	// Every basename must be unique — never pair package + island-map (identical bytes).
	product: [
		{
			src: '/images/fortnite-battle-royale-combat.webp',
			alt: 'Fortnite Aimbot ADS combat firefight on Windows PC',
		},
		{
			src: '/images/fortnite-reboot-van-fight.webp',
			alt: 'Fortnite cheats Aimbot targeting during a reboot van fight',
		},
		{
			src: '/images/fortnite-zero-build-mode.webp',
			alt: 'Fortnite Zero Build Aimbot sight picture at Mount Olympus',
		},
		{
			src: '/images/fortnite-player-esp.webp',
			alt: 'Fortnite player ESP overlay for Fortnite cheats wallhack',
		},
		{
			src: '/images/fortnite-cheats-esp-wallhack.webp',
			alt: 'Fortnite cheats ESP wallhack visibility across Battle Royale',
		},
		{
			src: '/images/fortnite-zero-build-combat.webp',
			alt: 'Fortnite Zero Build combat preview for Fortnite cheats',
		},
	],
	gallery: [
		{
			src: '/images/fortnite-cheats-package.webp',
			alt: 'Fortnite cheats package key art with ESP and Aimbot roster',
			featured: true,
		},
		{
			src: '/images/fortnite-cheats-cover.webp',
			alt: 'Fortnite cheats cover showing Battle Royale island terrain',
		},
		{
			src: '/images/fortnite-header-art.webp',
			alt: 'Fortnite header art for ESP and Aimbot cheat overview',
		},
		{
			src: '/images/fortnite-squad-fight.webp',
			alt: 'Fortnite squad fight preview for Fortnite Aimbot targeting',
		},
		{
			src: '/images/fortnite-loadout-builder.webp',
			alt: 'Fortnite loadout builder for Fortnite cheats packages',
		},
	],
	sitemap: [
		{
			src: '/images/fortnite-cheats-hero.webp',
			title: 'Fortnite Cheats | Fortnite ESP & Aimbot',
			caption: 'Primary hero art for Fortnite cheats featuring ESP and Aimbot',
		},
		{
			src: '/images/fortnite-cheats-cover.webp',
			title: 'Fortnite Cheats cover | Fortnite packages',
			caption: 'Product cover for Fortnite cheats pricing and packaging pages',
		},
		{
			src: '/images/fortnite-loadout-builder.webp',
			title: 'Fortnite loadout builder | Fortnite Cheats',
			caption: 'Fortnite loadout builder for Fortnite cheats setup',
		},
		{
			src: '/images/fortnite-cheats-aimbot-combat.webp',
			title: 'Fortnite Aimbot | Fortnite Cheats',
			caption: 'Fortnite Aimbot combat still for Fortnite on Windows PC',
		},
		{
			src: '/images/fortnite-squad-fight.webp',
			title: 'Fortnite squad fight | Fortnite Cheats ESP',
			caption: 'Fortnite squad fight for Fortnite cheats ESP and Aimbot',
		},
		{
			src: '/images/fortnite-cheats-esp-wallhack.webp',
			title: 'Fortnite ESP wallhack | Fortnite Cheats',
			caption: 'Fortnite ESP wallhack preview showing players, loot and distances',
		},
		{
			src: '/images/fortnite-cheats-package.webp',
			title: 'Fortnite Cheats package | ESP & Aimbot',
			caption: 'Fortnite ESP and Aimbot package visual for Fortnite cheats',
		},
		{
			src: '/images/fortnite-header-art.webp',
			title: 'Fortnite header art | Fortnite Cheats',
			caption: 'Fortnite store header art used across Fortnite Cheats pages',
		},
		{
			src: '/images/fortnite-battle-royale-combat.webp',
			title: 'Fortnite battle royale combat | Fortnite Cheats Aimbot',
			caption: 'Fortnite BR combat preview for Fortnite cheats Aimbot',
		},
		{
			src: '/images/fortnite-reboot-van-fight.webp',
			title: 'Fortnite reboot van fight | Fortnite Cheats',
			caption: 'Fortnite reboot van fight still for Fortnite cheats Aimbot',
		},
		{
			src: '/images/fortnite-player-esp.webp',
			title: 'Fortnite player ESP | Fortnite Cheats wallhack',
			caption: 'Fortnite player ESP overlay for Fortnite cheats',
		},
		{
			src: '/images/fortnite-zero-build-combat.webp',
			title: 'Fortnite Zero Build combat | Fortnite Cheats',
			caption: 'Zero Build combat preview for Fortnite cheats ESP and Aimbot',
		},
		{
			src: '/images/fortnite-zero-build-mode.webp',
			title: 'Fortnite Zero Build mode | Fortnite Cheats',
			caption: 'Fortnite Zero Build mode for Fortnite cheats packages',
		},
	],
} as const;
