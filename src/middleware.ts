import { defineMiddleware } from 'astro:middleware';
import { applySecurityHeaders } from './lib/security-headers.js';

/**
 * Applies Trust & Safety headers during `astro dev` / `astro preview`
 * so Lighthouse audits see the same protections as production.
 */
export const onRequest = defineMiddleware(async (_context, next) => {
	const response = await next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, {
		html: isHtml,
		dev: import.meta.env.DEV,
	});

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
});
