---
layout: default
title: Home
ref: home
lang: en
permalink: /en/home/
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
  
  <div class="plexus-container">
    <canvas id="plexusCanvas"></canvas>
  </div>
</div>

## Latest posts:

<div class="posts">
  {% assign posts=site.posts | where:"lang", "en" %}
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

<script src="{{ site.baseurl }}/assets/background-plexus.js" defer></script>