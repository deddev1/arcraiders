import { mkdir, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const IGN_BASE = 'https://sm.ign.com/t/ign_latam/screenshot/default';
const imagesDir = path.resolve('public/images');
const publicDir = path.resolve('public');

/**
 * All IGN Warzone 2.0 gallery shots — filenames include primary SEO keywords
 * (call-of-duty, warzone, cheats, esp, aimbot, wallhack, etc.)
 */
const KEYWORD_ASSETS = [
	{ file: 'fortnite-cheats-hero.webp', slug: 'wz2-01_37rz' },
	{ file: 'fortnite-cheats-cover.webp', slug: 'wz2-02_mdcj' },
	{ file: 'fortnite-loadout-builder.webp', slug: 'wz2-03_hyaa' },
	{ file: 'fortnite-cheats-aimbot-combat.webp', slug: 'wz2-04_25cr' },
	{ file: 'fortnite-squad-fight.webp', slug: 'wz2-05_fbun' },
	{ file: 'fortnite-cheats-esp-wallhack.webp', slug: 'wz2-06_zm3r' },
	{ file: 'fortnite-cheats-package.webp', slug: 'wz2-07_4w7t' },
	{ file: 'fortnite-header-art.webp', slug: 'wz2-09_2ajf' },
	{ file: 'fortnite-battle-royale-combat.webp', slug: 'wz2-10_7hfy' },
	{ file: 'fortnite-reboot van-fight.webp', slug: 'wz2-11_262k' },
	{ file: 'fortnite-player-esp.webp', slug: 'wz2-12_ttf5' },
	{ file: 'fortnite-verdansk-combat.webp', slug: 'wz2-13_9ach' },
	{ file: 'fortnite-resurgence-mode.webp', slug: 'wz2-14_rcmx' },
	{ file: 'fortnite-battle-royale-island-map.webp', slug: 'wz2-15_czbb' },
];

const LEGACY_PATTERNS = [
	/^warzone-/,
	/^sand-raiders-/,
];

async function fetchWebp(url) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; WarzoneCheatsSite/1.0)' },
	});
	if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
	const input = Buffer.from(await res.arrayBuffer());
	return sharp(input).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 84 }).toBuffer();
}

async function removeLegacyImages() {
	const files = await readdir(imagesDir).catch(() => []);
	for (const file of files) {
		if (LEGACY_PATTERNS.some((pattern) => pattern.test(file))) {
			await unlink(path.join(imagesDir, file));
			console.log(`Removed legacy ${file}`);
		}
	}
}

async function generateBrandAssets(heroBuffer) {
	const logoBuffer = await sharp(heroBuffer)
		.extract({ left: 420, top: 180, width: 520, height: 520 })
		.resize(512, 512, { fit: 'cover' })
		.webp({ quality: 88 })
		.toBuffer();

	await writeFile(path.join(imagesDir, 'fortnite-cheats-logo.webp'), logoBuffer);

	const iconSizes = [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	];

	for (const { name, size } of iconSizes) {
		const png = await sharp(logoBuffer).resize(size, size).png().toBuffer();
		await writeFile(path.join(publicDir, name), png);
	}

	const faviconIco = await sharp(logoBuffer).resize(32, 32).png().toBuffer();
	await writeFile(path.join(publicDir, 'favicon.ico'), faviconIco);
}

await mkdir(imagesDir, { recursive: true });
await removeLegacyImages();

let heroBuffer = null;

for (const asset of KEYWORD_ASSETS) {
	const url = `${IGN_BASE}/${asset.slug}.1400.jpg`;
	console.log(`Fetching ${url}`);
	const webp = await fetchWebp(url);
	const dest = path.join(imagesDir, asset.file);
	await writeFile(dest, webp);
	console.log(`Saved ${asset.file} (${webp.length} bytes)`);
	if (asset.file === 'fortnite-cheats-hero.webp') heroBuffer = webp;
}

if (heroBuffer) {
	await generateBrandAssets(heroBuffer);
	console.log('Generated keyword logo + favicons from IGN hero art.');
}

console.log(`Done — ${KEYWORD_ASSETS.length} keyword-named Warzone images from IGN.`);
