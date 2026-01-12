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
          
          // If clicked on image, don't toggle cards - just return
          if (clickedOnImage) {
            return;
          }
          
          e.preventDefault();
          
          if (isMobileView()) {
            // MOBILE: Image cards are always open, don't toggle them
            if (isImageCard) {
              return;
            }
            // MOBILE: Toggle this card independently (multi-open accordion)
            this.classList.toggle('active');
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

