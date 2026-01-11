# 📱 Mobile Breakpoints - Quick Reference

## Breakpoint Strategy

```scss
// Mobile-First Approach - używaj min-width, nie max-width gdzie możliwe

// SMALL MOBILE (prioritet: efficiency, touch-friendly)
@media screen and (max-width: 480px) { }

// STANDARD MOBILE (prioritet: readability, single column)
@media screen and (max-width: 640px) { }

// TABLET PORTRAIT (prioritet: intermediate layout)
@media screen and (max-width: 768px) { }

// TABLET LANDSCAPE (prioritet: desktop-like z modyfikacjami)
@media screen and (max-width: 992px) { }

// LARGE TABLET/SMALL DESKTOP
@media screen and (max-width: 1024px) { }

// DESKTOP
@media screen and (min-width: 1024px) { }
```

---

## Component-Specific Breakpoints

### Navigation
```scss
// Mobile hamburger menu
@media screen and (max-width: 768px) {
  .nav-toggle { display: flex; }
  .site-nav { /* mobile menu overlay */ }
}
```

### Forms
```scss
// Single column + iOS zoom prevention
@media screen and (max-width: 640px) {
  input, textarea {
    font-size: 16px; // CRITICAL - prevents iOS auto-zoom
  }
  .form-row.two-cols {
    grid-template-columns: 1fr; // force single column
  }
}
```

### Portfolio Tiles
```scss
// 992px: Grid collapse
@media screen and (max-width: 992px) {
  .expertise-section {
    grid-template-columns: 1fr;
  }
}

// 768px: Horizontal scroll carousel
@media screen and (max-width: 768px) {
  .portfolio-tiles-stack {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
}

// 480px: Larger tiles for easier swipe
@media screen and (max-width: 480px) {
  .portfolio-tile {
    flex: 0 0 90%; // vs 85% on larger mobile
  }
}
```

### Blog Cards
```scss
@media screen and (max-width: 640px) {
  .blog__search-input {
    font-size: 16px; // iOS zoom prevention
  }
}
```

### Buttons
```scss
@media screen and (max-width: 640px) {
  .button--primary,
  .button--secondary {
    width: 100%; // Full-width CTAs
    padding: 12px 24px; // Smaller but still touch-friendly
  }
}
```

### Post Content
```scss
@media screen and (max-width: 640px) {
  .post__content {
    img {
      margin: 1.25rem -15px; // Bleed to edges
      width: calc(100% + 30px);
    }
    
    pre, table {
      overflow-x: auto; // Horizontal scroll
    }
  }
}
```

---

## Touch Target Guidelines

### Minimalne rozmiary (iOS Human Interface Guidelines):
```scss
// Buttons, links, inputs
min-height: 44px;
min-width: 44px;

// Icon buttons
min-height: 44px;
min-width: 44px;
padding: 12px; // dla 20px icon = 44px total

// Spacing między clickable elements
gap: 8px; // minimum
```

### Recommended sizes (Material Design):
```scss
// Primary actions
min-height: 48px;

// Secondary actions
min-height: 40px;

// Dense layouts (tables, lists)
min-height: 36px; // tylko gdy spacing jest generous
```

---

## Font Size Guidelines

### iOS Zoom Prevention
```scss
// ZAWSZE używaj minimum 16px dla input fields
input, textarea, select {
  font-size: 16px; // iOS nie zoomuje poniżej 16px
}

// Body text
body {
  font-size: clamp(16px, calc(1rem + 0.1vw), 18px);
}

// Headings - używaj clamp()
h1 { font-size: clamp(1.75rem, 5vw, 2.5rem); }
h2 { font-size: clamp(1.5rem, 4vw, 2rem); }
h3 { font-size: clamp(1.25rem, 3vw, 1.75rem); }
```

---

## Spacing/Padding Mobile

### Container padding:
```scss
// Desktop
.container {
  padding: 0 15px;
}

// Mobile - tighter margins
@media screen and (max-width: 640px) {
  .container {
    padding: 0 10px; // opcjonalnie tighter
  }
}
```

### Section spacing:
```scss
// Desktop
$section-gap: 4rem;

// Tablet
@media screen and (max-width: 992px) {
  gap: 3rem;
}

// Mobile
@media screen and (max-width: 640px) {
  gap: 2rem;
}
```

---

## Common Patterns

