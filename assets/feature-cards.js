// Feature cards interaction - vanilla JavaScript
// Responsive behavior: Desktop = single active card, Mobile = multi-open accordion
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Get all feature-cards sections (multiple on page for authors)
    const featureCardsSections = document.querySelectorAll('.feature-cards');
    if (!featureCardsSections.length) {
      return;
    }
    
    // Breakpoint for mobile accordion behavior
    const MOBILE_BREAKPOINT = 768;
    
    // Check if we're in mobile mode
    function isMobileView() {
      return window.innerWidth <= MOBILE_BREAKPOINT;
    }
    
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Bring an opened card's header to the top of the screen, below the fixed nav
    function scrollCardToTop(card) {
      const nav = document.querySelector('.nav-container');
      const offset = (nav ? nav.offsetHeight : 0) + 12;
      const top = card.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? 'auto' : 'smooth' });
    }

    // Author photos: the desktop swaps them on hover (CSS). The mobile layout
    // has no hover, so tapping the photo or the author logo flips it - an
    // unannounced easter egg, deliberately without a hint or auto demo.
    const flipCards = Array.from(document.querySelectorAll('.feature-card--image'))
      .filter(card => card.querySelector('.feature-card__image--back'));

    function flipPhoto(card, flipped) {
      card.classList.toggle('is-flipped', flipped);
      const link = card.querySelector('.feature-card__image-link');
      if (link && link.hasAttribute('aria-pressed')) {
        link.setAttribute('aria-pressed', String(flipped));
      }
      // Restart the one-shot glow
      card.classList.remove('is-glowing');
      void card.offsetWidth;
      card.classList.add('is-glowing');
    }

    // On mobile the photo is a toggle, not the LinkedIn link (the name is)
    function syncPhotoRoles() {
      const mobile = isMobileView();
      flipCards.forEach(card => {
        const link = card.querySelector('.feature-card__image-link');
        if (!link) return;
        if (mobile) {
          link.setAttribute('role', 'button');
          link.setAttribute('aria-pressed', String(card.classList.contains('is-flipped')));
          link.setAttribute('aria-label', link.dataset.flipLabel || '');
        } else {
          link.removeAttribute('role');
          link.removeAttribute('aria-pressed');
          link.removeAttribute('aria-label');
        }
      });
    }
    syncPhotoRoles();

    flipCards.forEach(card => {
      card.addEventListener('animationend', () => card.classList.remove('is-glowing'));
      const link = card.querySelector('.feature-card__image-link');
      if (link) {
        // role="button" should also answer to Space
        link.addEventListener('keydown', e => {
          if (e.key === ' ' && isMobileView()) {
            e.preventDefault();
            link.click();
          }
        });
      }
    });

    // Handle each feature-cards section independently
    featureCardsSections.forEach(section => {
      const featureCards = section.querySelectorAll('.feature-card');
      
      featureCards.forEach(card => {
        card.addEventListener('click', function(e) {
          // Check if this is an image card (author card) - don't toggle on mobile
          const isImageCard = this.classList.contains('feature-card--image');
          
          // Check if click happened on an image element
          const clickedOnImage = e.target.tagName === 'IMG' || 
                                 e.target.closest('.author-image-container') ||
                                 e.target.classList.contains('author-image') ||
                                 e.target.classList.contains('author-image-container') ||
                                 e.target.closest('.feature-card__image-container');
          
          // The author logo badge on a photo card flips the photo too
          const clickedOnLogo = isImageCard && e.target.closest('.feature-card__label');

          // If clicked on image, don't toggle cards. On mobile a photo with
          // an alternate version flips instead of opening its link.
          if (clickedOnImage || clickedOnLogo) {
            if (isMobileView() && flipCards.includes(this)) {
              e.preventDefault();
              flipPhoto(this, !this.classList.contains('is-flipped'));
            }
            return;
          }
          
          if (isMobileView()) {
            // MOBILE: Image cards are always open, don't toggle them.
            // Only the header toggles, so taps (and links) in the text work.
            if (isImageCard || !e.target.closest('.feature-card__label')) {
              return;
            }
            e.preventDefault();

            // Mobile uses .is-open; .active stays the desktop state
            if (section.classList.contains('feature-cards--authors')) {
              // Author cards: multi-open accordion
              this.classList.toggle('is-open');
              return;
            }

            // Story cards: one open at a time, header scrolled into view
            if (this.classList.contains('is-open')) {
              this.classList.remove('is-open');
              return;
            }
            // A card closing above this one collapses instantly: it is usually
            // off screen, and an animated collapse would move the target
            // (and fight scroll anchoring) while we scroll to it
            featureCards.forEach(c => {
              if (c === this || !c.classList.contains('is-open')) return;
              const above = c.compareDocumentPosition(this) & Node.DOCUMENT_POSITION_FOLLOWING;
              if (above) c.classList.add('no-anim');
              c.classList.remove('is-open');
            });
            this.classList.add('is-open');
            scrollCardToTop(this); // reads layout, so the collapse above has applied
            requestAnimationFrame(() => {
              featureCards.forEach(c => c.classList.remove('no-anim'));
            });
          } else {
            e.preventDefault();
            // DESKTOP: Single active card behavior (original)
            featureCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
          }
        });
      });
    });
    
    // Handle resize: ensure proper state when switching between mobile/desktop
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        syncPhotoRoles();
        // On resize to desktop, ensure at least one card is active per section
        if (!isMobileView()) {
          featureCardsSections.forEach(section => {
            const featureCards = section.querySelectorAll('.feature-card');
            const hasActive = section.querySelector('.feature-card.active');
            
            if (!hasActive && featureCards.length > 0) {
              // Activate first non-image card, or first card
              const firstTextCard = section.querySelector('.feature-card:not(.feature-card--image)');
              if (firstTextCard) {
                firstTextCard.classList.add('active');
              } else {
                featureCards[0].classList.add('active');
              }
            }
          });
        }
      }, 150);
    });
  } catch (e) {
    // Feature cards fail gracefully - cards remain clickable without state management
  }
});

