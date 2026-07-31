import { HERO_IMAGES, clampTitle, clampDesc, section } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Fortnite Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Fortnite indetectables para Fortnite en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat (EAC). Entrega digital instantánea.', h1: 'Fortnite Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Fortnite en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat (EAC) tras cada parche.', imageAlt: 'Hero fortnite-cheats con ESP wallhack y Aimbot indetectables', gallery: 'Galería Fortnite Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Fortnite Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y Zero Build.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Fortnite Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Fortnite indétectables pour Fortnite sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat (EAC). Livraison numérique instantanée.', h1: 'Fortnite Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Fortnite sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat (EAC) après chaque patch.', imageAlt: 'Hero fortnite-cheats avec ESP wallhack et Aimbot indétectables', gallery: 'Galerie Fortnite Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Fortnite Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et Zero Build.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Fortnite Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Fortnite Cheats für Fortnite auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat (EAC)-Wartung. Sofortige digitale Lieferung.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Fortnite: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat (EAC)-Wartung nach jedem Patch.', imageAlt: 'Fortnite-cheats Hero mit ESP Wallhack und Aimbot undetected', gallery: 'Fortnite Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Fortnite Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und Zero Build zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Fortnite Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Fortnite indetectáveis para Fortnite no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat (EAC). Entrega digital instantánea.', h1: 'Fortnite Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Fortnite no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat (EAC) após cada patch.', imageAlt: 'Hero fortnite-cheats com ESP wallhack e Aimbot indetectáveis', gallery: 'Galeria Fortnite Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Fortnite Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e Zero Build.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Fortnite Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Fortnite indetectable per Fortnite su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat (EAC). Consegna digitale istantanea.', h1: 'Fortnite Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Fortnite su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat (EAC) dopo ogni patch.', imageAlt: 'Hero fortnite-cheats con ESP wallhack e Aimbot indetectable', gallery: 'Galleria Fortnite Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Fortnite Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e Zero Build.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Fortnite Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Fortnite cheats voor Fortnite op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat (EAC)-onderhoud. Directe digitale levering.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Fortnite: ESP wallhack, radar en Aimbot met Easy Anti-Cheat (EAC)-onderhoud na elke patch.', imageAlt: 'Fortnite-cheats hero met ESP wallhack en Aimbot undetected', gallery: 'Fortnite Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Fortnite Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en Zero Build.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Fortnite Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Fortnite dla Fortnite na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat (EAC). Natychmiastowa dostawa cyfrowa.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Fortnite na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat (EAC) po każdym patchu.', imageAlt: 'Hero fortnite-cheats z ESP wallhack i Aimbot undetected', gallery: 'Galeria Fortnite Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Fortnite Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i Zero Build.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Fortnite Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Fortnite для Fortnite на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat (EAC). Мгновенная цифровая доставка.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Fortnite на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat (EAC) после патчей.', imageAlt: 'Hero fortnite-cheats с ESP wallhack и Aimbot undetected', gallery: 'Галерея Fortnite Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Fortnite Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и Zero Build.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Fortnite Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Fortnite için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat (EAC) bakımı. Anında dijital teslimat.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Fortnite Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat (EAC) bakımı dahil.', imageAlt: 'Fortnite-cheats hero ESP wallhack ve Aimbot undetected', gallery: 'Fortnite Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Fortnite Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve Zero Build\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Fortnite Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Fortnite undetected لـ Fortnite على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat (EAC). تسليم رقمي فوري.', h1: 'Fortnite Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Fortnite على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat (EAC).', imageAlt: 'Hero fortnite-cheats مع ESP wallhack وAimbot undetected', gallery: 'معرض Fortnite Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Fortnite Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وZero Build.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Fortnite Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Fortnite向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat (EAC)メンテナンス。即時デジタル配信。', h1: 'Fortnite Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Fortnite Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheat (EAC)メンテナンス付き。', imageAlt: 'fortnite-cheats hero ESP wallhackとAimbot undetected', gallery: 'Fortnite Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にFortnite Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとZero Buildで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Fortnite Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Fortnite undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat (EAC) 유지보수. 즉시 디지털 배송.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Fortnite Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat (EAC) 유지보수 포함.', imageAlt: 'fortnite-cheats hero ESP wallhack 및 Aimbot undetected', gallery: 'Fortnite Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Fortnite Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 Zero Build에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Fortnite Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Fortnite undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat (EAC)维护。即时数字交付。', h1: 'Fortnite Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Fortnite Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat (EAC)维护。', imageAlt: 'fortnite-cheats hero ESP wallhack与Aimbot undetected', gallery: 'Fortnite Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Fortnite Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和Zero Build中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Fortnite Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Fortnite undetected cheats. ESP wallhack, radar hack, Aimbot, EAC maintenance. Instant digital delivery.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Fortnite Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, EAC maintenance सहित.', imageAlt: 'fortnite-cheats hero ESP wallhack और Aimbot undetected', gallery: 'Fortnite Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Fortnite Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और Zero Build में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Fortnite Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Fortnite undetected untuk Fortnite di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat (EAC). Pengiriman digital instan.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Fortnite di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat (EAC).', imageAlt: 'Hero fortnite-cheats ESP wallhack dan Aimbot undetected', gallery: 'Galeri Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Fortnite Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan Zero Build.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Fortnite Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Fortnite undetected สำหรับ Fortnite บน PC. ESP wallhack, radar hack, Aimbot, EAC maintenance. จัดส่งดิจิทัลทันที.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Fortnite บน Windows PC: ESP wallhack, radar, Aimbot พร้อม EAC maintenance', imageAlt: 'Hero fortnite-cheats ESP wallhack และ Aimbot undetected', gallery: 'แกลเลอรี Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Fortnite Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ Zero Build', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Fortnite Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Fortnite undetected cho Fortnite trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat (EAC). Giao hàng kỹ thuật số tức thì.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Fortnite trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat (EAC).', imageAlt: 'Hero fortnite-cheats ESP wallhack và Aimbot undetected', gallery: 'Thư viện Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Fortnite Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và Zero Build.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Fortnite Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Fortnite для Fortnite на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat (EAC). Мгновенная цифровая доставка.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Fortnite на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat (EAC).', imageAlt: 'Hero fortnite-cheats з ESP wallhack і Aimbot undetected', gallery: 'Галерея Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Fortnite Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і Zero Build.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Fortnite Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Fortnite cheaty pro Fortnite na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat (EAC). Okamžité digitální doručení.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Fortnite na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat (EAC).', imageAlt: 'Hero fortnite-cheats s ESP wallhack a Aimbot undetected', gallery: 'Galerie Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Fortnite Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a Zero Build.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Fortnite Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Fortnite undetected pentru Fortnite pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat (EAC). Livrare digitală instantă.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Fortnite pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat (EAC).', imageAlt: 'Hero fortnite-cheats cu ESP wallhack și Aimbot undetected', gallery: 'Galerie Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Fortnite Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și Zero Build.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Fortnite Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Fortnite cheats för Fortnite på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat (EAC)-underhåll. Omedelbar digital leverans.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Fortnite på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat (EAC)-underhåll.', imageAlt: 'Fortnite-cheats hero med ESP wallhack och Aimbot undetected', gallery: 'Fortnite Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Fortnite Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och Zero Build.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(m.title),
		description: clampDesc(m.desc),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const titleBase = topicName.includes('2026')
		? `${topicName} | ESP wallhack & Aimbot`
		: `${topicName} 2026 | ESP wallhack & Aimbot`;
	return {
		title: clampTitle(titleBase),
		description: clampDesc(`${topicName} — undetected ESP wallhack, radar hack, Aimbot for Fortnite. ${p.delivery}. EAC maintenance.`),
		h1: `${topicName} — ESP wallhack & Aimbot`,
		intro: p.s1(`${topicName} for ${p.maps}.`),
		imageAlt: `fortnite-cheats ${pageKey} ESP wallhack Aimbot undetected preview`,
		galleryTitle: `Fortnite Cheats ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read enemy squads with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for BR and Zero Build.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'fortnite-esp': { en: 'Fortnite ESP', es: 'Fortnite ESP', fr: 'Fortnite ESP', de: 'Fortnite ESP', pt: 'Fortnite ESP', it: 'Fortnite ESP', nl: 'Fortnite ESP', pl: 'Fortnite ESP', ru: 'Fortnite ESP', tr: 'Fortnite ESP', ar: 'Fortnite ESP', ja: 'Fortnite ESP', ko: 'Fortnite ESP', zh: 'Fortnite ESP', hi: 'Fortnite ESP', id: 'Fortnite ESP', th: 'Fortnite ESP', vi: 'Fortnite ESP', uk: 'Fortnite ESP', cs: 'Fortnite ESP', ro: 'Fortnite ESP', sv: 'Fortnite ESP' },
	'fortnite-aimbot': { en: 'Fortnite Aimbot', es: 'Fortnite Aimbot', fr: 'Fortnite Aimbot', de: 'Fortnite Aimbot', pt: 'Fortnite Aimbot', it: 'Fortnite Aimbot', nl: 'Fortnite Aimbot', pl: 'Fortnite Aimbot', ru: 'Fortnite Aimbot', tr: 'Fortnite Aimbot', ar: 'Fortnite Aimbot', ja: 'Fortnite Aimbot', ko: 'Fortnite Aimbot', zh: 'Fortnite Aimbot', hi: 'Fortnite Aimbot', id: 'Fortnite Aimbot', th: 'Fortnite Aimbot', vi: 'Fortnite Aimbot', uk: 'Fortnite Aimbot', cs: 'Fortnite Aimbot', ro: 'Fortnite Aimbot', sv: 'Fortnite Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Fortnite Wallhack', es: 'Fortnite Wallhack', fr: 'Fortnite Wallhack', de: 'Fortnite Wallhack', pt: 'Fortnite Wallhack', it: 'Fortnite Wallhack', nl: 'Fortnite Wallhack', pl: 'Fortnite Wallhack', ru: 'Fortnite Wallhack', tr: 'Fortnite Wallhack', ar: 'Fortnite Wallhack', ja: 'Fortnite Wallhack', ko: 'Fortnite Wallhack', zh: 'Fortnite Wallhack', hi: 'Fortnite Wallhack', id: 'Fortnite Wallhack', th: 'Fortnite Wallhack', vi: 'Fortnite Wallhack', uk: 'Fortnite Wallhack', cs: 'Fortnite Wallhack', ro: 'Fortnite Wallhack', sv: 'Fortnite Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'eac-bypass': { en: 'EAC Bypass', es: 'Bypass Easy Anti-Cheat (EAC)', fr: 'Bypass Easy Anti-Cheat (EAC)', de: 'EAC Bypass', pt: 'Bypass Easy Anti-Cheat (EAC)', it: 'Bypass Easy Anti-Cheat (EAC)', nl: 'EAC Bypass', pl: 'Bypass Easy Anti-Cheat (EAC)', ru: 'Bypass Easy Anti-Cheat (EAC)', tr: 'EAC bypass', ar: 'Bypass Easy Anti-Cheat (EAC)', ja: 'EAC Bypass', ko: 'EAC Bypass', zh: 'EAC Bypass', hi: 'EAC Bypass', id: 'Bypass Easy Anti-Cheat (EAC)', th: 'EAC Bypass', vi: 'Bypass Easy Anti-Cheat (EAC)', uk: 'Bypass Easy Anti-Cheat (EAC)', cs: 'EAC Bypass', ro: 'Bypass Easy Anti-Cheat (EAC)', sv: 'EAC Bypass' },
	'cheats-2026': { en: 'Fortnite Cheats 2026', es: 'Fortnite Cheats 2026', fr: 'Fortnite Cheats 2026', de: 'Fortnite Cheats 2026', pt: 'Fortnite Cheats 2026', it: 'Fortnite Cheats 2026', nl: 'Fortnite Cheats 2026', pl: 'Fortnite Cheats 2026', ru: 'Fortnite Cheats 2026', tr: 'Fortnite Cheats 2026', ar: 'Fortnite Cheats 2026', ja: 'Fortnite Cheats 2026', ko: 'Fortnite Cheats 2026', zh: 'Fortnite Cheats 2026', hi: 'Fortnite Cheats 2026', id: 'Fortnite Cheats 2026', th: 'Fortnite Cheats 2026', vi: 'Fortnite Cheats 2026', uk: 'Fortnite Cheats 2026', cs: 'Fortnite Cheats 2026', ro: 'Fortnite Cheats 2026', sv: 'Fortnite Cheats 2026' },
	hacks: { en: 'Fortnite Hacks', es: 'Fortnite Hacks', fr: 'Fortnite Hacks', de: 'Fortnite Hacks', pt: 'Fortnite Hacks', it: 'Fortnite Hacks', nl: 'Fortnite Hacks', pl: 'Fortnite Hacks', ru: 'Fortnite Hacks', tr: 'Fortnite Hacks', ar: 'Fortnite Hacks', ja: 'Fortnite Hacks', ko: 'Fortnite Hacks', zh: 'Fortnite Hacks', hi: 'Fortnite Hacks', id: 'Fortnite Hacks', th: 'Fortnite Hacks', vi: 'Fortnite Hacks', uk: 'Fortnite Hacks', cs: 'Fortnite Hacks', ro: 'Fortnite Hacks', sv: 'Fortnite Hacks' },
	'cheat-download': { en: 'Fortnite Cheat Download', es: 'Descarga Fortnite Cheats', fr: 'Téléchargement Fortnite Cheats', de: 'Fortnite Cheat Download', pt: 'Download Fortnite Cheats', it: 'Download Fortnite Cheats', nl: 'Fortnite Cheat Download', pl: 'Pobieranie Fortnite Cheats', ru: 'Скачать Fortnite Cheats', tr: 'Fortnite Hile İndir', ar: 'Fortnite Cheat Download', ja: 'Fortnite Cheat Download', ko: 'Fortnite Cheat Download', zh: 'Fortnite Cheat Download', hi: 'Fortnite Cheat Download', id: 'Fortnite Cheat Download', th: 'Fortnite Cheat Download', vi: 'Fortnite Cheat Download', uk: 'Завантаження Fortnite Cheats', cs: 'Fortnite Cheat Download', ro: 'Descărcare Fortnite Cheats', sv: 'Fortnite Cheat Download' },
	'mod-menu': { en: 'Fortnite Mod Menu', es: 'Fortnite Mod Menu', fr: 'Fortnite Mod Menu', de: 'Fortnite Mod Menu', pt: 'Fortnite Mod Menu', it: 'Fortnite Mod Menu', nl: 'Fortnite Mod Menu', pl: 'Fortnite Mod Menu', ru: 'Fortnite Mod Menu', tr: 'Fortnite Mod Menu', ar: 'Fortnite Mod Menu', ja: 'Fortnite Mod Menu', ko: 'Fortnite Mod Menu', zh: 'Fortnite Mod Menu', hi: 'Fortnite Mod Menu', id: 'Fortnite Mod Menu', th: 'Fortnite Mod Menu', vi: 'Fortnite Mod Menu', uk: 'Fortnite Mod Menu', cs: 'Fortnite Mod Menu', ro: 'Fortnite Mod Menu', sv: 'Fortnite Mod Menu' },
	'soft-aim': { en: 'Fortnite Soft Aim', es: 'Fortnite Soft Aim', fr: 'Fortnite Soft Aim', de: 'Fortnite Soft Aim', pt: 'Fortnite Soft Aim', it: 'Fortnite Soft Aim', nl: 'Fortnite Soft Aim', pl: 'Fortnite Soft Aim', ru: 'Fortnite Soft Aim', tr: 'Fortnite Soft Aim', ar: 'Fortnite Soft Aim', ja: 'Fortnite Soft Aim', ko: 'Fortnite Soft Aim', zh: 'Fortnite Soft Aim', hi: 'Fortnite Soft Aim', id: 'Fortnite Soft Aim', th: 'Fortnite Soft Aim', vi: 'Fortnite Soft Aim', uk: 'Fortnite Soft Aim', cs: 'Fortnite Soft Aim', ro: 'Fortnite Soft Aim', sv: 'Fortnite Soft Aim' },
	'best-cheats': { en: 'Best Fortnite Cheats', es: 'Mejores Fortnite Cheats', fr: 'Meilleures Fortnite Cheats', de: 'Beste Fortnite Cheats', pt: 'Melhores Fortnite Cheats', it: 'Migliori Fortnite Cheats', nl: 'Beste Fortnite Cheats', pl: 'Najlepsze Fortnite Cheats', ru: 'Лучшие Fortnite Cheats', tr: 'En İyi Fortnite Hileleri', ar: 'Best Fortnite Cheats', ja: 'Best Fortnite Cheats', ko: 'Best Fortnite Cheats', zh: 'Best Fortnite Cheats', hi: 'Best Fortnite Cheats', id: 'Best Fortnite Cheats', th: 'Best Fortnite Cheats', vi: 'Best Fortnite Cheats', uk: 'Найкращі Fortnite Cheats', cs: 'Nejlepší Fortnite Cheats', ro: 'Cele mai bune Fortnite Cheats', sv: 'Bästa Fortnite Cheats' },
	'aimbot-hack': { en: 'Fortnite Aimbot Hack', es: 'Fortnite Aimbot Hack', fr: 'Fortnite Aimbot Hack', de: 'Fortnite Aimbot Hack', pt: 'Fortnite Aimbot Hack', it: 'Fortnite Aimbot Hack', nl: 'Fortnite Aimbot Hack', pl: 'Fortnite Aimbot Hack', ru: 'Fortnite Aimbot Hack', tr: 'Fortnite Aimbot Hack', ar: 'Fortnite Aimbot Hack', ja: 'Fortnite Aimbot Hack', ko: 'Fortnite Aimbot Hack', zh: 'Fortnite Aimbot Hack', hi: 'Fortnite Aimbot Hack', id: 'Fortnite Aimbot Hack', th: 'Fortnite Aimbot Hack', vi: 'Fortnite Aimbot Hack', uk: 'Fortnite Aimbot Hack', cs: 'Fortnite Aimbot Hack', ro: 'Fortnite Aimbot Hack', sv: 'Fortnite Aimbot Hack' },
	'esp-hack': { en: 'Fortnite ESP Hack', es: 'Fortnite ESP Hack', fr: 'Fortnite ESP Hack', de: 'Fortnite ESP Hack', pt: 'Fortnite ESP Hack', it: 'Fortnite ESP Hack', nl: 'Fortnite ESP Hack', pl: 'Fortnite ESP Hack', ru: 'Fortnite ESP Hack', tr: 'Fortnite ESP Hack', ar: 'Fortnite ESP Hack', ja: 'Fortnite ESP Hack', ko: 'Fortnite ESP Hack', zh: 'Fortnite ESP Hack', hi: 'Fortnite ESP Hack', id: 'Fortnite ESP Hack', th: 'Fortnite ESP Hack', vi: 'Fortnite ESP Hack', uk: 'Fortnite ESP Hack', cs: 'Fortnite ESP Hack', ro: 'Fortnite ESP Hack', sv: 'Fortnite ESP Hack' },
	'unlock-all': { en: 'Fortnite Unlock All', es: 'Fortnite Unlock All', fr: 'Fortnite Unlock All', de: 'Fortnite Unlock All', pt: 'Fortnite Unlock All', it: 'Fortnite Unlock All', nl: 'Fortnite Unlock All', pl: 'Fortnite Unlock All', ru: 'Fortnite Unlock All', tr: 'Fortnite Unlock All', ar: 'Fortnite Unlock All', ja: 'Fortnite Unlock All', ko: 'Fortnite Unlock All', zh: 'Fortnite Unlock All', hi: 'Fortnite Unlock All', id: 'Fortnite Unlock All', th: 'Fortnite Unlock All', vi: 'Fortnite Unlock All', uk: 'Fortnite Unlock All', cs: 'Fortnite Unlock All', ro: 'Fortnite Unlock All', sv: 'Fortnite Unlock All' },
};

const CTA2_HREF = {
	'fortnite-esp': '/fortnite-wallhack/',
	'fortnite-aimbot': '/fortnite-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/undetected-fortnite-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/eac-bypass-fortnite/',
	wallhack: '/fortnite-esp/',
	radar: '/fortnite-esp/',
	'eac-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/undetected-fortnite-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/fortnite-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/fortnite-aimbot/',
	'esp-hack': '/fortnite-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(`${h1} | Fortnite Cheats`),
		description: clampDesc(`${h1} for Fortnite Cheats — ESP wallhack, Aimbot, ${p.win}.`),
		h1,
		intro: p.s1(`${h1} for fortnitecheats.net and Fortnite licenses.`),
		imageAlt: `fortnite-cheats ${kind} ESP wallhack Aimbot legal page`,
		galleryTitle: `Fortnite Cheats ${kind} resources`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on fortnitecheats.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@fortnitecheats.net',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
