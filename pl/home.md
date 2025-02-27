---
layout: default
title: home
ref: home
lang: pl
permalink: /pl/home/
---
{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.t[lang] %}

<!-- Language switcher -->
<!-- 
<div class="language-switcher">
  {% assign pages=site.pages | where:"ref", page.ref | sort: 'lang' %}
  {% for page in pages %}
    <a href="{{ site.baseurl }}{{ page.url }}" class="{{ page.lang }} {% if page.lang == lang %}active{% endif %}">
      {{ page.lang | upcase }}
    </a>
    {% if forloop.last == false %}
    |
    {% endif %}
  {% endfor %}
</div>
-->

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