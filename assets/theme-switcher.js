document.addEventListener('DOMContentLoaded', function() {
    try {
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
        const themeSwitcherDesktop = document.getElementById('theme-switcher-desktop');
        
        // If neither switcher exists, bail out
        if (!themeSwitcher && !themeSwitcherDesktop) {
            return;
        }

        const root = document.documentElement;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        const timerSettings = { timeoutId: null };

        // Add syncing class to both switchers
        if (themeSwitcher) {
            const switchWrapper = themeSwitcher.closest('.switch');
            if (switchWrapper) {
                switchWrapper.classList.add('switch--syncing');
            }
        }
        if (themeSwitcherDesktop) {
            const switchWrapperDesktop = themeSwitcherDesktop.closest('.switch');
            if (switchWrapperDesktop) {
                switchWrapperDesktop.classList.add('switch--syncing');
            }
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
            if (window.SafeStorage) {
                currentTheme = window.SafeStorage.getItem('theme') || currentTheme;
            } else {
                currentTheme = localStorage.getItem('theme') || currentTheme;
            }
        }

        applyTheme(currentTheme);
        
        // Sync both switchers
        if (themeSwitcher) {
            themeSwitcher.checked = currentTheme === 'dark';
        }
        if (themeSwitcherDesktop) {
            themeSwitcherDesktop.checked = currentTheme === 'dark';
        }

        // Remove syncing class after animation
        timerSettings.timeoutId = setTimeout(function() {
            if (themeSwitcher) {
                const switchWrapper = themeSwitcher.closest('.switch');
                if (switchWrapper) {
                    switchWrapper.classList.remove('switch--syncing');
                }
            }
            if (themeSwitcherDesktop) {
                const switchWrapperDesktop = themeSwitcherDesktop.closest('.switch');
                if (switchWrapperDesktop) {
                    switchWrapperDesktop.classList.remove('switch--syncing');
                }
            }
        }, 250);

        // Function to handle theme change from either switcher
        function handleThemeChange(isDark) {
            const newTheme = isDark ? 'dark' : 'light';
            applyTheme(newTheme);
            
            // Sync both switchers
            if (themeSwitcher) {
                themeSwitcher.checked = isDark;
            }
            if (themeSwitcherDesktop) {
                themeSwitcherDesktop.checked = isDark;
            }
            
            // Save to storage
            if (isLocalStorageAvailable() && window.SafeStorage) {
                window.SafeStorage.setItem('theme', newTheme);
            } else if (isLocalStorageAvailable()) {
                localStorage.setItem('theme', newTheme);
            }
        }

        // Add listeners to both switchers
        if (themeSwitcher) {
            themeSwitcher.addEventListener('change', function() {
                handleThemeChange(themeSwitcher.checked);
            });
        }
        
        if (themeSwitcherDesktop) {
            themeSwitcherDesktop.addEventListener('change', function() {
                handleThemeChange(themeSwitcherDesktop.checked);
            });
        }

        if (prefersDark && typeof prefersDark.addEventListener === 'function') {
            prefersDark.addEventListener('change', function(event) {
                handleThemeChange(event.matches);
            });
        }
    } catch (e) {
        // Theme switcher fails gracefully - default theme from <head> will be used
    }
});