/**
 * Blog Filter & Sort Manager
 * Handles filtering by tags, real-time search, and sorting of blog posts
 */

class BlogManager {
  constructor(posts) {
    this.allPosts = posts || [];
    this.filteredPosts = [...this.allPosts];
    this.currentFilter = 'All';
    this.currentSortBy = 'date';
    this.currentDirection = 'desc';
    this.searchQuery = '';
    this.init();
  }

  init() {
    if (this.allPosts.length === 0) {
      console.warn('BlogManager: No posts provided');
      return;
    }
    
    this.generateTagFilters();
    this.applyInitialSort();
    this.attachListeners();
    this.render();
  }

  /**
   * Generate unique tags from all posts with count
   */
  generateTagFilters() {
    const tagMap = new Map();
    
    this.allPosts.forEach(post => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach(tag => {
          tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
        });
      }
    });

    const tagFiltersContainer = document.getElementById('tag-filters');
    if (!tagFiltersContainer) return;

    // "All" button
    let html = '<button class="blog__tag blog__tag--active" data-tag="All">All</button>';
    
    // Sort tags alphabetically
    const sortedTags = Array.from(tagMap.entries())
      .sort((a, b) => a[0].localeCompare(b[0]));
    
    sortedTags.forEach(([tag, count]) => {
      html += `<button class="blog__tag" data-tag="${tag}">${tag} (${count})</button>`;
    });

    tagFiltersContainer.innerHTML = html;
  }

  /**
   * Apply initial sort (newest descending)
   */
  applyInitialSort() {
    this.sort('date', 'desc');
  }

  /**
   * Filter posts by tag
   */
  filter(tag) {
    this.currentFilter = tag;
    
    if (tag === 'All') {
      this.filteredPosts = [...this.allPosts];
    } else {
      this.filteredPosts = this.allPosts.filter(post => 
        post.tags && post.tags.includes(tag)
      );
    }

    this.applySearch();
    this.sort(this.currentSortBy, this.currentDirection);
    this.updateTagUI();
    this.render();
  }

  /**
   * Search posts by title and excerpt
   */
  search(query) {
    this.searchQuery = query.toLowerCase().trim();
    this.applySearch();
    this.sort(this.currentSortBy, this.currentDirection);
    this.render();
  }

  /**
   * Apply search filter to filtered posts
   */
  applySearch() {
    if (!this.searchQuery) {
      return;
    }

    this.filteredPosts = this.filteredPosts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(this.searchQuery);
      const excerptMatch = post.excerpt.toLowerCase().includes(this.searchQuery);
      const tagsMatch = post.tags && post.tags.some(tag => 
        tag.toLowerCase().includes(this.searchQuery)
      );
      return titleMatch || excerptMatch || tagsMatch;
    });
  }

  /**
   * Sort posts by type and direction
   */
  sort(sortBy, direction) {
    this.currentSortBy = sortBy;
    this.currentDirection = direction;

    // Determine language for label
    const isPolish = document.documentElement.lang === 'pl';
    const sortLabels = {
      date: isPolish ? 'data' : 'date',
      title: isPolish ? 'tytuł' : 'title',
      author: isPolish ? 'autor' : 'author'
    };
    
    // Update button label
    const sortLabel = document.getElementById('sort-label');
    if (sortLabel) {
      sortLabel.textContent = sortLabels[sortBy] || sortLabels.date;
    }

    this.updateSortUI(sortBy);

    const multiplier = direction === 'asc' ? 1 : -1;

    switch(sortBy) {
      case 'date':
        this.filteredPosts.sort((a, b) => {
          return (new Date(b.dateObj) - new Date(a.dateObj)) * multiplier;
        });
        break;
      case 'title':
        this.filteredPosts.sort((a, b) => {
          return a.title.localeCompare(b.title) * multiplier;
        });
        break;
      case 'author':
        this.filteredPosts.sort((a, b) => {
          return (a.author || '').localeCompare(b.author || '') * multiplier;
        });
        break;
    }

    this.render();
  }

  /**
   * Update tag button UI
   */
  updateTagUI() {
    document.querySelectorAll('#tag-filters .blog__tag').forEach(btn => {
      btn.classList.remove('blog__tag--active');
      if (btn.dataset.tag === this.currentFilter) {
        btn.classList.add('blog__tag--active');
      }
    });
  }

  /**
   * Update direction toggle button UI
   */
  updateDirectionUI() {
    document.querySelectorAll('.blog__direction-btn').forEach(btn => {
      const direction = btn.dataset.direction;
      const isActive = direction === this.currentDirection;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  /**
   * Render blog cards to DOM
   */
  render() {
    const container = document.getElementById('blog-cards');
    if (!container) return;

    if (this.filteredPosts.length === 0) {
      container.innerHTML = `
        <div class="blog__empty">
          <p>No articles match your criteria. Try adjusting your filters.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.filteredPosts
      .map(post => this.renderCard(post))
      .join('');
  }

  /**
   * Render single card HTML
   */
  renderCard(post) {
    const tagsHtml = (post.tags && Array.isArray(post.tags))
      ? post.tags.map(tag => `<span class="blog-card__tag">${tag}</span>`).join('')
      : '';

    const category = post.category || (post.tags && post.tags[0]) || 'Blog';
    const author = post.author ? `by ${post.author}` : '';
    const excerpt = post.excerpt || 'Read more to discover...';
    
    // Right arrow icon SVG file
    const arrowIcon = `<img src="/images/icons/icons_alt-arrow-right.svg" alt="arrow" />`;

    return `
      <article class="blog-card" data-tags="${(post.tags || []).join(',')}">
        <div class="blog-card__image">
          <img src="${post.image}" alt="${post.title}" loading="lazy">
          <span class="blog-card__category">${category}</span>
        </div>
        
        <div class="blog-card__content">
          <h3 class="blog-card__title">${post.title}</h3>
          <p class="blog-card__excerpt">${excerpt}</p>
        </div>
        
        <div class="blog-card__overlay">
          <p class="blog-card__description">${post.description || 'Discover more insights and details about this article.'}</p>
          <div class="blog-card__tags">${tagsHtml}</div>
          ${author ? `<p class="blog-card__author">${author}</p>` : ''}
          <a href="${post.url}" class="blog-card__label">
            <div class="blog-card__icon">${arrowIcon}</div>
            <div class="blog-card__info">
              <div class="blog-card__main">Read more</div>
            </div>
          </a>
        </div>
      </article>
    `;
  }

  /**
   * Attach event listeners
   */
  attachListeners() {
    // Tag filter buttons
    document.addEventListener('click', (e) => {
      const tagBtn = e.target.closest('#tag-filters .blog__tag');
      if (tagBtn) {
        const tag = tagBtn.dataset.tag;
        if (tag) this.filter(tag);
        return;
      }

      // Sort option buttons (dropdown menu)
      const sortOption = e.target.closest('.blog__sort-option');
      if (sortOption) {
        const sortBy = sortOption.dataset.sort;
        if (sortBy) {
          this.sort(sortBy, this.currentDirection);
        }
        // Close the dropdown menu
        const sortMenu = document.querySelector('.blog__sort-menu');
        if (sortMenu) {
          sortMenu.style.display = 'none';
          // Reset after a small delay to allow CSS hover to work again
          setTimeout(() => {
            sortMenu.style.display = '';
          }, 50);
        }
        return;
      }

      // Direction toggle buttons
      const directionBtn = e.target.closest('.blog__direction-btn');
      if (directionBtn) {
        const direction = directionBtn.dataset.direction;
        if (direction) {
          this.sort(this.currentSortBy, direction);
          this.updateDirectionUI();
        }
        return;
      }
    });

    // Search input with debounce (supports both old and new search bar)
    const legacySearchInput = document.getElementById('blog-search-input');
    if (legacySearchInput) {
      let searchTimeout;
      legacySearchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          this.search(e.target.value);
        }, 300);
      });
    }

    // New universal search bar integration
    const newSearchInput = document.querySelector('.searchbar--blog .searchbar__input');
    if (newSearchInput) {
      let searchTimeout;
      newSearchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          this.search(e.target.value);
        }, 300);
      });
    }
  }

  /**
   * Update sort button UI
   */
  updateSortUI(sortBy) {
    document.querySelectorAll('.blog__sort-option').forEach(btn => {
      if (btn.dataset.sort === sortBy) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

/**
 * Initialize BlogManager when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof blogPosts !== 'undefined') {
    new BlogManager(blogPosts);
  } else {
    console.warn('BlogManager: blogPosts not found in global scope');
  }
});
