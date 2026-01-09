/**
 * Portfolio Tile Click Interaction
 * Handles click-to-activate functionality for expertise.md tiles
 * - Click tile: toggle .active class (shows full screenshot with border)
 * - Click outside: remove .active from all tiles
 * - Mobile-friendly: touch events work naturally
 * - Auto-generates ALT text from logo filenames
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('[Portfolio Tile Click] Script loaded');
  
  // ========================================
  // AUTO-GENERATE ALT TEXT FROM FILENAMES
  // ========================================
  // Extract software name from filename: logo_Name-here_short.png → "Name-here"
  function generateAltTextFromFilename(src) {
    if (!src) return '';
    
    // Get filename from path
    var filename = src.split('/').pop().split('\\').pop();
    
    // Remove file extension
    var nameWithoutExt = filename.replace(/\.(png|jpg|jpeg|svg|gif|webp)$/i, '');
    
    // Extract part between 'logo_' or 'logos_' and '_short' or '_long'
    var match = nameWithoutExt.match(/logos?_(.+?)_(?:short|long)$/i);
    
    if (match && match[1]) {
      // Convert hyphens to spaces and capitalize each word
      var softwareName = match[1]
        .split('-')
        .map(function(word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
      return softwareName;
    }
    
    // Fallback: return original alt or empty string
    return '';
  }
  
  // Apply auto-generated ALT and TITLE text to all tool icons
  var toolIcons = document.querySelectorAll('.portfolio-tile__tool-icon img');
  console.log('[Portfolio Tile Click] Found tool icons:', toolIcons.length);
  
  toolIcons.forEach(function(img) {
    var src = img.getAttribute('src');
    var currentAlt = img.getAttribute('alt');
    
    // Only generate if src matches our logo pattern
    if (src && src.includes('/images/logos/software/')) {
      var generatedText = generateAltTextFromFilename(src);
      
      if (generatedText) {
        // Set both alt (accessibility) and title (hover tooltip)
        img.setAttribute('alt', generatedText);
        img.setAttribute('title', generatedText);
        console.log('[Portfolio Tile Click] Updated ALT & TITLE:', src, '→', generatedText);
      }
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
