    // Add focus states for accessibility
    document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
        input.addEventListener('focus', function() {
            const label = this.closest('.form-group').querySelector('.form-label');
            if (label) {
                const root = document.documentElement;
                if (root.classList.contains('dark-theme')) {
                    label.style.color = 'var(--secondBlue-color)'; // cyjan w dark
                } else {
                    label.style.color = 'var(--firstBlue-color)'; // niebieski w light
                }
            }
        });

        input.addEventListener('blur', function() {
            const label = this.closest('.form-group').querySelector('.form-label');
            if (label) {
                label.style.color = 'var(--firstGray-color)';
            }
        });

        // Specjalna obsługa dla textarea (wiadomość)
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

    // Form validation and submission
    form.addEventListener('submit', async function(e) {
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
            const formData = new FormData(form);
            // Help Formspree map reply-to address
            const emailField = document.getElementById('email');
            if (emailField && emailField.value) {
                formData.set('_replyto', emailField.value);
            }
            const endpoint = form.getAttribute('action');
            const submitBtn = document.querySelector('.button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
            }

            const successMessage = document.getElementById('successMessage');

            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error('Formspree submission failed: ' + response.status + ' ' + response.statusText + ' ' + errorText);
                }

                // Parse JSON to detect Formspree validation errors
                const data = await response.json().catch(() => ({}));
                if (data && data.errors && data.errors.length) {
                    throw new Error('Formspree validation errors: ' + JSON.stringify(data.errors));
                }

                // Show success message only after a successful response
                if (successMessage) {
                    successMessage.style.display = 'block';
                }

                // Animate button
                if (submitBtn) {
                    submitBtn.textContent = submitBtn.getAttribute('data-success-text') || 'Message Sent!';
                    submitBtn.style.background = 'var(--firstBlue-color)';
                    submitBtn.style.color = document.documentElement.classList.contains('dark-theme')
                        ? 'var(--background-color)'
                        : 'var(--ghostWhite)';
                    submitBtn.blur();
                }

                form.reset();
            } catch (err) {
                console.error('Form submission error:', err);
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                }
                if (successMessage) {
                    successMessage.style.display = 'none';
                }
                alert('Sorry, we could not send your message right now. Please try again.');
            } finally {
                if (submitBtn) {
                    setTimeout(() => { submitBtn.disabled = false; }, 500);
                }
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

    // Usunięto JS zmieniający kolor label na focus/blur — kolor kontroluje tylko CSS.
});
