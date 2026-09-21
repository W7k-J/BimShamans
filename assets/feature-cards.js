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
    
    // Author photos: the desktop swaps them on hover (CSS). The mobile layout
    // has no hover, so a tap flips the photo and each one flips once on its
    // own the first time it scrolls into view, to show the effect exists.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

    function cancelReveal(card) {
      (card._revealTimers || []).forEach(clearTimeout);
      card._revealTimers = [];
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

    if (!reducedMotion && 'IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || !isMobileView()) return;
          const card = entry.target;
          revealObserver.unobserve(card);
          card._revealTimers = [
            setTimeout(() => flipPhoto(card, true), 400),
            setTimeout(() => flipPhoto(card, false), 1900)
          ];
        });
      }, { threshold: 0.8 });
      flipCards.forEach(card => revealObserver.observe(card));
    }

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
          
          // If clicked on image, don't toggle cards. On mobile a photo with
          // an alternate version flips instead of opening its link.
          if (clickedOnImage) {
            if (isMobileView() && flipCards.includes(this)) {
              e.preventDefault();
              cancelReveal(this);
              flipPhoto(this, !this.classList.contains('is-flipped'));
            }
            return;
          }
          
          e.preventDefault();
          
          if (isMobileView()) {
            // MOBILE: Image cards are always open, don't toggle them
            if (isImageCard) {
              return;
            }
            // MOBILE: Toggle this card independently (multi-open accordion).
            // Author sections start collapsed on mobile, so they use their own
            // class and leave the desktop 'active' card untouched.
            if (section.classList.contains('feature-cards--authors')) {
              this.classList.toggle('is-open');
            } else {
              this.classList.toggle('active');
            }
          } else {
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

