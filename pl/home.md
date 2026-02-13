---
layout: default
title: Strona główna
ref: home
lang: pl
permalink: /pl/home/
excerpt: "BIM Shamans łączy różnorodne doświadczenie i wspólną pasję do rozwiązywania rzeczywistych wyzwań BIM poprzez automatyzację, standaryzację i pragmatyczne podejście inżynierskie."
latest_posts_count: 6
---
{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.t[lang] %}

{% include svg-glitch-filter.html %}

<div class="hero-section hero-section--banner">
  <div class="hero-banner" role="img" aria-label="BIM Shamans">
    <span class="visually-hidden">BIM Shamans</span>
    <div class="hero-banner__circuit" aria-hidden="true">
      <div class="hero-banner__circuit-glow"></div>
      <img class="hero-banner__circuit-art" src="{{ site.baseurl }}/images/Hero/vecteezy_abstract-digital-background-with-technology-circuit-board_6826899.svg" alt="" aria-hidden="true">
    </div>
    <!-- Opcje layoutu:
         Domyślnie: Slogan wyśrodkowany pod całym logo (BIM + płomień + Shamans)
         Alternatywnie: Dodaj klasę "hero-banner__content--slogan-shamans" aby wyśrodkować slogan tylko pod "Shamans"
         Przykład: <div class="hero-banner__content hero-banner__content--slogan-shamans">
    -->
    <div class="hero-banner__content">
      <div class="hero-banner__logo">
        <figure class="glitch-filter-example glitch-filter-example--bim">
          <svg class="glitch-filter-example__demo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 80" preserveAspectRatio="xMaxYMid meet">
            <text class="glitch-filter-example__filtered-text" y="50%" text-anchor="end" x="195" dy="0.35em">BIM</text>
          </svg>
        </figure>
        <div class="hero-flame" aria-hidden="true">
          <img src="{{ site.baseurl }}/images/logos/Logo_Fire_Favicon_Alpha_1024x1024.svg" alt="" class="hero-flame__icon">
        </div>
        <figure class="glitch-filter-example glitch-filter-example--shamans">
          <svg class="glitch-filter-example__demo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 80" preserveAspectRatio="xMinYMid meet">
            <text class="glitch-filter-example__filtered-text" y="50%" text-anchor="start" x="5" dy="0.35em">Shamans</text>
          </svg>
        </figure>
      </div>
      <div class="hero-slogan">
        <span class="hero-slogan__static">invoke to</span>
        <span id="hero-slogan" class="hero-slogan__dynamic" data-strings="share,serve,solve" data-text="share">share</span>
      </div>
    </div>
  </div>
</div>

<!--

