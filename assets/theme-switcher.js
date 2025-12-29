document.addEventListener('DOMContentLoaded', function() {
    // Check if localStorage is available
    function isLocalStorageAvailable() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch(e) {
            return false;
        }
    }

    const themeSwitcher = document.getElementById('theme-switcher');
    if (!themeSwitcher) {
        return;
    }

    const root = document.documentElement;

    function applyTheme(theme) {
        const themes = ['light', 'dark'];
        themes.forEach(function(name) {
            root.classList.toggle(name + '-theme', name === theme);
        });
    }

    let currentTheme = root.classList.contains('dark-theme') ? 'dark' : 'light';

    // Only try to get from localStorage if it's available
    if (isLocalStorageAvailable()) {
        currentTheme = localStorage.getItem('theme') || currentTheme;
    }

    applyTheme(currentTheme);
    themeSwitcher.checked = currentTheme === 'dark';

    themeSwitcher.addEventListener('change', function() {
        if (themeSwitcher.checked) {
            applyTheme('dark');
            if (isLocalStorageAvailable()) {
                localStorage.setItem('theme', 'dark');
            }
        } else {
            applyTheme('light');
            if (isLocalStorageAvailable()) {
                localStorage.setItem('theme', 'light');
            }
        }
    });
});