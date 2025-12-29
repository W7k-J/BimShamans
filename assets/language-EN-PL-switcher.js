function hasLanguageSegment(pathname) {
    return /\/(en|pl)\//.test(pathname);
}

function handleLanguage() {
    let storedLang = 'en';

    try {
        storedLang = localStorage.getItem('preferredLanguage') || 'en';
    } catch (e) {
        storedLang = 'en';
    }

    const currentLang = document.documentElement.lang;
    const currentPath = window.location.pathname;

    syncLanguageControls(currentLang);

    if (storedLang !== currentLang && hasLanguageSegment(currentPath)) {
        window.location.href = currentPath.replace(`/${currentLang}/`, `/${storedLang}/`);
    }
}

function switchLanguage(lang) {
    try {
        localStorage.setItem('preferredLanguage', lang);
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