---
layout: default
title: Home
ref: home
lang: en
permalink: /en/home/
---
{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.t[lang] %}

<div class="hero-section hero-section--banner">
  <div class="hero-banner" role="img" aria-label="BIM Shamans">
    <span class="visually-hidden">BIM Shamans</span>
    <div class="hero-banner__circuit" aria-hidden="true">
      <div class="hero-banner__circuit-glow"></div>
        <img class="hero-banner__circuit-art" src="{{ site.baseurl }}/images/Hero/vecteezy_abstract-digital-background-with-technology-circuit-board_6826899.svg" alt="" aria-hidden="true">
    </div>
    <div class="glitch-container">
      <h1 class="glitch-text" data-text="BIM Shamans">BIM Shamans</h1>
    </div>
  </div>
</div>

  # !!!!Usługi BIM – BIM Shamans - Szmanskie metody na bimowe niepogody

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

