#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'rust-esp'],
	['warzone-aimbot', 'rust-aimbot'],
	['ricochet', 'eac-bypass'],
	['undetected-warzone-cheats', 'undetected-rust-cheats'],
	['warzone-wallhack', 'rust-wallhack'],
	['warzone-radar-hack', 'rust-radar-hack'],
	['warzone-cheats-2026', 'rust-cheats-2026'],
	['ricochet-bypass', 'eac-bypass-rust'],
	['warzonescheats.net', 'islecheat.net'],
	['trucos-warzone', 'trucos-rust'],
	['triche-warzone', 'triche-rust'],
	['warzone-cheats', 'rust-cheats'],
	['cheats-warzone', 'cheats-rust'],
	['trucchi-warzone', 'trucchi-rust'],
	['cheaty-warzone', 'cheaty-rust'],
	['chity-warzone', 'chity-rust'],
	['chitov-warzone', 'chitov-rust'],
	['chitiv-warzone', 'chitiv-rust'],
	['cheatow-warzone', 'cheatow-rust'],
	['hile-warzone', 'hile-rust'],
	['warzone-hile', 'rust-hile'],
	['warzone-esp-chity', 'rust-esp-chity'],
	['warzone-aimbot-chity', 'rust-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-rust-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-rust-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-rust-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-rust'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-rust'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-rust-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-rust'],
	['cheats-warzone-nedetectabile', 'cheats-rust-nedetectabile'],
	['basta-warzone-cheats', 'basta-rust-cheats'],
	['eac-bypass-rust-trucos-warzone', 'eac-bypass-rust-trucos-rust'],
	['eac-bypass-rust-triche-warzone', 'eac-bypass-rust-triche-rust'],
	['eac-bypass-rust-cheats-warzone', 'eac-bypass-rust-cheats-rust'],
	['eac-bypass-rust-chity-warzone', 'eac-bypass-rust-chity-rust'],
	['eac-bypass-rust-warzone', 'eac-bypass-rust'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac-bypass': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich rust-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/rust-cheats-hero.webp',
	'rust-esp': '/images/rust-cheats-esp-wallhack.webp',
	'rust-aimbot': '/images/rust-cheats-aimbot-combat.webp',
	features: '/images/rust-cheats-package.webp',
	pricing: '/images/rust-cheats-cover.webp',
	setup: '/images/rust-loadout-builder.webp',
	updates: '/images/rust-header-art.webp',
	faq: '/images/rust-squad-fight.webp',
	support: '/images/rust-cheats-package.webp',
	undetected: '/images/rust-battle-royale-combat.webp',
	wallhack: '/images/rust-cheats-esp-wallhack.webp',
	radar: '/images/rust-player-esp.webp',
	'eac-bypass': '/images/rust-reboot-van-fight.webp',
	'cheats-2026': '/images/rust-cheats-hero.webp',
	privacy: '/images/rust-cheats-aimbot-combat.webp',
	refund: '/images/rust-cheats-cover.webp',
	terms: '/images/rust-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'rust-esp', 'rust-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'rust-esp' | 'rust-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/gulagFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
