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
        const lang = form.dataset.lang || 'en';

        // Error messages by language
        const messages = {
            en: {
                required: 'This field is required',
                invalidEmail: 'Please enter a valid email address',
                invalidPhone: 'Please enter a valid phone number',
                messageTooShort: 'Message must be at least 10 characters long',
                messageTooLong: 'Message must not exceed 5000 characters'
            },
            pl: {
                required: 'To pole jest wymagane',
                invalidEmail: 'Wprowadź poprawny adres email',
                invalidPhone: 'Wprowadź poprawny numer telefonu',
                messageTooShort: 'Wiadomość musi mieć co najmniej 10 znaków',
                messageTooLong: 'Wiadomość nie może przekraczać 5000 znaków'
            }
        };

        const msg = messages[lang] || messages.en;

        // Clear previous errors
        form.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
            el.classList.remove('show');
        });
        form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

        // Validate required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('invalid');
                showError(field, msg.required);
                errors.push(`${field.name || field.id} is required`);
            }
        });

        // Validate email
        const emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
            if (!validateEmail(emailField.value)) {
                isValid = false;
                emailField.classList.add('invalid');
                showError(emailField, msg.invalidEmail);
                errors.push('Invalid email format');
            }
        }

        // Validate phone
        const phoneField = form.querySelector('input[type="tel"]');
        if (phoneField && phoneField.value) {
            if (!validatePhone(phoneField.value)) {
                isValid = false;
                phoneField.classList.add('invalid');
                showError(phoneField, msg.invalidPhone);
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
                messageField.classList.add('invalid');
                showError(messageField, msg.messageTooShort);
                errors.push('Message too short');
            }
            if (messageField.value.length > 5000) {
                isValid = false;
                messageField.classList.add('invalid');
                showError(messageField, msg.messageTooLong);
                errors.push('Message too long');
            }
        }

        return { isValid, errors };
    }

    function showError(field, message) {
        const fieldId = field.id || field.name;
        const errorContainer = document.getElementById(`${fieldId}-error`);
        
        if (errorContainer) {
            errorContainer.textContent = message;
            errorContainer.classList.add('show');
        } else {
            // Fallback: create error message after field
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message show';
            errorDiv.textContent = message;
            errorDiv.setAttribute('role', 'alert');
            errorDiv.setAttribute('aria-live', 'polite');
            field.parentNode.insertBefore(errorDiv, field.nextSibling);
        }
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
        const forms = document.querySelectorAll('#contactForm, .contact-form');
        
        forms.forEach(form => {
            // Track if field has been touched
            const touchedFields = new Set();
            
            // Real-time validation on blur (after user leaves field)
            form.querySelectorAll('input, textarea').forEach(field => {
                field.addEventListener('blur', function() {
                    touchedFields.add(this);
                    validateField(this, form);
                });

                // Real-time validation during typing for touched fields
                field.addEventListener('input', function() {
                    if (touchedFields.has(this)) {
                        // Debounce validation during typing
                        clearTimeout(this.validationTimeout);
                        this.validationTimeout = setTimeout(() => {
                            validateField(this, form);
                        }, 300);
                    }
                });
                
                // Immediate validation for email on @ character
                if (field.type === 'email') {
                    field.addEventListener('input', function() {
                        // If user has typed @ and field was touched, validate immediately
                        if (touchedFields.has(this) && this.value.includes('@')) {
                            clearTimeout(this.validationTimeout);
                            validateField(this, form);
                        }
                    });
                }
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

                // Mark all fields as touched on submit
                form.querySelectorAll('input, textarea').forEach(field => {
                    touchedFields.add(field);
                });

                // Validate form
                const validation = validateForm(form);
                
                if (!validation.isValid) {
                    console.warn('Form validation failed:', validation.errors);
                    // Focus on first error
                    const firstInvalid = form.querySelector('.invalid');
                    if (firstInvalid) {
                        firstInvalid.focus();
                    }
                    return false;
                }

                // Update rate limit timestamp
                lastSubmissionTime = Date.now();

                // Show success message
                const successMsg = document.getElementById('successMessage');
                if (successMsg) {
                    successMsg.style.display = 'block';
                }

                // Sanitize inputs before submission
                form.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(field => {
                    field.value = sanitizeInput(field.value);
                });

                // Submit form
                form.submit();
            });
        });
    }
    
    function validateField(field, form) {
        const lang = form.dataset.lang || 'en';
        const messages = {
            en: {
                required: 'This field is required',
                invalidEmail: 'Please enter a valid email address',
                invalidPhone: 'Please enter a valid phone number',
                messageTooShort: 'Message must be at least 10 characters long',
                messageTooLong: 'Message must not exceed 5000 characters'
            },
            pl: {
                required: 'To pole jest wymagane',
                invalidEmail: 'Wprowadź poprawny adres email',
                invalidPhone: 'Wprowadź poprawny numer telefonu',
                messageTooShort: 'Wiadomość musi mieć co najmniej 10 znaków',
                messageTooLong: 'Wiadomość nie może przekraczać 5000 znaków'
            }
        };
        const msg = messages[lang] || messages.en;
        
        // Clear previous error for this field
        const fieldId = field.id || field.name;
        const errorContainer = document.getElementById(`${fieldId}-error`);
        if (errorContainer) {
            errorContainer.textContent = '';
            errorContainer.classList.remove('show');
        }
        field.classList.remove('invalid');
        
        let hasError = false;
        
        // Check required
        if (field.hasAttribute('required') && !field.value.trim()) {
            hasError = true;
            showError(field, msg.required);
        }
        // Check email format
        else if (field.type === 'email' && field.value && !validateEmail(field.value)) {
            hasError = true;
            showError(field, msg.invalidEmail);
        }
        // Check phone format
        else if (field.type === 'tel' && field.value && !validatePhone(field.value)) {
            hasError = true;
            showError(field, msg.invalidPhone);
        }
        // Check textarea length
        else if (field.tagName === 'TEXTAREA' && field.value) {
            if (field.value.length < 10) {
                hasError = true;
                showError(field, msg.messageTooShort);
            } else if (field.value.length > 5000) {
                hasError = true;
                showError(field, msg.messageTooLong);
            }
        }
        
        if (hasError) {
            field.classList.add('invalid');
        }
        
        return !hasError;
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFormValidation);
    } else {
        initFormValidation();
    }
})();
