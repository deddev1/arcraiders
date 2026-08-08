import { siteConfig } from './site';

/** Hero background clip — separate URL from poster still. */
export const rustHeroVideo = {
	src: '/videos/arc-raiders-hero-6s.mp4',
	poster: '/images/arc-raiders-hero.webp',
	title: 'Arc Raiders hacks hero preview',
	ariaLabel: 'Arc Raiders hacks gameplay preview — ESP and aimbot on PC',
} as const;

export const rustVideo = {
	src: '/videos/arc-raiders-background.mp4',
	poster: '/images/arc-raiders-combat.webp',
	title: 'Arc Raiders hacks combat preview',
	ariaLabel: 'Arc Raiders hacks preview — squad extraction push',
	caption: 'Arc Raiders hacks gameplay with ESP and aimbot overlays',
} as const;

/** Each key maps to a unique `/images/arc-raiders-*` URL. */
const arcHero = '/images/arc-raiders-hero.webp';
const arcEsp = '/images/arc-raiders-esp-overlay.webp';
const arcWallhack = '/images/arc-raiders-wallhack.webp';
const arcAimbot = '/images/arc-raiders-aimbot.webp';
const arcMenu = '/images/arc-raiders-menu.webp';
const arcCombat = '/images/arc-raiders-combat.webp';
const arcAimbotUi = '/images/arc-raiders-aimbot-ui.webp';
const arcWallhackUi = '/images/arc-raiders-wallhack-ui.webp';
const arcSoftAimUi = '/images/arc-raiders-soft-aim-ui.webp';
const arcRadarUi = '/images/arc-raiders-radar-ui.webp';
const arcCheatsMenu = '/images/arc-raiders-cheats-menu.webp';
const arcCover = '/images/arc-raiders-cover.webp';
const arcPanel = '/images/arc-raiders-panel.webp';
const arcStatus = '/images/arc-raiders-status.webp';

export const rustImages = {
	hero: arcHero,
	cover: arcCover,
	logo: siteConfig.logo,
	loadoutBuilder: arcMenu,
	aimbotCombat: arcAimbot,
	squadFight: arcWallhack,
	espWallhack: arcWallhackUi,
	cheatsPackage: arcCheatsMenu,
	headerArt: arcPanel,
	battleRoyaleCombat: arcCombat,
	rebootFight: arcSoftAimUi,
	playerEsp: arcEsp,
	zeroBuildCombat: arcStatus,
	zeroBuildMode: arcRadarUi,
	battleRoyaleIsland: arcAimbotUi,
	/** Product thumbs — five unique stills; main media is the hero still. */
	product: [
		{ src: arcEsp, alt: 'Arc Raiders ESP overlay showing enemy ARC units and raiders' },
		{ src: arcWallhack, alt: 'Arc Raiders wallhack view through industrial ruins' },
		{ src: arcAimbot, alt: 'Arc Raiders aimbot targeting ARC machines in combat' },
		{ src: arcMenu, alt: 'Arc Raiders cheat menu with ESP and aimbot toggles' },
		{ src: arcCombat, alt: 'Arc Raiders hacks squad push through collapsed city zone' },
	],
	/** Gallery grid — six unique Arc Raiders stills, no duplicates. */
	gallery: [
		{ src: arcHero, alt: 'Arc Raiders hacks gameplay — extraction combat overview' },
		{ src: arcEsp, alt: 'Arc Raiders ESP overlay showing enemy ARC units and raiders' },
		{ src: arcWallhack, alt: 'Arc Raiders wallhack view through industrial ruins' },
		{ src: arcAimbot, alt: 'Arc Raiders aimbot targeting ARC machines in combat' },
		{ src: arcMenu, alt: 'Arc Raiders cheat menu with ESP and aimbot toggles' },
		{ src: arcCombat, alt: 'Arc Raiders hacks squad push through collapsed city zone' },
	],
	/** Dedicated image sitemap — one entry per unique asset URL. */
	sitemap: [
		{ src: arcHero, title: 'Arc Raiders Hacks hero', caption: 'Arc Raiders Hacks extraction combat overview' },
		{ src: arcEsp, title: 'Arc Raiders ESP overlay', caption: 'Arc Raiders ESP showing ARC units and raiders' },
		{ src: arcWallhack, title: 'Arc Raiders wallhack', caption: 'Arc Raiders wallhack through industrial ruins' },
		{ src: arcAimbot, title: 'Arc Raiders aimbot', caption: 'Arc Raiders aimbot on ARC machines' },
		{ src: arcMenu, title: 'Arc Raiders cheat menu', caption: 'Arc Raiders hacks menu with ESP toggles' },
		{ src: arcCombat, title: 'Arc Raiders squad push', caption: 'Arc Raiders hacks squad extraction push' },
		{ src: arcAimbotUi, title: 'Arc Raiders aimbot UI', caption: 'Arc Raiders aimbot settings interface' },
		{ src: arcWallhackUi, title: 'Arc Raiders wallhack UI', caption: 'Arc Raiders wallhack overlay controls' },
		{ src: arcSoftAimUi, title: 'Arc Raiders soft aim UI', caption: 'Arc Raiders soft aim configuration panel' },
		{ src: arcRadarUi, title: 'Arc Raiders radar UI', caption: 'Arc Raiders radar hack overlay' },
		{ src: arcCheatsMenu, title: 'Arc Raiders cheats menu', caption: 'Arc Raiders cheats dashboard menu' },
		{ src: arcCover, title: 'Arc Raiders hacks cover', caption: 'Arc Raiders Hacks product cover art' },
		{ src: arcPanel, title: 'Arc Raiders hacks panel', caption: 'Arc Raiders Hacks control panel' },
		{ src: arcStatus, title: 'Arc Raiders hacks status', caption: 'Arc Raiders Hacks online status screen' },
		{ src: siteConfig.logo, title: 'Arc Raiders Hacks logo', caption: siteConfig.logoAlt },
	],
} as const;
