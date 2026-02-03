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

    // Track Y position for each heading to determine scroll direction
    var headingIntersectionData = {};
    headings.forEach(function(heading) {
        headingIntersectionData[heading.id] = { y: 0 };
    });

    // Convert headings NodeList to array of IDs for index lookup
    var headingIds = Array.from(headings).map(function(h) { return h.id; });

    function setActiveItem(index) {
        sidebarTocItems.forEach(function(item, i) {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function handleIntersection(entries) {
        entries.forEach(function(entry) {
            var previousY = headingIntersectionData[entry.target.id].y;
            var currentY = entry.boundingClientRect.y;
            var index = headingIds.indexOf(entry.target.id);

            if (entry.isIntersecting) {
                // Heading entered viewport - make it active
                setActiveItem(index);
            } else {
                // Heading left viewport
                if (currentY > previousY && index > 0) {
                    // Left going down (user scrolling up) - activate previous
                    setActiveItem(index - 1);
                }
                // Left going up (user scrolling down) - keep current active
            }

            // Store current Y for next comparison
            headingIntersectionData[entry.target.id].y = currentY;
        });
    }

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        // Create observer - trigger when heading is in top 30% of viewport
        var observer = new IntersectionObserver(handleIntersection, {
            rootMargin: '-80px 0px -70% 0px',
            threshold: 0
        });

        // Observe all headings
        headings.forEach(function(heading) {
            observer.observe(heading);
        });

        // Cleanup on page unload
        window.addEventListener('beforeunload', function() {
            observer.disconnect();
        });
    }

    // Set first item as active initially
    setActiveItem(0);
});
