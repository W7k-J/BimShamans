'use strict';

/**
 * Hero Scroll Fade
 *
 * Fades the home hero out while the page scrolls, so "Latest posts" takes over
 * the viewport. The hero stays in normal flow - no pinning, no scroll-jacking,
 * no change to page height.
 *
 * Where the browser supports scroll-driven animations the fade is pure CSS
 * (see `hero-scroll-fade` in style.scss); this file only supplies the fallback
 * for browsers without `animation-timeline`.
 *
 * It also marks the body with `hero-idle` once the hero has fully left the
 * viewport, so its infinite glitch animations can be paused (style.scss).
 */
(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Fade spread over this fraction of the viewport height.
  // Keep in sync with `animation-range` in style.scss.
  var FADE_VIEWPORT_RATIO = 0.4;

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function supportsScrollTimeline() {
    return !!(window.CSS && window.CSS.supports && window.CSS.supports('animation-timeline', 'scroll()'));
  }

  function attachFallbackFade(hero) {
    hero.classList.add('hero-banner--js-fade');

    var ticking = false;
    var lastValue = -1;

    function update() {
      ticking = false;

      var distance = window.innerHeight * FADE_VIEWPORT_RATIO;
      var progress = distance > 0 ? window.pageYOffset / distance : 1;

      if (progress < 0) {
        progress = 0;
      }
      if (progress > 1) {
        progress = 1;
      }

      // Round to 2 decimals so we skip no-op style writes while scrolling.
      var rounded = Math.round(progress * 100) / 100;
      if (rounded === lastValue) {
        return;
      }
      lastValue = rounded;
      hero.style.setProperty('--hero-fade', String(rounded));
    }

    function requestUpdate() {
      if (ticking) {
        return;
      }
      ticking = true;
      requestAnimationFrame(update);
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    update();
  }

  function attachIdleObserver(hero) {
    // The nav wordmark is hidden until this class appears, so without an
    // observer it would stay hidden for good. Fall back to the idle state and
    // the bar behaves like every other page. Such a browser predates
    // @property and scroll timelines anyway, so the resting drift this also
    // pauses was never running there.
    if (!('IntersectionObserver' in window)) {
      document.body.classList.add('hero-idle');
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        document.body.classList.toggle('hero-idle', !entries[i].isIntersecting);
      }
    }, { threshold: 0 });

    observer.observe(hero);
  }

  function init() {
    var hero = document.querySelector('.hero-section--banner .hero-banner');
    if (!hero) {
      return;
    }

    // Pausing off-screen animations is worth doing either way.
    attachIdleObserver(hero);

    // Reduced motion: no fade at all. Scroll timeline: CSS already handles it.
    if (prefersReducedMotion() || supportsScrollTimeline()) {
      return;
    }

    attachFallbackFade(hero);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
