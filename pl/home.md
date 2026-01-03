---
layout: default
title: Strona główna
ref: home
lang: pl
permalink: /pl/home/
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
    <div class="hero-banner__content">
      <figure class="glitch-filter-example glitch-filter-example--bim">
        <svg class="glitch-filter-example__demo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet">
          <text class="glitch-filter-example__filtered-text" y="50%" text-anchor="middle" x="50%" dy="0.35em">BIM</text>
        </svg>
      </figure>
      <div class="hero-flame" aria-hidden="true">
        <img src="{{ site.baseurl }}/images/logos/Logo_Fire_Favicon_Alpha_1024x1024.svg" alt="" class="hero-flame__icon">
      </div>
      <figure class="glitch-filter-example glitch-filter-example--shamans">
        <svg class="glitch-filter-example__demo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet">
          <text class="glitch-filter-example__filtered-text" y="50%" text-anchor="middle" x="50%" dy="0.35em">Shamans</text>
        </svg>
      </figure>
    </div>
  </div>
</div>

  # !!!Usługi BIM – BIM Shamans - Szmanskie metody na bimowe niepogody

<section class="feature-sections">
  <div class="feature-section">
    <div class="feature-section__content">
      <h2>Współpraca projektowa</h2>
      <p>
        Tekst tekst tekst jako tymczasowy opis pierwszej sekcji. Tutaj w przyszłości opiszcie wartość
        współpracy projektowej i usług wspierających zespół BIM.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Ilustracja współpracy projektowej">
    </div>
  </div>

  <div class="feature-section feature-section--reverse">
    <div class="feature-section__content">
      <h2>Automatyzacja i efektywność</h2>
      <p>
        Tekst tekst tekst jako tymczasowy opis drugiej sekcji. Podkreśl, w jaki sposób automatyzacja
        skraca czas dostaw i poprawia jakość dokumentacji.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Ilustracja automatyzacji">
    </div>
  </div>

  <div class="feature-section">
    <div class="feature-section__content">
      <h2>Szkolenia i warsztaty</h2>
      <p>
        Tekst tekst tekst jako tymczasowy opis trzeciej sekcji. Opowiedz o szkoleniach, wdrożeniach lub
        innych działaniach edukacyjnych wspierających zespół.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Ilustracja szkoleniowa">
    </div>
  </div>

  <div class="feature-section feature-section--reverse">
    <div class="feature-section__content">
      <h2>Integracje na zamówienie</h2>
      <p>
        Tekst tekst tekst jako tymczasowy opis czwartej sekcji. Przedstaw indywidualne integracje i sposób
        łączenia źródeł danych w jeden spójny proces.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Ilustracja integracji">
    </div>
  </div>

  <div class="feature-section">
    <div class="feature-section__content">
      <h2>Wsparcie i partnerstwo</h2>
      <p>
        Tekst tekst tekst jako tymczasowy opis piątej sekcji. Wspomnij o długofalowym wsparciu, które
        utrzymuje projekty w ruchu i buduje trwałe relacje.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Ilustracja partnerstwa">
    </div>
  </div>
</section>

## Najnowsze posty:

<div class="posts">
  {% assign posts=site.posts | where:"lang", "pl" %}
  {% for post in posts %}
    <article class="post">
      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {% if post.excerpt %}
          {{ post.excerpt }}
        {% else %}
          {{ post.content | strip_html | truncatewords: 50 }}
        {% endif %}
      </div>

      <div class="post-meta">
        <span class="date">{{ post.date | date: "%d-%m-%Y" }}</span>
        {% if post.author %}
          <span class="author">{{ post.author }}</span>
        {% endif %}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">{{ t.read_more }}</a>
    </article>
  {% endfor %}
</div>

