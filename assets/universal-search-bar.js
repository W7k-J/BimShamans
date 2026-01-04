/**
 * Universal Search Bar Component
 * Expandable search bar with icon toggle
 * Can be reused across multiple pages with different data sources
 * 
 * Usage:
 * <div class="searchbar searchbar--{variant}" data-searchbar="{identifier}">
 *   <form class="searchbar__form" role="search">
 *     <input type="search" class="searchbar__input" placeholder="Search...">
 *     <button type="button" class="searchbar__icon" aria-label="Toggle search" aria-expanded="false">
 *       <svg><!-- magnifying glass icon --></svg>
 *     </button>
 *   </form>
 * </div>
 */

class UniversalSearchBar {
  constructor(element, options = {}) {
    this.container = element;
    this.options = options;
    this.isOpen = false;
    
    // Get elements
    this.form = this.container.querySelector('.searchbar__form');
    this.input = this.container.querySelector('.searchbar__input');
    this.icon = this.container.querySelector('.searchbar__icon');
    
    // Validate required elements
    if (!this.form || !this.input || !this.icon) {
      console.warn('UniversalSearchBar: Missing required elements', { form: this.form, input: this.input, icon: this.icon });
      return;
    }

    // Callback for search input (optional - can be overridden)
    this.onSearch = options.onSearch || ((value) => {});
    this.onOpen = options.onOpen || (() => {});
    this.onClose = options.onClose || (() => {});

    this.init();
  }

  init() {
    this.attachListeners();
  }

  /**
   * Attach event listeners
   */
  attachListeners() {
    // Icon button click - toggle expand/collapse
    this.icon.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggle();
    });

    // Input click - if already open, don't do anything (already focused)
    this.input.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!this.isOpen) {
        this.open();
      }
    });

    // Input focus - ensure searchbar is open
    this.input.addEventListener('focus', () => {
      if (!this.isOpen) {
        this.open();
      }
    });

    // Input blur - close if empty
    this.input.addEventListener('blur', () => {
      if (this.isOpen && !this.input.value.trim()) {
        setTimeout(() => {
          this.close();
        }, 100);
      }
    });

    // Input change - fire search callback with debounce
    let searchTimeout;
    this.input.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        this.onSearch(e.target.value);
      }, 300);
    });

    // Document click - close if click outside
    document.addEventListener('click', (e) => {
      if (!this.container.contains(e.target) && this.isOpen) {
        this.close();
      }
    });

    // Prevent mouseup event from propagating (allows form submission)
    this.form.addEventListener('mouseup', (e) => {
      e.stopPropagation();
    });

    this.container.addEventListener('mouseup', (e) => {
      e.stopPropagation();
    });
  }

  /**
   * Toggle searchbar open/close
   */
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Open searchbar
   */
  open() {
    this.isOpen = true;
    this.container.classList.add('searchbar--open');
    this.icon.setAttribute('aria-expanded', 'true');
    // Delay focus to allow CSS transition to complete
    setTimeout(() => {
      this.input.focus();
    }, 50);
    this.onOpen();
  }

  /**
   * Close searchbar
   */
  close() {
    const inputValue = this.input.value.trim();
    
    // Only close if input is empty
    if (inputValue.length === 0) {
      this.isOpen = false;
      this.container.classList.remove('searchbar--open');
      this.icon.setAttribute('aria-expanded', 'false');
      this.input.blur();
      this.onClose();
    }
    // If input has value, keep open so user can see their query
  }

  /**
   * Set search value programmatically
   */
  setValue(value) {
    this.input.value = value;
    this.input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  /**
   * Clear search value
   */
  clear() {
    this.input.value = '';
    this.input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  /**
   * Get current search value
   */
  getValue() {
    return this.input.value.trim();
  }

  /**
   * Destroy instance
   */
  destroy() {
    // Cleanup listeners - since we use addEventListener, they'll persist
    // For full cleanup, would need to store references
    this.container.classList.remove('searchbar--open');
  }
}

/**
 * Auto-initialize all searchbars on page
 */
document.addEventListener('DOMContentLoaded', () => {
  const searchbars = document.querySelectorAll('[class*="searchbar"]');
  
  searchbars.forEach(element => {
    const dataAttr = element.getAttribute('data-searchbar');
    const instance = new UniversalSearchBar(element);
    
    // Store instance on element for later access if needed
    if (dataAttr) {
      window[`searchbar_${dataAttr}`] = instance;
    }
  });
});

/**
 * Export for use in other modules if using ES6 modules
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UniversalSearchBar;
}
