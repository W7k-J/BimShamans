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

.hero-section .home-avatar {
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

.hero-section .home-avatar img {
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
}
</style>

<div class="hero-section">
  <div class="home-avatar">
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
      <h2>Design Collaboration</h2>
      <p>
        Text text text placeholder copy for the first section. Add your real description here to explain
        the value proposition around collaborative BIM design services.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Placeholder design illustration">
    </div>
  </div>

  <div class="feature-section feature-section--reverse">
    <div class="feature-section__content">
      <h2>Automation &amp; Efficiency</h2>
      <p>
        Text text text placeholder copy for the second section. Highlight how automation improves
        efficiency and streamlines project delivery for your clients.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Placeholder automation illustration">
    </div>
  </div>

  <div class="feature-section">
    <div class="feature-section__content">
      <h2>Training &amp; Workshops</h2>
      <p>
        Text text text placeholder copy for the third section. Describe workshops, onboarding, or other
        educational services that help teams adopt new workflows.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Placeholder training illustration">
    </div>
  </div>

  <div class="feature-section feature-section--reverse">
    <div class="feature-section__content">
      <h2>Custom Integrations</h2>
      <p>
        Text text text placeholder copy for the fourth section. Talk about bespoke integrations and how
        they connect data sources to keep information in sync.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Placeholder integrations illustration">
    </div>
  </div>

  <div class="feature-section">
    <div class="feature-section__content">
      <h2>Support &amp; Partnership</h2>
      <p>
        Text text text placeholder copy for the fifth section. Share how long-term partnerships provide
        ongoing support and ensure projects keep moving forward.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Placeholder partnership illustration">
    </div>
  </div>
</section>

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

