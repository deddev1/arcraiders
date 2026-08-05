#!/usr/bin/env node
/**
 * Cloudflare Workers Builds entry point.
 * Installs dependencies, builds Astro to dist/, and validates output.
 */
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const cwd = process.cwd();

if (!existsSync('package.json')) {
	console.error(`[cloudflare-build] package.json not found in ${cwd}`);
	console.error(
		'[cloudflare-build] Set Cloudflare Settings > Build > Root directory to the repo root (leave blank).',
	);
	process.exit(1);
}

console.log('[cloudflare-build] Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('[cloudflare-build] Building site...');
execSync('npm run build', { stdio: 'inherit' });

if (!existsSync('dist/index.html')) {
	console.error('[cloudflare-build] dist/index.html was not created. Build failed.');
	process.exit(1);
}

console.log('[cloudflare-build] Build complete.');
