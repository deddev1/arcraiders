import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Rust Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Rust indetectables para Rust en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat (EAC). Entrega digital instantánea.', h1: 'Rust Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Rust en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat (EAC) tras cada parche.', imageAlt: 'Hero rust-cheats con ESP wallhack y Aimbot indetectables', gallery: 'Galería Rust Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Rust Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y monuments.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Rust Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Rust indétectables pour Rust sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat (EAC). Livraison numérique instantanée.', h1: 'Rust Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Rust sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat (EAC) après chaque patch.', imageAlt: 'Hero rust-cheats avec ESP wallhack et Aimbot indétectables', gallery: 'Galerie Rust Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Rust Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et monuments.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Rust Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Rust Cheats für Rust auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat (EAC)-Wartung. Sofortige digitale Lieferung.', h1: 'Rust Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Rust: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat (EAC)-Wartung nach jedem Patch.', imageAlt: 'Rust-cheats Hero mit ESP Wallhack und Aimbot undetected', gallery: 'Rust Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Rust Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und monuments zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Rust Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Rust indetectáveis para Rust no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat (EAC). Entrega digital instantánea.', h1: 'Rust Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Rust no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat (EAC) após cada patch.', imageAlt: 'Hero rust-cheats com ESP wallhack e Aimbot indetectáveis', gallery: 'Galeria Rust Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Rust Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e monuments.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Rust Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Rust indetectable per Rust su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat (EAC). Consegna digitale istantanea.', h1: 'Rust Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Rust su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat (EAC) dopo ogni patch.', imageAlt: 'Hero rust-cheats con ESP wallhack e Aimbot indetectable', gallery: 'Galleria Rust Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Rust Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e monuments.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Rust Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Rust cheats voor Rust op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat (EAC)-onderhoud. Directe digitale levering.', h1: 'Rust Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Rust: ESP wallhack, radar en Aimbot met Easy Anti-Cheat (EAC)-onderhoud na elke patch.', imageAlt: 'Rust-cheats hero met ESP wallhack en Aimbot undetected', gallery: 'Rust Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Rust Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en monuments.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Rust Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Rust dla Rust na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat (EAC). Natychmiastowa dostawa cyfrowa.', h1: 'Rust Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Rust na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat (EAC) po każdym patchu.', imageAlt: 'Hero rust-cheats z ESP wallhack i Aimbot undetected', gallery: 'Galeria Rust Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Rust Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i monuments.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Rust Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Rust для Rust на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat (EAC). Мгновенная цифровая доставка.', h1: 'Rust Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Rust на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat (EAC) после патчей.', imageAlt: 'Hero rust-cheats с ESP wallhack и Aimbot undetected', gallery: 'Галерея Rust Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Rust Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и monuments.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Rust Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Rust için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat (EAC) bakımı. Anında dijital teslimat.', h1: 'Rust Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Rust Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat (EAC) bakımı dahil.', imageAlt: 'Rust-cheats hero ESP wallhack ve Aimbot undetected', gallery: 'Rust Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Rust Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve monuments\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Rust Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Rust undetected لـ Rust على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat (EAC). تسليم رقمي فوري.', h1: 'Rust Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Rust على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat (EAC).', imageAlt: 'Hero rust-cheats مع ESP wallhack وAimbot undetected', gallery: 'معرض Rust Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Rust Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وmonuments.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Rust Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Rust向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat (EAC)メンテナンス。即時デジタル配信。', h1: 'Rust Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Rust Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheat (EAC)メンテナンス付き。', imageAlt: 'rust-cheats hero ESP wallhackとAimbot undetected', gallery: 'Rust Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にRust Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとmonumentsで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Rust Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Rust undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat (EAC) 유지보수. 즉시 디지털 배송.', h1: 'Rust Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Rust Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat (EAC) 유지보수 포함.', imageAlt: 'rust-cheats hero ESP wallhack 및 Aimbot undetected', gallery: 'Rust Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Rust Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 monuments에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Rust Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Rust undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat (EAC)维护。即时数字交付。', h1: 'Rust Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Rust Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat (EAC)维护。', imageAlt: 'rust-cheats hero ESP wallhack与Aimbot undetected', gallery: 'Rust Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Rust Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和monuments中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Rust Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Rust undetected cheats. ESP wallhack, radar hack, Aimbot, EAC maintenance. Instant digital delivery.', h1: 'Rust Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Rust Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, EAC maintenance सहित.', imageAlt: 'rust-cheats hero ESP wallhack और Aimbot undetected', gallery: 'Rust Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Rust Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और monuments में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Rust Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Rust undetected untuk Rust di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat (EAC). Pengiriman digital instan.', h1: 'Rust Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Rust di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat (EAC).', imageAlt: 'Hero rust-cheats ESP wallhack dan Aimbot undetected', gallery: 'Galeri Rust Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Rust Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan monuments.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Rust Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Rust undetected สำหรับ Rust บน PC. ESP wallhack, radar hack, Aimbot, EAC maintenance. จัดส่งดิจิทัลทันที.', h1: 'Rust Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Rust บน Windows PC: ESP wallhack, radar, Aimbot พร้อม EAC maintenance', imageAlt: 'Hero rust-cheats ESP wallhack และ Aimbot undetected', gallery: 'แกลเลอรี Rust Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Rust Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ monuments', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Rust Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Rust undetected cho Rust trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat (EAC). Giao hàng kỹ thuật số tức thì.', h1: 'Rust Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Rust trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat (EAC).', imageAlt: 'Hero rust-cheats ESP wallhack và Aimbot undetected', gallery: 'Thư viện Rust Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Rust Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và monuments.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Rust Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Rust для Rust на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat (EAC). Мгновенная цифровая доставка.', h1: 'Rust Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Rust на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat (EAC).', imageAlt: 'Hero rust-cheats з ESP wallhack і Aimbot undetected', gallery: 'Галерея Rust Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Rust Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і monuments.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Rust Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Rust cheaty pro Rust na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat (EAC). Okamžité digitální doručení.', h1: 'Rust Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Rust na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat (EAC).', imageAlt: 'Hero rust-cheats s ESP wallhack a Aimbot undetected', gallery: 'Galerie Rust Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Rust Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a monuments.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Rust Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Rust undetected pentru Rust pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat (EAC). Livrare digitală instantă.', h1: 'Rust Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Rust pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat (EAC).', imageAlt: 'Hero rust-cheats cu ESP wallhack și Aimbot undetected', gallery: 'Galerie Rust Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Rust Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și monuments.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Rust Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Rust cheats för Rust på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat (EAC)-underhåll. Omedelbar digital leverans.', h1: 'Rust Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Rust på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat (EAC)-underhåll.', imageAlt: 'Rust-cheats hero med ESP wallhack och Aimbot undetected', gallery: 'Rust Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Rust Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och monuments.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
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