<section class="feature-sections">
  <div class="feature-section">
    <div class="feature-section__content">
      <h2>MODELE BIM NIE SĄ PRODUKTEM</h2>
      <p>
        Obiekt budowlany nim jest. Nadrzędnym założeniem tworzenia cyfrowego modelu powinno być wybudowanie obiektu spełniającego stawiane wymagania - od zapewnienia zakładanej funkcjonalności, przez atrakcyjność formy, bezpieczeństwo użytkowników i komfort użytkowania, aż po zgodność kosztów i czasu z założonym planem oraz spełnienie wymagań energooszczędności.
        Koncepcja, projekt, wykonanie, użytkowanie, utrzymanie, modernizacja i rozbiórka to etapy, na których model powinien wspierać decyzje, dostarczać realną wartość i efektywnie działać na korzyść uczestników każdego z tych etapów.
        Nie traktuj modeli BIM jako produktów, które należy jedynie wytworzyć, sprawdzić, wykonać z nich dokumentację, a następnie zarchiwizować. Jeśli model nie wspiera aktywnie podejmowania decyzji — to co właściwie dostarcza?
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Ilustracja modeli BIM">
    </div>
  </div>

  <div class="feature-section feature-section--reverse">
    <div class="feature-section__content">
      <h2>OVERPRODUCTION KONTRA WIELOKROTNE UŻYCIE DANYCH</h2>
      <p>
        Te same informacje powstające wielokrotnie - z drobnymi różnicami, w różnych narzędziach, dla różnych zespołów, często po to, by trafić do innej sekcji tego samego projektu albo…nigdy nie zostać użyte w kolejnym kroku procesu. Uwielbiamy zabawe w szybkie kopiuj–wklej.
        Na początku jest łatwo: skopiuj fragment legendy, wklej w inne miejsce. Skopiuj tylko ten jeden obiekt, zmień geometrie manualnie, bez parametrów. Wklej ten sam fragment zestawienia trzy razy w trzech lokalizacjach. Przepisz parametry. Później przychodzi rewizja.
        Zaczyna się cykl aktualizacji tych samych danych w wielu miejscach jednocześnie, część z nich pomijając, tworząc informacyjny chaos. Brzmi znajomo?
        Ta powtarzalność jest często akceptowana jako „specyfika projektów", nieidealna, ale znana – "zawsze tak dzialaliśmy". Data reuse brzmi jak oczywistość, wręcz banał - a jednak rzadko bywa stosowany świadomie mimo niewyobrażalnego przyrostu ilości danych wymaganych dzisiejszym świecie.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Ilustracja wielokrotnego użycia danych">
    </div>
  </div>

  <div class="feature-section">
    <div class="feature-section__content">
      <h2>AUTOMATYZACJA TO NIE TYLKO AUTOMAT</h2>
      <p>
        Pojęcie "automatyzacja" jest często sprowadzane do wykonania za nas zadanej (programowomi) sekwencji czynności. Skrypt ma „zrobić szybciej", workflow ma „zdjąć z głowy" powtarzalne zadania. To prawda — ale tylko w bardzo powierzchownym ujęciu.
        Dobra automatyzacja to przewidywalność i stabilność relacji wejście–wyjście procesu, a także eliminacja błędów ludzkich, do których jesteśmy szczególnie skłonni przy zadaniach mechanicznych, powtarzalnych i pozornie prostych. Zmęczenie, rutyna i nieuwaga nie są wyjątkami — są naturalnymi cechami ludzkiego działania.
        Automatyzacja nie tylko przyspiesza — stabilizuje jakość i zwiększa kontrolę nad przebiegiem naszych prac.
        Dobrze zaprojektowany skrypt, add-in czy data flow wprowadza mechanizmy unifikacji i zapobiegania błędom, co w szerszym ujęciu przynosi znacznie większe korzyści niż samo skrócenie czasu wykonywania czynności.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Ilustracja automatyzacji">
    </div>
  </div>

  <div class="feature-section feature-section--reverse">
    <div class="feature-section__content">
      <h2>STANDARDY JAKO WSPARCIE W PODEJMOWANIU DECYZJI – POZWÓL IM NA TO</h2>
      <p>
        Standardy często powstają po to, by spełnić wymagania kontraktowe. Z czasem stają się coraz dłuższe, bardziej szczegółowe i coraz mniej użyteczne w praktyce. Trudne do śledzenia, nieintuicyjne, niemal niemożliwe do zapamiętania - a mimo to oczekujemy, że będziemy do nich konsekwentnie wracać I stosować je w praktyce inżynierskiej.
        Dlaczego tak je tworzyliśmy? Chcieliśmy pokryć jak najszerszy obszar pracy za pomocą teorii. Tymczasem rzeczywistość się zmieniła. Zmienił się sposób, w jaki pracujemy, uczymy się i przetwarzamy informacje. Z jednej strony mamy szablony sprzed dekady, z drugiej — próbujemy przekonać użytkowników, by realnie brnęli przez bloki tekstu, powielane informacje i nieintuicyjne tabele zbiorcze.
        Pytanie nie brzmi, czy potrzebujemy standardów. Odpowiedź jest oczywista — tak. Prawdziwym wyzwaniem jest to, jak projektować standardy jako użyteczne przewodniki decyzyjne, wyposażone w narzędzia, które wspierają ich stosowanie w całym obszarze naszego BIMu.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Ilustracja standardów">
    </div>
  </div>

  <div class="feature-section">
    <div class="feature-section__content">
      <h2>DOSTĘPNOŚĆ DANYCH A UŻYTECZNOŚĆ DECYZYJNA</h2>
      <p>
        „Data is the new oil" — popularna metafora ukuta ponad dwadzieścia lat temu, ma istotny haczyk. Więcej danych nie oznacza lepszych decyzji. Oznacza po prostu… więcej danych.
        Radzenie sobie ze złożonością danych w procesie budowlanym jest bez wątpienia wyzwaniem, szczególnie w branży, w której niemalże nie występują dwa identyczne projekty.
        W praktyce dane gromadzimy szybciej, niż jesteśmy w stanie z sensownie ziterpretować w całości. Nie jesteśmy stworzeni do przetwarzania takich ilości nieobrobionych danych. Samo ich zbieranie ma niewielką wartość bez jasno określonego celu, zdefiniowanego odbiorcy oraz świadomej selekcji informacji. Dopiero wtedy dane mogą zostać ustrukturyzowane, czytelnie zwizualizowane i - ostatecznie przekształcone w decyzje, które można komunikować i wdrażać w życie.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Ilustracja dostępności danych">
    </div>
  </div>

  <div class="feature-section feature-section--reverse">
    <div class="feature-section__content">
      <h2>OPROGRAMOWANIE NIE TWORZY CYFROWEGO PRODUKTU – TWORZĄ GO LUDZIE</h2>
      <p>
        Młot udarowy będzie utrudniał pracę, jeśli operator nie wie jak podłączyć go do prądu. Podobnie jest z oprogramowaniem.
        Sam fakt posiadania narzędzi nie oznacza jeszcze, że „robimy BIM" ani że realnie usprawniamy fragment budowlanej rzeczywistości, za który odpowiadamy. Zakup oznacza jedynie, że narzędzia leżą na stole.
        Bez umiejętności ich obsługi, bez zrozumienia ich potencjału, ograniczeń i - czasami pokrętnej, ale jednak logiki, pozostają tylko narzędziami. Nierzadko bardziej frustrującymi niż te, które znamy, zwłaszcza gdy oczekujemy, że same z siebie zmienią sposób naszej pracy.
        Digital Delivery nie powstaje z narzędzi. Powstaje z ich świadomego wykorzystania przez kompetentnych, wyszkolonych i rozumiejących je specjalistów. Zarówno po stronie zespołów projektowych, jak i po stronie zamawiającego, świadomość możliwości i ograniczeń narzędzi jest punktem wyjścia do budowy dojrzałego, cyfrowego procesu.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Ilustracja oprogramowania i ludzi">
    </div>
  </div>
