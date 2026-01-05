/**
 * Post Table of Contents Generator
 * Auto-generates ToC from H2 headings in post content
 */
document.addEventListener('DOMContentLoaded', function() {
    var tocContainer = document.querySelector('.post__toc');
    var tocList = document.querySelector('.post__toc-list');
    var postContent = document.querySelector('.post__content');

    if (!tocContainer || !tocList || !postContent) {
        return;
    }

    // Find all H2 headings in post content
    var headings = postContent.querySelectorAll('h2');

    // Hide ToC if less than 2 headings
    if (headings.length < 2) {
        tocContainer.style.display = 'none';
        return;
    }

    // Generate ToC items
    var fragment = document.createDocumentFragment();

    headings.forEach(function(heading, index) {
        // Generate ID if heading doesn't have one
        if (!heading.id) {
            heading.id = 'section-' + (index + 1);
        }

        // Create list item
        var li = document.createElement('li');
        li.className = 'post__toc-item';

        // Create link
        var link = document.createElement('a');
        link.className = 'post__toc-link';
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;

        // Smooth scroll on click
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.getElementById(heading.id);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Update URL hash without jumping
                history.pushState(null, null, '#' + heading.id);
            }
        });

        li.appendChild(link);
        fragment.appendChild(li);
    });

    tocList.appendChild(fragment);
});
