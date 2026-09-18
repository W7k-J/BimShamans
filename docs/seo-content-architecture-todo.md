# SEO + architektura treści — lista zadań

Stan na: 2026-08-06. Podstawa: audyt techniczny strony (sitemap 404, robots 404, brak canonical/og:image/analityki).

**Werdykt wyjściowy:** treść merytorycznie zasługuje na pozycjonowanie (post o IFC to 1605 słów realnej techniki), ale strona jest dziś technicznie niewidzialna. Kolejność niżej jest kolejnością zwrotu z pracy.

---

## CZĘŚĆ A — Hydraulika techniczna (dzień pracy, obowiązkowe)

Bez tego reszta nie ma znaczenia: Google nie ma jak odkryć podstron ani ich poprawnie opisać. **Ta część jest niezależna od decyzji o strukturze treści** i pozostaje najwyższym priorytetem.

- [ ] **A1. Włączyć `jekyll-sitemap` i `jekyll-seo-tag`**
  `Gemfile` + `_config.yml` (sekcja `plugins:` jest dziś w całości zakomentowana, linie 224–226). Oba pluginy są na białej liście GitHub Pages, więc działają bez własnego builda.
  Efekt: `/sitemap.xml` przestaje zwracać 404.

- [ ] **A2. Dodać `robots.txt`** w katalogu głównym, z odwołaniem do sitemapy:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://bimshamans.com/sitemap.xml
  ```

- [ ] **A3. Naprawić tag `<title>`** — [_layouts/default.html:4-8](../_layouts/default.html#L4-L8)
  Dziś doklejasz całe 150-znakowe `site.description` do każdego tytułu. Google ucina ~60 znaków, więc wszystkie podstrony wyglądają w wynikach identycznie i bez fraz kluczowych.
  Docelowo: `{{ page.title }} | BIM Shamans` (bez `site.description`).
  ⚠️ Jeśli wchodzi `jekyll-seo-tag` (A1), on przejmuje generowanie tytułu — wtedy usunąć ręczny blok, żeby się nie dublował.

- [ ] **A4. Uzupełnić meta** — [_includes/meta.html](../_includes/meta.html)
  - `<link rel="canonical">` (dziś brak zupełnie)
  - `og:image` — **najważniejsze dla LinkedIna**, który jest głównym kanałem; dziś udostępniony link wygląda na goło
  - `og:url`, `og:type`, `twitter:card` = `summary_large_image`
  - `hreflang` działa ([default.html:47-54](../_layouts/default.html#L47-L54)) — dorzucić tylko `x-default`

- [ ] **A5. Usunąć albo `noindex` artykuł testowy**
  `_posts/en/2025-01-26-test.md` i `_posts/pl/2025-01-26-test.md` — „Test Article - Template Showcase" jest opublikowany na produkcji i indeksowalny. Placeholder w wynikach wyszukiwania to sygnał niskiej jakości.

- [ ] **A6. Analityka i Search Console**
  `google_analytics:` w `_config.yml` jest puste, `_includes/analytics.html` czeka gotowe. Do wyboru GA4 albo Plausible (lżejszy, bez cookie banera — pasuje do obecnej polityki „no tracking cookies").
  Dołożyć weryfikację w Google Search Console + Bing Webmaster Tools. Bez tego nie wiadomo, na jakie frazy strona się w ogóle pokazuje.

- [ ] **A7. JSON-LD**
  `Organization` na home, `Article` na postach (`jekyll-seo-tag` robi to częściowo sam), `BreadcrumbList` na podstronach.

---

## CZĘŚĆ B — Architektura treści: obieg domknięty w portfolio

### Decyzja (2026-08-06)

Case studies **nie** dostają osobnych URL-i. `/expertise-collection/` **kończy obieg** — pełne case study mieści się w kafelku. Jeśli temat zasługuje na rozwinięcie, powstaje **wpis blogowy**, nie osobna strona case study.

```
/pl/expertise/               zajawka kategorii (3 zdania w kafelku)
      ↓  „szczegóły dla tej kategorii"
/pl/expertise-collection/    pełne case study — KONIEC OBIEGU
      ↓  opcjonalnie, gdy temat ma głębię
