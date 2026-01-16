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
   * Category-to-tags mapping for multi-tag filtering
   * Maps category names (from expertise.md section links) to arrays of tags
   */
  var categoryTagsMap = {
    'architecture': ['design', 'heritage', 'scans'],
    'bim-standards': ['iso19650', 'bep', 'digitaldelivery'],
    'data-reporting': ['data', 'powerbi', 'dashboards'],
    'automation': ['dynamo', 'revitapi', 'python'],
    'coordination': ['clashmanagement', 'ifc', 'openbim'],
    'software': ['revit', 'archicad', 'rhino']
  };

  /**
   * Track active filter tags (multi-selection)
   */
  var activeTags = [];

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
    applyInitialFilter(tagsContainer, tiles, tilesList);

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
   * Supports multi-tag selection and category shortcuts
   */
  function applyInitialFilter(tagsContainer, tiles, tilesList) {
    var hash = window.location.hash;

    if (!hash || hash.length <= 1) return;

    var hashValue = hash.substring(1).toLowerCase();
    var tagsToSelect = [];

    // Check if it's a category filter (e.g., #data-reporting)
    if (categoryTagsMap[hashValue]) {
      // Expand category to its constituent tags
      tagsToSelect = categoryTagsMap[hashValue].slice(); // Clone array
    } else {
      // Parse individual tags (supports #data or #data+powerbi+dashboards)
      tagsToSelect = hashValue.split('+').map(function(tag) {
        return tag.trim();
      }).filter(function(tag) {
        return tag.length > 0;
      });
    }

    if (tagsToSelect.length === 0) return;

    // Set active tags
    activeTags = tagsToSelect;

    // Remove "all" button active state
    var allBtn = tagsContainer.querySelector('[data-filter="all"]');
    if (allBtn) {
      allBtn.classList.remove('exp-collection__tag--active');
    }

    // Activate matching tag buttons
    tagsToSelect.forEach(function(tag) {
      var tagBtn = tagsContainer.querySelector('[data-filter="' + tag + '"]');
      if (tagBtn) {
        tagBtn.classList.add('exp-collection__tag--active');
      }
    });

    // Apply filter
    filterTiles(tiles, tilesList, activeTags);
  }

  /**
   * Bind filter button events with toggle behavior
   */
  function bindFilterEvents(tagsContainer, tiles, tilesList) {
    tagsContainer.addEventListener('click', function(e) {
      var btn = e.target.closest('.exp-collection__tag');

      if (!btn) return;

      var filterValue = btn.getAttribute('data-filter');

      // Handle "all" button - clear all selections
      if (filterValue === 'all') {
        activeTags = [];
        // Remove active class from all buttons
        tagsContainer.querySelectorAll('.exp-collection__tag').forEach(function(b) {
          b.classList.remove('exp-collection__tag--active');
        });
        // Set "all" as active
        btn.classList.add('exp-collection__tag--active');
        // Show all tiles
        filterTiles(tiles, tilesList, []);
        // Clear URL hash
        history.replaceState(null, null, window.location.pathname);
        return;
      }

      // Toggle tag selection
      var tagIndex = activeTags.indexOf(filterValue);
      if (tagIndex > -1) {
        // Tag is active - deactivate it
        activeTags.splice(tagIndex, 1);
        btn.classList.remove('exp-collection__tag--active');
      } else {
        // Tag is inactive - activate it
        activeTags.push(filterValue);
        btn.classList.add('exp-collection__tag--active');
      }

      // Remove "all" button active state if any tags are selected
      var allBtn = tagsContainer.querySelector('[data-filter="all"]');
      if (activeTags.length > 0) {
        if (allBtn) allBtn.classList.remove('exp-collection__tag--active');
      } else {
        // No tags selected - activate "all"
        if (allBtn) allBtn.classList.add('exp-collection__tag--active');
      }

      // Filter tiles with active tags
      filterTiles(tiles, tilesList, activeTags);

      // Update URL hash
      updateUrlHash(activeTags);
    });
  }

  /**
   * Filter tiles with fade animation
   * Supports multi-tag filtering with OR logic
   */
  function filterTiles(tiles, list, filterTags) {
    var visibleCount = 0;
    var animationDelay = 0;

    tiles.forEach(function(tile) {
      var tileTags = (tile.getAttribute('data-tags') || '').toLowerCase();
      var shouldShow;

      if (filterTags.length === 0) {
        // No tags selected - show all
        shouldShow = true;
      } else {
        // Show if tile has ANY of the active tags (OR logic)
        shouldShow = filterTags.some(function(tag) {
          return tileTags.indexOf(tag.toLowerCase()) !== -1;
        });
      }

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

  /**
   * Update URL hash with active tags
   */
  function updateUrlHash(tags) {
    if (tags.length === 0) {
      // No tags - clear hash
      history.replaceState(null, null, window.location.pathname);
    } else {
      // Join tags with + separator
      var hash = '#' + tags.join('+');
      history.replaceState(null, null, hash);
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

  // Re-init filters on page navigation
  window.addEventListener('popstate', function() {
    setTimeout(function() {
      var tagsContainer = document.querySelector('.exp-collection__tags');
      if (tagsContainer) {
        applyInitialFilter(tagsContainer);
      }
    }, 100);
  });

  // ============================================
  // LIGHTBOX / IMAGE MODAL
  // ============================================

  /**
   * Lightbox manager for full-screen image viewing
   */
  var Lightbox = (function() {
    var lightbox = null;
    var currentSlides = [];
    var currentIndex = 0;
    var imageElement = null;
    var counterElement = null;
    var prevBtn = null;
    var nextBtn = null;
    var keyboardListenerAttached = false;

    /**
     * Create lightbox HTML structure
     */
    function createLightbox() {
      // Check if lightbox already exists in DOM (not just variable)
      var existingLightbox = document.querySelector('.lightbox');
      if (existingLightbox) {
        lightbox = existingLightbox;
        // Re-cache elements in case they were lost
        imageElement = lightbox.querySelector('.lightbox__image');
        counterElement = lightbox.querySelector('.lightbox__counter');
        prevBtn = lightbox.querySelector('.lightbox__nav--prev');
        nextBtn = lightbox.querySelector('.lightbox__nav--next');
        return;
      }

      lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = [
        '<div class="lightbox__content">',
        '  <img class="lightbox__image" src="" alt="Full size image">',
        '  <button class="lightbox__close" aria-label="Close lightbox">',
        '    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">',
        '      <line x1="18" y1="6" x2="6" y2="18"></line>',
        '      <line x1="6" y1="6" x2="18" y2="18"></line>',
        '    </svg>',
        '  </button>',
        '  <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous image">',
        '    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">',
        '      <polyline points="15 18 9 12 15 6"></polyline>',
        '    </svg>',
        '  </button>',
        '  <button class="lightbox__nav lightbox__nav--next" aria-label="Next image">',
        '    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">',
        '      <polyline points="9 6 15 12 9 18"></polyline>',
        '    </svg>',
        '  </button>',
        '  <div class="lightbox__counter">1 / 1</div>',
        '</div>'
      ].join('');

      document.body.appendChild(lightbox);

      // Cache elements
      imageElement = lightbox.querySelector('.lightbox__image');
      counterElement = lightbox.querySelector('.lightbox__counter');
      prevBtn = lightbox.querySelector('.lightbox__nav--prev');
      nextBtn = lightbox.querySelector('.lightbox__nav--next');
      var closeBtn = lightbox.querySelector('.lightbox__close');

      // Event listeners
      closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        close();
      });
      prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showPrevious();
      });
      nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showNext();
      });

      // Click outside to close
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox__content')) {
          close();
        }
      });

      // Keyboard navigation - only attach once
      if (!keyboardListenerAttached) {
        document.addEventListener('keydown', handleKeyboard);
        keyboardListenerAttached = true;
      }
    }

    /**
     * Open lightbox with slides from a specific project tile
     */
    function open(projectTile, startIndex) {
      createLightbox();

      // Get all slide images from the project tile
      var slides = projectTile.querySelectorAll('.project-tile__slide img');
      currentSlides = Array.from(slides);
      currentIndex = startIndex || 0;

      if (currentSlides.length === 0) return;

      // Show lightbox
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // Prevent background scroll

      // Display current image
      showImage(currentIndex);
    }

    /**
     * Close lightbox
     */
    function close() {
      if (!lightbox) return;

      // Prevent multiple close calls
      if (lightbox.classList.contains('is-closing')) return;

      lightbox.classList.add('is-closing');

      setTimeout(function() {
        lightbox.classList.remove('is-open', 'is-closing');
        document.body.style.overflow = '';
        currentSlides = [];
        currentIndex = 0;
        // Clean up keyboard listener
        document.removeEventListener('keydown', handleKeyboard);
        keyboardListenerAttached = false;
      }, 350); // Match CSS transition duration
    }

    /**
     * Show image at specific index
     */
    function showImage(index) {
      if (!currentSlides[index]) return;

      currentIndex = index;
      var imgSrc = currentSlides[index].src;
      var imgAlt = currentSlides[index].alt || 'Full size image';

      imageElement.src = imgSrc;
      imageElement.alt = imgAlt;

      // Update counter
      counterElement.textContent = (currentIndex + 1) + ' / ' + currentSlides.length;

      // Show/hide navigation arrows
      if (currentSlides.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      } else {
        prevBtn.style.display = '';
        nextBtn.style.display = '';
      }
    }

    /**
     * Show previous image
     */
    function showPrevious() {
      var newIndex = (currentIndex - 1 + currentSlides.length) % currentSlides.length;
      showImage(newIndex);
    }

    /**
     * Show next image
     */
    function showNext() {
      var newIndex = (currentIndex + 1) % currentSlides.length;
      showImage(newIndex);
    }

    /**
     * Handle keyboard navigation
     */
    function handleKeyboard(e) {
      if (!lightbox || !lightbox.classList.contains('is-open')) return;

      switch(e.key) {
        case 'Escape':
          close();
          break;
        case 'ArrowLeft':
          showPrevious();
          break;
        case 'ArrowRight':
          showNext();
          break;
      }
    }

    return {
      open: open,
      close: close
    };
  })();

  /**
   * Initialize lightbox zoom buttons
   */
  function initLightboxZoom() {
    var zoomButtons = document.querySelectorAll('.project-tile__zoom');

    zoomButtons.forEach(function(btn) {
      // Check if already initialized to prevent duplicate listeners
      if (btn.hasAttribute('data-zoom-initialized')) return;
      btn.setAttribute('data-zoom-initialized', 'true');

      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Find parent project tile
        var projectTile = btn.closest('.project-tile');
        if (!projectTile) return;

        // Get current slide index from the slideshow state
        var slides = projectTile.querySelectorAll('.project-tile__slide');
        var currentIndex = 0;

        slides.forEach(function(slide, index) {
          if (slide.classList.contains('project-tile__slide--active')) {
            currentIndex = index;
          }
        });

        // Open lightbox with current slide
        Lightbox.open(projectTile, currentIndex);
      });
    });
  }

  // ============================================
  // INITIALIZATION (Updated to include lightbox)
  // ============================================

  function init() {
    initSwipeCounters();
    initSlideshows();
    initCollectionFilter();
    initTouchSupport();
    initLightboxZoom();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
