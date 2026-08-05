import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Arc Raiders indetectables para Arc Raiders en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat (EAC). Entrega digital instantánea.', h1: 'Arc Raiders Hacks — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Arc Raiders en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat (EAC) tras cada parche.', imageAlt: 'Hero arc-raiders-hacks con ESP wallhack y Aimbot indetectables', gallery: 'Galería Arc Raiders Hacks — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Arc Raiders Hacks en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y extraction zones.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Arc Raiders indétectables pour Arc Raiders sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat (EAC). Livraison numérique instantanée.', h1: 'Arc Raiders Hacks — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Arc Raiders sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat (EAC) après chaque patch.', imageAlt: 'Hero arc-raiders-hacks avec ESP wallhack et Aimbot indétectables', gallery: 'Galerie Arc Raiders Hacks — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Arc Raiders Hacks en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et extraction zones.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Arc Raiders Hacks für Arc Raiders auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat (EAC)-Wartung. Sofortige digitale Lieferung.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Arc Raiders: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat (EAC)-Wartung nach jedem Patch.', imageAlt: 'Rust-cheats Hero mit ESP Wallhack und Aimbot undetected', gallery: 'Arc Raiders Hacks Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Arc Raiders Hacks 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und extraction zones zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Arc Raiders indetectáveis para Arc Raiders no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat (EAC). Entrega digital instantánea.', h1: 'Arc Raiders Hacks — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Arc Raiders no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat (EAC) após cada patch.', imageAlt: 'Hero arc-raiders-hacks com ESP wallhack e Aimbot indetectáveis', gallery: 'Galeria Arc Raiders Hacks — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Arc Raiders Hacks em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e extraction zones.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Arc Raiders indetectable per Arc Raiders su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat (EAC). Consegna digitale istantanea.', h1: 'Arc Raiders Hacks — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Arc Raiders su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat (EAC) dopo ogni patch.', imageAlt: 'Hero arc-raiders-hacks con ESP wallhack e Aimbot indetectable', gallery: 'Galleria Arc Raiders Hacks — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Arc Raiders Hacks nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e extraction zones.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Arc Raiders hacks voor Arc Raiders op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat (EAC)-onderhoud. Directe digitale levering.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Arc Raiders: ESP wallhack, radar en Aimbot met Easy Anti-Cheat (EAC)-onderhoud na elke patch.', imageAlt: 'Rust-cheats hero met ESP wallhack en Aimbot undetected', gallery: 'Arc Raiders Hacks galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Arc Raiders Hacks in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en extraction zones.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Arc Raiders dla Arc Raiders na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat (EAC). Natychmiastowa dostawa cyfrowa.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Arc Raiders na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat (EAC) po każdym patchu.', imageAlt: 'Hero arc-raiders-hacks z ESP wallhack i Aimbot undetected', gallery: 'Galeria Arc Raiders Hacks — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Arc Raiders Hacks w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i extraction zones.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Arc Raiders для Arc Raiders на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat (EAC). Мгновенная цифровая доставка.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Arc Raiders на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat (EAC) после патчей.', imageAlt: 'Hero arc-raiders-hacks с ESP wallhack и Aimbot undetected', gallery: 'Галерея Arc Raiders Hacks — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Arc Raiders Hacks в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и extraction zones.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack ve Aimbot', desc: 'Arc Raiders için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat (EAC) bakımı. Anında dijital teslimat.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack ve Aimbot', intro: 'Arc Raiders Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat (EAC) bakımı dahil.', imageAlt: 'Rust-cheats hero ESP wallhack ve Aimbot undetected', gallery: 'Arc Raiders Hacks galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Arc Raiders Hacks', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve extraction zones\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Arc Raiders Hacks 2026 | ESP وWallhack وAimbot', desc: 'غش Arc Raiders undetected لـ Arc Raiders على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat (EAC). تسليم رقمي فوري.', h1: 'Arc Raiders Hacks — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Arc Raiders على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat (EAC).', imageAlt: 'Hero arc-raiders-hacks مع ESP wallhack وAimbot undetected', gallery: 'معرض Arc Raiders Hacks — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Arc Raiders Hacks في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وextraction zones.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Arc Raiders Hacks 2026 | ESP・Wallhack・Aimbot', desc: 'Arc Raiders向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat (EAC)メンテナンス。即時デジタル配信。', h1: 'Arc Raiders Hacks — Undetected ESP・Wallhack・Aimbot', intro: 'Arc Raiders Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheat (EAC)メンテナンス付き。', imageAlt: 'arc-raiders-hacks hero ESP wallhackとAimbot undetected', gallery: 'Arc Raiders Hacksギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にArc Raiders Hacksを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとextraction zonesで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack, Aimbot', desc: 'Arc Raiders undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat (EAC) 유지보수. 즉시 디지털 배송.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack, Aimbot', intro: 'Arc Raiders Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat (EAC) 유지보수 포함.', imageAlt: 'arc-raiders-hacks hero ESP wallhack 및 Aimbot undetected', gallery: 'Arc Raiders Hacks 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Arc Raiders Hacks를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 extraction zones에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Arc Raiders Hacks 2026 | ESP、Wallhack、Aimbot', desc: 'Arc Raiders undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat (EAC)维护。即时数字交付。', h1: 'Arc Raiders Hacks — Undetected ESP、Wallhack、Aimbot', intro: 'Arc Raiders Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat (EAC)维护。', imageAlt: 'arc-raiders-hacks hero ESP wallhack与Aimbot undetected', gallery: 'Arc Raiders Hacks图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Arc Raiders Hacks的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和extraction zones中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack और Aimbot', desc: 'Arc Raiders undetected cheats. ESP wallhack, radar hack, Aimbot, EAC maintenance. Instant digital delivery.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack और Aimbot', intro: 'Arc Raiders Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, EAC maintenance सहित.', imageAlt: 'arc-raiders-hacks hero ESP wallhack और Aimbot undetected', gallery: 'Arc Raiders Hacks gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Arc Raiders Hacks क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और extraction zones में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Arc Raiders undetected untuk Arc Raiders di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat (EAC). Pengiriman digital instan.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Arc Raiders di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat (EAC).', imageAlt: 'Hero arc-raiders-hacks ESP wallhack dan Aimbot undetected', gallery: 'Galeri Arc Raiders Hacks — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Arc Raiders Hacks di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan extraction zones.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Arc Raiders undetected สำหรับ Arc Raiders บน PC. ESP wallhack, radar hack, Aimbot, EAC maintenance. จัดส่งดิจิทัลทันที.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Arc Raiders บน Windows PC: ESP wallhack, radar, Aimbot พร้อม EAC maintenance', imageAlt: 'Hero arc-raiders-hacks ESP wallhack และ Aimbot undetected', gallery: 'แกลเลอรี Arc Raiders Hacks — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Arc Raiders Hacks ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ extraction zones', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Arc Raiders undetected cho Arc Raiders trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat (EAC). Giao hàng kỹ thuật số tức thì.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Arc Raiders trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat (EAC).', imageAlt: 'Hero arc-raiders-hacks ESP wallhack và Aimbot undetected', gallery: 'Thư viện Arc Raiders Hacks — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Arc Raiders Hacks 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và extraction zones.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Arc Raiders для Arc Raiders на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat (EAC). Мгновенная цифровая доставка.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Arc Raiders на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat (EAC).', imageAlt: 'Hero arc-raiders-hacks з ESP wallhack і Aimbot undetected', gallery: 'Галерея Arc Raiders Hacks — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Arc Raiders Hacks у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і extraction zones.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Arc Raiders cheaty pro Arc Raiders na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat (EAC). Okamžité digitální doručení.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Arc Raiders na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat (EAC).', imageAlt: 'Hero arc-raiders-hacks s ESP wallhack a Aimbot undetected', gallery: 'Galerie Arc Raiders Hacks — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Arc Raiders Hacks v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a extraction zones.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Arc Raiders undetected pentru Arc Raiders pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat (EAC). Livrare digitală instantă.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Arc Raiders pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat (EAC).', imageAlt: 'Hero arc-raiders-hacks cu ESP wallhack și Aimbot undetected', gallery: 'Galerie Arc Raiders Hacks — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Arc Raiders Hacks în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și extraction zones.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Arc Raiders Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Arc Raiders hacks för Arc Raiders på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat (EAC)-underhåll. Omedelbar digital leverans.', h1: 'Arc Raiders Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Arc Raiders på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat (EAC)-underhåll.', imageAlt: 'Rust-cheats hero med ESP wallhack och Aimbot undetected', gallery: 'Arc Raiders Hacks galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Arc Raiders Hacks 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och extraction zones.', topicB: 'En licens istället för separata verktyg.' },
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
	'eac-bypass': { suffix: 'Patch Maintenance', focus: 'how EAC updates are handled for Arc Raiders Hacks' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Arc Raiders hacks checklist before checkout' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Arc Raiders Hacks pillar for ESP and Aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Arc Raiders hacks' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Arc Raiders' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Arc Raiders Hacks', focus: 'ESP wallhack, radar, and Aimbot' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Arc Raiders Hacks ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Arc Raiders. ${p.delivery}. EAC maintenance included.`,
			),
		),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: `arc-raiders-hacks ${pageKey} ${meta.focus} preview`,
		galleryTitle: `Arc Raiders Hacks ${topicName} gallery`,
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
	'rust-esp': { en: 'Arc Raiders ESP', es: 'Arc Raiders ESP', fr: 'Arc Raiders ESP', de: 'Arc Raiders ESP', pt: 'Arc Raiders ESP', it: 'Arc Raiders ESP', nl: 'Arc Raiders ESP', pl: 'Arc Raiders ESP', ru: 'Arc Raiders ESP', tr: 'Arc Raiders ESP', ar: 'Arc Raiders ESP', ja: 'Arc Raiders ESP', ko: 'Arc Raiders ESP', zh: 'Arc Raiders ESP', hi: 'Arc Raiders ESP', id: 'Arc Raiders ESP', th: 'Arc Raiders ESP', vi: 'Arc Raiders ESP', uk: 'Arc Raiders ESP', cs: 'Arc Raiders ESP', ro: 'Arc Raiders ESP', sv: 'Arc Raiders ESP' },
	'rust-aimbot': { en: 'Arc Raiders Aimbot', es: 'Arc Raiders Aimbot', fr: 'Arc Raiders Aimbot', de: 'Arc Raiders Aimbot', pt: 'Arc Raiders Aimbot', it: 'Arc Raiders Aimbot', nl: 'Arc Raiders Aimbot', pl: 'Arc Raiders Aimbot', ru: 'Arc Raiders Aimbot', tr: 'Arc Raiders Aimbot', ar: 'Arc Raiders Aimbot', ja: 'Arc Raiders Aimbot', ko: 'Arc Raiders Aimbot', zh: 'Arc Raiders Aimbot', hi: 'Arc Raiders Aimbot', id: 'Arc Raiders Aimbot', th: 'Arc Raiders Aimbot', vi: 'Arc Raiders Aimbot', uk: 'Arc Raiders Aimbot', cs: 'Arc Raiders Aimbot', ro: 'Arc Raiders Aimbot', sv: 'Arc Raiders Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Arc Raiders Wallhack', es: 'Arc Raiders Wallhack', fr: 'Arc Raiders Wallhack', de: 'Arc Raiders Wallhack', pt: 'Arc Raiders Wallhack', it: 'Arc Raiders Wallhack', nl: 'Arc Raiders Wallhack', pl: 'Arc Raiders Wallhack', ru: 'Arc Raiders Wallhack', tr: 'Arc Raiders Wallhack', ar: 'Arc Raiders Wallhack', ja: 'Arc Raiders Wallhack', ko: 'Arc Raiders Wallhack', zh: 'Arc Raiders Wallhack', hi: 'Arc Raiders Wallhack', id: 'Arc Raiders Wallhack', th: 'Arc Raiders Wallhack', vi: 'Arc Raiders Wallhack', uk: 'Arc Raiders Wallhack', cs: 'Arc Raiders Wallhack', ro: 'Arc Raiders Wallhack', sv: 'Arc Raiders Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'eac-bypass': { en: 'EAC Bypass', es: 'Bypass Easy Anti-Cheat (EAC)', fr: 'Bypass Easy Anti-Cheat (EAC)', de: 'EAC Bypass', pt: 'Bypass Easy Anti-Cheat (EAC)', it: 'Bypass Easy Anti-Cheat (EAC)', nl: 'EAC Bypass', pl: 'Bypass Easy Anti-Cheat (EAC)', ru: 'Bypass Easy Anti-Cheat (EAC)', tr: 'EAC bypass', ar: 'Bypass Easy Anti-Cheat (EAC)', ja: 'EAC Bypass', ko: 'EAC Bypass', zh: 'EAC Bypass', hi: 'EAC Bypass', id: 'Bypass Easy Anti-Cheat (EAC)', th: 'EAC Bypass', vi: 'Bypass Easy Anti-Cheat (EAC)', uk: 'Bypass Easy Anti-Cheat (EAC)', cs: 'EAC Bypass', ro: 'Bypass Easy Anti-Cheat (EAC)', sv: 'EAC Bypass' },
	'cheats-2026': { en: 'Arc Raiders Hacks 2026', es: 'Arc Raiders Hacks 2026', fr: 'Arc Raiders Hacks 2026', de: 'Arc Raiders Hacks 2026', pt: 'Arc Raiders Hacks 2026', it: 'Arc Raiders Hacks 2026', nl: 'Arc Raiders Hacks 2026', pl: 'Arc Raiders Hacks 2026', ru: 'Arc Raiders Hacks 2026', tr: 'Arc Raiders Hacks 2026', ar: 'Arc Raiders Hacks 2026', ja: 'Arc Raiders Hacks 2026', ko: 'Arc Raiders Hacks 2026', zh: 'Arc Raiders Hacks 2026', hi: 'Arc Raiders Hacks 2026', id: 'Arc Raiders Hacks 2026', th: 'Arc Raiders Hacks 2026', vi: 'Arc Raiders Hacks 2026', uk: 'Arc Raiders Hacks 2026', cs: 'Arc Raiders Hacks 2026', ro: 'Arc Raiders Hacks 2026', sv: 'Arc Raiders Hacks 2026' },
	hacks: { en: 'Arc Raiders Hacks', es: 'Arc Raiders Hacks', fr: 'Arc Raiders Hacks', de: 'Arc Raiders Hacks', pt: 'Arc Raiders Hacks', it: 'Arc Raiders Hacks', nl: 'Arc Raiders Hacks', pl: 'Arc Raiders Hacks', ru: 'Arc Raiders Hacks', tr: 'Arc Raiders Hacks', ar: 'Arc Raiders Hacks', ja: 'Arc Raiders Hacks', ko: 'Arc Raiders Hacks', zh: 'Arc Raiders Hacks', hi: 'Arc Raiders Hacks', id: 'Arc Raiders Hacks', th: 'Arc Raiders Hacks', vi: 'Arc Raiders Hacks', uk: 'Arc Raiders Hacks', cs: 'Arc Raiders Hacks', ro: 'Arc Raiders Hacks', sv: 'Arc Raiders Hacks' },
	'cheat-download': { en: 'Arc Raiders Hacks Download', es: 'Descarga Arc Raiders Hacks', fr: 'Téléchargement Arc Raiders Hacks', de: 'Arc Raiders Hacks Download', pt: 'Download Arc Raiders Hacks', it: 'Download Arc Raiders Hacks', nl: 'Arc Raiders Hacks Download', pl: 'Pobieranie Arc Raiders Hacks', ru: 'Скачать Arc Raiders Hacks', tr: 'Arc Raiders Hile İndir', ar: 'Arc Raiders Hacks Download', ja: 'Arc Raiders Hacks Download', ko: 'Arc Raiders Hacks Download', zh: 'Arc Raiders Hacks Download', hi: 'Arc Raiders Hacks Download', id: 'Arc Raiders Hacks Download', th: 'Arc Raiders Hacks Download', vi: 'Arc Raiders Hacks Download', uk: 'Завантаження Arc Raiders Hacks', cs: 'Arc Raiders Hacks Download', ro: 'Descărcare Arc Raiders Hacks', sv: 'Arc Raiders Hacks Download' },
	'mod-menu': { en: 'Arc Raiders Mod Menu', es: 'Arc Raiders Mod Menu', fr: 'Arc Raiders Mod Menu', de: 'Arc Raiders Mod Menu', pt: 'Arc Raiders Mod Menu', it: 'Arc Raiders Mod Menu', nl: 'Arc Raiders Mod Menu', pl: 'Arc Raiders Mod Menu', ru: 'Arc Raiders Mod Menu', tr: 'Arc Raiders Mod Menu', ar: 'Arc Raiders Mod Menu', ja: 'Arc Raiders Mod Menu', ko: 'Arc Raiders Mod Menu', zh: 'Arc Raiders Mod Menu', hi: 'Arc Raiders Mod Menu', id: 'Arc Raiders Mod Menu', th: 'Arc Raiders Mod Menu', vi: 'Arc Raiders Mod Menu', uk: 'Arc Raiders Mod Menu', cs: 'Arc Raiders Mod Menu', ro: 'Arc Raiders Mod Menu', sv: 'Arc Raiders Mod Menu' },
	'soft-aim': { en: 'Arc Raiders Soft Aim', es: 'Arc Raiders Soft Aim', fr: 'Arc Raiders Soft Aim', de: 'Arc Raiders Soft Aim', pt: 'Arc Raiders Soft Aim', it: 'Arc Raiders Soft Aim', nl: 'Arc Raiders Soft Aim', pl: 'Arc Raiders Soft Aim', ru: 'Arc Raiders Soft Aim', tr: 'Arc Raiders Soft Aim', ar: 'Arc Raiders Soft Aim', ja: 'Arc Raiders Soft Aim', ko: 'Arc Raiders Soft Aim', zh: 'Arc Raiders Soft Aim', hi: 'Arc Raiders Soft Aim', id: 'Arc Raiders Soft Aim', th: 'Arc Raiders Soft Aim', vi: 'Arc Raiders Soft Aim', uk: 'Arc Raiders Soft Aim', cs: 'Arc Raiders Soft Aim', ro: 'Arc Raiders Soft Aim', sv: 'Arc Raiders Soft Aim' },
	'best-cheats': { en: 'Best Arc Raiders Hacks', es: 'Mejores Arc Raiders Hacks', fr: 'Meilleures Arc Raiders Hacks', de: 'Beste Arc Raiders Hacks', pt: 'Melhores Arc Raiders Hacks', it: 'Migliori Arc Raiders Hacks', nl: 'Beste Arc Raiders Hacks', pl: 'Najlepsze Arc Raiders Hacks', ru: 'Лучшие Arc Raiders Hacks', tr: 'En İyi Arc Raiders Hileleri', ar: 'Best Arc Raiders Hacks', ja: 'Best Arc Raiders Hacks', ko: 'Best Arc Raiders Hacks', zh: 'Best Arc Raiders Hacks', hi: 'Best Arc Raiders Hacks', id: 'Best Arc Raiders Hacks', th: 'Best Arc Raiders Hacks', vi: 'Best Arc Raiders Hacks', uk: 'Найкращі Arc Raiders Hacks', cs: 'Nejlepší Arc Raiders Hacks', ro: 'Cele mai bune Arc Raiders Hacks', sv: 'Bästa Arc Raiders Hacks' },
	'aimbot-hack': { en: 'Arc Raiders Aimbot Hack', es: 'Arc Raiders Aimbot Hack', fr: 'Arc Raiders Aimbot Hack', de: 'Arc Raiders Aimbot Hack', pt: 'Arc Raiders Aimbot Hack', it: 'Arc Raiders Aimbot Hack', nl: 'Arc Raiders Aimbot Hack', pl: 'Arc Raiders Aimbot Hack', ru: 'Arc Raiders Aimbot Hack', tr: 'Arc Raiders Aimbot Hack', ar: 'Arc Raiders Aimbot Hack', ja: 'Arc Raiders Aimbot Hack', ko: 'Arc Raiders Aimbot Hack', zh: 'Arc Raiders Aimbot Hack', hi: 'Arc Raiders Aimbot Hack', id: 'Arc Raiders Aimbot Hack', th: 'Arc Raiders Aimbot Hack', vi: 'Arc Raiders Aimbot Hack', uk: 'Arc Raiders Aimbot Hack', cs: 'Arc Raiders Aimbot Hack', ro: 'Arc Raiders Aimbot Hack', sv: 'Arc Raiders Aimbot Hack' },
	'esp-hack': { en: 'Arc Raiders ESP Hack', es: 'Arc Raiders ESP Hack', fr: 'Arc Raiders ESP Hack', de: 'Arc Raiders ESP Hack', pt: 'Arc Raiders ESP Hack', it: 'Arc Raiders ESP Hack', nl: 'Arc Raiders ESP Hack', pl: 'Arc Raiders ESP Hack', ru: 'Arc Raiders ESP Hack', tr: 'Arc Raiders ESP Hack', ar: 'Arc Raiders ESP Hack', ja: 'Arc Raiders ESP Hack', ko: 'Arc Raiders ESP Hack', zh: 'Arc Raiders ESP Hack', hi: 'Arc Raiders ESP Hack', id: 'Arc Raiders ESP Hack', th: 'Arc Raiders ESP Hack', vi: 'Arc Raiders ESP Hack', uk: 'Arc Raiders ESP Hack', cs: 'Arc Raiders ESP Hack', ro: 'Arc Raiders ESP Hack', sv: 'Arc Raiders ESP Hack' },
	'unlock-all': { en: 'Arc Raiders Unlock All', es: 'Arc Raiders Unlock All', fr: 'Arc Raiders Unlock All', de: 'Arc Raiders Unlock All', pt: 'Arc Raiders Unlock All', it: 'Arc Raiders Unlock All', nl: 'Arc Raiders Unlock All', pl: 'Arc Raiders Unlock All', ru: 'Arc Raiders Unlock All', tr: 'Arc Raiders Unlock All', ar: 'Arc Raiders Unlock All', ja: 'Arc Raiders Unlock All', ko: 'Arc Raiders Unlock All', zh: 'Arc Raiders Unlock All', hi: 'Arc Raiders Unlock All', id: 'Arc Raiders Unlock All', th: 'Arc Raiders Unlock All', vi: 'Arc Raiders Unlock All', uk: 'Arc Raiders Unlock All', cs: 'Arc Raiders Unlock All', ro: 'Arc Raiders Unlock All', sv: 'Arc Raiders Unlock All' },
};

const CTA2_HREF = {
	'rust-esp': '/rust-wallhack/',
	'rust-aimbot': '/rust-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/undetected-arc-raiders-hacks/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/eac-bypass-rust/',
	wallhack: '/rust-esp/',
	radar: '/rust-esp/',
	'eac-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/undetected-arc-raiders-hacks/',
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
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Arc Raiders Hacks`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Arc Raiders Hacks — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for arcraidershacks.net and Arc Raiders licenses.`),
		imageAlt: `arc-raiders-hacks ${kind} ESP wallhack Aimbot legal page`,
		galleryTitle: `Arc Raiders Hacks ${kind} resources`,
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
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on arcraidershacks.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Arc Raiders terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@arcraidershacks.net',
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
