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
			'Fortnite visuals from loadout builds, squad fights, and battle royale combat â€” paired with cheat tools that help players stay aware on the map.',
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
		title: 'GalerÃ­a Fortnite',
		subtitle: 'Visuales de Fortnite con loadouts, peleas de escuadrÃ³n y combate battle royale â€” junto a herramientas ESP, radar y Aimbot.',
		lead: 'Fortnite Cheats estÃ¡ pensado para el loop BR de Fortnite: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al reboot van.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrÃ³n en Battle Royale island y Zero Build para elegir peleas con mejor informaciÃ³n.' },
			{ title: 'Marcadores de loot y contratos', copy: 'Resalta loadouts, contratos y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Fortnite', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Fortnite Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galerie Fortnite',
		subtitle: 'Visuels Fortnite â€” loadouts, combats d\'escouade et battle royale â€” avec ESP, radar et Aimbot.',
		lead: 'Fortnite Cheats suit la boucle BR de Fortnite : lire la carte, suivre les escouades, loot et survivre au reboot van.',
		highlights: [
			{ title: 'ESP opÃ©rateurs & escouades', copy: 'RepÃ©rez les opÃ©rateurs ennemis sur Verdansk et Urzikstan pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & contrats', copy: 'Mettez en Ã©vidence loadouts, contrats et loot haut niveau sans encombrer l\'Ã©cran.' },
			{ title: 'RÃ©glages Aimbot Fortnite', copy: 'Ajustez fluiditÃ©, prioritÃ© cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises Ã  jour Fortnite Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite Galerie',
		subtitle: 'Fortnite-Bilder zu Loadouts, Squad-KÃ¤mpfen und Battle Royale â€” mit ESP, Radar und Aimbot.',
		lead: 'Fortnite Cheats passt zur BR-Schleife von Fortnite: Karte lesen, Gegner-Trupps tracken, looten und Gulag Ã¼berleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Battle Royale island und Zero Build fÃ¼r bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, VertrÃ¤ge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Fortnite Aimbot Steuerung', copy: 'Feinjustiere GlÃ¤tte, ZielprioritÃ¤t und Hotkeys fÃ¼r AR, SMG und Sniper.' },
		],
		updatesLabel: 'Fortnite Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galeria Fortnite',
		subtitle: 'Visuais de Fortnite com loadouts, combates de esquadrÃ£o e battle royale â€” com ESP, radar e Aimbot.',
		lead: 'Fortnite Cheats segue o loop BR do Fortnite: ler o mapa, rastrear esquadrÃµes, lootar e sobreviver ao reboot van.',
		highlights: [
			{ title: 'ESP de players e esquadrÃµes', copy: 'Detecte players inimigos em Battle Royale island e Zero Build para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e contratos', copy: 'Destaque loadouts, contratos e loot de alto nÃ­vel sem poluir a tela.' },
			{ title: 'Controles Aimbot Fortnite', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'AtualizaÃ§Ãµes Fortnite Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galleria Fortnite',
		subtitle: 'Immagini Fortnite â€” loadout, scontri di squadra e battle royale â€” con ESP, radar e Aimbot.',
		lead: 'Fortnite Cheats Ã¨ pensato per il loop BR di Fortnite: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al reboot van.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Battle Royale island e Zero Build per scegliere i fight con piÃ¹ intel.' },
			{ title: 'Marker loot e contratti', copy: 'Evidenzia loadout, contratti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Fortnite', copy: 'Regola smoothness, prioritÃ  bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Fortnite Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite galerij',
		subtitle: 'Fortnite-beelden van loadouts, squadgevechten en battle royale â€” met ESP, radar en Aimbot.',
		lead: 'Fortnite Cheats volgt de BR-loop van Fortnite: kaart lezen, vijandelijke squads volgen, looten en de reboot van overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Battle Royale island en Zero Build voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Fortnite Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Fortnite Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galeria Fortnite',
		subtitle: 'Grafiki Fortnite â€” loadouty, walki druÅ¼ynowe i battle royale â€” z ESP, radar i Aimbot.',
		lead: 'Fortnite Cheats pasuje do pÄ™tli BR Fortnite: czytaj mapÄ™, Å›ledÅº wrogie druÅ¼yny, lootuj i przeÅ¼yj reboot van.',
		highlights: [
			{ title: 'ESP playerÃ³w i druÅ¼yn', copy: 'Wykrywaj wrogich playerÃ³w na Battle Royale island i Zero Build dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i kontraktÃ³w', copy: 'PodÅ›wietlaj loadouty, kontrakty i wysokiej klasy loot bez zaÅ›miecania ekranu.' },
			{ title: 'Sterowanie Aimbot Fortnite', copy: 'Dostosuj pÅ‚ynnoÅ›Ä‡, priorytet celu i skrÃ³ty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Fortnite Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Fortnite Cheats',
		title: 'Ð“Ð°Ð»ÐµÑ€ÐµÑ Fortnite',
		subtitle: 'Ð’Ð¸Ð·ÑƒÐ°Ð»Ñ‹ Fortnite â€” Ð»Ð¾Ð°Ð´Ð°ÑƒÑ‚Ñ‹, Ð±Ð¾Ð¸ Ð¾Ñ‚Ñ€ÑÐ´Ð¾Ð² Ð¸ battle royale â€” Ñ ESP, Ñ€Ð°Ð´Ð°Ñ€Ð¾Ð¼ Ð¸ Aimbot.',
		lead: 'Fortnite Cheats ÑÐ¾Ð·Ð´Ð°Ð½ Ð´Ð»Ñ BR-Ñ†Ð¸ÐºÐ»Ð° Fortnite: Ñ‡Ð¸Ñ‚Ð°Ñ‚ÑŒ ÐºÐ°Ñ€Ñ‚Ñƒ, Ð¾Ñ‚ÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ñ‚ÑŒ Ð²Ñ€Ð°Ð¶ÐµÑÐºÐ¸Ðµ Ð¾Ñ‚Ñ€ÑÐ´Ñ‹, Ð»ÑƒÑ‚ Ð¸ Ð²Ñ‹Ð¶Ð¸Ð²Ð°Ñ‚ÑŒ Ð² reboot van.',
		highlights: [
			{ title: 'ESP Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð¾Ð² Ð¸ Ð¾Ñ‚Ñ€ÑÐ´Ð¾Ð²', copy: 'Ð—Ð°Ð¼ÐµÑ‡Ð°Ð¹Ñ‚Ðµ Ð²Ñ€Ð°Ð¶ÐµÑÐºÐ¸Ñ… Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ð¾Ð² Ð½Ð° Verdansk Ð¸ Urzikstan Ð´Ð»Ñ Ð»ÑƒÑ‡ÑˆÐ¸Ñ… Ñ€ÐµÑˆÐµÐ½Ð¸Ð¹ Ð¿Ð¾ Ñ€Ð¾Ñ‚Ð°Ñ†Ð¸Ð¸.' },
			{ title: 'ÐœÐ°Ñ€ÐºÐµÑ€Ñ‹ Ð»ÑƒÑ‚Ð° Ð¸ ÐºÐ¾Ð½Ñ‚Ñ€Ð°ÐºÑ‚Ð¾Ð²', copy: 'ÐŸÐ¾Ð´ÑÐ²ÐµÑ‡Ð¸Ð²Ð°Ð¹Ñ‚Ðµ loadout, ÐºÐ¾Ð½Ñ‚Ñ€Ð°ÐºÑ‚Ñ‹ Ð¸ Ð²Ñ‹ÑÐ¾ÐºÐ¸Ð¹ Ð»ÑƒÑ‚ Ð±ÐµÐ· Ð¿ÐµÑ€ÐµÐ³Ñ€ÑƒÐ·ÐºÐ¸ ÑÐºÑ€Ð°Ð½Ð°.' },
			{ title: 'ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Aimbot Fortnite', copy: 'ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹Ñ‚Ðµ Ð¿Ð»Ð°Ð²Ð½Ð¾ÑÑ‚ÑŒ, Ð¿Ñ€Ð¸Ð¾Ñ€Ð¸Ñ‚ÐµÑ‚ Ñ†ÐµÐ»Ð¸ Ð¸ Ð³Ð¾Ñ€ÑÑ‡Ð¸Ðµ ÐºÐ»Ð°Ð²Ð¸ÑˆÐ¸ Ð´Ð»Ñ AR, SMG Ð¸ ÑÐ½Ð°Ð¹Ð¿ÐµÑ€ÐºÐ¸.' },
		],
		updatesLabel: 'ÐžÐ±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ Fortnite Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite galerisi',
		subtitle: 'Loadout, takÄ±m savaÅŸlarÄ± ve battle royale gÃ¶rselleri â€” ESP, radar ve Aimbot ile.',
		lead: 'Fortnite Cheats, Fortnite BR dÃ¶ngÃ¼sÃ¼ iÃ§in: haritayÄ± oku, dÃ¼ÅŸman takÄ±mlarÄ± izle, loot al ve reboot van\'da hayatta kal.',
		highlights: [
			{ title: 'OperatÃ¶r ve takÄ±m ESP', copy: 'Battle Royale island ve Zero Build\'da dÃ¼ÅŸman operatÃ¶rleri gÃ¶rerek daha iyi rotasyon kararlarÄ± alÄ±n.' },
			{ title: 'Loot ve kontrat iÅŸaretleri', copy: 'Loadout, kontrat ve Ã¼st seviye loot\'u ekranÄ± doldurmadan vurgulayÄ±n.' },
			{ title: 'Fortnite Aimbot kontrolleri', copy: 'AR, SMG ve sniper iÃ§in yumuÅŸaklÄ±k, hedef Ã¶nceliÄŸi ve kÄ±sayollarÄ± ayarlayÄ±n.' },
		],
		updatesLabel: 'Fortnite Cheats gÃ¼ncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Fortnite Cheats',
		title: 'Ù…Ø¹Ø±Ø¶ Fortnite',
		subtitle: 'ØµÙˆØ± Fortnite â€” loadouts ÙˆÙ…Ø¹Ø§Ø±Ùƒ Ø§Ù„ÙØ±Ù‚ Ùˆbattle royale â€” Ù…Ø¹ ESP ÙˆØ±Ø§Ø¯Ø§Ø± ÙˆAimbot.',
		lead: 'Fortnite Cheats Ù…Ø¨Ù†ÙŠ Ù„Ø­Ù„Ù‚Ø© BR ÙÙŠ Fortnite: Ù‚Ø±Ø§Ø¡Ø© Ø§Ù„Ø®Ø±ÙŠØ·Ø©ØŒ ØªØªØ¨Ø¹ Ø§Ù„ÙØ±Ù‚ØŒ Ø¬Ù…Ø¹ Ø§Ù„Ù„ÙˆØª ÙˆØ§Ù„Ù†Ø¬Ø§Ø© ÙÙŠ reboot van.',
		highlights: [
			{ title: 'ESP Ù„Ù„Ù…Ø´ØºÙ„ÙŠÙ† ÙˆØ§Ù„ÙØ±Ù‚', copy: 'Ø§ÙƒØªØ´Ù Ø§Ù„Ù…Ø´ØºÙ„ÙŠÙ† Ø§Ù„Ù…Ø¹Ø§Ø¯ÙŠÙ† Ø¹Ù„Ù‰ Verdansk ÙˆUrzikstan Ù„Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ù‚ØªØ§Ù„Ø§Øª Ø¨Ø°ÙƒØ§Ø¡.' },
			{ title: 'Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„Ù„ÙˆØª ÙˆØ§Ù„Ø¹Ù‚ÙˆØ¯', copy: 'Ø£Ø¨Ø±Ø² loadouts ÙˆØ§Ù„Ø¹Ù‚ÙˆØ¯ ÙˆØ§Ù„Ù„ÙˆØª Ø§Ù„Ø¹Ø§Ù„ÙŠ Ø¯ÙˆÙ† Ø§Ø²Ø¯Ø­Ø§Ù… Ø§Ù„Ø´Ø§Ø´Ø©.' },
			{ title: 'ØªØ­ÙƒÙ… Aimbot Fortnite', copy: 'Ø§Ø¶Ø¨Ø· Ø§Ù„Ù†Ø¹ÙˆÙ…Ø© ÙˆØ£ÙˆÙ„ÙˆÙŠØ© Ø§Ù„Ù‡Ø¯Ù ÙˆØ§Ù„Ø§Ø®ØªØµØ§Ø±Ø§Øª Ù„Ù„Ù€ AR ÙˆSMG ÙˆØ§Ù„Ù‚Ù†Ø§Øµ.' },
		],
		updatesLabel: 'ØªØ­Ø¯ÙŠØ«Ø§Øª Fortnite Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite ã‚®ãƒ£ãƒ©ãƒªãƒ¼',
		subtitle: 'ãƒ­ãƒ¼ãƒ‰ã‚¢ã‚¦ãƒˆã€ã‚¹ã‚¯ãƒ¯ãƒƒãƒ‰æˆ¦ã€BRã‚³ãƒ³ãƒãƒƒãƒˆã®Fortniteãƒ“ã‚¸ãƒ¥ã‚¢ãƒ« â€” ESPã€ãƒ¬ãƒ¼ãƒ€ãƒ¼ã€ã‚¨ã‚¤ãƒ ãƒœãƒƒãƒˆä»˜ãã€‚',
		lead: 'Fortnite Cheatsã¯CoDã®BRãƒ«ãƒ¼ãƒ—å‘ã‘ï¼šãƒžãƒƒãƒ—ã‚’èª­ã¿ã€æ•µã‚¹ã‚¯ãƒ¯ãƒƒãƒ‰ã‚’è¿½è·¡ã—ã€ãƒ«ãƒ¼ãƒˆã—ã¦ã‚¬ãƒ«ã‚°ã‚’ç”Ÿãå»¶ã³ã‚‹ã€‚',
		highlights: [
			{ title: 'ã‚ªãƒšãƒ¬ãƒ¼ã‚¿ãƒ¼ï¼†ã‚¹ã‚¯ãƒ¯ãƒƒãƒ‰ESP', copy: 'Verdanskã¨Urzikstanã§æ•µã‚ªãƒšãƒ¬ãƒ¼ã‚¿ãƒ¼ã‚’æŠŠæ¡ã—ã€ãƒ­ãƒ¼ãƒ†åˆ¤æ–­ã‚’æ”¹å–„ã€‚' },
			{ title: 'ãƒ«ãƒ¼ãƒˆï¼†å¥‘ç´„ãƒžãƒ¼ã‚«ãƒ¼', copy: 'ãƒ­ãƒ¼ãƒ‰ã‚¢ã‚¦ãƒˆã€å¥‘ç´„ã€é«˜ãƒ†ã‚£ã‚¢ãƒ«ãƒ¼ãƒˆã‚’ç”»é¢ã‚’åŸ‹ã‚ãšã«è¡¨ç¤ºã€‚' },
			{ title: 'Fortniteã‚¨ã‚¤ãƒ ãƒœãƒƒãƒˆè¨­å®š', copy: 'ARã€SMGã€ã‚¹ãƒŠã‚¤ãƒ‘ãƒ¼å‘ã‘ã«ã‚¹ãƒ ãƒ¼ã‚ºã•ã€ã‚¿ãƒ¼ã‚²ãƒƒãƒˆå„ªå…ˆåº¦ã€ãƒ›ãƒƒãƒˆã‚­ãƒ¼ã‚’èª¿æ•´ã€‚' },
		],
		updatesLabel: 'Fortnite Cheatsæ›´æ–°',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite ê°¤ëŸ¬ë¦¬',
		subtitle: 'ë¡œë“œì•„ì›ƒ, ìŠ¤ì¿¼ë“œ ì „íˆ¬, BR ì»´ë±ƒ Fortnite ë¹„ì£¼ì–¼ â€” ESP, ë ˆì´ë”, ì—ìž„ë´‡ í¬í•¨.',
		lead: 'Fortnite CheatsëŠ” CoD BR ë£¨í”„ìš©: ë§µ ì½ê¸°, ì  ìŠ¤ì¿¼ë“œ ì¶”ì , ë£¨íŠ¸ ìˆ˜ì§‘, êµ´ë¼ê·¸ ìƒì¡´.',
		highlights: [
			{ title: 'ì˜¤í¼ë ˆì´í„° & ìŠ¤ì¿¼ë“œ ESP', copy: 'Verdanskì™€ Urzikstanì—ì„œ ì  ì˜¤í¼ë ˆì´í„°ë¥¼ íŒŒì•…í•´ ë¡œí…Œì´ì…˜ ê²°ì •ì„ ê°œì„ .' },
			{ title: 'ë£¨íŠ¸ & ê³„ì•½ ë§ˆì»¤', copy: 'ë¡œë“œì•„ì›ƒ, ê³„ì•½, ê³ í‹°ì–´ ë£¨íŠ¸ë¥¼ í™”ë©´ì„ ê°€ë¦¬ì§€ ì•Šê³  ê°•ì¡°.' },
			{ title: 'Fortnite ì—ìž„ë´‡ ì»¨íŠ¸ë¡¤', copy: 'AR, SMG, ìŠ¤ë‚˜ì´í¼ìš© ë¶€ë“œëŸ¬ì›€, íƒ€ê²Ÿ ìš°ì„ ìˆœìœ„, ë‹¨ì¶•í‚¤ ì¡°ì •.' },
		],
		updatesLabel: 'Fortnite Cheats ì—…ë°ì´íŠ¸',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite å›¾åº“',
		subtitle: 'Fortnite è§†è§‰ â€” é…è£…ã€å°é˜Ÿæˆ˜æ–—å’Œå¤§é€ƒæ€ â€” é…åˆ ESPã€é›·è¾¾å’Œè‡ªçž„ã€‚',
		lead: 'Fortnite Cheats ä¸º CoD BR å¾ªçŽ¯è®¾è®¡ï¼šè¯»å›¾ã€è¿½è¸ªæ•Œæ–¹å°é˜Ÿã€æœåˆ®å¹¶åœ¨ reboot van å­˜æ´»ã€‚',
		highlights: [
			{ title: 'æ“ä½œå‘˜ä¸Žå°é˜Ÿ ESP', copy: 'åœ¨ Verdansk å’Œ Urzikstan å‘çŽ°æ•Œæ–¹æ“ä½œå‘˜ï¼Œåšå‡ºæ›´å¥½çš„è½¬ç‚¹å†³ç­–ã€‚' },
			{ title: 'ç‰©èµ„ä¸ŽåˆåŒæ ‡è®°', copy: 'é«˜äº®é…è£…ã€åˆåŒå’Œé«˜çº§ç‰©èµ„ï¼Œä¸é®æŒ¡å±å¹•ã€‚' },
			{ title: 'Fortnite è‡ªçž„æŽ§åˆ¶', copy: 'è°ƒæ•´ ARã€SMG å’Œç‹™å‡»çš„å¹³æ»‘åº¦ã€ç›®æ ‡ä¼˜å…ˆçº§å’Œçƒ­é”®ã€‚' },
		],
		updatesLabel: 'Fortnite Cheats æ›´æ–°',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite à¤—à¥ˆà¤²à¤°à¥€',
		subtitle: 'Loadout, squad fights à¤”à¤° battle royale visuals â€” ESP, radar à¤”à¤° Aimbot à¤•à¥‡ à¤¸à¤¾à¤¥à¥¤',
		lead: 'Fortnite Cheats CoD BR loop à¤•à¥‡ à¤²à¤¿à¤: map à¤ªà¤¢à¤¼à¥‡à¤‚, enemy squads track à¤•à¤°à¥‡à¤‚, loot à¤•à¤°à¥‡à¤‚ à¤”à¤° reboot van survive à¤•à¤°à¥‡à¤‚à¥¤',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Verdansk à¤”à¤° Urzikstan à¤ªà¤° enemy players spot à¤•à¤°à¥‡à¤‚ à¤¬à¥‡à¤¹à¤¤à¤° rotation decisions à¤•à¥‡ à¤²à¤¿à¤à¥¤' },
			{ title: 'Loot & Contract Markers', copy: 'Loadout drops, chests à¤”à¤° high-tier loot highlight à¤•à¤°à¥‡à¤‚ screen clutter à¤•à¥‡ à¤¬à¤¿à¤¨à¤¾à¥¤' },
			{ title: 'Fortnite Aimbot Controls', copy: 'AR, SMG à¤”à¤° sniper à¤•à¥‡ à¤²à¤¿à¤ smoothness, target priority à¤”à¤° hotkeys tune à¤•à¤°à¥‡à¤‚à¥¤' },
		],
		updatesLabel: 'Fortnite Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galeri Fortnite',
		subtitle: 'Visual Fortnite â€” loadout, pertempuran squad, dan battle royale â€” dengan ESP, radar, dan Aimbot.',
		lead: 'Fortnite Cheats untuk loop BR Fortnite: baca peta, lacak squad musuh, loot, dan selamat di reboot van.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Battle Royale island dan Zero Build untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & kontrak', copy: 'Sorot loadout, kontrak, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Fortnite', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Fortnite Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Fortnite Cheats',
		title: 'à¹à¸à¸¥à¹€à¸¥à¸­à¸£à¸µ Fortnite',
		subtitle: 'à¸ à¸²à¸ž Fortnite â€” loadout à¸à¸²à¸£à¸•à¹ˆà¸­à¸ªà¸¹à¹‰à¸—à¸µà¸¡ à¹à¸¥à¸° battle royale â€” à¸žà¸£à¹‰à¸­à¸¡ ESP à¹€à¸£à¸”à¸²à¸£à¹Œà¹à¸¥à¸° Aimbot',
		lead: 'Fortnite Cheats à¸ªà¸³à¸«à¸£à¸±à¸šà¸¥à¸¹à¸› BR à¸‚à¸­à¸‡ Fortnite: à¸­à¹ˆà¸²à¸™à¹à¸œà¸™à¸—à¸µà¹ˆ à¸•à¸´à¸”à¸•à¸²à¸¡à¸—à¸µà¸¡à¸¨à¸±à¸•à¸£à¸¹ à¹€à¸à¹‡à¸š loot à¹à¸¥à¸°à¸£à¸­à¸” reboot van',
		highlights: [
			{ title: 'ESP à¹‚à¸­à¹€à¸›à¸­à¹€à¸£à¹€à¸•à¸­à¸£à¹Œà¹à¸¥à¸°à¸—à¸µà¸¡', copy: 'à¸¡à¸­à¸‡à¹€à¸«à¹‡à¸™à¸¨à¸±à¸•à¸£à¸¹à¸šà¸™ Verdansk à¹à¸¥à¸° Urzikstan à¹€à¸žà¸·à¹ˆà¸­à¸•à¸±à¸”à¸ªà¸´à¸™à¹ƒà¸ˆà¸«à¸¡à¸¸à¸™à¹€à¸§à¸µà¸¢à¸™à¹„à¸”à¹‰à¸”à¸µà¸‚à¸¶à¹‰à¸™' },
			{ title: 'à¸¡à¸²à¸£à¹Œà¸à¹€à¸à¸­à¸£à¹Œ loot à¹à¸¥à¸°à¸ªà¸±à¸à¸à¸²', copy: 'à¹€à¸™à¹‰à¸™ loadout à¸ªà¸±à¸à¸à¸²à¹à¸¥à¸° loot à¸£à¸°à¸”à¸±à¸šà¸ªà¸¹à¸‡à¹‚à¸”à¸¢à¹„à¸¡à¹ˆà¸£à¸à¸«à¸™à¹‰à¸²à¸ˆà¸­' },
			{ title: 'à¸„à¸§à¸šà¸„à¸¸à¸¡ Aimbot Fortnite', copy: 'à¸›à¸£à¸±à¸šà¸„à¸§à¸²à¸¡à¸™à¸¸à¹ˆà¸¡ à¸¥à¸³à¸”à¸±à¸šà¹€à¸›à¹‰à¸²à¸«à¸¡à¸²à¸¢ à¹à¸¥à¸° hotkey à¸ªà¸³à¸«à¸£à¸±à¸š AR SMG à¹à¸¥à¸° sniper' },
		],
		updatesLabel: 'à¸­à¸±à¸›à¹€à¸”à¸• Fortnite Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Fortnite Cheats',
		title: 'ThÆ° viá»‡n Fortnite',
		subtitle: 'HÃ¬nh áº£nh Fortnite â€” loadout, chiáº¿n Ä‘áº¥u squad vÃ  battle royale â€” vá»›i ESP, radar vÃ  Aimbot.',
		lead: 'Fortnite Cheats cho vÃ²ng BR Fortnite: Ä‘á»c báº£n Ä‘á»“, theo dÃµi squad Ä‘á»‹ch, loot vÃ  sá»‘ng sÃ³t reboot van.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'PhÃ¡t hiá»‡n player Ä‘á»‹ch trÃªn Verdansk vÃ  Urzikstan Ä‘á»ƒ quyáº¿t Ä‘á»‹nh rotate tá»‘t hÆ¡n.' },
			{ title: 'ÄÃ¡nh dáº¥u loot & há»£p Ä‘á»“ng', copy: 'LÃ m ná»•i báº­t loadout, há»£p Ä‘á»“ng vÃ  loot cao cáº¥p mÃ  khÃ´ng che mÃ n hÃ¬nh.' },
			{ title: 'Äiá»u khiá»ƒn Aimbot Fortnite', copy: 'Tinh chá»‰nh Ä‘á»™ mÆ°á»£t, Æ°u tiÃªn má»¥c tiÃªu vÃ  phÃ­m táº¯t cho AR, SMG vÃ  sniper.' },
		],
		updatesLabel: 'Cáº­p nháº­t Fortnite Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Fortnite Cheats',
		title: 'Ð“Ð°Ð»ÐµÑ€ÐµÑ Fortnite',
		subtitle: 'Ð’Ñ–Ð·ÑƒÐ°Ð»Ð¸ Fortnite â€” loadout, Ð±Ð¾Ñ— Ð·Ð°Ð³Ð¾Ð½Ñ–Ð² Ñ– battle royale â€” Ð· ESP, Ñ€Ð°Ð´Ð°Ñ€Ð¾Ð¼ Ñ– Aimbot.',
		lead: 'Fortnite Cheats Ð´Ð»Ñ BR-Ñ†Ð¸ÐºÐ»Ñƒ Fortnite: Ñ‡Ð¸Ñ‚Ð°Ñ‚Ð¸ ÐºÐ°Ñ€Ñ‚Ñƒ, Ð²Ñ–Ð´ÑÑ‚ÐµÐ¶ÑƒÐ²Ð°Ñ‚Ð¸ Ð²Ð¾Ñ€Ð¾Ð¶Ñ– Ð·Ð°Ð³Ð¾Ð½Ð¸, Ð»ÑƒÑ‚ Ñ– Ð²Ð¸Ð¶Ð¸Ð²Ð°Ñ‚Ð¸ Ð² reboot van.',
		highlights: [
			{ title: 'ESP Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ñ–Ð² Ñ– Ð·Ð°Ð³Ð¾Ð½Ñ–Ð²', copy: 'ÐŸÐ¾Ð¼Ñ–Ñ‡Ð°Ð¹Ñ‚Ðµ Ð²Ð¾Ñ€Ð¾Ð¶Ð¸Ñ… Ð¾Ð¿ÐµÑ€Ð°Ñ‚Ð¾Ñ€Ñ–Ð² Ð½Ð° Verdansk Ñ– Urzikstan Ð´Ð»Ñ ÐºÑ€Ð°Ñ‰Ð¸Ñ… Ñ€Ð¾Ñ‚Ð°Ñ†Ñ–Ð¹.' },
			{ title: 'ÐœÐ°Ñ€ÐºÐµÑ€Ð¸ Ð»ÑƒÑ‚Ñƒ Ð¹ ÐºÐ¾Ð½Ñ‚Ñ€Ð°ÐºÑ‚Ñ–Ð²', copy: 'ÐŸÑ–Ð´ÑÐ²Ñ–Ñ‡ÑƒÐ¹Ñ‚Ðµ loadout, ÐºÐ¾Ð½Ñ‚Ñ€Ð°ÐºÑ‚Ð¸ Ñ‚Ð° Ð²Ð¸ÑÐ¾ÐºÐ¸Ð¹ Ð»ÑƒÑ‚ Ð±ÐµÐ· Ð¿ÐµÑ€ÐµÐ²Ð°Ð½Ñ‚Ð°Ð¶ÐµÐ½Ð½Ñ ÐµÐºÑ€Ð°Ð½Ð°.' },
			{ title: 'ÐÐ°Ð»Ð°ÑˆÑ‚ÑƒÐ²Ð°Ð½Ð½Ñ Aimbot Fortnite', copy: 'ÐÐ°Ð»Ð°ÑˆÑ‚ÑƒÐ¹Ñ‚Ðµ Ð¿Ð»Ð°Ð²Ð½Ñ–ÑÑ‚ÑŒ, Ð¿Ñ€Ñ–Ð¾Ñ€Ð¸Ñ‚ÐµÑ‚ Ñ†Ñ–Ð»Ñ– Ñ‚Ð° Ð³Ð°Ñ€ÑÑ‡Ñ– ÐºÐ»Ð°Ð²Ñ–ÑˆÑ– Ð´Ð»Ñ AR, SMG Ñ– ÑÐ½Ð°Ð¹Ð¿ÐµÑ€ÐºÐ¸.' },
		],
		updatesLabel: 'ÐžÐ½Ð¾Ð²Ð»ÐµÐ½Ð½Ñ Fortnite Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galerie Fortnite',
		subtitle: 'Fortnite vizuÃ¡ly â€” loadouty, squad souboje a battle royale â€” s ESP, radarem a Aimbot.',
		lead: 'Fortnite Cheats pro BR smyÄku Fortnite: ÄÃ­st mapu, sledovat nepÅ™Ã¡telskÃ© squady, loot a pÅ™eÅ¾Ã­t reboot van.',
		highlights: [
			{ title: 'ESP operÃ¡torÅ¯ a squadÅ¯', copy: 'Spozorujte nepÅ™Ã¡telskÃ© operÃ¡tory na Verdansk a Urzikstan pro lepÅ¡Ã­ rotaÄnÃ­ rozhodnutÃ­.' },
			{ title: 'Markery lootu a kontraktÅ¯', copy: 'ZvÃ½raznÄ›te loadouty, kontrakty a high-tier loot bez pÅ™eplnÄ›nÃ­ obrazovky.' },
			{ title: 'OvlÃ¡dÃ¡nÃ­ Aimbot Fortnite', copy: 'Nastavte smoothness, prioritu cÃ­le a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Fortnite Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Fortnite Cheats',
		title: 'Galerie Fortnite',
		subtitle: 'Vizualuri Fortnite â€” loadout, lupte de squad È™i battle royale â€” cu ESP, radar È™i Aimbot.',
		lead: 'Fortnite Cheats pentru bucla BR Fortnite: citeÈ™te harta, urmÄƒreÈ™te squad-uri inamice, loot È™i supravieÈ›uieÈ™te reboot van.',
		highlights: [
			{ title: 'ESP playeri È™i squad-uri', copy: 'DetecteazÄƒ playeri inamici pe Verdansk È™i Urzikstan pentru decizii de rotaÈ›ie mai bune.' },
			{ title: 'Markere loot È™i cheste', copy: 'EvidenÈ›iazÄƒ loadout-uri, cheste È™i loot de nivel Ã®nalt fÄƒrÄƒ a aglomera ecranul.' },
			{ title: 'Controale Aimbot Fortnite', copy: 'AjusteazÄƒ smoothness, prioritate È›intÄƒ È™i hotkeys pentru AR, SMG È™i sniper.' },
		],
		updatesLabel: 'ActualizÄƒri Fortnite Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Fortnite Cheats',
		title: 'Fortnite galleri',
		subtitle: 'Fortnite-bilder â€” loadouts, squadstrider och battle royale â€” med ESP, radar och Aimbot.',
		lead: 'Fortnite Cheats fÃ¶r CoD:s BR-loop: lÃ¤s kartan, spÃ¥ra fiendesquads, loota och Ã¶verlev reboot van.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeoperatÃ¶rer pÃ¥ Battle Royale island och Zero Build fÃ¶r bÃ¤ttre rotationsbeslut.' },
			{ title: 'Loot- & kontraktsmarkÃ¶rer', copy: 'Markera loadout-drops, kontrakt och high-tier loot utan skÃ¤rmklutter.' },
			{ title: 'Fortnite Aimbot-kontroller', copy: 'Justera smoothness, mÃ¥lprioritet och snabbtangenter fÃ¶r AR, SMG och sniper.' },
		],
		updatesLabel: 'Fortnite Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}

