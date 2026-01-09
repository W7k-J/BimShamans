/**
 * Portfolio Tile Click Interaction
 * Handles click-to-activate functionality for expertise.md tiles
 * - Click tile: toggle .active class (shows full screenshot with border)
 * - Click outside: remove .active from all tiles
 * - Mobile-friendly: touch events work naturally
 * - Copies ALT text to TITLE for hover tooltips
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('[Portfolio Tile Click] Script loaded');
  
  // ========================================
  // COPY ALT TO TITLE FOR TOOLTIPS
  // ========================================
  
  // Apply title attribute to all tool icons based on existing alt text
  var toolIcons = document.querySelectorAll('.portfolio-tile__tool-icon img');
  console.log('[Portfolio Tile Click] Found tool icons:', toolIcons.length);
  
  toolIcons.forEach(function(img) {
    var altText = img.getAttribute('alt');
    
    if (altText && altText.trim() !== '') {
      // Set title attribute for hover tooltip
      img.setAttribute('title', altText);
      console.log('[Portfolio Tile Click] Set TITLE from ALT:', altText);
    }
  });
  
  // ========================================
  // CLICK INTERACTION LOGIC
  // ========================================
  
  // Only apply to expertise sections (not exp-collection or blog)
  var expertiseSections = document.querySelectorAll('.portfolio-tiles-stack');
  console.log('[Portfolio Tile Click] Found sections:', expertiseSections.length);
  
  if (expertiseSections.length === 0) {
    console.log('[Portfolio Tile Click] No .portfolio-tiles-stack found. Available classes:', 
      Array.from(document.querySelectorAll('[class*="portfolio"]')).map(function(el) { return el.className; })
    );
    return;
  }
  
  expertiseSections.forEach(function(tilesContainer) {
    var tiles = tilesContainer.querySelectorAll('.portfolio-tile');
    console.log('[Portfolio Tile Click] Found tiles in section:', tiles.length);
    
    if (tiles.length === 0) {
      return;
    }
    
    // Handle tile clicks
    tiles.forEach(function(tile, index) {
      tile.addEventListener('click', function(event) {
        console.log('[Portfolio Tile Click] Tile clicked:', index);
        event.stopPropagation();
        
        // Toggle active state on current tile
        var wasActive = this.classList.contains('active');
        console.log('[Portfolio Tile Click] Was active:', wasActive);
        
        // Remove active from all tiles
        tiles.forEach(function(t) {
          t.classList.remove('active');
        });
        
        // If this tile wasn't active, make it active
        if (!wasActive) {
          this.classList.add('active');
          console.log('[Portfolio Tile Click] Tile activated:', index);
        }
      });
    });
  });
  
  // Click anywhere outside tiles to deactivate all
  document.addEventListener('click', function(event) {
    // Check if click is outside all tile containers
    var clickedInside = false;
    expertiseSections.forEach(function(section) {
      if (section.contains(event.target)) {
        clickedInside = true;
      }
    });
    
    if (!clickedInside) {
      var allTiles = document.querySelectorAll('.portfolio-tile.active');
      if (allTiles.length > 0) {
        console.log('[Portfolio Tile Click] Clicked outside, deactivating all tiles');
        allTiles.forEach(function(tile) {
          tile.classList.remove('active');
        });
      }
    }
  });
});
