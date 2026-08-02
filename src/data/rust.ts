import { siteConfig } from './site';

/**
 * Simple SEO filenames for rust hacks product UI assets.
 * Visuals are cheat overlay / menu / status UI — not combat scenery.
 */
export const rustImages = {
	hero: '/images/rust-hacks-hero.webp',
	cover: '/images/rust-hacks-cover.webp',
	logo: siteConfig.logo,
	loadoutBuilder: '/images/rust-cheats-menu.webp',
	aimbotCombat: '/images/rust-aimbot-ui.webp',
	squadFight: '/images/rust-cheats-dashboard.webp',
	espWallhack: '/images/rust-esp-overlay.webp',
	cheatsPackage: '/images/rust-cheats-menu.webp',
	headerArt: '/images/rust-hacks-panel.webp',
	battleRoyaleCombat: '/images/rust-hacks-status.webp',
	rebootFight: '/images/rust-hacks-status.webp',
	playerEsp: '/images/rust-esp-overlay.webp',
	zeroBuildCombat: '/images/rust-wallhack-ui.webp',
	zeroBuildMode: '/images/rust-soft-aim-ui.webp',
	battleRoyaleIsland: '/images/rust-radar-ui.webp',
	product: [
		{
			src: '/images/rust-esp-overlay.webp',
			alt: 'Rust ESP overlay UI with player and loot boxes',
		},
		{
			src: '/images/rust-aimbot-ui.webp',
			alt: 'Rust aimbot UI with FOV and smoothness controls',
		},
		{
			src: '/images/rust-wallhack-ui.webp',
			alt: 'Rust wallhack UI boxes for players through walls',
		},
		{
			src: '/images/rust-radar-ui.webp',
			alt: 'Rust radar UI showing nearby player pings',
		},
		{
			src: '/images/rust-cheats-menu.webp',
			alt: 'Rust cheats in-client menu for ESP and aimbot',
		},
		{
			src: '/images/rust-hacks-status.webp',
			alt: 'Rust hacks status panel for EAC maintenance',
		},
	],
	gallery: [
		{
			src: '/images/rust-hacks-hero.webp',
			alt: 'Rust Hacks hero showing ESP aimbot product UI',
			featured: true,
		},
		{
			src: '/images/rust-esp-overlay.webp',
			alt: 'Rust ESP overlay product UI',
		},
		{
			src: '/images/rust-aimbot-ui.webp',
			alt: 'Rust aimbot product UI',
		},
		{
			src: '/images/rust-cheats-menu.webp',
			alt: 'Rust cheats menu product UI',
		},
		{
			src: '/images/rust-hacks-panel.webp',
			alt: 'Rust hacks feature panel UI',
		},
	],
	sitemap: [
		{
			src: '/images/rust-hacks-hero.webp',
			title: 'Rust Hacks | ESP & Aimbot',
			caption: 'Primary rust hacks product UI for ESP and aimbot',
		},
		{
			src: '/images/rust-hacks-cover.webp',
			title: 'Rust Hacks cover',
			caption: 'Package cover for rust hacks pricing pages',
		},
		{
			src: '/images/rust-esp-overlay.webp',
			title: 'Rust ESP overlay',
			caption: 'ESP overlay UI for rust hacks',
		},
		{
			src: '/images/rust-aimbot-ui.webp',
			title: 'Rust Aimbot UI',
			caption: 'Aimbot controls UI for rust hacks',
		},
		{
			src: '/images/rust-wallhack-ui.webp',
			title: 'Rust wallhack UI',
			caption: 'Wallhack-style ESP boxes for rust hacks',
		},
		{
			src: '/images/rust-cheats-menu.webp',
			title: 'Rust cheats menu',
			caption: 'In-client rust cheats menu',
		},
		{
			src: '/images/rust-hacks-status.webp',
			title: 'Rust hacks status',
			caption: 'Maintenance status panel for rust hacks',
		},
		{
			src: '/images/rust-radar-ui.webp',
			title: 'Rust radar UI',
			caption: '2D radar UI for rust hacks',
		},
		{
			src: '/images/rust-soft-aim-ui.webp',
			title: 'Rust soft aim UI',
			caption: 'Soft aim curve UI for rust hacks',
		},
		{
			src: '/images/rust-hacks-panel.webp',
			title: 'Rust hacks panel',
			caption: 'Feature panel UI for rust hacks',
		},
		{
			src: '/images/rust-cheats-dashboard.webp',
			title: 'Rust cheats dashboard',
			caption: 'License dashboard for rust cheats',
		},
	],
} as const;
