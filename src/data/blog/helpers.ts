import { siteConfig } from '../site';
import { fortniteImages } from '../fortnite';
import {
	defaultLocale,
	localeCodes,
	type LocaleCode,
	locales,
} from '../i18n/locales';
import type { BlogImageKey, BlogPostDefinition, BlogTranslation, ResolvedBlogPost } from './types';
import { blogPosts as rawBlogPosts } from './posts.generated';

const imageMap: Record<BlogImageKey, string> = {
	hero: fortniteImages.hero,
	espWallhack: fortniteImages.espWallhack,
	aimbotCombat: fortniteImages.aimbotCombat,
	squadFight: fortniteImages.squadFight,
	headerArt: fortniteImages.headerArt,
	cheatsPackage: fortniteImages.cheatsPackage,
	playerEsp: fortniteImages.playerEsp,
	rebootFight: fortniteImages.rebootFight,
	battleRoyaleCombat: fortniteImages.battleRoyaleCombat,
	battleRoyaleIslandMap: fortniteImages.battleRoyaleIsland,
};

function expandTranslations(
	translations: Partial<Record<LocaleCode, BlogTranslation>> & { en: BlogTranslation },
): Record<LocaleCode, BlogTranslation> {
	const en = translations.en;
	const full = {} as Record<LocaleCode, BlogTranslation>;
	for (const code of localeCodes) {
		full[code] = translations[code] ?? { ...en };
	}
	return full;
}

export const blogPosts: BlogPostDefinition[] = rawBlogPosts.map((post) => ({
	...post,
	translations: expandTranslations(post.translations as Partial<Record<LocaleCode, BlogTranslation>> & { en: BlogTranslation }),
}));

export function getBlogImageSrc(key: BlogImageKey): string {
	return imageMap[key];
}

export function getBlogBasePath(locale: LocaleCode): string {
	return locale === defaultLocale ? '/blog/' : `/${locale}/blog/`;
}

export function getBlogPostPath(locale: LocaleCode, slug: string): string {
	const base = getBlogBasePath(locale);
	return `${base}${slug}/`;
}

export function absoluteBlogUrl(locale: LocaleCode, slug?: string): string {
	const path = slug ? getBlogPostPath(locale, slug) : getBlogBasePath(locale);
	return new URL(path, siteConfig.url).href;
}

export function resolvePost(post: BlogPostDefinition, locale: LocaleCode): ResolvedBlogPost {
	const translation = post.translations[locale];
	return {
		...post,
		locale,
		translation,
		imageSrc: getBlogImageSrc(post.imageKey),
		canonicalPath: getBlogPostPath(locale, translation.slug),
	};
}

export function getAllPostsForLocale(locale: LocaleCode): ResolvedBlogPost[] {
	return blogPosts
		.map((post) => resolvePost(post, locale))
		.sort((a, b) => (a.published < b.published ? 1 : -1));
}

export function getFeaturedPosts(locale: LocaleCode, limit = 3): ResolvedBlogPost[] {
	const all = getAllPostsForLocale(locale);
	const featured = all.filter((p) => p.featured);
	return (featured.length >= limit ? featured : all).slice(0, limit);
}

export function getPostBySlug(locale: LocaleCode, slug: string): ResolvedBlogPost | undefined {
	const post = blogPosts.find((p) => p.translations[locale]?.slug === slug);
	return post ? resolvePost(post, locale) : undefined;
}

/**
 * ⚠️ QUARANTINED — DO NOT USE YET.
 * Builds hreflang alternates pointing at localized blog URLs (`/{lang}/blog/…`)
 * that DO NOT EXIST as routes: only English blog pages are built today.
 * Wiring this into pages would emit hreflang links to 404s (GSC indexing errors).
 * Keep unused until localized blog routes actually ship.
 */
export function getHreflangAlternates(post: BlogPostDefinition) {
	return [
		...localeCodes.map((code) => ({
			hreflang: locales.find((l) => l.code === code)!.hreflang,
			href: absoluteBlogUrl(code, post.translations[code].slug),
		})),
		{
			hreflang: 'x-default',
			href: absoluteBlogUrl(defaultLocale, post.translations[defaultLocale].slug),
		},
	];
}

/**
 * ⚠️ QUARANTINED — DO NOT USE YET.
 * Generates static paths for localized blog routes (`/{lang}/blog/{slug}/`)
 * that are not implemented — no `src/pages/[lang]/blog/` route exists.
 * Do not wire into getStaticPaths (or sitemaps) until localized blog routes exist,
 * otherwise sitemaps/links would reference pages that are never built.
 */
export function getAllBlogStaticPaths(): { params: { lang?: string; slug: string }; props: { locale: LocaleCode } }[] {
	const paths: { params: { lang?: string; slug: string }; props: { locale: LocaleCode } }[] = [];
	for (const post of blogPosts) {
		for (const locale of localeCodes) {
			const slug = post.translations[locale].slug;
			if (locale === defaultLocale) {
				paths.push({ params: { slug }, props: { locale } });
			} else {
				paths.push({ params: { lang: locale, slug }, props: { locale } });
			}
		}
	}
	return paths;
}

/** English blog routes only (locale blog pages ship later). */
export function getBlogSitemapEntries() {
	const locale = defaultLocale;

	// The blog index reflects its newest post, so its lastmod is the max of all
	// post `updated` dates — never older than any post it links to.
	const indexLastmod = blogPosts.reduce(
		(max, post) => (post.updated > max ? post.updated : max),
		blogPosts[0]?.updated ?? new Date().toISOString().slice(0, 10),
	);

	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		changefreq: 'daily' | 'weekly' | 'monthly';
		images: { url: string; title: string; caption: string }[];
	}[] = [
		{
			path: getBlogBasePath(locale),
			lastmod: indexLastmod,
			priority: 0.92,
			changefreq: 'daily',
			images: [
				{
					url: new URL(siteConfig.defaultOgImage, siteConfig.url).href,
					title: 'Fortnite Hacks Intel blog',
					caption: 'Fortnite Intel blog covering meta guides, ESP, Aimbot, and EAC notes',
				},
			],
		},
	];

	for (const post of blogPosts) {
		const t = post.translations[locale];
		const imageSrc = getBlogImageSrc(post.imageKey);
		entries.push({
			path: getBlogPostPath(locale, t.slug),
			lastmod: post.updated,
			priority: 0.9,
			changefreq: 'weekly',
			images: [
				{
					url: new URL(imageSrc, siteConfig.url).href,
					title: t.title,
					caption: t.imageAlt,
				},
			],
		});
	}

	return entries;
}
