import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite gallery',
		subtitle:
			'Fortnite visuals from loadout builds, squad fights, and battle royale combat — paired with cheat tools that help players stay aware on the map.',
		lead:
			'Fortnite Cheats is built for Fortnite\'s BR loop: read the map, track enemy squads, grab loot, and survive the reboot van before the final circle closes in.',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Spot enemy players and squad outlines across Battle Royale island and Zero Build so you can choose fights and rotation routes with better intel.' },
			{ title: 'Loot & Contract Markers', copy: 'Highlight loot chests, chests, and high-tier loot without flooding the screen mid-match.' },
			{ title: 'Fortnite Aimbot Controls', copy: 'Tune smoothness, target priority, and hotkeys for AR, SMG, and sniper fights before you commit to a license.' },
		],
		updatesLabel: 'Fortnite cheat updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galería Fortnite',
		subtitle: 'Visuales de Fortnite con loadouts, peleas de escuadrón y combate battle royale — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Fortnite Cheats está pensado para el loop BR de Fortnite: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al reboot van.',
		highlights: [
			{ title: 'ESP de operadores y escuadrones', copy: 'Detecta operadores enemigos y contornos de escuadrón en Verdansk y Urzikstan para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y contratos', copy: 'Resalta loadouts, contratos y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Fortnite', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Fortnite Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galerie Fortnite',
		subtitle: 'Visuels Fortnite — loadouts, combats d\'escouade et battle royale — avec ESP, radar et Aimbot.',
		lead: 'Fortnite Cheats suit la boucle BR de Fortnite : lire la carte, suivre les escouades, loot et survivre au reboot van.',
		highlights: [
			{ title: 'ESP opérateurs & escouades', copy: 'Repérez les opérateurs ennemis sur Verdansk et Urzikstan pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & contrats', copy: 'Mettez en évidence loadouts, contrats et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Fortnite', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Fortnite Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite Galerie',
		subtitle: 'Fortnite-Bilder zu Loadouts, Squad-Kämpfen und Battle Royale — mit ESP, Radar und Aimbot.',
		lead: 'Fortnite Cheats passt zur BR-Schleife von Fortnite: Karte lesen, Gegner-Trupps tracken, looten und Gulag überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Verdansk und Urzikstan für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Fortnite Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Fortnite Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galeria Fortnite',
		subtitle: 'Visuais de Fortnite com loadouts, combates de esquadrão e battle royale — com ESP, radar e Aimbot.',
		lead: 'Fortnite Cheats segue o loop BR do Fortnite: ler o mapa, rastrear esquadrões, lootar e sobreviver ao reboot van.',
		highlights: [
			{ title: 'ESP de operadores e esquadrões', copy: 'Detecte operadores inimigos em Verdansk e Urzikstan para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e contratos', copy: 'Destaque loadouts, contratos e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Fortnite', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Fortnite Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galleria Fortnite',
		subtitle: 'Immagini Fortnite — loadout, scontri di squadra e battle royale — con ESP, radar e Aimbot.',
		lead: 'Fortnite Cheats è pensato per il loop BR di Fortnite: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al reboot van.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Verdansk e Urzikstan per scegliere i fight con più intel.' },
			{ title: 'Marker loot e contratti', copy: 'Evidenzia loadout, contratti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Fortnite', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Fortnite Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite galerij',
		subtitle: 'Fortnite-beelden van loadouts, squadgevechten en battle royale — met ESP, radar en Aimbot.',
		lead: 'Fortnite Cheats volgt de BR-loop van Fortnite: kaart lezen, vijandelijke squads volgen, looten en de reboot van overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Verdansk en Urzikstan voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Fortnite Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Fortnite Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galeria Fortnite',
		subtitle: 'Grafiki Fortnite — loadouty, walki drużynowe i battle royale — z ESP, radar i Aimbot.',
		lead: 'Fortnite Cheats pasuje do pętli BR Fortnite: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj reboot van.',
		highlights: [
			{ title: 'ESP playerów i drużyn', copy: 'Wykrywaj wrogich playerów na Verdansk i Urzikstan dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i kontraktów', copy: 'Podświetlaj loadouty, kontrakty i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Fortnite', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Fortnite Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Fortnite Cheats',
		title: 'Галерея Fortnite',
		subtitle: 'Визуалы Fortnite — лоадауты, бои отрядов и battle royale — с ESP, радаром и Aimbot.',
		lead: 'Fortnite Cheats создан для BR-цикла Fortnite: читать карту, отслеживать вражеские отряды, лут и выживать в reboot van.',
		highlights: [
			{ title: 'ESP операторов и отрядов', copy: 'Замечайте вражеских операторов на Verdansk и Urzikstan для лучших решений по ротации.' },
			{ title: 'Маркеры лута и контрактов', copy: 'Подсвечивайте loadout, контракты и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Fortnite', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Fortnite Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite galerisi',
		subtitle: 'Loadout, takım savaşları ve battle royale görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Fortnite Cheats, Fortnite BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve reboot van\'da hayatta kal.',
		highlights: [
			{ title: 'Operatör ve takım ESP', copy: 'Verdansk ve Urzikstan\'da düşman operatörleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Fortnite Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Fortnite Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Fortnite Cheats',
		title: 'معرض Fortnite',
		subtitle: 'صور Fortnite — loadouts ومعارك الفرق وbattle royale — مع ESP ورادار وAimbot.',
		lead: 'Fortnite Cheats مبني لحلقة BR في Fortnite: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في reboot van.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف المشغلين المعادين على Verdansk وUrzikstan لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والعقود', copy: 'أبرز loadouts والعقود واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Fortnite', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Fortnite Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのFortniteビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Fortnite CheatsはCoDのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてガルグを生き延びる。',
		highlights: [
			{ title: 'オペレーター＆スクワッドESP', copy: 'VerdanskとUrzikstanで敵オペレーターを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆契約マーカー', copy: 'ロードアウト、契約、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Fortniteエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Fortnite Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Fortnite 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Fortnite Cheats는 CoD BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, 굴라그 생존.',
		highlights: [
			{ title: '오퍼레이터 & 스쿼드 ESP', copy: 'Verdansk와 Urzikstan에서 적 오퍼레이터를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 계약 마커', copy: '로드아웃, 계약, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Fortnite 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Fortnite Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite 图库',
		subtitle: 'Fortnite 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Fortnite Cheats 为 CoD BR 循环设计：读图、追踪敌方小队、搜刮并在 reboot van 存活。',
		highlights: [
			{ title: '操作员与小队 ESP', copy: '在 Verdansk 和 Urzikstan 发现敌方操作员，做出更好的转点决策。' },
			{ title: '物资与合同标记', copy: '高亮配装、合同和高级物资，不遮挡屏幕。' },
			{ title: 'Fortnite 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Fortnite Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite गैलरी',
		subtitle: 'Loadout, squad fights और battle royale visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Fortnite Cheats CoD BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और reboot van survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Verdansk और Urzikstan पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Contract Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Fortnite Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Fortnite Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galeri Fortnite',
		subtitle: 'Visual Fortnite — loadout, pertempuran squad, dan battle royale — dengan ESP, radar, dan Aimbot.',
		lead: 'Fortnite Cheats untuk loop BR Fortnite: baca peta, lacak squad musuh, loot, dan selamat di reboot van.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Verdansk dan Urzikstan untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & kontrak', copy: 'Sorot loadout, kontrak, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Fortnite', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Fortnite Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Fortnite Cheats',
		title: 'แกลเลอรี Fortnite',
		subtitle: 'ภาพ Fortnite — loadout การต่อสู้ทีม และ battle royale — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Fortnite Cheats สำหรับลูป BR ของ Fortnite: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด reboot van',
		highlights: [
			{ title: 'ESP โอเปอเรเตอร์และทีม', copy: 'มองเห็นศัตรูบน Verdansk และ Urzikstan เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และสัญญา', copy: 'เน้น loadout สัญญาและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Fortnite', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Fortnite Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Fortnite Cheats',
		title: 'Thư viện Fortnite',
		subtitle: 'Hình ảnh Fortnite — loadout, chiến đấu squad và battle royale — với ESP, radar và Aimbot.',
		lead: 'Fortnite Cheats cho vòng BR Fortnite: đọc bản đồ, theo dõi squad địch, loot và sống sót reboot van.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Verdansk và Urzikstan để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & hợp đồng', copy: 'Làm nổi bật loadout, hợp đồng và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Fortnite', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Fortnite Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Fortnite Cheats',
		title: 'Галерея Fortnite',
		subtitle: 'Візуали Fortnite — loadout, бої загонів і battle royale — з ESP, радаром і Aimbot.',
		lead: 'Fortnite Cheats для BR-циклу Fortnite: читати карту, відстежувати ворожі загони, лут і виживати в reboot van.',
		highlights: [
			{ title: 'ESP операторів і загонів', copy: 'Помічайте ворожих операторів на Verdansk і Urzikstan для кращих ротацій.' },
			{ title: 'Маркери луту й контрактів', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Fortnite', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Fortnite Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galerie Fortnite',
		subtitle: 'Fortnite vizuály — loadouty, squad souboje a battle royale — s ESP, radarem a Aimbot.',
		lead: 'Fortnite Cheats pro BR smyčku Fortnite: číst mapu, sledovat nepřátelské squady, loot a přežít reboot van.',
		highlights: [
			{ title: 'ESP operátorů a squadů', copy: 'Spozorujte nepřátelské operátory na Verdansk a Urzikstan pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a kontraktů', copy: 'Zvýrazněte loadouty, kontrakty a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Fortnite', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Fortnite Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galerie Fortnite',
		subtitle: 'Vizualuri Fortnite — loadout, lupte de squad și battle royale — cu ESP, radar și Aimbot.',
		lead: 'Fortnite Cheats pentru bucla BR Fortnite: citește harta, urmărește squad-uri inamice, loot și supraviețuiește reboot van.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Verdansk și Urzikstan pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Fortnite', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Fortnite Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite galleri',
		subtitle: 'Fortnite-bilder — loadouts, squadstrider och battle royale — med ESP, radar och Aimbot.',
		lead: 'Fortnite Cheats för CoD:s BR-loop: läs kartan, spåra fiendesquads, loota och överlev reboot van.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeoperatörer på Verdansk och Urzikstan för bättre rotationsbeslut.' },
			{ title: 'Loot- & kontraktsmarkörer', copy: 'Markera loadout-drops, kontrakt och high-tier loot utan skärmklutter.' },
			{ title: 'Fortnite Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Fortnite Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
