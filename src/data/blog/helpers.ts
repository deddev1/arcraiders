import { siteConfig } from '../site';
import { fortniteImages } from '../fortnite';
import {
	defaultLocale,
	localeCodes,
	type LocaleCode,
	locales,
} from '../i18n/locales';
import type { BlogImageKey, BlogPostDefinition, ResolvedBlogPost } from './types';
import { blogPosts } from './posts.generated';

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
	return blogPosts.map((post) => resolvePost(post, locale));
}

export function getPostBySlug(locale: LocaleCode, slug: string): ResolvedBlogPost | undefined {
	const post = blogPosts.find((p) => p.translations[locale]?.slug === slug);
	return post ? resolvePost(post, locale) : undefined;
}

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

export function getBlogSitemapEntries() {
	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		images: { url: string; title: string; caption: string }[];
	}[] = [];

	for (const locale of localeCodes) {
		entries.push({
			path: getBlogBasePath(locale),
			lastmod: '2026-07-31',
			priority: locale === defaultLocale ? 0.92 : 0.88,
			images: [],
		});

		for (const post of blogPosts) {
			const t = post.translations[locale];
			const imageSrc = getBlogImageSrc(post.imageKey);
			entries.push({
				path: getBlogPostPath(locale, t.slug),
				lastmod: post.updated,
				priority: locale === defaultLocale ? 0.9 : 0.85,
				images: [
					{
						url: new URL(imageSrc, siteConfig.url).href,
						title: t.title,
						caption: t.imageAlt,
					},
				],
			});
		}
	}

	return entries;
}

export { blogPosts };
