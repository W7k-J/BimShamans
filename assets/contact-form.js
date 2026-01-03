document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // Form validation and submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
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

        if (isValid) {
            // Show success message
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.style.display = 'block';
            }
            
            // Animate button
            const submitBtn = document.querySelector('.button[type="submit"]');
            if (submitBtn) {
                const originalBg = submitBtn.style.background;
                const originalText = submitBtn.textContent;
                submitBtn.style.background = 'linear-gradient(135deg, var(--secondBlue-color) 0%, var(--firstBlue-color) 100%)';
                submitBtn.textContent = submitBtn.getAttribute('data-success-text') || 'Message Sent!';
                
                // Reset form after delay
                setTimeout(() => {
                    form.reset();
                    if (successMessage) {
                        successMessage.style.display = 'none';
                    }
                    submitBtn.style.background = originalBg || '';
                    submitBtn.textContent = originalText;
                }, 3000);
            }
            
            // Scroll to top of form
            const container = document.querySelector('.form-container');
            if (container) {
                container.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            // Shake animation for errors
            const errorGroups = document.querySelectorAll('.form-group.error');
            errorGroups.forEach(group => {
                group.style.animation = 'contactPulse 0.5s ease-in-out';
                setTimeout(() => {
                    group.style.animation = '';
                }, 500);
            });
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

    // Add focus states for accessibility
    document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
        input.addEventListener('focus', function() {
            const label = this.closest('.form-group').querySelector('.form-label');
            if (label) {
                label.style.color = 'var(--secondBlue-color)';
            }
        });

        input.addEventListener('blur', function() {
            const label = this.closest('.form-group').querySelector('.form-label');
            if (label) {
                label.style.color = 'var(--firstGray-color)';
            }
        });
    });
});
