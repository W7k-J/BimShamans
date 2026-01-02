// Feature cards interaction - vanilla JavaScript
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Get all feature-cards sections (multiple on page for authors)
    const featureCardsSections = document.querySelectorAll('.feature-cards');
    if (!featureCardsSections.length) {
      return;
    }
    
    // Handle each feature-cards section independently
    featureCardsSections.forEach(section => {
      const featureCards = section.querySelectorAll('.feature-card');
      
      featureCards.forEach(card => {
        card.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Remove active class only from cards in THIS section
          featureCards.forEach(c => c.classList.remove('active'));
          
          // Add active class to clicked card
          this.classList.add('active');
        });
      });
    });
  } catch (e) {
    // Feature cards fail gracefully - cards remain clickable without state management
  }
});

