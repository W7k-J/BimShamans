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
}

.hero-section .site-avatar {
  position: relative;
  z-index: 2;
  max-width: 1024px;
  margin: 0 auto;
  height: 222px;
}

.hero-section .plexus-container {
  height: 222px;
}
</style>

<div class="hero-section">
  <div class="site-avatar">
    <img 
      src="{{ site.baseurl }}/images/Logo_BIMShamans_Baner_AlphaDarkLetters_1024x222.png" 
      alt="BIM Shamans Logo Light Theme" 
      class="logo-light"
    >
    <img 
      src="{{ site.baseurl }}/images/Logo_BIMShamans_Baner_AlphaLightLetters_1024x222.png" 
      alt="BIM Shamans Logo Dark Theme" 
      class="logo-dark"
    >
  </div>
  
  <div class="plexus-container">
    <canvas id="plexusCanvas"></canvas>
  </div>
</div>

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