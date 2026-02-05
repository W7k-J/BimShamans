/**
 * Code Block Zoom Controls
 * Adds +/- buttons to code blocks for font size adjustment
 * Persists zoom level to localStorage
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'codeZoomLevel';
  const MIN_ZOOM = 0.6;
  const MAX_ZOOM = 1.5;
  const ZOOM_STEP = 0.1;
  const DEFAULT_ZOOM = 1;

  // Get saved zoom level or default
  function getZoomLevel() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? parseFloat(saved) : DEFAULT_ZOOM;
  }

  // Save zoom level
  function saveZoomLevel(level) {
    localStorage.setItem(STORAGE_KEY, level.toString());
  }

  // Apply zoom to all code blocks
  function applyZoom(level) {
    const codeBlocks = document.querySelectorAll('.highlight pre, .highlight code');
    codeBlocks.forEach(block => {
      block.style.fontSize = `${level}em`;
    });

    // Update button states
    updateButtonStates(level);
  }

  // Update button disabled states
  function updateButtonStates(level) {
    document.querySelectorAll('.code-zoom').forEach(container => {
      const minusBtn = container.querySelector('.code-zoom__btn--minus');
      const plusBtn = container.querySelector('.code-zoom__btn--plus');

      if (minusBtn) minusBtn.disabled = level <= MIN_ZOOM;
      if (plusBtn) plusBtn.disabled = level >= MAX_ZOOM;
    });
  }

  // Create zoom controls for a highlight block
  function createZoomControls(highlightBlock) {
    // Skip if already has zoom controls
    if (highlightBlock.querySelector('.code-zoom')) return;

    const controls = document.createElement('div');
    controls.className = 'code-zoom';

    const minusBtn = document.createElement('button');
    minusBtn.className = 'code-zoom__btn code-zoom__btn--minus';
    minusBtn.type = 'button';
    minusBtn.setAttribute('aria-label', 'Decrease code font size');
    minusBtn.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg>';

    const plusBtn = document.createElement('button');
    plusBtn.className = 'code-zoom__btn code-zoom__btn--plus';
    plusBtn.type = 'button';
    plusBtn.setAttribute('aria-label', 'Increase code font size');
    plusBtn.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';

    minusBtn.addEventListener('click', function(e) {
      e.preventDefault();
      let level = getZoomLevel();
      if (level > MIN_ZOOM) {
        level = Math.max(MIN_ZOOM, level - ZOOM_STEP);
        level = Math.round(level * 10) / 10; // Fix floating point
        saveZoomLevel(level);
        applyZoom(level);
      }
    });

    plusBtn.addEventListener('click', function(e) {
      e.preventDefault();
      let level = getZoomLevel();
      if (level < MAX_ZOOM) {
        level = Math.min(MAX_ZOOM, level + ZOOM_STEP);
        level = Math.round(level * 10) / 10; // Fix floating point
        saveZoomLevel(level);
        applyZoom(level);
      }
    });

    controls.appendChild(minusBtn);
    controls.appendChild(plusBtn);

    // Make highlight block position relative for absolute positioning of controls
    highlightBlock.style.position = 'relative';
    highlightBlock.appendChild(controls);
  }

  // Initialize
  function init() {
    // Only target div.highlight (not pre.highlight which is nested inside)
    const highlightBlocks = document.querySelectorAll('div.highlight');

    if (highlightBlocks.length === 0) return;

    highlightBlocks.forEach(block => {
      createZoomControls(block);
    });

    // Apply saved zoom level
    applyZoom(getZoomLevel());
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
