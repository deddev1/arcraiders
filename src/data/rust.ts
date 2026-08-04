import { siteConfig } from './site';

/**
 * Distinct stills (unique bytes) — The Isle Steam screenshots mapped onto
 * existing SEO filenames so hero/gallery/OG paths stay stable.
 */

/** Trimmed hero loop — first ~6s of the background clip. */
export const rustHeroVideo = {
	src: '/videos/rust-hacks-hero-6s.mp4',
	poster: '/images/rust-hacks-hero.webp',
	title: 'IsleCheat hero background',
	ariaLabel: 'IsleCheat gameplay background — short loop',
} as const;

/** Full gameplay clip for product preview + gallery. */
export const rustVideo = {
	src: '/videos/rust-hacks-background.mp4',
	/** Distinct still — not the hero poster, so preview doesn't reuse the hero frame nearby. */
	poster: '/images/rust-esp-hitbox.webp',
	title: 'IsleCheat background video',
	ariaLabel: 'IsleCheat gameplay preview — ESP and aimbot on PC',
	caption: 'IsleCheat gameplay video with ESP and aimbot',
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
			alt: 'The Isle gameplay — dense jungle and dinosaur hunt view',
		},
		{
			src: '/images/rust-esp-bots.webp',
			alt: 'The Isle open-world survival landscape with dinosaurs',
		},
		{
			src: '/images/rust-esp-hitbox.webp',
			alt: 'The Isle predator encounter in prehistoric terrain',
		},
		{
			src: '/images/rust-aimbot-menu.webp',
			alt: 'The Isle dinosaur pack roaming the island',
		},
		{
			src: '/images/rust-hacks-hero.webp',
			alt: 'The Isle cinematic island survival scene',
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
			alt: 'The Isle dinosaur pack roaming the island',
		},
		{
			src: '/images/rust-esp-overlay.webp',
			alt: 'The Isle gameplay — dense jungle and dinosaur hunt view',
		},
		{
			src: '/images/rust-esp-bots.webp',
			alt: 'The Isle open-world survival landscape with dinosaurs',
		},
		{
			src: '/images/rust-esp-hitbox.webp',
			alt: 'The Isle predator encounter in prehistoric terrain',
		},
		{
			src: '/images/rust-hacks-hero.webp',
			alt: 'The Isle cinematic island survival scene',
		},
		{
			src: '/images/rust-recoil-trainer.webp',
			alt: 'The Isle shoreline and wilderness atmosphere',
		},
	],
	sitemap: [
		{
			src: '/images/rust-hacks-hero.webp',
			title: 'IsleCheat | ESP & Aimbot',
			caption: 'The Isle cinematic island survival scene',
		},
		{
			src: '/images/rust-esp-overlay.webp',
			title: 'Isle ESP overlay',
			caption: 'The Isle gameplay — dense jungle and dinosaur hunt view',
		},
		{
			src: '/images/rust-esp-bots.webp',
			title: 'Isle survival landscape',
			caption: 'The Isle open-world survival landscape with dinosaurs',
		},
		{
			src: '/images/rust-esp-hitbox.webp',
			title: 'Isle predator view',
			caption: 'The Isle predator encounter in prehistoric terrain',
		},
		{
			src: '/images/rust-aimbot-menu.webp',
			title: 'Isle pack roam',
			caption: 'The Isle dinosaur pack roaming the island',
		},
		{
			src: '/images/rust-recoil-trainer.webp',
			title: 'Isle wilderness',
			caption: 'The Isle shoreline and wilderness atmosphere',
		},
	],
} as const;