/pl/{artykul}/               wpis blogowy = rozwinięcie wątku
```

Co z tego wynika:
- odpada kolekcja `_case_studies`, odpada `_layouts/case-study.html`, odpada wpinanie w hreflang
- rozróżnienie blog/expertise zostaje czyste: **expertise = zapis projektu** (samowystarczalny), **blog = rozwinięcie tematu**
- osobny URL jest **zasługiwany treścią, a nie przyznawany strukturą** — strony powstają tam, gdzie jest realna głębia, zamiast mnożyć cienkie podstrony

Świadomy kompromis: ekspertyza zostaje na dwóch URL-ach, więc długi ogon fraz (CZĘŚĆ C) obsługuje wyłącznie blog. Przy obecnej długości case studies osobne strony byłyby zbyt cienkie, żeby rankować.

### Zadania

- [ ] **B1. Dyscyplina długości w kafelkach**
  Skoro kafelek mieści całość, tekst **i tytuł** muszą się w nim mieścić.
  ⚠️ `.project-tile__text-area` ma dziś `overflow-y: auto` ([_portfolio-tiles.scss:1140-1147](../_sass/_portfolio-tiles.scss#L1140-L1147)) — treść scrolluje się wewnątrz kafla, praktycznie niewidocznie dla czytelnika (jedyny sygnał to gradient `.project-tile__fade`). Po skróceniu tekstów sprawdzić, czy scroll jest jeszcze potrzebny; jeśli nie — usunąć, żeby nic się nie chowało.

- [x] **B2. Kotwice `id` na `<article class="project-tile">`** — ZROBIONE 2026-08-06
  Osiem kafli w obu językach dostało wspólne slugi (identyczne PL/EN, żeby kotwica przetrwała przełączenie języka): `bim-residential-implementation`, `powerbi-board-game-analysis`, `hike-tracker-dashboard`, `ifc-mmi-check-acc`, `3d-flats-bi-reporting`, `ifc-validation-ids-python`, `ifc-4x3-infrastructure`, `revit-csharp-addins`.

- [x] **B2a. Dane strukturalne JSON-LD** — ZROBIONE 2026-08-06
  `CollectionPage` + `ItemList` z ośmioma `CreativeWork` na końcu obu plików kolekcji. Opisuje każdy kafel osobno mimo wspólnego URL-a; `CollectionPage.name` daje stronie temat nadrzędny, którego brakuje z powodu braku `<h1>`.
  ⚠ Piąte miejsce do aktualizacji przy zmianie treści kafla (obok B4). Blok stoi tuż pod listą kafli, żeby rozjazd był widoczny.

- [ ] **B2b. `<h1>` na stronach kolekcji** — ODŁOŻONE (ingeruje w warstwę wizualną)
  `expertise-collection.md` nie ma **żadnego** `<h1>` — od razu osiem `<h2>` z tytułami kafli. Na `expertise.md` `<h1>` brzmi „Portfolio", czyli słowo bez wartości wyszukiwarkowej. Do zrobienia przy najbliższej zmianie układu.

- [ ] **B3. `.project-tile__cta`** — opcjonalnie, tylko na kafelkach, które mają rozwinięcie na blogu
  Wzorzec do skopiowania: `.expertise-section__cta` ([_portfolio-tiles.scss:175](../_sass/_portfolio-tiles.scss#L175)), ten sam strzałkowy SVG.
  Etykieta w stylu „rozwinięcie tematu na blogu", **nie** „czytaj więcej" — inaczej sugeruje, że case study w kafelku jest ucięte.

- [ ] **B4. Spójność zajawek między `expertise.md` a `expertise-collection.md`**
  Kafelki zostają statycznym HTML-em, więc ten sam wątek jest opisany w dwóch plikach × dwa języki = cztery miejsca. Przy każdej zmianie treści sprawdzić wszystkie. (Automatyczna generacja z kolekcji odpadła wraz z decyzją.)

---

## CZĘŚĆ C — Treść i autorytet (właściwa fosa)

Po decyzji z części B **to blog jest jedynym miejscem, w którym rośnie zasięg w wyszukiwarce.** Waga tej części odpowiednio rośnie.

- [ ] **C1. Kadencja: 2 posty miesięcznie minimum.** Trzy posty (w tym jeden testowy) to nie jest źródło informacji — Google nie uzna domeny za żywą.

- [ ] **C2. Celować w długi ogon techniczny, nie we frazy głowy.**
  Na „BIM" czy „ISO 19650" nie ma szans (buildingSMART, Autodesk, BIM Corner). Wygrywalne i trafiające dokładnie w grupę docelową:
  `walidacja IFC IDS Python`, `IfcRailway export Civil 3D MVD`, `weryfikacja MMI IFC Power BI`, `BOQ Navisworks parametry kodowane`, `bounding box pomieszczeń Revit Speckle`

- [ ] **C3. Rynek polski jako klin.** Znacznie mniej nasycony niż anglojęzyczny przy tej samej treści — najtańszy zwrot z już posiadanych materiałów.

- [ ] **C4. Artykuł „Ile realnie oszczędza przedmiar z modelu?"** — pierwszy przykład wzorca z części B (kafelek BOQ → rozwinięcie na blogu)
  Research jest zrobiony: zestawienie CIFE (2007) / PwC-CDBB (2018) / Windover / Automation in Construction (2024) + uczciwa krytyka metodyki (wiek danych CIFE, ankietowy charakter Dodge'a). To treść linkowalna — taka, na którą powołują się inni.
  Kafelek BOQ w `expertise.md` i case study w kolekcji dostają wtedy CTA (B3) prowadzące do tego wpisu.

- [ ] **C5. Linki zwrotne**
  - profile czterech narzędzi na **Autodesk App Store** (bardzo mocna domena) → link do bimshamans.com
  - buildingSMART, BIM Corner (wpis gościnny)
  - konsekwentne cross-postowanie na LinkedIn (po naprawieniu `og:image` z A4)

---

## Kolejność wykonania i zależności

1. **A1–A6** — niezależne od siebie, do zrobienia hurtem. Bez tego pozostałe punkty nie dają efektu w wyszukiwarce.
2. **B1** — skrócenie tekstów i tytułów case studies (w toku, po stronie autora treści), potem weryfikacja `overflow-y`.
3. **B2** — kotwice; **B3** dopiero wtedy, gdy istnieje pierwszy wpis rozwijający (C4).
4. **C1–C5** — proces ciągły, jedyne źródło wzrostu w wyszukiwarce.

## Uwaga strategiczna

Strona jest portfolio konsultingowym z blogiem. Po decyzji z części B ten podział jest już świadomy i spójny: **portfolio pokazuje, co potrafimy, blog buduje zasięg.** Pozycjonowanie jako źródło informacji zależy więc wyłącznie od kadencji z części C i wymaga 12+ miesięcy, zanim pojawi się ruch.

Jeśli zasobów na część C nie ma: zrobić A + B i zatrzymać się tam. Sam domknięty obieg zajawka → case study poprawia konwersję ruchu, który i tak przychodzi z LinkedIna, niezależnie od pozycji w Google.
