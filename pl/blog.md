---
layout: page
title: Blog
lang: pl
ref: blog
permalink: /pl/blog/
excerpt: "Wgląd w metodologie i najlepsze praktyki koordynacji BIM"
---

<div class="blog__container">
  
  <h1>Blog</h1>
  
  <!-- Panel kontrolny: Wyszukiwanie, kierunek & Sortowanie -->
  <div class="blog__controls">
    
    <!-- Expandable Search Bar (Universal Component) -->
    <div class="searchbar searchbar--blog" data-searchbar="blog">
      <form class="searchbar__form" role="search" aria-label="Szukaj artykułów">
        <input 
          type="search" 
          class="searchbar__input" 
          placeholder="szukaj artykułów..."
          aria-label="Szukaj artykułów"
        >
        <button 
          type="button" 
          class="searchbar__clear" 
          title="Wyczyść wyszukiwanie"
          aria-label="Wyczyść wyszukiwanie"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <button 
          type="button" 
          class="searchbar__icon" 
          title="Przełącz wyszukiwanie"
          aria-label="Przełącz wyszukiwanie"
          aria-expanded="false"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <polyline points="21 21 16.65 16.65"></polyline>
          </svg>
        </button>
      </form>
    </div>

    <!-- Toggle kierunku (Rosnąco/Malejąco) -->
    <div class="blog__direction-toggle" role="group" aria-label="Kierunek sortowania">
      <button 
        class="blog__direction-btn blog__direction-btn--desc" 
        data-direction="desc" 
        title="Sortuj malejąco (najnowsze pierwsze)"
        aria-pressed="true"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <button 
        class="blog__direction-btn blog__direction-btn--asc" 
        data-direction="asc" 
        title="Sortuj rosnąco (najstarsze pierwsze)"
        aria-pressed="false"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>

    <!-- Sort By Dropdown -->
    <div class="blog__sort-wrapper">
      <button 
        class="blog__sort-button" 
        id="sort-button"
        role="button" 
        onclick="return false"
        aria-label="Opcje sortowania"
      >
        sortuj wg: <span id="sort-label">data</span>
      </button>
      <div class="blog__sort-menu">
        <button class="blog__sort-option" data-sort="date">data</button>
        <button class="blog__sort-option" data-sort="title">tytuł</button>
        <button class="blog__sort-option" data-sort="author">autor</button>
      </div>
    </div>

  </div>
  </div>

  <!-- Siatka kart bloga -->
  <div class="blog__cards" id="blog-cards">
    <!-- Generowane przez JavaScript -->
  </div>

</div>

<!-- Osadzenie danych postów -->
<script>
const blogPosts = [
  {% assign posts = site.posts | where: "lang", "pl" | sort: "date" | reverse %}
  {% for post in posts %}
    {
      id: "{{ post.ref }}",
      title: "{{ post.title | escape }}",
      excerpt: "{{ post.excerpt | strip_html | escape }}",
      tags: {{ post.filter_hash_list | jsonify }},
      category: "{{ post.category | default: 'Blog' }}",
      image: "{{ post.image | default: site.baseurl }}/images/placeholder-post.jpg",
      url: "{{ post.url }}",
      date: "{{ post.date | date: '%Y-%m-%d' }}",
      dateObj: new Date("{{ post.date | date: '%Y-%m-%d' }}"),
      author: "{{ post.author | default: 'Anonymous' }}",
      popularity: {{ post.popularity | default: 5 }}
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
</script>

<script src="{{ site.baseurl }}/assets/blog-filter.js" defer></script>