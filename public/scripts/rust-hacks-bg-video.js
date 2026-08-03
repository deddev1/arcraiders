/**
 * Plays muted rust-hacks background clips.
 * - hero / product: attempt playback immediately
 * - lazy (gallery): wait until near the viewport
 */
(function () {
	function armMuted(video) {
		if (!(video instanceof HTMLVideoElement)) return;
		video.muted = true;
		video.defaultMuted = true;
		video.setAttribute('muted', '');
		video.setAttribute('playsinline', '');
		video.setAttribute('webkit-playsinline', '');
		video.playsInline = true;
	}

	function tryPlay(video) {
		if (!(video instanceof HTMLVideoElement)) return;
		if (video.classList.contains('is-hidden')) return;
		armMuted(video);

		function attempt() {
			armMuted(video);
			var playPromise = video.play();
			if (playPromise && typeof playPromise.catch === 'function') {
				playPromise.catch(function () {
					window.setTimeout(function () {
						armMuted(video);
						video.play().catch(function () {});
					}, 200);
				});
			}
		}

		if (video.readyState >= 2) {
			attempt();
			return;
		}

		video.addEventListener('loadeddata', attempt, { once: true });
		video.addEventListener('canplay', attempt, { once: true });
		try {
			video.load();
		} catch (_) {
			/* ignore */
		}
		attempt();
	}

	function bindEager(selector) {
		document.querySelectorAll(selector).forEach(function (video) {
			tryPlay(video);
			video.addEventListener(
				'pause',
				function () {
					if (video.classList.contains('is-hidden')) return;
					if (document.visibilityState === 'hidden') return;
					tryPlay(video);
				},
				{ passive: true },
			);
		});
	}

	bindEager('[data-rust-hacks-video="hero"]');
	bindEager('[data-rust-hacks-video="product"]');

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
		{ rootMargin: '240px 0px', threshold: 0.01 },
	);

	lazyVideos.forEach(function (video) {
		observer.observe(video);
	});
})();
