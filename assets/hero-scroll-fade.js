'use strict';

/**
 * Hero Scroll Fade
 *
 * Fades the home hero out while the page scrolls, so "Latest posts" takes over
 * the viewport. The hero stays in normal flow - no pinning, no scroll-jacking,
 * no change to page height.
 *
 * Where the browser supports scroll-driven animations the fade itself is pure
 * CSS (see `hero-scroll-fade` in style.scss); this file supplies the fallback
 * for browsers without `animation-timeline`.
 *
 * It also marks the body with `hero-idle` once the hero is no longer visible,
 * which style.scss uses to pause the hero's infinite animations and to bring
 * the wordmark into the nav bar.
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

  function maxScroll() {
    var doc = document.documentElement;
    return Math.max(0, doc.scrollHeight - window.innerHeight);
  }

  function init() {
    var hero = document.querySelector('.hero-section--banner .hero-banner');
    if (!hero) {
      return;
    }

    var reduced = prefersReducedMotion();
    var jsFade = !reduced && !supportsScrollTimeline();

    if (jsFade) {
      hero.classList.add('hero-banner--js-fade');
    }

    var ticking = false;
    var lastFade = -1;
    var lastIdle = null;
    var threshold = 0;

    // The point past which the hero counts as gone.
    //
    // This used to be an IntersectionObserver, which asks a different question:
    // has the hero left the viewport geometrically? Since the fade was added
    // the hero is invisible long before that - and on a page too short to
    // scroll the hero off screen the answer was never yes at all, so the nav
    // wordmark never appeared and the hero kept animating behind nothing.
    function measure() {
      if (reduced) {
        // Nothing fades here, so the hero really is visible until it scrolls off.
        var rect = hero.getBoundingClientRect();
        threshold = window.pageYOffset + rect.bottom;
      } else {
        threshold = window.innerHeight * FADE_VIEWPORT_RATIO;
      }

      // Whatever the page's shape, reaching the bottom must count as gone.
      threshold = Math.min(threshold, maxScroll());
    }

    function update() {
      ticking = false;

      var offset = window.pageYOffset;

      if (jsFade) {
        var distance = window.innerHeight * FADE_VIEWPORT_RATIO;
        var progress = distance > 0 ? offset / distance : 1;
        if (progress < 0) {
          progress = 0;
        }
        if (progress > 1) {
          progress = 1;
        }

        // Round to 2 decimals so we skip no-op style writes while scrolling.
        var rounded = Math.round(progress * 100) / 100;
        if (rounded !== lastFade) {
          lastFade = rounded;
          hero.style.setProperty('--hero-fade', String(rounded));
        }
      }

      var idle = offset >= threshold;
      if (idle !== lastIdle) {
        lastIdle = idle;
        document.body.classList.toggle('hero-idle', idle);
      }
    }

    function requestUpdate() {
      if (ticking) {
        return;
      }
      ticking = true;
      requestAnimationFrame(update);
    }

    // While the page is moving, park the hero's infinite animations (see
    // `hero-scrolling` in style.scss). Two class changes per scroll gesture
    // instead of a filter graph re-run every frame.
    var scrollingTimer = null;

    function markScrolling() {
      if (scrollingTimer === null) {
        document.body.classList.add('hero-scrolling');
      } else {
        clearTimeout(scrollingTimer);
      }

      scrollingTimer = setTimeout(function () {
        scrollingTimer = null;
        document.body.classList.remove('hero-scrolling');
      }, 180);
    }

    function onScroll() {
      if (!reduced) {
        markScrolling();
      }
      requestUpdate();
    }

    function remeasure() {
      measure();
      requestUpdate();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', remeasure, { passive: true });

    // Images and webfonts landing later change the page height, and with it
    // the bottom-of-page fallback above.
    window.addEventListener('load', remeasure);

    measure();
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
