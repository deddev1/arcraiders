#!/usr/bin/env node
/**
 * One-time rename: rust-* asset filenames → arc-raiders-* (separate canonical URLs).
 * Run from repo root: node scripts/rename-arc-raiders-assets.mjs
 */
import { rename, unlink } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const IMAGES = join(process.cwd(), 'public', 'images');
const VIDEOS = join(process.cwd(), 'public', 'videos');

/** basename without extension — old rust stem → new arc stem */
const STEM_MAP = {
	'rust-hacks-hero': 'arc-raiders-hero',
	'rust-esp-overlay': 'arc-raiders-esp-overlay',
	'rust-esp-bots': 'arc-raiders-wallhack',
	'rust-esp-hitbox': 'arc-raiders-aimbot',
	'rust-aimbot-menu': 'arc-raiders-menu',
	'rust-recoil-trainer': 'arc-raiders-combat',
	'rust-aimbot-ui': 'arc-raiders-aimbot-ui',
	'rust-wallhack-ui': 'arc-raiders-wallhack-ui',
	'rust-soft-aim-ui': 'arc-raiders-soft-aim-ui',
	'rust-radar-ui': 'arc-raiders-radar-ui',
	'rust-cheats-menu': 'arc-raiders-cheats-menu',
	'rust-hacks-cover': 'arc-raiders-cover',
	'rust-hacks-panel': 'arc-raiders-panel',
	'rust-hacks-status': 'arc-raiders-status',
};

const VIDEO_MAP = {
	'rust-hacks-hero-6s.mp4': 'arc-raiders-hero-6s.mp4',
	'rust-hacks-background.mp4': 'arc-raiders-background.mp4',
};

const REMOVE = [
	'rust-cheats-dashboard.webp',
	'rust-cheats-dashboard-480w.webp',
	'rust-cheats-dashboard-960w.webp',
	'rust-hacks-logo.webp',
	'zadeyo-logo-full.webp',
];

function mapFilename(name) {
	for (const [oldStem, newStem] of Object.entries(STEM_MAP)) {
		if (name === `${oldStem}.webp`) return `${newStem}.webp`;
		const variant = name.match(new RegExp(`^${oldStem}-(\\d+w)\\.webp$`));
		if (variant) return `${newStem}-${variant[1]}.webp`;
	}
	return null;
}

async function renameDir(dir, mapper) {
	const files = await readdir(dir);
	let renamed = 0;
	for (const file of files) {
		const target = mapper(file);
		if (!target || target === file) continue;
		await rename(join(dir, file), join(dir, target));
		console.log(`  ${file} → ${target}`);
		renamed += 1;
	}
	return renamed;
}

async function removeFiles(dir, names) {
	for (const file of names) {
		try {
			await unlink(join(dir, file));
			console.log(`  removed ${file}`);
		} catch {
			// already gone
		}
	}
}

console.log('Renaming images…');
const imageCount = await renameDir(IMAGES, mapFilename);
console.log(`Renamed ${imageCount} image files.`);

console.log('Renaming videos…');
let videoCount = 0;
for (const [from, to] of Object.entries(VIDEO_MAP)) {
	try {
		await rename(join(VIDEOS, from), join(VIDEOS, to));
		console.log(`  ${from} → ${to}`);
		videoCount += 1;
	} catch {
		// already renamed
	}
}

console.log('Removing duplicate/unused assets…');
await removeFiles(IMAGES, REMOVE);

console.log('Done.');
