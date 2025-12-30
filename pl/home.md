---
layout: default
title: Strona główna
ref: home
lang: pl
permalink: /pl/home/
---
{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.t[lang] %}

<div class="hero-section hero-section--banner">
  <div class="hero-banner" role="img" aria-label="BIM Shamans">
    <span class="visually-hidden">BIM Shamans</span>
    <div class="glitch-container">
      <h1 class="glitch-text" data-text="BIM Shamans">BIM Shamans</h1>
    </div>
  </div>
</div>

  # Usługi BIM – BIM Shamans - Szmanskie metody na bimowe niepogody

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

