# Zmienne Scrollbara

## Zmienne Podstawowe
- `--scrollbar-width: 10px`
  - Kontroluje szerokość paska przewijania
  - Wartość 10px zapewnia dobry kompromis między widocznością a estetyką

- `--scrollbar-border-radius: 1px`
  - Określa zaokrąglenie rogów paska przewijania
  - Minimalne zaokrąglenie dla zachowania profesjonalnego wyglądu

- `--scrollbar-border: 2px`
  - Definiuje grubość obramowania paska przewijania
  - Tworzy efekt "przestrzenności" scrollbara

## Zmienne Motywu Jasnego (light-theme)
- `--scrollbar-track: #{$lightGray}`
  - Kolor tła, po którym porusza się scrollbar
  - Jasny szary dla subtelnego kontrastu

- `--scrollbar-thumb: #{$gray}`
  - Kolor głównego elementu scrollbara
  - Średni szary dla dobrej widoczności

- `--scrollbar-thumb-hover: #{$darkGray}`
  - Kolor przy najechaniu myszką
  - Ciemniejszy odcień dla wyraźnej interakcji

- `--scrollbar-thumb-active: #{$biceBlue}`
  - Kolor podczas kliknięcia i przeciągania
  - Niebieski akcent dla wyraźnego zaznaczenia aktywności

## Zmienne Motywu Ciemnego (dark-theme)
- `--scrollbar-track: #{$darkGray}`
  - Ciemne tło scrollbara pasujące do ciemnego motywu

- `--scrollbar-thumb: #{$gray}`
  - Szary kolor głównego elementu dla kontrastu

- `--scrollbar-thumb-hover: #{$lightGray}`
  - Jaśniejszy odcień przy hover dla lepszej widoczności

- `--scrollbar-thumb-active: #{$ryanCyan}`
  - Cyjanowy akcent podczas aktywności

## Uwagi Dodatkowe
- Scrollbar jest zawsze widoczny dzięki `overflow-y: scroll !important` na elemencie html
- Styl jest kompatybilny z przeglądarkami WebKit (Chrome, Edge, Safari) oraz Firefox
- Firefox używa uproszczonego stylu poprzez `scrollbar-width: thin`
