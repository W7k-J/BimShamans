document.addEventListener("DOMContentLoaded", function() {
    const collapsibleButtons = document.querySelectorAll('.collapsible');
    
    if (collapsibleButtons) {
        collapsibleButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Toggle button state
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                
                // Toggle content
                const content = this.nextElementSibling;
                if (content && content.classList.contains('collapsible-content')) {
                    content.style.display = isExpanded ? 'none' : 'block';
                    content.setAttribute('aria-hidden', isExpanded);
                }
                
                // Toggle active class for styling
                this.classList.toggle('active');
            });
        });
    }
});