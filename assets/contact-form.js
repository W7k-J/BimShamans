// Focus states for accessibility
document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
    input.addEventListener('focus', function() {
        const label = this.closest('.form-group').querySelector('.form-label');
        if (label) {
            const root = document.documentElement;
            if (root.classList.contains('dark-theme')) {
                label.style.color = 'var(--secondBlue-color)';
            } else {
                label.style.color = 'var(--firstBlue-color)';
            }
        }
    });

    input.addEventListener('blur', function() {
        const label = this.closest('.form-group').querySelector('.form-label');
        if (label) {
            label.style.color = 'var(--firstGray-color)';
        }
    });

    // Special handling for textarea
    if (input.classList.contains('form-textarea')) {
        input.addEventListener('input', function() {
            const group = this.closest('.form-group');
            if (this.value.length >= 10) {
                group.classList.add('message-filled');
            } else {
                group.classList.remove('message-filled');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // Form validation only - let browser handle native POST
    form.addEventListener('submit', function(e) {
        // Reset previous errors
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });

        let isValid = true;

        // Validate required fields
        const requiredFields = ['name', 'email', 'subject', 'message'];
        requiredFields.forEach(fieldName => {
            const field = document.getElementById(fieldName);
            const group = field.closest('.form-group');
            
            if (!field.value.trim()) {
                group.classList.add('error');
                isValid = false;
            }
        });

        // Email validation
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() && !emailRegex.test(email.value)) {
            email.closest('.form-group').classList.add('error');
            isValid = false;
        }

        // Message length validation
        const message = document.getElementById('message');
        if (message.value.trim().length < 10) {
            message.closest('.form-group').classList.add('error');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault(); // Only prevent if invalid
            // Shake animation for errors
            const errorGroups = document.querySelectorAll('.form-group.error');
            errorGroups.forEach(group => {
                group.style.animation = 'contactPulse 0.5s ease-in-out';
                setTimeout(() => {
                    group.style.animation = '';
                }, 500);
            });
        }
        // If valid, form submits naturally via POST to Formspree
        // Formspree will redirect to _next URL (thank-you page)
    });

    // Real-time validation
    document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
        input.addEventListener('blur', function() {
            const group = this.closest('.form-group');
            if (this.hasAttribute('required') && !this.value.trim()) {
                group.classList.add('error');
            } else {
                group.classList.remove('error');
            }
        });

        input.addEventListener('input', function() {
            const group = this.closest('.form-group');
            if (group.classList.contains('error') && this.value.trim()) {
                group.classList.remove('error');
            }
        });
    });
});
