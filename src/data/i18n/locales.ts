export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/**
 * UI locales (language switcher / `/{lang}/…` routes).
 * SEO policy: English is the only official indexable language. Non-English
 * locales are convenience UI translations — not equal hreflang/sitemap peers.
 * @see `seoIndexableLocales`, `includeLocaleUrlsInSitemap`
 */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Spain & Latin America' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'France & Africa' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Germany & DACH' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Brazil & Portugal' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Italy' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Netherlands & Belgium' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Poland' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Russia & CIS' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Turkey' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Middle East & North Africa' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Japan' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'South Korea' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'China & Singapore' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'India' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Indonesia' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Thailand' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Vietnam' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Ukraine' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Czech Republic' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Romania' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Sweden & Nordics' },
];

/** Official / canonical locale — English global pages at site root. */
export const defaultLocale: LocaleCode = 'en';

/**
 * Locales that participate in hreflang + primary sitemaps as SEO peers.
 * Thin/template translations stay off this list so they do not compete with English.
 */
export const seoIndexableLocales: readonly LocaleCode[] = ['en'] as const;

/** When false, non-English locale URLs are omitted from sitemaps (UX routes remain). */
export const includeLocaleUrlsInSitemap = false;

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Arc Raiders Hacks Blog 2026 | Meta Guides & Tips',
		blogDescription:
			'Arc Raiders Hacks blog: ranked meta, loot routes, and pro tips for PC and controllers. Pair guides with our ESP, soft aim, and cloud DMA product pages.',
		blogH1: 'Arc Raiders Hacks Intel',
		blogIntro:
			'Actionable Rust guides for survival and monuments — meta breakdowns, loot routes, weapon tiers, and pro warmup routines. Pair these tips with our Arc Raiders Hacks pages for ESP boxes, soft aim, and cloud DMA when you need in-match tools.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related Rust guides',
		allPosts: 'All blog posts',
		home: 'Arc Raiders Hacks home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Arc Raiders Hacks 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Arc Raiders Hacks con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Arc Raiders en PC Windows.',
		blogH1: 'Blog Arc Raiders Hacks — Guías globales',
		blogIntro:
			'Guías SEO de trucos Arc Raiders indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Easy Anti-Cheat (EAC) en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Rust relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Arc Raiders Hacks',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Arc Raiders Hacks 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Arc Raiders Hacks : triches indétectables, ESP wallhack, radar et Aimbot pour Arc Raiders sur PC Windows.',
		blogH1: 'Blog Arc Raiders Hacks — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Arc Raiders indétectables, ESP wallhack, radar hack, Aimbot et Easy Anti-Cheat (EAC) en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Rust associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Arc Raiders Hacks',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Arc Raiders Hacks Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Arc Raiders Hacks Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Arc Raiders auf Windows PC.',
		blogH1: 'Arc Raiders Hacks Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Arc Raiders Hacks, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat (EAC) in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Rust Guides',
		allPosts: 'Alle Beiträge',
		home: 'Arc Raiders Hacks Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Arc Raiders Hacks 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Arc Raiders Hacks com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Arc Raiders no PC.',
		blogH1: 'Blog Arc Raiders Hacks — Guias globais',
		blogIntro:
			'Guias SEO de cheats Arc Raiders indetectáveis, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat (EAC) em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Rust relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Arc Raiders Hacks',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Arc Raiders Hacks 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Arc Raiders Hacks con guide cheat indetectable, ESP wallhack, radar e Aimbot per Arc Raiders su PC Windows.',
		blogH1: 'Blog Arc Raiders Hacks — Guide globali',
		blogIntro:
			'Guide SEO cheat Rust indetectable, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat (EAC) in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Rust correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Arc Raiders Hacks',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Arc Raiders Hacks Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Arc Raiders Hacks blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Rust op Windows PC.',
		blogH1: 'Arc Raiders Hacks Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Rust cheats, ESP wallhack, radar hack, Aimbot en Easy Anti-Cheat (EAC) in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Rust gidsen',
		allPosts: 'Alle posts',
		home: 'Arc Raiders Hacks home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Arc Raiders Hacks 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Arc Raiders Hacks z poradnikami undetected ESP, wallhack, radar i Aimbot dla Rust na PC.',
		blogH1: 'Blog Arc Raiders Hacks — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Rust, ESP wallhack, radar hack, Aimbot i Easy Anti-Cheat (EAC) w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Rust',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Arc Raiders Hacks',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Arc Raiders Hacks 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Arc Raiders Hacks: undetected ESP, wallhack, radar и Aimbot для Rust на Windows PC.',
		blogH1: 'Блог Arc Raiders Hacks — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Rust, ESP wallhack, radar hack, Aimbot и Easy Anti-Cheat (EAC) на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Rust',
		allPosts: 'Все статьи',
		home: 'Главная Arc Raiders Hacks',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Arc Raiders Hacks Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Arc Raiders Hacks blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Rust Windows PC.',
		blogH1: 'Arc Raiders Hacks Blog — Küresel rehberler',
		blogIntro:
			'Undetected Rust hileleri, ESP wallhack, radar hack, Aimbot ve Easy Anti-Cheat (EAC) SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Rust rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Arc Raiders Hacks ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Arc Raiders Hacks 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Arc Raiders Hacks: غش undetected وESP wallhack ورadar وAimbot لـ Rust على Windows PC.',
		blogH1: 'مدونة Arc Raiders Hacks — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Rust undetected وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat (EAC) بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Rust ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Arc Raiders Hacks',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Arc Raiders Hacks ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Arc Raiders Hacksブログ：undetected ESP、wallhack、radar、Aimbotガイド。Rust Windows PC向け。',
		blogH1: 'Arc Raiders Hacks ブログ — グローバルガイド',
		blogIntro:
			'undetected Rustチート、ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat (EAC)のSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Rustガイド',
		allPosts: 'すべての記事',
		home: 'Arc Raiders Hacks ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Arc Raiders Hacks 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Arc Raiders Hacks 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Rust Windows PC.',
		blogH1: 'Arc Raiders Hacks 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Rust 치트, ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat (EAC) SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Rust 가이드',
		allPosts: '모든 게시물',
		home: 'Arc Raiders Hacks 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Arc Raiders Hacks 博客 2026 | 22种语言指南',
		blogDescription:
			'Arc Raiders Hacks博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Rust Windows PC。',
		blogH1: 'Arc Raiders Hacks 博客 — 全球指南',
		blogIntro:
			'undetected Rust作弊、ESP wallhack、radar hack、Aimbot和Easy Anti-Cheat (EAC)的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Rust指南',
		allPosts: '所有文章',
		home: 'Arc Raiders Hacks 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Arc Raiders Hacks ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Arc Raiders Hacks ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Rust Windows PC के लिए।',
		blogH1: 'Arc Raiders Hacks ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Rust cheats, ESP wallhack, radar hack, Aimbot और Easy Anti-Cheat (EAC) SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Rust गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Arc Raiders Hacks होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Arc Raiders Hacks 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Arc Raiders Hacks: panduan undetected ESP, wallhack, radar dan Aimbot untuk Rust di PC Windows.',
		blogH1: 'Blog Arc Raiders Hacks — Panduan global',
		blogIntro:
			'Panduan SEO cheat Rust undetected, ESP wallhack, radar hack, Aimbot dan Easy Anti-Cheat (EAC) dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Rust terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Arc Raiders Hacks',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Arc Raiders Hacks 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Arc Raiders Hacks: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Rust บน PC',
		blogH1: 'บล็อก Arc Raiders Hacks — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Rust undetected, ESP wallhack, radar hack, Aimbot และ Easy Anti-Cheat (EAC) 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Rust ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Arc Raiders Hacks',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Arc Raiders Hacks 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Arc Raiders Hacks: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Rust trên PC.',
		blogH1: 'Blog Arc Raiders Hacks — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Rust undetected, ESP wallhack, radar hack, Aimbot và Easy Anti-Cheat (EAC) bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Rust liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Arc Raiders Hacks',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Arc Raiders Hacks 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Arc Raiders Hacks: undetected ESP, wallhack, radar та Aimbot для Rust на Windows PC.',
		blogH1: 'Блог Arc Raiders Hacks — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Rust, ESP wallhack, radar hack, Aimbot та Easy Anti-Cheat (EAC) 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Rust",
		allPosts: 'Усі статті',
		home: 'Головна Arc Raiders Hacks',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Arc Raiders Hacks 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Arc Raiders Hacks: undetected ESP, wallhack, radar a Aimbot pro Rust na Windows PC.',
		blogH1: 'Blog Arc Raiders Hacks — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Rust cheaty, ESP wallhack, radar hack, Aimbot a Easy Anti-Cheat (EAC) ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Rust průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Arc Raiders Hacks',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Arc Raiders Hacks 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Arc Raiders Hacks: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Rust pe PC.',
		blogH1: 'Blog Arc Raiders Hacks — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Rust undetected, ESP wallhack, radar hack, Aimbot și Easy Anti-Cheat (EAC) în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Rust related',
		allPosts: 'Toate articolele',
		home: 'Acasă Arc Raiders Hacks',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Arc Raiders Hacks Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Arc Raiders Hacks blogg med undetected ESP, wallhack, radar och Aimbot guider för Rust på PC.',
		blogH1: 'Arc Raiders Hacks Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Rust cheats, ESP wallhack, radar hack, Aimbot och Easy Anti-Cheat (EAC) på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Rust guider',
		allPosts: 'Alla inlägg',
		home: 'Arc Raiders Hacks hem',
		language: 'Språk',
	},
};
