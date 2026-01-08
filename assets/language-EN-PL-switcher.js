function hasLanguageSegment(pathname) {
    return /\/(en|pl)\//.test(pathname);
}

function handleLanguage() {
    try {
        const currentLang = document.documentElement.lang || 'en';
    let storedLang = currentLang;

    try {
        if (window.SafeStorage) {
            const saved = window.SafeStorage.getItem('preferredLanguage');
            if (saved) {
                storedLang = saved;
            }
        } else {
            const saved = localStorage.getItem('preferredLanguage');
            if (saved) {
                storedLang = saved;
            }
        }
    } catch (e) {
        storedLang = currentLang;
    }

    const currentPath = window.location.pathname;

    syncLanguageControls(currentLang);

    if (storedLang !== currentLang && hasLanguageSegment(currentPath)) {
        window.location.href = currentPath.replace(`/${currentLang}/`, `/${storedLang}/`);
    }
    } catch (e) {
        // Language handling fails gracefully - page loads with current language
    }
}

function switchLanguage(lang) {
    try {
        if (window.SafeStorage) {
            window.SafeStorage.setItem('preferredLanguage', lang);
        } else {
            localStorage.setItem('preferredLanguage', lang);
        }
    } catch (e) {
        // ignore storage errors
    }

    // Save scroll position before switching
    try {
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if (window.SafeStorage) {
            window.SafeStorage.setItem('scrollPosition', scrollPosition.toString());
        } else {
            sessionStorage.setItem('scrollPosition', scrollPosition.toString());
        }
    } catch (e) {
        // ignore storage errors
    }

    syncLanguageControls(lang);
    const currentPath = window.location.pathname;

    if (!hasLanguageSegment(currentPath)) {
        return;
    }

    const newPath = currentPath.replace(/\/(en|pl)\//, `/${lang}/`);
    window.location.href = newPath;
}

function syncLanguageControls(activeLang) {
    const controls = document.querySelectorAll('.language-switcher [data-lang]');

    controls.forEach(function(control) {
        const isActive = control.getAttribute('data-lang') === activeLang;
        control.classList.toggle('active', isActive);
        control.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

// Restore scroll position after language switch
function restoreScrollPosition() {
    try {
        let savedScroll = null;
        
        if (window.SafeStorage) {
            savedScroll = window.SafeStorage.getItem('scrollPosition');
        } else {
            savedScroll = sessionStorage.getItem('scrollPosition');
        }
        
        if (savedScroll !== null) {
            const scrollPos = parseInt(savedScroll, 10);
            
            // Instant scroll without smooth behavior for seamless effect
            window.scrollTo(0, scrollPos);
            
            // Clear the saved position
            if (window.SafeStorage) {
                window.SafeStorage.removeItem('scrollPosition');
            } else {
                sessionStorage.removeItem('scrollPosition');
            }
        }
    } catch (e) {
        // ignore errors
    }
}

// Call restore immediately, not waiting for full DOM
restoreScrollPosition();

document.addEventListener('DOMContentLoaded', function() {
    handleLanguage();
});