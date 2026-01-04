/**
 * Reading Progression Bar
 * Shows reading progress on blog post pages with ruler-style vertical indicator
 * Inspired by https://codepen.io/Juxtopposed/pen/yLWbKya
 */

(function() {
  'use strict';

  // Check if we're on a post page (has .progression-bar element)
  const progressionBar = document.querySelector('.progression-bar');
  const indicatorTop = progressionBar ? progressionBar.querySelector('.progression-bar__indicator--top') : null;
  const indicatorBottom = progressionBar ? progressionBar.querySelector('.progression-bar__indicator--bottom') : null;
  const progressLine = progressionBar ? progressionBar.querySelector('.progression-bar__line') : null;
  const progressActive = progressionBar ? progressionBar.querySelector('.progress-active') : null;

  if (!progressionBar || !indicatorTop || !indicatorBottom || !progressLine || !progressActive) {
    return; // Exit if not on post page
  }

  // Throttle function for better performance
  function throttle(func, wait) {
    let timeout;
    let previous = 0;

    return function executedFunction() {
      const now = Date.now();
      const remaining = wait - (now - previous);

      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        func.apply(this, arguments);
      } else if (!timeout) {
        timeout = setTimeout(function() {
          previous = Date.now();
          timeout = null;
          func.apply(this, arguments);
        }, remaining);
      }
    };
  }

  // Calculate and update reading progression
  function updateProgression() {
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollableHeight = documentHeight - viewportHeight;

    // Calculate top percentage (how far read from top)
    const topPercent = Math.round((scrollY / scrollableHeight) * 100);
    
    // Calculate bottom percentage (how far remaining to read from bottom)
    const bottomPercent = Math.round(
      ((documentHeight - scrollY - viewportHeight) / scrollableHeight) * 100
    );

    // Update indicator text content
    indicatorTop.textContent = `${topPercent}%`;
    indicatorBottom.textContent = `${bottomPercent}%`;

    // NEW: Calculate active overlay height based on scroll progress
    // progress = scrollY / (documentHeight - viewportHeight)
    // overlayHeight = progress * progressLine.offsetHeight
    const scrollProgress = scrollY / scrollableHeight;
    const overlayHeight = scrollProgress * progressLine.offsetHeight;

    // Update overlay height (visual indicator of current scroll position)
    progressActive.style.height = `${overlayHeight}px`;

    // NEW: Update tick marks color based on scroll progress
    // Each tick represents 5% progress (100% / 20 ticks)
    const ticks = progressLine.querySelectorAll('span');
    ticks.forEach((tick, index) => {
      const activeColor = 'var(--firstBlue-color)';
      const inactiveColor = 'rgba(var(--firstBlue-color-rgb), 0.3)';

      // First tick (0) is always highlighted as reference point; last tick (19) activates on scroll
      if (index === 0) {
        tick.style.setProperty('--tick-color', activeColor); // Always bright
      } else {
        // For other ticks: activate when scroll reaches their position
        const tickProgress = index / 19; // Activate exactly at tick boundary
        const isActive = tickProgress <= scrollProgress;
        tick.style.setProperty('--tick-color', isActive ? activeColor : inactiveColor);
      }
    });
  }

  // Throttled handler (updates every 16ms ≈ 60fps)
  const throttledUpdate = throttle(updateProgression, 16);

  // Attach listeners
  window.addEventListener('scroll', throttledUpdate, { passive: true });
  window.addEventListener('resize', throttledUpdate, { passive: true });

  // Initial update on page load
  updateProgression();

  // Cleanup on page unload
  window.addEventListener('beforeunload', function() {
    window.removeEventListener('scroll', throttledUpdate);
    window.removeEventListener('resize', throttledUpdate);
  });

})();
