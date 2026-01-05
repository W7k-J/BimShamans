/**
 * Portfolio Tiles Interactions
 * - Mobile swipe carousel with counter
 * - Collection page filtering with animation
 * - Scroll snap position tracking
 */

(function() {
  'use strict';

  // ============================================
  // MOBILE SWIPE COUNTER
  // ============================================

  /**
   * Initialize swipe counter for portfolio tile stacks
   */
  function initSwipeCounters() {
    var stacks = document.querySelectorAll('.portfolio-tiles-stack');
    
    stacks.forEach(function(stack) {
      var tiles = stack.querySelectorAll('.portfolio-tile');
      var totalTiles = tiles.length;
      
      if (totalTiles === 0) {
        return;
      }
      
      // Set initial counter
      updateCounter(stack, 1, totalTiles);
      
      // Track scroll position
      var scrollTimeout = null;
      
      stack.addEventListener('scroll', function() {
        // Debounce scroll updates
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
          var currentIndex = getCurrentTileIndex(stack, tiles);
          updateCounter(stack, currentIndex + 1, totalTiles);
        }, 50);
      }, { passive: true });
    });
  }

  /**
   * Get current visible tile index based on scroll position
   */
  function getCurrentTileIndex(stack, tiles) {
    var stackRect = stack.getBoundingClientRect();
    var stackCenter = stackRect.left + stackRect.width / 2;
    var closestIndex = 0;
    var closestDistance = Infinity;
    
    tiles.forEach(function(tile, index) {
      var tileRect = tile.getBoundingClientRect();
      var tileCenter = tileRect.left + tileRect.width / 2;
      var distance = Math.abs(stackCenter - tileCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    
    return closestIndex;
  }

  /**
   * Update counter data attribute
   */
  function updateCounter(stack, current, total) {
    stack.setAttribute('data-counter', current + '/' + total);
  }

  // ============================================
  // COLLECTION PAGE FILTERING
  // ============================================

  /**
   * Initialize portfolio collection filtering
   */
  function initCollectionFilter() {
    var container = document.querySelector('.portfolio-collection__container');
    
    if (!container) {
      return;
    }
    
    var tagsContainer = container.querySelector('.portfolio-collection__tags');
    var tilesGrid = container.querySelector('.portfolio-collection__grid');
    var tiles = tilesGrid ? tilesGrid.querySelectorAll('.portfolio-collection-tile') : [];
    
    if (!tagsContainer || tiles.length === 0) {
      return;
    }
    
    // Collect all unique tags from tiles
    var allTags = collectTags(tiles);
    
    // Render filter buttons
    renderFilterButtons(tagsContainer, allTags);
    
    // Check URL for initial filter
    applyInitialFilter(tagsContainer);
    
    // Bind filter events
    bindFilterEvents(tagsContainer, tiles, tilesGrid);
  }

  /**
   * Collect unique tags from all tiles
   */
  function collectTags(tiles) {
    var tagsSet = {};
    
    tiles.forEach(function(tile) {
      var tileTags = tile.getAttribute('data-tags');
      
      if (tileTags) {
        tileTags.split(',').forEach(function(tag) {
          var trimmed = tag.trim().toLowerCase();
          if (trimmed) {
            tagsSet[trimmed] = true;
          }
        });
      }
    });
    
    return Object.keys(tagsSet).sort();
  }

  /**
   * Render filter buttons
   */
  function renderFilterButtons(container, tags) {
    // Clear existing buttons
    container.innerHTML = '';
    
    // Add "All" button
    var allBtn = document.createElement('button');
    allBtn.className = 'portfolio-collection__tag portfolio-collection__tag--active';
    allBtn.setAttribute('data-filter', 'all');
    allBtn.textContent = 'all';
    allBtn.type = 'button';
    container.appendChild(allBtn);
    
    // Add tag buttons
    tags.forEach(function(tag) {
      var btn = document.createElement('button');
      btn.className = 'portfolio-collection__tag';
      btn.setAttribute('data-filter', tag);
      btn.textContent = '#' + tag;
      btn.type = 'button';
      container.appendChild(btn);
    });
  }

  /**
   * Apply initial filter from URL hash
   */
  function applyInitialFilter(tagsContainer) {
    var hash = window.location.hash;
    
    if (!hash || hash.length <= 1) {
      return;
    }
    
    // Parse hash: #architecture or #bim-standards
    var filterValue = hash.substring(1).toLowerCase();
    var targetBtn = tagsContainer.querySelector('[data-filter="' + filterValue + '"]');
    
    if (targetBtn) {
      // Deactivate "all" button
      var allBtn = tagsContainer.querySelector('[data-filter="all"]');
      if (allBtn) {
        allBtn.classList.remove('portfolio-collection__tag--active');
      }
      
      // Activate target button
      targetBtn.classList.add('portfolio-collection__tag--active');
      
      // Trigger filter
      targetBtn.click();
    }
  }

  /**
   * Bind filter button events
   */
  function bindFilterEvents(tagsContainer, tiles, tilesGrid) {
    tagsContainer.addEventListener('click', function(e) {
      var btn = e.target.closest('.portfolio-collection__tag');
      
      if (!btn) {
        return;
      }
      
      var filterValue = btn.getAttribute('data-filter');
      
      // Update active state
      tagsContainer.querySelectorAll('.portfolio-collection__tag').forEach(function(b) {
        b.classList.remove('portfolio-collection__tag--active');
      });
      btn.classList.add('portfolio-collection__tag--active');
      
      // Filter tiles with animation
      filterTiles(tiles, tilesGrid, filterValue);
      
      // Update URL hash (without scrolling)
      if (filterValue !== 'all') {
        history.replaceState(null, null, '#' + filterValue);
      } else {
        history.replaceState(null, null, window.location.pathname);
      }
    });
  }

  /**
   * Filter tiles with fade animation
   */
  function filterTiles(tiles, grid, filterValue) {
    var visibleCount = 0;
    var animationDelay = 0;
    
    tiles.forEach(function(tile) {
      var tileTags = (tile.getAttribute('data-tags') || '').toLowerCase();
      var shouldShow = filterValue === 'all' || tileTags.indexOf(filterValue) !== -1;
      
      if (shouldShow) {
        // Reset animation
        tile.style.animation = 'none';
        tile.offsetHeight; // Force reflow
        tile.style.animation = '';
        tile.style.animationDelay = (animationDelay * 0.05) + 's';
        tile.style.display = '';
        visibleCount++;
        animationDelay++;
      } else {
        tile.style.display = 'none';
      }
    });
    
    // Show empty state if no results
    var emptyState = grid.querySelector('.portfolio-collection__empty');
    
    if (visibleCount === 0) {
      if (!emptyState) {
        emptyState = document.createElement('div');
        emptyState.className = 'portfolio-collection__empty';
        emptyState.innerHTML = '<p>No projects found for this filter.</p>';
        grid.appendChild(emptyState);
      }
      emptyState.style.display = '';
    } else if (emptyState) {
      emptyState.style.display = 'none';
    }
  }

  // ============================================
  // TILE HOVER TOUCH SUPPORT
  // ============================================

  /**
   * Add touch support for tile hover states
   */
  function initTouchSupport() {
    var tiles = document.querySelectorAll('.portfolio-tile, .portfolio-collection-tile');
    
    tiles.forEach(function(tile) {
      tile.addEventListener('touchstart', function() {
        // Add hover class on touch
        this.classList.add('is-touched');
      }, { passive: true });
      
      tile.addEventListener('touchend', function() {
        // Remove after delay
        var self = this;
        setTimeout(function() {
          self.classList.remove('is-touched');
        }, 300);
      }, { passive: true });
    });
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  function init() {
    initSwipeCounters();
    initCollectionFilter();
    initTouchSupport();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-init on page navigation (for SPA-like behavior)
  window.addEventListener('popstate', function() {
    setTimeout(function() {
      var tagsContainer = document.querySelector('.portfolio-collection__tags');
      if (tagsContainer) {
        applyInitialFilter(tagsContainer);
      }
    }, 100);
  });

})();
