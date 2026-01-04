/**
 * Post Share Functionality
 * Handles copy-to-clipboard for share button
 */
document.addEventListener('DOMContentLoaded', function() {
    var copyButtons = document.querySelectorAll('.post__nav-link--copy');

    if (!copyButtons.length) {
        return;
    }

    copyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var url = button.getAttribute('data-url');
            
            if (!url) {
                return;
            }

            // Use Clipboard API if available, fallback to execCommand
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url).then(function() {
                    showCopiedFeedback(button);
                }).catch(function() {
                    fallbackCopy(url, button);
                });
            } else {
                fallbackCopy(url, button);
            }
        });
    });

    function fallbackCopy(text, button) {
        var textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            showCopiedFeedback(button);
        } catch (err) {
            console.error('Copy failed:', err);
        }

        document.body.removeChild(textArea);
    }

    function showCopiedFeedback(button) {
        button.classList.add('copied');
        
        // Reset after 2 seconds
        setTimeout(function() {
            button.classList.remove('copied');
        }, 2000);
    }
});
