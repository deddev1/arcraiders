/**
 * Plays muted rust-hacks background clips. Hero always attempts playback;
 * gallery lazy clips wait until near the viewport.
 */
(function () {
	function armMuted(video) {
		if (!(video instanceof HTMLVideoElement)) return;
		video.muted = true;
		video.defaultMuted = true;
		video.setAttribute('muted', '');
		video.playsInline = true;
	}

	function tryPlay(video) {
		if (!(video instanceof HTMLVideoElement)) return;
		armMuted(video);
		var playPromise = video.play();
		if (playPromise && typeof playPromise.catch === 'function') {
			playPromise.catch(function () {
				// Retry once after a short delay (some browsers block the first gesture-less play).
				window.setTimeout(function () {
					armMuted(video);
					video.play().catch(function () {});
				}, 250);
			});
		}
	}

	document.querySelectorAll('[data-rust-hacks-video="hero"]').forEach(function (video) {
		armMuted(video);
		if (video.readyState >= 2) {
			tryPlay(video);
		} else {
			video.addEventListener('loadeddata', function () {
				tryPlay(video);
			}, { once: true });
			video.load();
			tryPlay(video);
		}
	});

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
