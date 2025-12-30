document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.glitch-container');
    var text = container ? container.querySelector('.glitch-text') : null;
    if (!container || !text) {
        return;
    }

    var root = document.documentElement;

    function getToken(name, fallback) {
        var value = getComputedStyle(root).getPropertyValue(name);
        if (!value || !value.trim()) {
            return fallback;
        }
        return value.trim();
    }

    function updateTextShadow(xRatio, yRatio) {
        var primary = getToken('--firstBlue-color', '#1E6991');
        var secondary = getToken('--secondBlue-color', '#32D7E6');
        var accent = '#4183C4';
        var depth = getToken('--firstGray-color', '#1e1e28');

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
                setTimeout(function() {
                    text.classList.remove('intense-glitch');
                }, 800);
            }
        }, 60);
    }

    text.addEventListener('click', shuffleCharacters);

    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            return;
        }
        text.style.opacity = '1';
        text.style.transform = 'translate(0, 0)';
    });

    window.addEventListener('beforeunload', function() {
        clearInterval(flickerTimer);
    });
});
