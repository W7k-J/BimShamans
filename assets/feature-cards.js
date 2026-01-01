// Feature cards interaction - vanilla JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const featureCards = document.querySelectorAll('.feature-card');
  
  featureCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all cards
      featureCards.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked card
      this.classList.add('active');
    });
  });
});

