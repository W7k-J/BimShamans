// Form validation and security utilities
(function() {
    'use strict';

    // Rate limiting for form submissions
    const SUBMISSION_COOLDOWN = 5000; // 5 seconds between submissions
    let lastSubmissionTime = 0;

    function validateEmail(email) {
        // RFC 5322 compliant email validation (simplified)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        // Accept various phone formats
        const phoneRegex = /^[\d\s\-\+\(\)]{6,20}$/;
        return !phone || phoneRegex.test(phone);
    }

    function sanitizeInput(input) {
        // Remove potential XSS attempts
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }

    function validateForm(form) {
        let isValid = true;
        const errors = [];

        // Clear previous errors
        form.querySelectorAll('.error-message').forEach(el => el.remove());
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        // Validate required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
                showError(field, 'This field is required');
                errors.push(`${field.name || field.id} is required`);
            }
        });

        // Validate email
        const emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
            if (!validateEmail(emailField.value)) {
                isValid = false;
                emailField.classList.add('error');
                showError(emailField, 'Please enter a valid email address');
                errors.push('Invalid email format');
            }
        }

        // Validate phone
        const phoneField = form.querySelector('input[type="tel"]');
        if (phoneField && phoneField.value) {
            if (!validatePhone(phoneField.value)) {
                isValid = false;
                phoneField.classList.add('error');
                showError(phoneField, 'Please enter a valid phone number');
                errors.push('Invalid phone format');
            }
        }

        // Check honeypot (anti-spam)
        const honeypot = form.querySelector('[name="_gotcha"]');
        if (honeypot && honeypot.value) {
            isValid = false;
            console.warn('Honeypot triggered - potential spam');
        }

        // Validate message length
        const messageField = form.querySelector('textarea[name="wiadomosc"], textarea[name="message"]');
        if (messageField && messageField.value) {
            if (messageField.value.length < 10) {
                isValid = false;
                messageField.classList.add('error');
                showError(messageField, 'Message must be at least 10 characters long');
                errors.push('Message too short');
            }
            if (messageField.value.length > 5000) {
                isValid = false;
                messageField.classList.add('error');
                showError(messageField, 'Message must not exceed 5000 characters');
                errors.push('Message too long');
            }
        }

        return { isValid, errors };
    }

    function showError(field, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.setAttribute('role', 'alert');
        field.parentNode.appendChild(errorDiv);
    }

    function checkRateLimit() {
        const now = Date.now();
        if (now - lastSubmissionTime < SUBMISSION_COOLDOWN) {
            const remainingTime = Math.ceil((SUBMISSION_COOLDOWN - (now - lastSubmissionTime)) / 1000);
            return {
                allowed: false,
                message: `Please wait ${remainingTime} seconds before submitting again`
            };
        }
        return { allowed: true };
    }

    function initFormValidation() {
        const forms = document.querySelectorAll('.contact-form');
        
        forms.forEach(form => {
            // Real-time validation
            form.querySelectorAll('input, textarea').forEach(field => {
                field.addEventListener('blur', function() {
                    if (this.hasAttribute('required') && !this.value.trim()) {
                        this.classList.add('error');
                        if (!this.parentNode.querySelector('.error-message')) {
                            showError(this, 'This field is required');
                        }
                    } else {
                        this.classList.remove('error');
                        const errorMsg = this.parentNode.querySelector('.error-message');
                        if (errorMsg) errorMsg.remove();
                    }
                });

                field.addEventListener('input', function() {
                    if (this.classList.contains('error') && this.value.trim()) {
                        this.classList.remove('error');
                        const errorMsg = this.parentNode.querySelector('.error-message');
                        if (errorMsg) errorMsg.remove();
                    }
                });
            });

            // Form submission
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                // Check rate limit
                const rateLimitCheck = checkRateLimit();
                if (!rateLimitCheck.allowed) {
                    alert(rateLimitCheck.message);
                    return false;
                }

                // Validate form
                const validation = validateForm(form);
                
                if (!validation.isValid) {
                    console.warn('Form validation failed:', validation.errors);
                    // Focus on first error
                    const firstError = form.querySelector('.error');
                    if (firstError) {
                        firstError.focus();
                    }
                    return false;
                }

                // Update rate limit timestamp
                lastSubmissionTime = Date.now();

                // Sanitize inputs before submission
                form.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(field => {
                    field.value = sanitizeInput(field.value);
                });

                // Submit form
                form.submit();
            });
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFormValidation);
    } else {
        initFormValidation();
    }
})();
