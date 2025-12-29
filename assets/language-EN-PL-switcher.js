function hasLanguageSegment(pathname) {
    return /\/(en|pl)\//.test(pathname);
}

function handleLanguage() {
    const storedLang = localStorage.getItem('preferredLanguage') || 'en';
    const currentLang = document.documentElement.lang;
    const currentPath = window.location.pathname;

    if (storedLang !== currentLang && hasLanguageSegment(currentPath)) {
        window.location.href = currentPath.replace(`/${currentLang}/`, `/${storedLang}/`);
    }
}

function switchLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    const currentPath = window.location.pathname;

    if (!hasLanguageSegment(currentPath)) {
        return;
    }

    const newPath = currentPath.replace(/\/(en|pl)\//, `/${lang}/`);
    window.location.href = newPath;
}

document.addEventListener('DOMContentLoaded', handleLanguage);