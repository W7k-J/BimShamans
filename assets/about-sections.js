'use strict';

/**
 * About Sections
 *
 * - Phone: each About intro section eases in (see _sass/_about-sections.scss)
 *   the first time it scrolls into view. Sections already on screen when the
 *   page loads are left alone, so nothing the reader can already see moves.
 * - All widths: fallback for the divider flame that lights up and goes out
 *   with scrolling, for browsers without `animation-timeline: view()`.
 */
(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Mirrors `animation-range: cover 0% cover 100%`: 0 as the flame's top
  // enters at the bottom of the screen, 1 as its bottom leaves at the top.
  function initFlameFallback() {
    var flames = Array.prototype.slice.call(document.querySelectorAll('.about-divider__flame'));
    if (!flames.length || !window.matchMedia ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        (window.CSS && window.CSS.supports && window.CSS.supports('animation-timeline', 'view()'))) {
      return;
    }

    var last = flames.map(function () { return -1; });
    var ticking = false;

    function update() {
      ticking = false;
      var viewport = window.innerHeight;
      flames.forEach(function (flame, i) {
        var rect = flame.getBoundingClientRect();
        var progress = (viewport - rect.top) / (viewport + rect.height);
        progress = Math.min(1, Math.max(0, progress));
        var rounded = Math.round(progress * 100) / 100;
        if (rounded !== last[i]) {
          last[i] = rounded;
          flame.style.setProperty('--flame-progress', String(rounded));
        }
      });
    }

    function requestUpdate() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    flames.forEach(function (flame) {
      flame.classList.add('about-divider__flame--js');
    });
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    update();
  }

  function initReveal() {
    var sections = Array.prototype.slice.call(document.querySelectorAll('.about-section'));
    if (!sections.length || !('IntersectionObserver' in window) || !window.matchMedia) {
      return;
    }
    if (!window.matchMedia('(max-width: 768px)').matches ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.remove('about-section--pending');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });

    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top < window.innerHeight) {
        return; // Already visible (or scrolled past, e.g. restored position)
      }
      section.classList.add('about-section--pending');
      observer.observe(section);
    });
  }

  function init() {
    initFlameFallback();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
