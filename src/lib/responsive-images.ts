export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/fortnite-cheats-hero-640w.webp', width: 640 },
	{ src: '/images/fortnite-cheats-hero-960w.webp', width: 960 },
	{ src: '/images/fortnite-cheats-hero-1400w.webp', width: 1400 },
];

export const heroSrc = '/images/fortnite-cheats-hero.webp';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '100vw';

/** Smallest variant for `<link rel="preload">` on mobile-first LCP. */
export const heroPreloadSrc = heroResponsive[0].src;
