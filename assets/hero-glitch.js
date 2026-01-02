document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.glitch-container');
    var text = container ? container.querySelector('.glitch-text') : null;
    if (!container || !text) {
        return;
    }

    var root = document.documentElement;

    function readPalette() {
        var computed = getComputedStyle(root);
        function pick(name, fallback) {
            var value = computed.getPropertyValue(name);
            return value && value.trim() ? value.trim() : fallback;
        }
        return {
            depth: pick('--firstGray-color', '#1e1e28'),
            primary: pick('--firstBlue-color', '#1E6991'),
            secondary: pick('--secondBlue-color', '#32D7E6'),
            accent: '#4183C4'
        };
    }

    var palette = readPalette();
    var lastRatios = { x: 0, y: 0, active: false };

    function updateTextShadow(xRatio, yRatio) {
        var depth = palette.depth;
        var primary = palette.primary;
        var secondary = palette.secondary;
        var accent = palette.accent;

        var primaryOffsetX = (0.05 * xRatio).toFixed(3);
        var secondaryOffsetX = (-0.025 - 0.05 * yRatio).toFixed(3);
        var secondaryOffsetY = (-0.05 * xRatio).toFixed(3);
        var accentOffsetX = (0.025 * yRatio).toFixed(3);
        var accentOffsetY = (0.05 * xRatio).toFixed(3);

        text.style.textShadow = primaryOffsetX + 'em 0 0 ' + depth + ', ' +
            secondaryOffsetX + 'em ' + secondaryOffsetY + 'em 0 ' + secondary + ', ' +
            accentOffsetX + 'em ' + accentOffsetY + 'em 0 ' + accent;
    }

    container.addEventListener('mousemove', function(event) {
        var x = event.clientX / window.innerWidth;
        var y = event.clientY / window.innerHeight;
        updateTextShadow(x, y);
        lastRatios = { x: x, y: y, active: true };

        if (Math.random() > 0.95) {
            var translateX = (Math.random() - 0.5) * 4;
            var translateY = (Math.random() - 0.5) * 4;
            text.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
            setTimeout(function() {
                text.style.transform = 'translate(0, 0)';
            }, 120);
        }
    });

    container.addEventListener('mouseleave', function() {
        text.style.transform = 'translate(0, 0)';
        text.style.textShadow = '';
        lastRatios.active = false;
    });

    var flickerTimer = setInterval(function() {
        if (document.hidden) {
            return;
        }
        if (Math.random() > 0.85) {
            text.style.opacity = (Math.random() * 0.15 + 0.85).toFixed(2);
            setTimeout(function() {
                text.style.opacity = '1';
            }, 80);
        }
    }, 900);

    function shuffleCharacters() {
        text.classList.add('intense-glitch');
        
        // Find word elements and flame
        var words = text.querySelectorAll('.hero-word');
        var flame = text.querySelector('.hero-flame');
        
        if (words.length === 0) {
            // Fallback to old behavior if no .hero-word elements found
            var original = text.getAttribute('data-text') || text.textContent;
            var chars = original.split('');
            var iteration = 0;

            var scramble = setInterval(function() {
                text.textContent = chars.map(function(char, index) {
                    if (char === ' ' || index < iteration) {
                        return chars[index];
                    }
                    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
                }).join('');

                iteration += 1 / 3;

                if (iteration >= chars.length) {
                    clearInterval(scramble);
                    text.textContent = original;
                    text.style.whiteSpace = 'nowrap';
                    text.style.opacity = '1';
                    text.style.transform = 'translate(0, 0)';
                    if (lastRatios.active) {
                        updateTextShadow(lastRatios.x, lastRatios.y);
                    }
                    setTimeout(function() {
                        text.classList.remove('intense-glitch');
                    }, 800);
                }
            }, 60);
            return;
        }
        
        // Activate flame intense effect
        if (flame) {
            flame.classList.add('hero-flame--intense');
        }
        
        // Store original text for each word
        var originals = [];
        for (var i = 0; i < words.length; i++) {
            originals.push(words[i].textContent);
        }
        
        var iteration = 0;
        var maxLength = Math.max.apply(Math, originals.map(function(text) { return text.length; }));
        
        var scramble = setInterval(function() {
            // Scramble each word independently
            for (var i = 0; i < words.length; i++) {
                var original = originals[i];
                var chars = original.split('');
                
                words[i].textContent = chars.map(function(char, index) {
                    if (char === ' ' || index < iteration) {
                        return chars[index];
                    }
                    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
                }).join('');
            }
            
            iteration += 1 / 3;
            
            if (iteration >= maxLength) {
                clearInterval(scramble);
                
                // Restore original text
                for (var i = 0; i < words.length; i++) {
                    words[i].textContent = originals[i];
                }
                
                text.style.opacity = '1';
                text.style.transform = 'translate(0, 0)';
                
                if (lastRatios.active) {
                    updateTextShadow(lastRatios.x, lastRatios.y);
                }
                
                setTimeout(function() {
                    text.classList.remove('intense-glitch');
                    if (flame) {
                        flame.classList.remove('hero-flame--intense');
                    }
                }, 800);
            }
        }, 60);
    }

    text.addEventListener('click', shuffleCharacters);

    var observer = new MutationObserver(function(mutations) {
        for (var i = 0; i < mutations.length; i++) {
            if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'class') {
                palette = readPalette();
                if (lastRatios.active) {
                    updateTextShadow(lastRatios.x, lastRatios.y);
                }
                break;
            }
        }
    });

    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    function handleVisibilityChange() {
        if (!document.hidden) {
            return;
        }
        text.style.opacity = '1';
        text.style.transform = 'translate(0, 0)';
    }

    function cleanup() {
        clearInterval(flickerTimer);
        observer.disconnect();
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        container.removeEventListener('mousemove', container._mouseMoveHandler);
        container.removeEventListener('mouseleave', container._mouseLeaveHandler);
        text.removeEventListener('click', shuffleCharacters);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', cleanup);
    window.addEventListener('pagehide', cleanup);
});
