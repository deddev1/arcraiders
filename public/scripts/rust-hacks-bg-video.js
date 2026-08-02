/**
 * Keeps muted rust-hacks background clips playing when autoplay is allowed.
 * Honors prefers-reduced-motion; lazy clips wait until near the viewport.
 */
(function () {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		document.querySelectorAll('[data-rust-hacks-video]').forEach(function (el) {
			if (el instanceof HTMLVideoElement) {
				el.removeAttribute('autoplay');
				el.pause();
				el.classList.add('is-motion-reduced');
			}
		});
		return;
	}

	function tryPlay(video) {
		if (!(video instanceof HTMLVideoElement)) return;
		var playPromise = video.play();
		if (playPromise && typeof playPromise.catch === 'function') {
			playPromise.catch(function () {});
		}
	}

	document.querySelectorAll('[data-rust-hacks-video="hero"]').forEach(tryPlay);

	var lazyVideos = document.querySelectorAll('[data-rust-hacks-video="lazy"]');
	if (!lazyVideos.length) return;

	if (!('IntersectionObserver' in window)) {
		lazyVideos.forEach(tryPlay);
		return;
	}

	var observer = new IntersectionObserver(
		function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) return;
				var video = entry.target;
				tryPlay(video);
				observer.unobserve(video);
			});
		},
		{ rootMargin: '120px 0px', threshold: 0.15 },
	);

	lazyVideos.forEach(function (video) {
		observer.observe(video);
	});
})();
