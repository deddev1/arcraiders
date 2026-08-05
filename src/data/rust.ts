import { siteConfig } from './site';

/** Six unique Arc Raiders screenshots — each used once per on-page gallery/product grid. */

export const rustHeroVideo = {
	src: '/images/rust-hacks-hero.webp',
	poster: '/images/rust-hacks-hero.webp',
	title: 'Arc Raiders hacks hero preview',
	ariaLabel: 'Arc Raiders hacks gameplay preview — ESP and aimbot on PC',
} as const;

export const rustVideo = {
	src: '/images/rust-recoil-trainer.webp',
	poster: '/images/rust-recoil-trainer.webp',
	title: 'Arc Raiders hacks combat preview',
	ariaLabel: 'Arc Raiders hacks preview — squad extraction push',
	caption: 'Arc Raiders hacks gameplay with ESP and aimbot overlays',
} as const;

const arc1 = '/images/rust-hacks-hero.webp';
const arc2 = '/images/rust-esp-overlay.webp';
const arc3 = '/images/rust-esp-bots.webp';
const arc4 = '/images/rust-esp-hitbox.webp';
const arc5 = '/images/rust-aimbot-menu.webp';
const arc6 = '/images/rust-recoil-trainer.webp';

export const rustImages = {
	hero: arc1,
	cover: arc2,
	logo: siteConfig.logo,
	loadoutBuilder: arc5,
	aimbotCombat: arc4,
	squadFight: arc3,
	espWallhack: arc4,
	cheatsPackage: arc2,
	headerArt: arc4,
	battleRoyaleCombat: arc6,
	rebootFight: arc3,
	playerEsp: arc2,
	zeroBuildCombat: arc1,
	zeroBuildMode: arc3,
	battleRoyaleIsland: arc5,
	/** Product thumbs — five unique stills; main media is the hero still. */
	product: [
		{ src: arc2, alt: 'Arc Raiders ESP overlay showing enemy ARC units and raiders' },
		{ src: arc3, alt: 'Arc Raiders wallhack view through industrial ruins' },
		{ src: arc4, alt: 'Arc Raiders aimbot targeting ARC machines in combat' },
		{ src: arc5, alt: 'Arc Raiders cheat menu with ESP and aimbot toggles' },
		{ src: arc6, alt: 'Arc Raiders hacks squad push through collapsed city zone' },
	],
	/** Gallery grid — six unique Arc Raiders stills, no duplicates. */
	gallery: [
		{ src: arc1, alt: 'Arc Raiders hacks gameplay — extraction combat overview' },
		{ src: arc2, alt: 'Arc Raiders ESP overlay showing enemy ARC units and raiders' },
		{ src: arc3, alt: 'Arc Raiders wallhack view through industrial ruins' },
		{ src: arc4, alt: 'Arc Raiders aimbot targeting ARC machines in combat' },
		{ src: arc5, alt: 'Arc Raiders cheat menu with ESP and aimbot toggles' },
		{ src: arc6, alt: 'Arc Raiders hacks squad push through collapsed city zone' },
	],
	sitemap: [
		{ src: arc1, title: 'Arc Raiders Hacks | ESP & Aimbot', caption: 'Arc Raiders hacks extraction combat overview' },
		{ src: arc2, title: 'Arc Raiders ESP overlay', caption: 'Arc Raiders ESP showing ARC units and raiders' },
		{ src: arc3, title: 'Arc Raiders wallhack', caption: 'Arc Raiders wallhack through industrial ruins' },
		{ src: arc4, title: 'Arc Raiders aimbot', caption: 'Arc Raiders aimbot on ARC machines' },
		{ src: arc5, title: 'Arc Raiders cheat menu', caption: 'Arc Raiders hacks menu with ESP toggles' },
		{ src: arc6, title: 'Arc Raiders squad push', caption: 'Arc Raiders hacks squad extraction push' },
	],
} as const;