### Full-width elements:
```scss
@media screen and (max-width: 640px) {
  .button--cta,
  .form-submit,
  .nav-link {
    width: 100%;
    text-align: center;
  }
}
```

### Horizontal scroll carousel:
```scss
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 1rem;
  
  // Hide scrollbar
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  
  .item {
    flex: 0 0 85%; // Don't shrink, 85% width
    scroll-snap-align: center;
  }
}
```

### Image bleed (full-width):
```scss
@media screen and (max-width: 640px) {
  .content img {
    margin-left: -15px; // Negative container padding
    margin-right: -15px;
    width: calc(100% + 30px);
    max-width: calc(100% + 30px);
  }
}
```

### Grid collapse:
```scss
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
```

---

## Performance Tips

### Use clamp() for responsive sizing:
```scss
// Better than multiple media queries
font-size: clamp(1rem, 2vw, 1.5rem);
//           ^min  ^ideal ^max

padding: clamp(1rem, 3vw, 2rem);
```

### Hardware acceleration:
```scss
// Smooth animations
.animated {
  will-change: transform, opacity;
  transform: translateZ(0); // Force GPU
}
```

### Touch scrolling:
```scss
.scroll-container {
  -webkit-overflow-scrolling: touch; // iOS smooth scroll
  overscroll-behavior: contain; // Prevent bounce
}
```

### Reduce motion:
```scss
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Testing Checklist

### Device Tests:
- [ ] iPhone SE (375px) - smallest modern iPhone
- [ ] iPhone 14 (390px) - standard iPhone
- [ ] iPhone 14 Pro Max (430px) - largest iPhone
- [ ] Samsung Galaxy S23 (360px) - common Android
- [ ] iPad Mini (768px) - smallest iPad
- [ ] iPad Pro (1024px) - largest tablet

### Browser Tests:
- [ ] Safari iOS (primary)
- [ ] Chrome Android
- [ ] Chrome iOS
- [ ] Samsung Internet

### Network Tests:
- [ ] 3G throttling
- [ ] 4G
- [ ] WiFi

### Orientation Tests:
- [ ] Portrait
- [ ] Landscape
- [ ] Rotation handling

---

## Debugging Mobile Issues

### View on real device:
```bash
# Local network access
bundle exec jekyll serve --host=0.0.0.0
# Then navigate to: http://YOUR_IP:4000
```

### Chrome DevTools:
1. Open DevTools
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select device presets or custom dimensions
4. Test with network throttling

### iOS Safari:
1. Enable Web Inspector (Settings → Safari → Advanced)
2. Connect device via USB
3. Open Safari → Develop → [Your Device]

---

## Common Mistakes to Avoid

❌ **Using max-width everywhere** (not mobile-first)
✅ Use min-width where possible

❌ **Font-size < 16px on inputs** (triggers iOS zoom)
✅ Always 16px minimum

❌ **Touch targets < 44px** (hard to tap)
✅ Minimum 44x44px

❌ **Horizontal scroll na całej stronie** (bad UX)
✅ Tylko dla specific components (carousels)

❌ **Fixed widths w px** (nie skalują się)
✅ Używaj %, rem, clamp()

❌ **:hover only interactions** (nie działa na touch)
✅ Dodaj :active, :focus states

❌ **Large images bez optimization** (slow load)
✅ Responsive images (srcset), lazy loading

---

## Variables Reference

```scss
// Z _variables.scss
$nav-height: 60px;
$nav-spacing: 10px;
$section-gap: 4rem;

$radius-small: 6px;   // Mobile: often smaller
$radius-medium: 14px; // Mobile: 10-12px
$radius-large: 18px;  // Mobile: 14-16px

// Transition timing
$transition-base: 0.4s;
$transition-fast: 0.2s;
```

---

## Quick Wins dla Better Mobile UX

1. **Dodaj viewport meta tag** (jeśli jeszcze nie ma)
2. **Test na real devices** (nie tylko DevTools)
3. **Optimizuj images** (WebP + responsive)
4. **Add loading states** (spinners, skeletons)
5. **Test z slow 3G** (symuluj poor connection)
6. **Add offline page** (Service Worker)
7. **Test z różnymi font sizes** (accessibility settings)
8. **Add pull-to-refresh** (native feeling)

---

## Resources

- [iOS HIG](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design](https://m3.material.io/)
- [Web.dev Mobile UX](https://web.dev/mobile-ux/)
- [Can I Use](https://caniuse.com/) - browser support
- [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

---

**Last updated:** 2026-01-11