</section>

-->

## Najnowsze posty:

<div class="blog__cards">
  {% assign posts = site.posts | where: "lang", "pl" | sort: "date" | reverse %}
  {% for post in posts limit: page.latest_posts_count %}
    <article class="blog-card" data-tags="{{ post.filter_hash_list | join: ',' }}">
      <div class="blog-card__image">
        <img src="{{ post.image | default: site.baseurl | append: '/images/placeholder-post.jpg' }}" alt="{{ post.title }}" loading="lazy">
        <span class="blog-card__category">{{ post.category | default: 'Blog' }}</span>
      </div>

      <div class="blog-card__content">
        <h3 class="blog-card__title">{{ post.title }}</h3>
        <p class="blog-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
      </div>

      <div class="blog-card__overlay">
        <p class="blog-card__description">{{ post.description | default: 'Odkryj więcej szczegółów i informacji w tym artykule.' }}</p>
        <div class="blog-card__tags">
          {% for tag in post.filter_hash_list %}
            <span class="blog-card__tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% if post.author %}
          <p class="blog-card__author">{{ post.author }}</p>
        {% endif %}
        <a href="{{ site.baseurl }}{{ post.url }}" class="blog-card__label">
          <div class="blog-card__icon"><img src="{{ site.baseurl }}/images/icons/icons_alt-arrow-right.svg" alt="strzałka"></div>
          <div class="blog-card__info">
            <div class="blog-card__main">Czytaj więcej</div>
          </div>
        </a>
      </div>
    </article>
  {% endfor %}
</div>

<nav class="expertise__nav">
  <button type="button" class="expertise__nav-link" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
    do góry
    <svg class="expertise__nav-icon expertise__nav-icon--after" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>

  <a href="{{ site.baseurl }}/{{ page.lang }}/blog/" class="expertise__nav-link">
    blog
    <svg class="expertise__nav-icon expertise__nav-icon--after" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </a>
</nav>

