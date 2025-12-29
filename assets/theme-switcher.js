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
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const switchWrapper = themeSwitcher.closest('.switch');
    const timerSettings = { timeoutId: null };

    if (switchWrapper) {
        switchWrapper.classList.add('switch--syncing');
    }

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

    if (switchWrapper) {
        timerSettings.timeoutId = setTimeout(function() {
            switchWrapper.classList.remove('switch--syncing');
        }, 250);
    }

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

    if (prefersDark && typeof prefersDark.addEventListener === 'function') {
        prefersDark.addEventListener('change', function(event) {
            const nextTheme = event.matches ? 'dark' : 'light';
            applyTheme(nextTheme);
            themeSwitcher.checked = nextTheme === 'dark';
            if (isLocalStorageAvailable()) {
                localStorage.setItem('theme', nextTheme);
            }
        });
    }
});