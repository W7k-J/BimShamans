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

document.addEventListener('DOMContentLoaded', handleLanguage);