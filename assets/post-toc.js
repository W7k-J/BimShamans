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

            // Smooth scroll on click - aligns header with ToC top position
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.getElementById(heading.id);
                if (target) {
                    // Calculate position: align header with ToC sidebar top
                    // Account for fixed nav + ToC offset from top (~80px nav + ~24px padding)
                    var navOffset = 104;
                    var headerTop = target.getBoundingClientRect().top + window.pageYOffset;
                    var scrollPosition = headerTop - navOffset;

                    window.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
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
    // ACTIVE SECTION HIGHLIGHTING (IntersectionObserver)
    // ============================================

    if (!sidebarTocList) return;

    var sidebarTocItems = sidebarTocList.querySelectorAll('.post__toc-item');
    if (sidebarTocItems.length === 0) return;

    // Convert headings NodeList to array for easier manipulation
    var headingsArray = Array.from(headings);
    var currentActiveIndex = -1; // Initialize to -1 so first setActiveItem call applies

    function setActiveItem(index) {
        if (index === currentActiveIndex) return; // Avoid unnecessary DOM updates
        currentActiveIndex = index;
        sidebarTocItems.forEach(function(item, i) {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Calculate which heading should be active based on scroll position
    function getActiveHeadingIndex() {
        var navOffset = 104; // Fixed nav height + padding
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var activeIndex = 0;

        for (var i = 0; i < headingsArray.length; i++) {
            var heading = headingsArray[i];
            var headingTop = heading.getBoundingClientRect().top + scrollTop;

            // If heading is above the trigger line, it's the current section
            if (headingTop <= scrollTop + navOffset + 20) {
                activeIndex = i;
            } else {
                break;
            }
        }

        return activeIndex;
    }

    // Update active item on scroll
    var scrollTimeout;
    function handleScroll() {
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = requestAnimationFrame(function() {
            setActiveItem(getActiveHeadingIndex());
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup on page unload
    window.addEventListener('beforeunload', function() {
        window.removeEventListener('scroll', handleScroll);
    });

    // Set initial active item based on current scroll position
    setActiveItem(getActiveHeadingIndex());
});
