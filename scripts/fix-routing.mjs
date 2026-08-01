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
	['warzone-esp', 'fortnite-esp'],
	['warzone-aimbot', 'fortnite-aimbot'],
	['ricochet', 'eac-bypass'],
	['undetected-warzone-cheats', 'undetected-fortnite-cheats'],
	['warzone-wallhack', 'fortnite-wallhack'],
	['warzone-radar-hack', 'fortnite-radar-hack'],
	['warzone-cheats-2026', 'fortnite-cheats-2026'],
	['ricochet-bypass', 'eac-bypass-fortnite'],
	['warzonescheats.net', 'fortnitehack.net'],
	['trucos-warzone', 'trucos-fortnite'],
	['triche-warzone', 'triche-fortnite'],
	['warzone-cheats', 'fortnite-cheats'],
	['cheats-warzone', 'cheats-fortnite'],
	['trucchi-warzone', 'trucchi-fortnite'],
	['cheaty-warzone', 'cheaty-fortnite'],
	['chity-warzone', 'chity-fortnite'],
	['chitov-warzone', 'chitov-fortnite'],
	['chitiv-warzone', 'chitiv-fortnite'],
	['cheatow-warzone', 'cheatow-fortnite'],
	['hile-warzone', 'hile-fortnite'],
	['warzone-hile', 'fortnite-hile'],
	['warzone-esp-chity', 'fortnite-esp-chity'],
	['warzone-aimbot-chity', 'fortnite-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-fortnite-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-fortnite-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-fortnite-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-fortnite'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-fortnite'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-fortnite-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-fortnite'],
	['cheats-warzone-nedetectabile', 'cheats-fortnite-nedetectabile'],
	['basta-warzone-cheats', 'basta-fortnite-cheats'],
	['eac-bypass-fortnite-trucos-warzone', 'eac-bypass-fortnite-trucos-fortnite'],
	['eac-bypass-fortnite-triche-warzone', 'eac-bypass-fortnite-triche-fortnite'],
	['eac-bypass-fortnite-cheats-warzone', 'eac-bypass-fortnite-cheats-fortnite'],
	['eac-bypass-fortnite-chity-warzone', 'eac-bypass-fortnite-chity-fortnite'],
	['eac-bypass-fortnite-warzone', 'eac-bypass-fortnite'],
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
	const heroImages = `/** Hero image per page topic — keyword-rich fortnite-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/fortnite-cheats-hero.webp',
	'fortnite-esp': '/images/fortnite-cheats-esp-wallhack.webp',
	'fortnite-aimbot': '/images/fortnite-cheats-aimbot-combat.webp',
	features: '/images/fortnite-cheats-package.webp',
	pricing: '/images/fortnite-cheats-cover.webp',
	setup: '/images/fortnite-loadout-builder.webp',
	updates: '/images/fortnite-header-art.webp',
	faq: '/images/fortnite-squad-fight.webp',
	support: '/images/fortnite-cheats-package.webp',
	undetected: '/images/fortnite-battle-royale-combat.webp',
	wallhack: '/images/fortnite-cheats-esp-wallhack.webp',
	radar: '/images/fortnite-operator-esp.webp',
	'eac-bypass': '/images/fortnite-gulag-fight.webp',
	'cheats-2026': '/images/fortnite-cheats-hero.webp',
	privacy: '/images/fortnite-cheats-aimbot-combat.webp',
	refund: '/images/fortnite-cheats-cover.webp',
	terms: '/images/fortnite-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'fortnite-esp', 'fortnite-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'fortnite-esp' | 'fortnite-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/gulagFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
