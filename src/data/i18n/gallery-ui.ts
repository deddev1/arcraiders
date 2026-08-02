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
		eyebrow: 'Rust Cheats',
		title: 'Rust gallery',
		subtitle:
			'Rust visuals from loadout builds, squad fights, and survival combat — paired with cheat tools that help players stay aware on the map.',
		lead:
			'Rust Cheats is built for Rust\'s BR loop: read the map, track enemy squads, grab loot, and survive the monument before the final circle closes in.',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Spot enemy players and squad outlines across the island and monuments so you can choose fights and rotation routes with better intel.' },
			{ title: 'Loot & Chest Markers', copy: 'Highlight loot chests, chests, and high-tier loot without flooding the screen mid-match.' },
			{ title: 'Rust Aimbot Controls', copy: 'Tune smoothness, target priority, and hotkeys for AR, SMG, and sniper fights before you commit to a license.' },
		],
		updatesLabel: 'Rust cheat updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Rust Cheats',
		title: 'Galería Rust',
		subtitle: 'Visuales de Rust con loadouts, peleas de escuadrón y combate survival — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Rust Cheats está pensado para el loop BR de Rust: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al monument.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en the island y monuments para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Rust', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Rust Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Rust Cheats',
		title: 'Galerie Rust',
		subtitle: 'Visuels Rust — loadouts, combats d\'escouade et survival — avec ESP, radar et Aimbot.',
		lead: 'Rust Cheats suit la boucle BR de Rust : lire la carte, suivre les escouades, loot et survivre au monument.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur the island et monuments pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Rust', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Rust Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Rust Cheats',
		title: 'Rust Galerie',
		subtitle: 'Rust-Bilder zu Loadouts, Squad-Kämpfen und survival — mit ESP, Radar und Aimbot.',
		lead: 'Rust Cheats passt zur BR-Schleife von Rust: Karte lesen, Gegner-Trupps tracken, looten und Reboot van überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf the island und monuments für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Rust Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Rust Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Rust Cheats',
		title: 'Galeria Rust',
		subtitle: 'Visuais de Rust com loadouts, combates de esquadrão e survival — com ESP, radar e Aimbot.',
		lead: 'Rust Cheats segue o loop BR do Rust: ler o mapa, rastrear esquadrões, lootar e sobreviver ao monument.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em the island e monuments para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Rust', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Rust Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Rust Cheats',
		title: 'Galleria Rust',
		subtitle: 'Immagini Rust — loadout, scontri di squadra e survival — con ESP, radar e Aimbot.',
		lead: 'Rust Cheats è pensato per il loop BR di Rust: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al monument.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su the island e monuments per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Rust', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Rust Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Rust Cheats',
		title: 'Rust galerij',
		subtitle: 'Rust-beelden van loadouts, squadgevechten en survival — met ESP, radar en Aimbot.',
		lead: 'Rust Cheats volgt de BR-loop van Rust: kaart lezen, vijandelijke squads volgen, looten en de monument overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op the island en monuments voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Rust Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Rust Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Rust Cheats',
		title: 'Galeria Rust',
		subtitle: 'Grafiki Rust — loadouty, walki drużynowe i survival — z ESP, radar i Aimbot.',
		lead: 'Rust Cheats pasuje do pętli BR Rust: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj monument.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na the island i monuments dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Rust', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Rust Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Rust Cheats',
		title: 'Галерея Rust',
		subtitle: 'Визуалы Rust — лоадауты, бои отрядов и survival — с ESP, радаром и Aimbot.',
		lead: 'Rust Cheats создан для BR-цикла Rust: читать карту, отслеживать вражеские отряды, лут и выживать в monument.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на the island и monuments для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Rust', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Rust Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Rust Cheats',
		title: 'Rust galerisi',
		subtitle: 'Loadout, takım savaşları ve survival görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Rust Cheats, Rust BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve monument\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'the island ve monuments\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Rust Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Rust Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Rust Cheats',
		title: 'معرض Rust',
		subtitle: 'صور Rust — loadouts ومعارك الفرق وsurvival — مع ESP ورادار وAimbot.',
		lead: 'Rust Cheats مبني لحلقة BR في Rust: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في monument.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على the island وmonuments لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Rust', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Rust Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Rust Cheats',
		title: 'Rust ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのRustビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Rust CheatsはRustのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてmonumentを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'the islandとmonumentsで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Rustエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Rust Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Rust Cheats',
		title: 'Rust 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Rust 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Rust Cheats는 Rust BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, monument 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'the island와 monuments에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Rust 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Rust Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Rust Cheats',
		title: 'Rust 图库',
		subtitle: 'Rust 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Rust Cheats 为 Rust BR 循环设计：读图、追踪敌方小队、搜刮并在 monument 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 the island 和 monuments 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Rust 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Rust Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Rust Cheats',
		title: 'Rust गैलरी',
		subtitle: 'Loadout, squad fights और survival visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Rust Cheats Rust BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और monument survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'the island और monuments पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Rust Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Rust Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Rust Cheats',
		title: 'Galeri Rust',
		subtitle: 'Visual Rust — loadout, pertempuran squad, dan survival — dengan ESP, radar, dan Aimbot.',
		lead: 'Rust Cheats untuk loop BR Rust: baca peta, lacak squad musuh, loot, dan selamat di monument.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di the island dan monuments untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Rust', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Rust Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Rust Cheats',
		title: 'แกลเลอรี Rust',
		subtitle: 'ภาพ Rust — loadout การต่อสู้ทีม และ survival — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Rust Cheats สำหรับลูป BR ของ Rust: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด monument',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน the island และ monuments เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Rust', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Rust Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Rust Cheats',
		title: 'Thư viện Rust',
		subtitle: 'Hình ảnh Rust — loadout, chiến đấu squad và survival — với ESP, radar và Aimbot.',
		lead: 'Rust Cheats cho vòng BR Rust: đọc bản đồ, theo dõi squad địch, loot và sống sót monument.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên the island và monuments để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Rust', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Rust Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Rust Cheats',
		title: 'Галерея Rust',
		subtitle: 'Візуали Rust — loadout, бої загонів і survival — з ESP, радаром і Aimbot.',
		lead: 'Rust Cheats для BR-циклу Rust: читати карту, відстежувати ворожі загони, лут і виживати в monument.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на the island і monuments для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Rust', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Rust Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Rust Cheats',
		title: 'Galerie Rust',
		subtitle: 'Rust vizuály — loadouty, squad souboje a survival — s ESP, radarem a Aimbot.',
		lead: 'Rust Cheats pro BR smyčku Rust: číst mapu, sledovat nepřátelské squady, loot a přežít monument.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na the island a monuments pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Rust', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Rust Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Rust Cheats',
		title: 'Galerie Rust',
		subtitle: 'Vizualuri Rust — loadout, lupte de squad și survival — cu ESP, radar și Aimbot.',
		lead: 'Rust Cheats pentru bucla BR Rust: citește harta, urmărește squad-uri inamice, loot și supraviețuiește monument.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe the island și monuments pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Rust', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Rust Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Rust Cheats',
		title: 'Rust galleri',
		subtitle: 'Rust-bilder — loadouts, squadstrider och survival — med ESP, radar och Aimbot.',
		lead: 'Rust Cheats för Rust:s BR-loop: läs kartan, spåra fiendesquads, loota och överlev monument.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på the island och monuments för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Rust Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Rust Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
