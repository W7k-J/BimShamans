/**
 * Portfolio Tiles Interactions
 * - Mobile swipe carousel with counter (expertise.md)
 * - Collection page filtering with animation
 * - Project tile slideshow with autoplay
 * - Synced text/image slides
 */

(function() {
  'use strict';

  // ============================================
  // MOBILE SWIPE COUNTER (expertise.md)
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
  // PROJECT TILE SLIDESHOW (expertise-collection.md)
  // ============================================

  /**
   * Initialize all project tile slideshows
   */
  function initSlideshows() {
    var projectTiles = document.querySelectorAll('.project-tile');
    
    projectTiles.forEach(function(tile) {
      var slideshow = tile.querySelector('.project-tile__slideshow');
      if (!slideshow) return;
      
      initSingleSlideshow(tile);
    });
  }

  /**
   * Initialize a single project tile slideshow
   */
  function initSingleSlideshow(tile) {
    var slidesContainer = tile.querySelector('.project-tile__slides');
    var slides = tile.querySelectorAll('.project-tile__slide');
    var dotsContainer = tile.querySelector('.project-tile__dots');
    var prevBtn = tile.querySelector('.project-tile__nav--prev');
    var nextBtn = tile.querySelector('.project-tile__nav--next');
    var textSlidesContainer = tile.querySelector('.project-tile__text-slides');
    var textSlides = textSlidesContainer ? textSlidesContainer.querySelectorAll('.project-tile__text-slide') : [];
    
    if (slides.length === 0) return;
    
    // Slideshow state
    // AUTOPLAY CONTROL: Change true to false to disable autoplay
    var state = {
      currentIndex: 0,
      totalSlides: slides.length,
      autoplayEnabled: true,
      autoplayInterval: 4000,
      autoplayTimer: null,
      isHovered: false
    };
    
    // Initialize first slide as active
    slides[0].classList.add('project-tile__slide--active');
    if (textSlides.length > 0) {
      textSlides[0].classList.add('project-tile__text-slide--active');
    }
    
    // Create dots
    if (dotsContainer && slides.length > 1) {
      createDots(dotsContainer, slides.length, state, function(index) {
        goToSlide(index, slides, textSlides, dotsContainer, state);
      });
    }
    
    // Navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var newIndex = (state.currentIndex - 1 + state.totalSlides) % state.totalSlides;
        goToSlide(newIndex, slides, textSlides, dotsContainer, state);
        resetAutoplay(state, slides, textSlides, dotsContainer);
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var newIndex = (state.currentIndex + 1) % state.totalSlides;
        goToSlide(newIndex, slides, textSlides, dotsContainer, state);
        resetAutoplay(state, slides, textSlides, dotsContainer);
      });
    }
    
    // Autoplay
    if (state.autoplayEnabled && slides.length > 1) {
      startAutoplay(state, slides, textSlides, dotsContainer);
      
      // Pause on hover
      tile.addEventListener('mouseenter', function() {
        state.isHovered = true;
        stopAutoplay(state);
      });
      
      tile.addEventListener('mouseleave', function() {
        state.isHovered = false;
        if (state.autoplayEnabled) {
          startAutoplay(state, slides, textSlides, dotsContainer);
        }
      });
    }
    
    // Touch/swipe support
    initSwipeGestures(tile, slides, textSlides, dotsContainer, state);
  }

  /**
   * Create dot indicators
   */
  function createDots(container, count, state, onClick) {
    container.innerHTML = '';
    
    for (var i = 0; i < count; i++) {
      var dot = document.createElement('button');
      dot.className = 'project-tile__dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      
      if (i === 0) {
        dot.classList.add('project-tile__dot--active');
      }
      
      (function(index) {
        dot.addEventListener('click', function() {
          onClick(index);
        });
      })(i);
      
      container.appendChild(dot);
    }
  }

  /**
   * Go to specific slide
   */
  function goToSlide(index, slides, textSlides, dotsContainer, state) {
    // Update image slides
    slides.forEach(function(slide, i) {
      slide.classList.toggle('project-tile__slide--active', i === index);
    });
    
    // Update text slides (sync with images based on data-text-sync attribute)
    if (textSlides.length > 0) {
      // Check if this slide has specific text sync
      var targetSlide = slides[index];
      var syncIndex = targetSlide.getAttribute('data-text-sync');
      
      if (syncIndex !== null) {
        // Use specific text slide
        var textIndex = parseInt(syncIndex, 10);
        textSlides.forEach(function(textSlide, i) {
          textSlide.classList.toggle('project-tile__text-slide--active', i === textIndex);
        });
      } else if (textSlides.length === slides.length) {
        // 1:1 mapping
        textSlides.forEach(function(textSlide, i) {
          textSlide.classList.toggle('project-tile__text-slide--active', i === index);
        });
      }
      // If only 1 text slide, it stays visible for all images
    }
    
    // Update dots
    if (dotsContainer) {
      var dots = dotsContainer.querySelectorAll('.project-tile__dot');
      dots.forEach(function(dot, i) {
        dot.classList.toggle('project-tile__dot--active', i === index);
      });
    }
    
    state.currentIndex = index;
  }

  /**
   * Start autoplay
   */
  function startAutoplay(state, slides, textSlides, dotsContainer) {
    if (state.autoplayTimer) {
      clearInterval(state.autoplayTimer);
    }
    
    state.autoplayTimer = setInterval(function() {
      if (!state.isHovered) {
        var newIndex = (state.currentIndex + 1) % state.totalSlides;
        goToSlide(newIndex, slides, textSlides, dotsContainer, state);
      }
    }, state.autoplayInterval);
  }

  /**
   * Stop autoplay
   */
  function stopAutoplay(state) {
    if (state.autoplayTimer) {
      clearInterval(state.autoplayTimer);
      state.autoplayTimer = null;
    }
  }

  /**
   * Reset autoplay timer
   */
  function resetAutoplay(state, slides, textSlides, dotsContainer) {
    if (state.autoplayEnabled) {
      stopAutoplay(state);
      if (!state.isHovered) {
        startAutoplay(state, slides, textSlides, dotsContainer);
      }
    }
  }

  /**
   * Initialize swipe gestures for touch devices
   */
  function initSwipeGestures(tile, slides, textSlides, dotsContainer, state) {
    var slideshow = tile.querySelector('.project-tile__slideshow');
    if (!slideshow) return;
    
    var touchStartX = 0;
    var touchEndX = 0;
    var minSwipeDistance = 50;
    
    slideshow.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    slideshow.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      var diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) < minSwipeDistance) return;
      
      var newIndex;
      if (diff > 0) {
        // Swipe left - next slide
        newIndex = (state.currentIndex + 1) % state.totalSlides;
      } else {
        // Swipe right - previous slide
        newIndex = (state.currentIndex - 1 + state.totalSlides) % state.totalSlides;
      }
      
      goToSlide(newIndex, slides, textSlides, dotsContainer, state);
      resetAutoplay(state, slides, textSlides, dotsContainer);
    }
  }

  // ============================================
  // COLLECTION PAGE FILTERING
  // ============================================

  /**
   * Initialize portfolio collection filtering
   */
  function initCollectionFilter() {
    var container = document.querySelector('.exp-collection__container');
    
    if (!container) return;
    
    var tagsContainer = container.querySelector('.exp-collection__tags');
    var tilesList = container.querySelector('.exp-collection__list');
    var tiles = tilesList ? tilesList.querySelectorAll('.project-tile') : [];
    
    if (!tagsContainer || tiles.length === 0) return;
    
    // Collect all unique tags from tiles
    var allTags = collectTags(tiles);
    
    // Render filter buttons
    renderFilterButtons(tagsContainer, allTags);
    
    // Check URL for initial filter
    applyInitialFilter(tagsContainer);
    
    // Bind filter events
    bindFilterEvents(tagsContainer, tiles, tilesList);
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
    container.innerHTML = '';
    
    // Add "All" button
    var allBtn = document.createElement('button');
    allBtn.className = 'exp-collection__tag exp-collection__tag--active';
    allBtn.setAttribute('data-filter', 'all');
    allBtn.textContent = 'all';
    allBtn.type = 'button';
    container.appendChild(allBtn);
    
    // Add tag buttons
    tags.forEach(function(tag) {
      var btn = document.createElement('button');
      btn.className = 'exp-collection__tag';
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
    
    if (!hash || hash.length <= 1) return;
    
    var filterValue = hash.substring(1).toLowerCase();
    var targetBtn = tagsContainer.querySelector('[data-filter="' + filterValue + '"]');
    
    if (targetBtn) {
      var allBtn = tagsContainer.querySelector('[data-filter="all"]');
      if (allBtn) {
        allBtn.classList.remove('exp-collection__tag--active');
      }
      
      targetBtn.classList.add('exp-collection__tag--active');
      targetBtn.click();
    }
  }

  /**
   * Bind filter button events
   */
  function bindFilterEvents(tagsContainer, tiles, tilesList) {
    tagsContainer.addEventListener('click', function(e) {
      var btn = e.target.closest('.exp-collection__tag');
      
      if (!btn) return;
      
      var filterValue = btn.getAttribute('data-filter');
      
      // Update active state
      tagsContainer.querySelectorAll('.exp-collection__tag').forEach(function(b) {
        b.classList.remove('exp-collection__tag--active');
      });
      btn.classList.add('exp-collection__tag--active');
      
      // Filter tiles with animation
      filterTiles(tiles, tilesList, filterValue);
      
      // Update URL hash
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
  function filterTiles(tiles, list, filterValue) {
    var visibleCount = 0;
    var animationDelay = 0;
    
    tiles.forEach(function(tile) {
      var tileTags = (tile.getAttribute('data-tags') || '').toLowerCase();
      var shouldShow = filterValue === 'all' || tileTags.indexOf(filterValue) !== -1;
      
      if (shouldShow) {
        tile.style.animation = 'none';
        tile.offsetHeight; // Force reflow
        tile.style.animation = '';
        tile.style.animationDelay = (animationDelay * 0.08) + 's';
        tile.style.display = '';
        visibleCount++;
        animationDelay++;
      } else {
        tile.style.display = 'none';
      }
    });
    
    // Show empty state if no results
    var emptyState = list.querySelector('.exp-collection__empty');
    
    if (visibleCount === 0) {
      if (!emptyState) {
        emptyState = document.createElement('div');
        emptyState.className = 'exp-collection__empty';
        emptyState.innerHTML = '<p>No projects found for this filter.</p>';
        list.appendChild(emptyState);
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
    var tiles = document.querySelectorAll('.portfolio-tile');
    
    tiles.forEach(function(tile) {
      tile.addEventListener('touchstart', function() {
        this.classList.add('is-touched');
      }, { passive: true });
      
      tile.addEventListener('touchend', function() {
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
    initSlideshows();
    initCollectionFilter();
    initTouchSupport();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-init filters on page navigation
  window.addEventListener('popstate', function() {
    setTimeout(function() {
      var tagsContainer = document.querySelector('.exp-collection__tags');
      if (tagsContainer) {
        applyInitialFilter(tagsContainer);
      }
    }, 100);
  });

})();