/** Unique English title/desc tails per page — avoids identical "| ESP wallhack & Aimbot" across locales. */
const PAGE_META_TAILS = {
	'rust-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays' },
	'rust-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar, and cloud DMA controls' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup' },
	updates: { suffix: 'EAC Maintenance Log', focus: 'EAC patch status and rebuild notes' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and EAC questions' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact' },
	undetected: { suffix: 'EAC Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations' },
	'eac-bypass': { suffix: 'Patch Maintenance', focus: 'how EAC updates are handled for Rust hacks' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Rust cheats checklist before checkout' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Rust hacks pillar for ESP and Aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Rust cheats' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Rust' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Rust Hacks', focus: 'ESP wallhack, radar, and Aimbot' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Rust Hacks ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Rust. ${p.delivery}. EAC maintenance included.`,
			),
		),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: `rust-cheats ${pageKey} ${meta.focus} preview`,
		galleryTitle: `Rust Cheats ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read enemy squads with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for PVE and PVP.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'rust-esp': { en: 'Rust ESP', es: 'Rust ESP', fr: 'Rust ESP', de: 'Rust ESP', pt: 'Rust ESP', it: 'Rust ESP', nl: 'Rust ESP', pl: 'Rust ESP', ru: 'Rust ESP', tr: 'Rust ESP', ar: 'Rust ESP', ja: 'Rust ESP', ko: 'Rust ESP', zh: 'Rust ESP', hi: 'Rust ESP', id: 'Rust ESP', th: 'Rust ESP', vi: 'Rust ESP', uk: 'Rust ESP', cs: 'Rust ESP', ro: 'Rust ESP', sv: 'Rust ESP' },
	'rust-aimbot': { en: 'Rust Aimbot', es: 'Rust Aimbot', fr: 'Rust Aimbot', de: 'Rust Aimbot', pt: 'Rust Aimbot', it: 'Rust Aimbot', nl: 'Rust Aimbot', pl: 'Rust Aimbot', ru: 'Rust Aimbot', tr: 'Rust Aimbot', ar: 'Rust Aimbot', ja: 'Rust Aimbot', ko: 'Rust Aimbot', zh: 'Rust Aimbot', hi: 'Rust Aimbot', id: 'Rust Aimbot', th: 'Rust Aimbot', vi: 'Rust Aimbot', uk: 'Rust Aimbot', cs: 'Rust Aimbot', ro: 'Rust Aimbot', sv: 'Rust Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Rust Wallhack', es: 'Rust Wallhack', fr: 'Rust Wallhack', de: 'Rust Wallhack', pt: 'Rust Wallhack', it: 'Rust Wallhack', nl: 'Rust Wallhack', pl: 'Rust Wallhack', ru: 'Rust Wallhack', tr: 'Rust Wallhack', ar: 'Rust Wallhack', ja: 'Rust Wallhack', ko: 'Rust Wallhack', zh: 'Rust Wallhack', hi: 'Rust Wallhack', id: 'Rust Wallhack', th: 'Rust Wallhack', vi: 'Rust Wallhack', uk: 'Rust Wallhack', cs: 'Rust Wallhack', ro: 'Rust Wallhack', sv: 'Rust Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'eac-bypass': { en: 'EAC Bypass', es: 'Bypass Easy Anti-Cheat (EAC)', fr: 'Bypass Easy Anti-Cheat (EAC)', de: 'EAC Bypass', pt: 'Bypass Easy Anti-Cheat (EAC)', it: 'Bypass Easy Anti-Cheat (EAC)', nl: 'EAC Bypass', pl: 'Bypass Easy Anti-Cheat (EAC)', ru: 'Bypass Easy Anti-Cheat (EAC)', tr: 'EAC bypass', ar: 'Bypass Easy Anti-Cheat (EAC)', ja: 'EAC Bypass', ko: 'EAC Bypass', zh: 'EAC Bypass', hi: 'EAC Bypass', id: 'Bypass Easy Anti-Cheat (EAC)', th: 'EAC Bypass', vi: 'Bypass Easy Anti-Cheat (EAC)', uk: 'Bypass Easy Anti-Cheat (EAC)', cs: 'EAC Bypass', ro: 'Bypass Easy Anti-Cheat (EAC)', sv: 'EAC Bypass' },
	'cheats-2026': { en: 'Rust Cheats 2026', es: 'Rust Cheats 2026', fr: 'Rust Cheats 2026', de: 'Rust Cheats 2026', pt: 'Rust Cheats 2026', it: 'Rust Cheats 2026', nl: 'Rust Cheats 2026', pl: 'Rust Cheats 2026', ru: 'Rust Cheats 2026', tr: 'Rust Cheats 2026', ar: 'Rust Cheats 2026', ja: 'Rust Cheats 2026', ko: 'Rust Cheats 2026', zh: 'Rust Cheats 2026', hi: 'Rust Cheats 2026', id: 'Rust Cheats 2026', th: 'Rust Cheats 2026', vi: 'Rust Cheats 2026', uk: 'Rust Cheats 2026', cs: 'Rust Cheats 2026', ro: 'Rust Cheats 2026', sv: 'Rust Cheats 2026' },
	hacks: { en: 'Rust Hacks', es: 'Rust Hacks', fr: 'Rust Hacks', de: 'Rust Hacks', pt: 'Rust Hacks', it: 'Rust Hacks', nl: 'Rust Hacks', pl: 'Rust Hacks', ru: 'Rust Hacks', tr: 'Rust Hacks', ar: 'Rust Hacks', ja: 'Rust Hacks', ko: 'Rust Hacks', zh: 'Rust Hacks', hi: 'Rust Hacks', id: 'Rust Hacks', th: 'Rust Hacks', vi: 'Rust Hacks', uk: 'Rust Hacks', cs: 'Rust Hacks', ro: 'Rust Hacks', sv: 'Rust Hacks' },
	'cheat-download': { en: 'Rust Cheat Download', es: 'Descarga Rust Cheats', fr: 'Téléchargement Rust Cheats', de: 'Rust Cheat Download', pt: 'Download Rust Cheats', it: 'Download Rust Cheats', nl: 'Rust Cheat Download', pl: 'Pobieranie Rust Cheats', ru: 'Скачать Rust Cheats', tr: 'Rust Hile İndir', ar: 'Rust Cheat Download', ja: 'Rust Cheat Download', ko: 'Rust Cheat Download', zh: 'Rust Cheat Download', hi: 'Rust Cheat Download', id: 'Rust Cheat Download', th: 'Rust Cheat Download', vi: 'Rust Cheat Download', uk: 'Завантаження Rust Cheats', cs: 'Rust Cheat Download', ro: 'Descărcare Rust Cheats', sv: 'Rust Cheat Download' },
	'mod-menu': { en: 'Rust Mod Menu', es: 'Rust Mod Menu', fr: 'Rust Mod Menu', de: 'Rust Mod Menu', pt: 'Rust Mod Menu', it: 'Rust Mod Menu', nl: 'Rust Mod Menu', pl: 'Rust Mod Menu', ru: 'Rust Mod Menu', tr: 'Rust Mod Menu', ar: 'Rust Mod Menu', ja: 'Rust Mod Menu', ko: 'Rust Mod Menu', zh: 'Rust Mod Menu', hi: 'Rust Mod Menu', id: 'Rust Mod Menu', th: 'Rust Mod Menu', vi: 'Rust Mod Menu', uk: 'Rust Mod Menu', cs: 'Rust Mod Menu', ro: 'Rust Mod Menu', sv: 'Rust Mod Menu' },
	'soft-aim': { en: 'Rust Soft Aim', es: 'Rust Soft Aim', fr: 'Rust Soft Aim', de: 'Rust Soft Aim', pt: 'Rust Soft Aim', it: 'Rust Soft Aim', nl: 'Rust Soft Aim', pl: 'Rust Soft Aim', ru: 'Rust Soft Aim', tr: 'Rust Soft Aim', ar: 'Rust Soft Aim', ja: 'Rust Soft Aim', ko: 'Rust Soft Aim', zh: 'Rust Soft Aim', hi: 'Rust Soft Aim', id: 'Rust Soft Aim', th: 'Rust Soft Aim', vi: 'Rust Soft Aim', uk: 'Rust Soft Aim', cs: 'Rust Soft Aim', ro: 'Rust Soft Aim', sv: 'Rust Soft Aim' },
	'best-cheats': { en: 'Best Rust Cheats', es: 'Mejores Rust Cheats', fr: 'Meilleures Rust Cheats', de: 'Beste Rust Cheats', pt: 'Melhores Rust Cheats', it: 'Migliori Rust Cheats', nl: 'Beste Rust Cheats', pl: 'Najlepsze Rust Cheats', ru: 'Лучшие Rust Cheats', tr: 'En İyi Rust Hileleri', ar: 'Best Rust Cheats', ja: 'Best Rust Cheats', ko: 'Best Rust Cheats', zh: 'Best Rust Cheats', hi: 'Best Rust Cheats', id: 'Best Rust Cheats', th: 'Best Rust Cheats', vi: 'Best Rust Cheats', uk: 'Найкращі Rust Cheats', cs: 'Nejlepší Rust Cheats', ro: 'Cele mai bune Rust Cheats', sv: 'Bästa Rust Cheats' },
	'aimbot-hack': { en: 'Rust Aimbot Hack', es: 'Rust Aimbot Hack', fr: 'Rust Aimbot Hack', de: 'Rust Aimbot Hack', pt: 'Rust Aimbot Hack', it: 'Rust Aimbot Hack', nl: 'Rust Aimbot Hack', pl: 'Rust Aimbot Hack', ru: 'Rust Aimbot Hack', tr: 'Rust Aimbot Hack', ar: 'Rust Aimbot Hack', ja: 'Rust Aimbot Hack', ko: 'Rust Aimbot Hack', zh: 'Rust Aimbot Hack', hi: 'Rust Aimbot Hack', id: 'Rust Aimbot Hack', th: 'Rust Aimbot Hack', vi: 'Rust Aimbot Hack', uk: 'Rust Aimbot Hack', cs: 'Rust Aimbot Hack', ro: 'Rust Aimbot Hack', sv: 'Rust Aimbot Hack' },
	'esp-hack': { en: 'Rust ESP Hack', es: 'Rust ESP Hack', fr: 'Rust ESP Hack', de: 'Rust ESP Hack', pt: 'Rust ESP Hack', it: 'Rust ESP Hack', nl: 'Rust ESP Hack', pl: 'Rust ESP Hack', ru: 'Rust ESP Hack', tr: 'Rust ESP Hack', ar: 'Rust ESP Hack', ja: 'Rust ESP Hack', ko: 'Rust ESP Hack', zh: 'Rust ESP Hack', hi: 'Rust ESP Hack', id: 'Rust ESP Hack', th: 'Rust ESP Hack', vi: 'Rust ESP Hack', uk: 'Rust ESP Hack', cs: 'Rust ESP Hack', ro: 'Rust ESP Hack', sv: 'Rust ESP Hack' },
	'unlock-all': { en: 'Rust Unlock All', es: 'Rust Unlock All', fr: 'Rust Unlock All', de: 'Rust Unlock All', pt: 'Rust Unlock All', it: 'Rust Unlock All', nl: 'Rust Unlock All', pl: 'Rust Unlock All', ru: 'Rust Unlock All', tr: 'Rust Unlock All', ar: 'Rust Unlock All', ja: 'Rust Unlock All', ko: 'Rust Unlock All', zh: 'Rust Unlock All', hi: 'Rust Unlock All', id: 'Rust Unlock All', th: 'Rust Unlock All', vi: 'Rust Unlock All', uk: 'Rust Unlock All', cs: 'Rust Unlock All', ro: 'Rust Unlock All', sv: 'Rust Unlock All' },
};

const CTA2_HREF = {
	'rust-esp': '/rust-wallhack/',
	'rust-aimbot': '/rust-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/undetected-rust-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/eac-bypass-rust/',
	wallhack: '/rust-esp/',
	radar: '/rust-esp/',
	'eac-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/undetected-rust-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/rust-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/rust-aimbot/',
	'esp-hack': '/rust-esp/',
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
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Rust Hacks`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Rust Hacks — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for rusthacks.net and Rust licenses.`),
		imageAlt: `rust-cheats ${kind} ESP wallhack Aimbot legal page`,
		galleryTitle: `Rust Cheats ${kind} resources`,
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
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on rusthacks.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Facepunch terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@rusthacks.net',
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
