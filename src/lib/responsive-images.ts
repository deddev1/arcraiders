export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

/** Build srcset for content images that have -480w / -960w variants. */
export function contentSrcSet(baseSrc: string): string | undefined {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	if (name.endsWith('-640w') || name.endsWith('-960w') || name.endsWith('-1400w')) {
		return undefined;
	}

	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
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

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
