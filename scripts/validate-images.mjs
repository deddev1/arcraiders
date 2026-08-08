#!/usr/bin/env node
/**
 * Verify every referenced site image exists on disk and has a canonical arc-raiders URL.
 * Run: node scripts/validate-images.mjs
 */
import { access, readdir, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');

async function fileExists(assetPath) {
	try {
		await access(path.join(PUBLIC, assetPath.replace(/^\//, '')), constants.R_OK);
		return true;
	} catch {
		return false;
	}
}

function collectReferencedPaths() {
	const out = execSync(
		`rg --no-filename -o '/(?:images|videos)/[a-z0-9./_-]+\\.(?:webp|png|jpg|jpeg|svg|gif|mp4|ico)' src public --glob '!*.md' || true`,
		{ cwd: ROOT, encoding: 'utf8' },
	);
	const paths = new Set(
		out
			.split('\n')
			.map((line) => line.trim())
			.filter(Boolean),
	);
	return [...paths].sort();
}

function findLegacyRustPaths() {
	const out = execSync(`rg -l '/images/rust-|/videos/rust-' src public --glob '!validate-images.mjs' --glob '!rename-arc-raiders-assets.mjs' --glob '!_middleware.js' --glob '!fix-routing.mjs' --glob '!fetch-*.mjs' --glob '!generate-*.mjs' --glob '!adapt-*.mjs' || true`, {
		cwd: ROOT,
		encoding: 'utf8',
	}).trim();
	return out ? out.split('\n') : [];
}

let errors = 0;
const referenced = collectReferencedPaths();

console.log(`Checking ${referenced.length} referenced asset paths…\n`);

for (const assetPath of referenced) {
	if (assetPath.includes('/images/rust-') || assetPath.includes('/videos/rust-')) {
		console.error(`✗ Legacy rust path still referenced: ${assetPath}`);
		errors += 1;
		continue;
	}
	if (!(await fileExists(assetPath))) {
		console.error(`✗ Missing file: ${assetPath}`);
		errors += 1;
		continue;
	}
	console.log(`✓ ${assetPath}`);
}

const legacyFiles = findLegacyRustPaths();
if (legacyFiles.length) {
	console.error('\n✗ Legacy rust-* paths still referenced in:');
	for (const file of legacyFiles) console.error(`  - ${file}`);
	errors += legacyFiles.length;
} else {
	console.log('\n✓ No legacy rust-* image paths in src/ or public/');
}

const middleware = await readFile(path.join(ROOT, 'functions/_middleware.js'), 'utf8');
if (!middleware.includes('IMAGE_REDIRECTS') || !middleware.includes('resolveImageRedirect')) {
	console.error('✗ Missing image redirect map in functions/_middleware.js');
	errors += 1;
} else {
	console.log('✓ Legacy image URL redirects configured in middleware');
}

const imageDir = path.join(PUBLIC, 'images');
const onDisk = (await readdir(imageDir)).filter(
	(f) => f.endsWith('.webp') && !/-\d+w\.webp$/i.test(f),
);
const masters = onDisk.map((f) => `/images/${f}`);
const unreferenced = masters.filter((p) => !referenced.includes(p));
if (unreferenced.length) {
	console.log(`\nℹ ${unreferenced.length} unreferenced master image(s) on disk:`);
	for (const p of unreferenced) console.log(`  - ${p}`);
}

if (errors > 0) {
	console.error(`\nValidation failed with ${errors} error(s).`);
	process.exit(1);
}

console.log('\nAll image checks passed.');
