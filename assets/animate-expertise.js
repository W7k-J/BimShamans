document.addEventListener('DOMContentLoaded', function () {
  try {
    var container = document.querySelector('.expertise__container');
    if (!container) return;

    // Apply base class and staggered transition delays, then trigger animation
    requestAnimationFrame(function () {
      container.classList.add('portfolio-slide-in');

      var sections = container.querySelectorAll('.expertise-section');
      sections.forEach(function (section, i) {
        var media = section.querySelector('.expertise-section__media');
        var content = section.querySelector('.expertise-section__content');
        var baseDelay = i * 80; // ms stagger per section
        if (content) content.style.transitionDelay = (baseDelay) + 'ms';
        if (media) media.style.transitionDelay = (baseDelay + 80) + 'ms';
      });

      // Tiny timeout to ensure transitionDelay is applied before changing state
      setTimeout(function () {
        container.classList.add('is-animated');
      }, 20);

      // Clear transitionDelay after animation completes to prevent theme switch delays
      var maxDelay = sections.length * 80 + 80 + 480; // max stagger + animation duration
      setTimeout(function () {
        sections.forEach(function (section) {
          var media = section.querySelector('.expertise-section__media');
          var content = section.querySelector('.expertise-section__content');
          if (content) content.style.transitionDelay = '';
          if (media) media.style.transitionDelay = '';
        });
      }, maxDelay);
    });
  } catch (e) {
    // fail gracefully
  }
});
