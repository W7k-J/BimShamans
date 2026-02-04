/**
 * Cookie Notice Handler
 * - Shows an informational notice about localStorage usage
 * - Dismisses and remembers user's acknowledgment
 * - Uses SafeStorage wrapper if available for rate-limited storage access
 */
(function() {
    'use strict';

    var NOTICE_KEY = 'cookie_notice_dismissed';
    var notice = document.getElementById('cookie-notice');
    var acceptBtn = document.getElementById('cookie-accept');

    if (!notice || !acceptBtn) {
        return;
    }

    // Helper to get storage (uses SafeStorage if available)
    function getStorage() {
        if (window.SafeStorage) {
            return window.SafeStorage;
        }
        return localStorage;
    }

    // Check if notice was already dismissed
    function isNoticeDismissed() {
        try {
            var storage = getStorage();
            return storage.getItem(NOTICE_KEY) === '1';
        } catch (e) {
            // localStorage unavailable
            return false;
        }
    }

    // Save dismissal to storage
    function saveDismissal() {
        try {
            var storage = getStorage();
            storage.setItem(NOTICE_KEY, '1');
        } catch (e) {
            // Ignore storage errors
        }
    }

    // Hide notice if already dismissed
    if (isNoticeDismissed()) {
        notice.style.display = 'none';
        return;
    }

    // Show notice
    notice.style.display = 'block';

    // Handle accept button click
    acceptBtn.addEventListener('click', function() {
        saveDismissal();
        notice.classList.add('cookie-notice--hiding');

        // Remove from DOM after animation
        setTimeout(function() {
            notice.style.display = 'none';
        }, 300);
    });
})();
