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

  // Fade spread over this fraction of the viewport height. The real value comes
  // from --hero-fade-ratio on the hero, so CSS stays the single source of truth
  // for it - on a phone the hero is a full screen tall and fades over a full
  // screen of scrolling. This is only the fallback if the property is missing.
  var DEFAULT_FADE_RATIO = 0.4;

  function readFadeRatio(hero) {
    var raw = window.getComputedStyle(hero).getPropertyValue('--hero-fade-ratio');
    var value = parseFloat(raw);
    return (isFinite(value) && value > 0) ? value : DEFAULT_FADE_RATIO;
  }

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

    var fades = !reduced;
    var jsFade = fades && !supportsScrollTimeline();

    if (jsFade) {
      hero.classList.add('hero-banner--js-fade');
    }

    // Toggle inside #main rather than on <body>: #main holds both the glitch
    // masks (.filterwrapper) and the hero, and the fixed nav is its sibling,
    // so restyling here never touches the bar.
    var animScope = document.getElementById('main') || hero;

    var ticking = false;
    var lastFade = -1;
    var lastIdle = null;
    var threshold = 0;
    // Cached in measure(): update() runs on every scroll frame and must not
    // pay for a style resolution there.
    var fadeRatio = DEFAULT_FADE_RATIO;

    // The point past which the hero counts as gone.
    //
    // This used to be an IntersectionObserver, which asks a different question:
    // has the hero left the viewport geometrically? Since the fade was added
    // the hero is invisible long before that - and on a page too short to
    // scroll the hero off screen the answer was never yes at all, so the nav
    // wordmark never appeared and the hero kept animating behind nothing.
    function measure() {
      fadeRatio = readFadeRatio(hero);

      if (fades) {
        threshold = window.innerHeight * fadeRatio;
      } else {
        // Nothing fades here, so the hero really is visible until it scrolls
        // off - and only then has it stopped saying the name.
        var rect = hero.getBoundingClientRect();
        threshold = window.pageYOffset + rect.bottom;
      }

      // Whatever the page's shape, reaching the bottom must count as gone.
      threshold = Math.min(threshold, maxScroll());
    }

    function update() {
      ticking = false;

      var offset = window.pageYOffset;

      if (jsFade) {
        var distance = window.innerHeight * fadeRatio;
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
        animScope.classList.toggle('hero-idle', idle);

        // The nav wordmark lives outside #main, and `body.has-hero.hero-idle`
        // is what fades it in, so the class has to reach body too.
        //
        // This used to be gated behind `(hover: hover)`, reasoning that the
        // wordmark is display: none below 1180px. But hover capability is not
        // viewport width: a wide screen whose browser reports no hovering
        // pointer (a touchscreen laptop, and Chrome and Edge do not always
        // agree on that) shows the wordmark and never got the class, so it
        // stayed at opacity: 0 for the life of the page. One class toggle per
        // threshold crossing is cheap enough not to need a gate at all.
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


    function remeasure() {
      measure();
      requestUpdate();
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
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
