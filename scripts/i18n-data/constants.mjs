/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'fortnite-esp', 'fortnite-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/** Hero image per page topic — keyword-rich fortnite-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/fortnite-cheats-hero.webp',
	'fortnite-esp': '/images/fortnite-cheats-esp-wallhack.webp',
	'fortnite-aimbot': '/images/fortnite-cheats-aimbot-combat.webp',
	features: '/images/fortnite-cheats-package.webp',
	pricing: '/images/fortnite-cheats-cover.webp',
	setup: '/images/fortnite-loadout-builder.webp',
	updates: '/images/fortnite-header-art.webp',
	faq: '/images/fortnite-squad-fight.webp',
	support: '/images/fortnite-cheats-package.webp',
	undetected: '/images/fortnite-battle-royale-combat.webp',
	wallhack: '/images/fortnite-cheats-esp-wallhack.webp',
	radar: '/images/fortnite-operator-esp.webp',
	'eac-bypass': '/images/fortnite-gulag-fight.webp',
	'cheats-2026': '/images/fortnite-cheats-hero.webp',
	hacks: '/images/fortnite-battle-royale-combat.webp',
	'cheat-download': '/images/fortnite-cheats-package.webp',
	'mod-menu': '/images/fortnite-loadout-builder.webp',
	'soft-aim': '/images/fortnite-cheats-aimbot-combat.webp',
	'best-cheats': '/images/fortnite-cheats-hero.webp',
	'aimbot-hack': '/images/fortnite-cheats-aimbot-combat.webp',
	'esp-hack': '/images/fortnite-cheats-esp-wallhack.webp',
	'unlock-all': '/images/fortnite-operator-esp.webp',
	privacy: '/images/fortnite-cheats-aimbot-combat.webp',
	refund: '/images/fortnite-cheats-cover.webp',
	terms: '/images/fortnite-cheats-package.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
};
export type PageId = 'home' | 'fortnite-esp' | 'fortnite-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

export function section(h2, p1, p2, list) {
	const sec = { h2, paragraphs: [p1, p2] };
	if (list?.length) sec.list = list;
	return sec;
}
