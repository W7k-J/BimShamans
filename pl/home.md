---
layout: default
title: Strona główna
ref: home
lang: pl
permalink: /pl/home/
---
{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.t[lang] %}

<style>
.hero-section {
  position: relative;
  width: 100%;
  margin: 2rem 0;
  height: 222px;
  overflow: hidden;
}

.hero-section .site-avatar {
  position: absolute;
  z-index: 2;
  max-width: 1024px;
  width: 100%;
  height: 222px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-section .plexus-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  z-index: 1;
}

.hero-section .site-avatar img {
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
}
</style>

<div class="hero-section">
  <div class="site-avatar">
    <img 
      src="{{ site.baseurl }}/images/logos/Logo_BIMShamans_Baner_AlphaDarkLetters_1024x222.png" 
      alt="BIM Shamans Logo Light Theme" 
      class="logo-light"
    >
    <img 
      src="{{ site.baseurl }}/images/logos/Logo_BIMShamans_Baner_AlphaLightLetters_1024x222.png" 
      alt="BIM Shamans Logo Dark Theme" 
      class="logo-dark"
    >
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

