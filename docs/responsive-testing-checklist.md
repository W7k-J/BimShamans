# Responsive Design Testing Checklist

## Summary of Changes Made

### Critical Fixes Implemented

1. **Hero Banner Centering** - Removed hardcoded `left: calc(50% + 65px)` offset that caused horizontal overflow on mobile; now uses `left: 50%` with `max-width: 95vw` constraint.

2. **CTA Buttons** - Changed `white-space: nowrap` to `white-space: normal` to allow text wrapping on small screens; reduced padding on mobile.

3. **Hero Flame Sizing** - Reduced minimum size from `2.1rem` to `1.5rem` to fit on very small screens.

4. **Glitch SVG Text** - Added `flex-shrink: 1` and `max-width: 40vw` to prevent overflow.

5. **Blog Sort Button** - Reduced `min-width` from `220px` to `180px` and removed it entirely on mobile.

6. **Feature Cards** - Changed fixed heights to fluid `clamp()` values for better viewport adaptation.

7. **Container Box-Sizing** - Added `box-sizing: border-box` to prevent padding overflow.

8. **Image Bleed** - Reduced mobile image bleed from `±15px` to `±10px` to prevent horizontal scroll.

### Breakpoints Used

| Breakpoint | Target Devices |
|------------|----------------|
| ≤360px | Very small phones (iPhone SE, Galaxy S10e) |
| ≤480px | Small phones (most mobile devices) |
| ≤640px | Large phones (iPhone Pro Max, Pixel XL) |
| ≤768px | Small tablets, large phones landscape |
| ≤992px | Tablets portrait |
| ≤1024px | Tablets landscape, small laptops |
| ≥1280px | Desktop (primary design target) |

---

## Manual Testing Checklist (15 Points)

### Critical Tests (Must Pass)

- [ ] **1. No horizontal scroll at 320px** - Open DevTools, set viewport to 320x568 (iPhone SE), verify no horizontal scrollbar appears on any page.

- [ ] **2. No horizontal scroll at 360px** - Test on 360x640 (Samsung Galaxy S8), verify no content extends beyond viewport.

- [ ] **3. No horizontal scroll at 390px** - Test on 390x844 (iPhone 14), verify complete viewport containment.

- [ ] **4. No horizontal scroll at 414px** - Test on 414x896 (iPhone 11), verify no overflow.

- [ ] **5. Hero banner fits viewport** - At 320px, verify "BIM [flame] Shamans" text is fully visible and centered.

- [ ] **6. CTA buttons stack properly** - At 480px and below, verify hero CTA buttons stack vertically and don't overflow.

### Layout Tests

- [ ] **7. Navigation menu opens/closes** - At mobile widths, verify hamburger menu toggles correctly and doesn't block content when closed.

- [ ] **8. Blog controls fit** - On `/en/blog/` at 320px, verify search bar, sort buttons, and direction toggles fit without overflow.

- [ ] **9. Feature cards display** - On home page at 320px, verify feature cards are visible and don't cause horizontal scroll.

- [ ] **10. Portfolio tiles display** - On `/en/expertise/` at 480px, verify tiles stack vertically with visible content.

- [ ] **11. Contact form usable** - On `/en/contact/` at 320px, verify all form fields are visible and touch-accessible.

### UX Tests

- [ ] **12. Text readability** - Verify body text is at least 14-16px on mobile (inspect with DevTools, check `font-size` computed value).

- [ ] **13. Touch target sizes** - Verify buttons, links, and form inputs are at least 44px tall (use DevTools element inspector).

- [ ] **14. Images contained** - On blog posts, verify images don't extend beyond viewport edges.

- [ ] **15. Footer visible** - At 320px, verify footer social icons are visible and don't overlap.

---

## Testing Tools

### Browser DevTools

1. **Chrome DevTools Device Mode**
   - Press `F12` → Click device toolbar icon (or `Ctrl+Shift+M`)
   - Select preset devices: iPhone SE, iPhone 14 Pro, Samsung Galaxy S8
   - Test both portrait and landscape orientations

2. **Responsive Design Mode**
   - Drag viewport edges to test fluid responsiveness
   - Test at exact breakpoints: 320, 360, 390, 414, 480, 640, 768, 992, 1024, 1280

### Lighthouse Audit

1. Open Chrome DevTools → Lighthouse tab
2. Select "Mobile" device
3. Run audit with categories: Performance, Accessibility, Best Practices, SEO
4. Review "Viewport" and "Content Sizing" suggestions

### CSS Overview (Chrome DevTools)

1. Open DevTools → More Tools → CSS Overview
2. Click "Capture overview"
3. Review "Media queries" section for breakpoint coverage
4. Check "Unused declarations" for optimization opportunities

---

## Device Emulation Matrix

| Device | Width | Height | Pixel Ratio | Priority |
|--------|-------|--------|-------------|----------|
| iPhone SE (2020) | 375px | 667px | 2x | High |
| iPhone 14 | 390px | 844px | 3x | High |
| iPhone 14 Pro Max | 430px | 932px | 3x | Medium |
| Samsung Galaxy S8 | 360px | 740px | 4x | High |
| Samsung Galaxy S21 | 360px | 800px | 3x | Medium |
| Google Pixel 7 | 412px | 915px | 2.625x | Medium |
| iPad Mini | 768px | 1024px | 2x | High |
| iPad Air | 820px | 1180px | 2x | Medium |
| iPad Pro 11" | 834px | 1194px | 2x | Medium |

---

## Known Limitations

1. **Sass @import Deprecation** - Current Sass uses `@import` which is deprecated. Migration to `@use`/`@forward` recommended for Dart Sass 3.0 compatibility.

2. **Feature Cards Fixed Aspect** - Feature cards maintain horizontal layout on all screen sizes; consider vertical stacking for ≤360px if content visibility is an issue.

3. **Hero Animation Performance** - Plexus canvas animation may impact performance on low-end devices; already respects `prefers-reduced-motion`.

---

## Regression Prevention

When making future CSS changes:

1. Always test at breakpoints: 320, 480, 768, 1024, 1280
2. Use `max-width: 100%` on all images and media
3. Avoid fixed `width` values in pixels; prefer `%`, `vw`, `clamp()`, `min()`, `max()`
4. Test touch targets remain ≥44px
5. Verify horizontal scroll absence after each change
6. Use `box-sizing: border-box` on containers with padding
