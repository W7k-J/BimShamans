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
        console.log('Submit clicked');
        
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
                console.log('Field ' + fieldName + ' is empty');
                group.classList.add('error');
                isValid = false;
            }
        });

        // Email validation
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() && !emailRegex.test(email.value)) {
            console.log('Email invalid');
            email.closest('.form-group').classList.add('error');
            isValid = false;
        }

        // Message length validation
        const message = document.getElementById('message');
        if (message.value.trim().length < 10) {
            console.log('Message too short');
            message.closest('.form-group').classList.add('error');
            isValid = false;
        }

        console.log('Form validation result:', isValid);

        if (!isValid) {
            e.preventDefault(); // Only prevent if invalid
            console.log('Form prevented - validation failed');
            // Shake animation for errors
            const errorGroups = document.querySelectorAll('.form-group.error');
            errorGroups.forEach(group => {
                group.style.animation = 'contactPulse 0.5s ease-in-out';
                setTimeout(() => {
                    group.style.animation = '';
                }, 500);
            });
        } else {
            console.log('Form valid - allowing native POST to:', form.action);
            // If valid, form submits naturally via POST to Formspree
        }
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
