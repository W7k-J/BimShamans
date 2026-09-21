'use strict';

/**
 * About Sections - reveal on first view (phone)
 *
 * Each About intro section eases in (see _sass/_about-sections.scss) the
 * first time it scrolls into view. Sections already on screen when the page
 * loads are left alone, so nothing the reader can already see moves.
 */
(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  function init() {
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
