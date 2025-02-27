function handleLanguage() {
    const storedLang = localStorage.getItem('preferredLanguage') || 'en';
    const currentLang = document.documentElement.lang;
    
    if (storedLang !== currentLang) {
        window.location.href = window.location.pathname.replace(`/${currentLang}/`, `/${storedLang}/`);
    }
}

function switchLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/\/(en|pl)\//, `/${lang}/`);
    window.location.href = newPath;
}

document.addEventListener('DOMContentLoaded', handleLanguage);