/**
 * Post Table of Contents Generator
 * - Auto-generates ToC from H2 headings in post content
 * - Populates both sidebar TOC and inline TOC
 * - Highlights active section in sidebar TOC while scrolling
 */
document.addEventListener('DOMContentLoaded', function() {
    var sidebarTocList = document.querySelector('.post__toc--sidebar .post__toc-list');
    var inlineTocList = document.querySelector('.post__toc--inline .post__toc-list');
    var sidebarTocAside = document.querySelector('.post__sidebar--toc'); // Fixed aside container
    var inlineToc = document.querySelector('.post__toc--inline');
    var postContent = document.querySelector('.post__content');

    if (!postContent) {
        return;
    }

    // Find all H2 headings in post content
    var headings = postContent.querySelectorAll('h2');

    // Hide ToC if less than 2 headings
    if (headings.length < 2) {
        if (sidebarTocAside) sidebarTocAside.style.display = 'none';
        if (inlineToc) inlineToc.style.display = 'none';
        return;
    }

    // Generate ToC items for a given list
    function generateTocItems(tocList, isSidebar) {
        if (!tocList) return;

        var fragment = document.createDocumentFragment();

        headings.forEach(function(heading, index) {
            // Generate ID if heading doesn't have one
            if (!heading.id) {
                heading.id = 'section-' + (index + 1);
            }

            // Create list item
            var li = document.createElement('li');
            li.className = 'post__toc-item';
            if (isSidebar) {
                li.setAttribute('data-section-index', index);
            }

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
    }

    // Populate both TOC lists
    generateTocItems(sidebarTocList, true);
    generateTocItems(inlineTocList, false);

    // ============================================
    // ACTIVE SECTION HIGHLIGHTING (sidebar only)
    // ============================================

    if (!sidebarTocList) return;

    var sidebarTocItems = sidebarTocList.querySelectorAll('.post__toc-item');
    if (sidebarTocItems.length === 0) return;

    function getElementTop(el) {
        // Get absolute position from document top
        var rect = el.getBoundingClientRect();
        return rect.top + window.scrollY;
    }

    function updateActiveSection() {
        var scrollPos = window.scrollY + 150; // Offset for header
        var activeIndex = 0;

        // Find which section we're in (use getBoundingClientRect for accuracy)
        headings.forEach(function(heading, index) {
            var headingTop = getElementTop(heading);
            if (headingTop <= scrollPos) {
                activeIndex = index;
            }
        });

        // Update active class
        sidebarTocItems.forEach(function(item, index) {
            if (index === activeIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Throttle scroll updates for performance
    var throttleTimeout = null;
    var throttleDelay = 100;

    function throttledUpdate() {
        if (throttleTimeout) return;
        throttleTimeout = setTimeout(function() {
            updateActiveSection();
            throttleTimeout = null;
        }, throttleDelay);
    }

    window.addEventListener('scroll', throttledUpdate, { passive: true });

    // Initial call
    updateActiveSection();
});
