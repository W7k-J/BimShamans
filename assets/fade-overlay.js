/**
 * Fade Overlay Controller
 * Hides fade overlay when footer becomes visible in viewport
 */

(function() {
  'use strict';

  const fadeOverlay = document.querySelector('.fade-overlay');
  const footer = document.querySelector('.wrapper-footer');

  if (!fadeOverlay || !footer) {
    return; // Exit if elements not found
  }

  /**
   * Check if footer is visible in viewport
   */
  function isFooterVisible() {
    const footerRect = footer.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Footer is visible when its top edge is above viewport bottom
    return footerRect.top < viewportHeight;
  }

  /**
   * Update fade overlay visibility
   */
  function updateFadeOverlay() {
    if (isFooterVisible()) {
      fadeOverlay.classList.add('fade-overlay--hidden');
    } else {
      fadeOverlay.classList.remove('fade-overlay--hidden');
    }
  }

  // Throttle scroll handler (16ms ≈ 60fps)
  let ticking = false;
  function throttledUpdate() {
    if (!ticking) {
      requestAnimationFrame(function() {
        updateFadeOverlay();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Attach listeners
  window.addEventListener('scroll', throttledUpdate, { passive: true });
  window.addEventListener('resize', throttledUpdate, { passive: true });

  // Initial check on page load
  updateFadeOverlay();

  // Cleanup on page unload
  window.addEventListener('beforeunload', function() {
    window.removeEventListener('scroll', throttledUpdate);
    window.removeEventListener('resize', throttledUpdate);
  });

})();
