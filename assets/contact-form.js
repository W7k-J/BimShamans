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
                submitBtn.textContent = submitBtn.getAttribute('data-success-text') || 'Message Sent!';
                submitBtn.style.background = 'var(--firstBlue-color)';
                submitBtn.style.color = 'var(--ghostWhite)';
                submitBtn.blur(); // Usuwa focus, wymusza repaint i natychmiast pokazuje tekst
                
                // Usunięto automatyczne resetowanie formularza i ukrywanie komunikatu — sukces zostaje widoczny.
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
