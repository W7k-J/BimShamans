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
    let currentTheme = 'light';

    // Only try to get from localStorage if it's available
    if (isLocalStorageAvailable()) {
        currentTheme = localStorage.getItem('theme') || 'light';
    }

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        themeSwitcher.checked = true;
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }

    themeSwitcher.addEventListener('change', function() {
        if (themeSwitcher.checked) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            if (isLocalStorageAvailable()) {
                localStorage.setItem('theme', 'dark');
            }
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            if (isLocalStorageAvailable()) {
                localStorage.setItem('theme', 'light');
            }
        }
    });
});