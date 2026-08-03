import { siteConfig } from './site';

/**
 * Distinct real screenshots (unique bytes):
 * rust-hacks-hero, rust-esp-overlay, rust-esp-bots, rust-esp-hitbox, rust-aimbot-menu,
 * rust-recoil-trainer.
 * Alias paths that share bytes with these (cover/dashboard/aimbot-ui) are avoided.
 */

/** Trimmed hero loop — first ~6s of the background clip. */
export const rustHeroVideo = {
	src: '/videos/rust-hacks-hero-6s.mp4',
	poster: '/images/rust-hacks-hero.webp',
	title: 'Rust hacks hero background',
	ariaLabel: 'Rust hacks gameplay background — short loop',
} as const;

/** Full gameplay clip for product preview + gallery. */
export const rustVideo = {
	src: '/videos/rust-hacks-background.mp4',
	/** Hitbox still — not the hero poster, so preview doesn't reuse the hero frame nearby. */
	poster: '/images/rust-esp-hitbox.webp',
	title: 'Rust hacks background video',
	ariaLabel: 'Rust hacks gameplay preview — ESP and aimbot on PC',
	caption: 'Rust hacks gameplay video with ESP and aimbot',
} as const;

export const rustImages = {
	hero: '/images/rust-hacks-hero.webp',
	cover: '/images/rust-esp-overlay.webp',
	logo: siteConfig.logo,
	loadoutBuilder: '/images/rust-aimbot-menu.webp',
	aimbotCombat: '/images/rust-aimbot-menu.webp',
	squadFight: '/images/rust-esp-bots.webp',
	espWallhack: '/images/rust-esp-hitbox.webp',
	cheatsPackage: '/images/rust-esp-overlay.webp',
	headerArt: '/images/rust-esp-hitbox.webp',
	battleRoyaleCombat: '/images/rust-esp-hitbox.webp',
	rebootFight: '/images/rust-esp-bots.webp',
	playerEsp: '/images/rust-esp-overlay.webp',
	zeroBuildCombat: '/images/rust-hacks-hero.webp',
	zeroBuildMode: '/images/rust-esp-bots.webp',
	battleRoyaleIsland: '/images/rust-aimbot-menu.webp',
	/** Product thumbs — five unique stills; main media is video (see ProductCard). */
	product: [
		{
			src: '/images/rust-esp-overlay.webp',
			alt: 'Rust ESP with green skeleton, bounding box, and loot inventory labels',
		},
		{
			src: '/images/rust-esp-bots.webp',
			alt: 'Rust ESP boxes and distance labels on UKN practice bots',
		},
		{
			src: '/images/rust-esp-hitbox.webp',
			alt: 'Rust wallhack ESP green hitbox around a hazmat-suited player',
		},
		{
			src: '/images/rust-aimbot-menu.webp',
			alt: 'Rust aimbot menu overlay with red skeleton ESP and feature toggles',
		},
		{
			src: '/images/rust-hacks-hero.webp',
			alt: 'Rust aimbot holographic sight with ESP skeleton and red head lock',
		},
	],
	/**
	 * Gallery stills (grid only) — featured slot above is video; a large still
	 * under the grid fills leftover media-column height (see Gallery.astro).
	 * Six uniques (even grid rows); order differs from product thumbs.
	 */
	gallery: [
		{
			src: '/images/rust-aimbot-menu.webp',
			alt: 'Rust aimbot cheats menu with red skeleton ESP lock',
		},
		{
			src: '/images/rust-esp-overlay.webp',
			alt: 'Rust ESP overlay with skeleton ESP and inventory labels',
		},
		{
			src: '/images/rust-esp-bots.webp',
			alt: 'Rust ESP boxes, weapon labels, and distances on UKN practice bots',
		},
		{
			src: '/images/rust-esp-hitbox.webp',
			alt: 'Rust ESP green hitbox wallhack on a hazmat suit player',
		},
		{
			src: '/images/rust-hacks-hero.webp',
			alt: 'Rust hacks aimbot view with ESP skeleton and red head lock',
		},
		{
			src: '/images/rust-recoil-trainer.webp',
			alt: 'Rust recoil trainer assault rifle holographic sight practice',
		},
	],
	sitemap: [
		{
			src: '/images/rust-hacks-hero.webp',
			title: 'Rust Hacks | ESP & Aimbot',
			caption: 'Rust hacks aimbot sight with ESP skeleton and head lock',
		},
		{
			src: '/images/rust-esp-overlay.webp',
			title: 'Rust ESP overlay',
			caption: 'Rust ESP hack with skeletons, loot labels, and distances',
		},
		{
			src: '/images/rust-esp-bots.webp',
			title: 'Rust ESP practice bots',
			caption: 'Rust ESP boxes and distance markers on UKN practice bots',
		},
		{
			src: '/images/rust-esp-hitbox.webp',
			title: 'Rust ESP hitbox',
			caption: 'Rust wallhack green hitbox ESP on a hazmat player',
		},
		{
			src: '/images/rust-aimbot-menu.webp',
			title: 'Rust Aimbot menu',
			caption: 'Rust aimbot menu with red skeleton ESP and silent aim toggles',
		},
	],
} as const;
