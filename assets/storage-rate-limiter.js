// Rate limiting for localStorage operations
// Prevents DoS attacks on client-side storage
(function() {
    'use strict';

    const RATE_LIMIT_KEY = '_rateLimit';
    const MAX_WRITES_PER_MINUTE = 30;
    const WINDOW_MS = 60000; // 1 minute

    class StorageRateLimiter {
        constructor() {
            this.writes = [];
            this.loadState();
        }

        loadState() {
            try {
                const stored = sessionStorage.getItem(RATE_LIMIT_KEY);
                if (stored) {
                    const data = JSON.parse(stored);
                    this.writes = data.writes.filter(ts => Date.now() - ts < WINDOW_MS);
                }
            } catch (e) {
                this.writes = [];
            }
        }

        saveState() {
            try {
                sessionStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
                    writes: this.writes
                }));
            } catch (e) {
                // SessionStorage might be full or unavailable
            }
        }

        checkLimit() {
            const now = Date.now();
            // Clean old entries
            this.writes = this.writes.filter(ts => now - ts < WINDOW_MS);
            
            if (this.writes.length >= MAX_WRITES_PER_MINUTE) {
                console.warn('localStorage rate limit exceeded. Please slow down.');
                return false;
            }
            
            return true;
        }

        recordWrite() {
            this.writes.push(Date.now());
            this.saveState();
        }

        setItem(key, value) {
            if (!this.checkLimit()) {
                return false;
            }
            
            try {
                localStorage.setItem(key, value);
                this.recordWrite();
                return true;
            } catch (e) {
                console.error('localStorage.setItem failed:', e);
                return false;
            }
        }

        getItem(key) {
            try {
                return localStorage.getItem(key);
            } catch (e) {
                console.error('localStorage.getItem failed:', e);
                return null;
            }
        }

        removeItem(key) {
            if (!this.checkLimit()) {
                return false;
            }
            
            try {
                localStorage.removeItem(key);
                this.recordWrite();
                return true;
            } catch (e) {
                console.error('localStorage.removeItem failed:', e);
                return false;
            }
        }
    }

    // Export to global scope
    window.SafeStorage = new StorageRateLimiter();

    // Monkey-patch warning for direct localStorage usage
    if (typeof Proxy !== 'undefined') {
        const originalLocalStorage = window.localStorage;
        const handler = {
            get: function(target, prop) {
                if (prop === 'setItem' || prop === 'removeItem') {
                    console.warn(
                        'Direct localStorage usage detected. Consider using window.SafeStorage for rate-limited operations.'
                    );
                }
                return target[prop];
            }
        };
        
        try {
            // This might fail in some browsers/contexts
            // window.localStorage = new Proxy(originalLocalStorage, handler);
        } catch (e) {
            // Proxy wrapping failed, continue with original
        }
    }
})();
