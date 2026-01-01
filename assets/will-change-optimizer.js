// Will-change performance helper
// Use this to dynamically add/remove will-change property only during animations
// to avoid memory overhead from keeping it permanently

(function() {
    'use strict';

    // Helper function to optimize will-change usage
    function optimizeWillChange(element, properties) {
        if (!element) return;

        // Add will-change before animation
        element.style.willChange = properties;

        // Remove will-change after animation completes
        // Using a slightly longer timeout to ensure animation is complete
        const animationDuration = parseFloat(getComputedStyle(element).animationDuration) * 1000 || 0;
        const transitionDuration = parseFloat(getComputedStyle(element).transitionDuration) * 1000 || 0;
        const duration = Math.max(animationDuration, transitionDuration);

        if (duration > 0) {
            setTimeout(function() {
                element.style.willChange = 'auto';
            }, duration + 100);
        }
    }

    // Export to global scope if needed
    if (typeof window !== 'undefined') {
        window.optimizeWillChange = optimizeWillChange;
    }

    // Auto-optimize glitch text on intense animation trigger
    document.addEventListener('DOMContentLoaded', function() {
        const glitchText = document.querySelector('.hero-banner .glitch-text');
        
        if (glitchText) {
            // Add will-change when intense glitch class is added
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.attributeName === 'class') {
                        const target = mutation.target;
                        if (target.classList.contains('intense-glitch')) {
                            target.style.willChange = 'text-shadow';
                        } else {
                            target.style.willChange = 'auto';
                        }
                    }
                });
            });

            observer.observe(glitchText, { attributes: true, attributeFilter: ['class'] });
        }

        // Optimize circuit glow on activation
        const circuitGlow = document.querySelector('.hero-banner__circuit-glow');
        if (circuitGlow) {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.attributeName === 'class') {
                        const target = mutation.target;
                        if (target.classList.contains('active')) {
                            target.style.willChange = 'opacity';
                        } else {
                            // Remove after transition completes
                            setTimeout(function() {
                                target.style.willChange = 'auto';
                            }, 400); // 350ms transition + buffer
                        }
                    }
                });
            });

            observer.observe(circuitGlow, { attributes: true, attributeFilter: ['class'] });
        }
    });
})();
