// Feature cards interaction - vanilla JavaScript
document.addEventListener('DOMContentLoaded', function() {
  try {
    const featureCards = document.querySelectorAll('.feature-card');
    if (!featureCards.length) {
      return;
    }
    
    featureCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all cards
      featureCards.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked card
      this.classList.add('active');
    });
  });
  } catch (e) {
    // Feature cards fail gracefully - cards remain clickable without state management
  }
});

