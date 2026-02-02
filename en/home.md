---
layout: default
title: Home
ref: home
lang: en
permalink: /en/home/
excerpt: "BIM Shamans brings diverse expertise and a shared passion for solving real-world BIM challenges through automation, standardization, and pragmatic engineering."
latest_posts_count: 3
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
    <!-- Layout Options:
         Default: Slogan centered under entire logo (BIM + flame + Shamans)
         Alternative: Add class "hero-banner__content--slogan-shamans" to center slogan under "Shamans" only
         Example: <div class="hero-banner__content hero-banner__content--slogan-shamans">
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

<section class="feature-sections">
  <div class="feature-section">
    <div class="feature-section__content">
      <h2>BIM MODELS ARE NOT THE PRODUCT</h2>
      <p>
        A building asset is the product. The primary purpose of creating a model should be the delivery of a built asset that meets defined requirements - from intended functionality and quality of form, through user safety and comfort, to cost and schedule compliance, as well as energy efficiency targets.
        Concept, design, construction, operation, maintenance, modernization, and demolition are stages at which the model should support decisions, deliver real value, and operate effectively for the benefit of all participants involved in each phase.
        Don’t treat BIM models as deliverables to be produced, checked, export documentation and archived. If the model does not actively support decision-making, what exactly is it delivering?
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Placeholder design illustration">
    </div>
  </div>

  <div class="feature-section feature-section--reverse">
    <div class="feature-section__content">
      <h2>OVERPRODUCTION VS DATA REUSE</h2>
      <p>
        The same information is created over and over again - with minor differences, in different tools, for different teams, often just to end up in another section of the same project or… never be used in another step of the process. We love the fast copy–paste game.
        At first, it feels easy: copy a part of the legend and paste it somewhere else. Copy just this one object, manually reshape the geometry, without parameters. Paste the same schedule fragment three times in three different locations. Type parameteres manually. Then a revision arrives.
        The same data set suddenly needs to be updated in multiple places at once. Some of information are missing, leading to the chaos. Sounds familiar?
        This repetition is often accepted as “the nature of projects” — not ideal, but known as “the way it has always been done”. Data reuse sounds obvious, almost trivial - yet it is rarely applied intentionally, despite the unimaginable growth in data requirements nowdays.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Placeholder automation illustration">
    </div>
  </div>

  <div class="feature-section">
    <div class="feature-section__content">
      <h2>AUTOMATION IS NOT ONLY ABOUT AUTOMATING</h2>
      <p>
        Automation definition is often reduced to executing (by a program) a defined sequence of actions on our behalf. A script is expected to “work faster”, a workflow to “take repetitive tasks off our hands”. This is true — but only at a very superficial level.
        Good automation is about predictability and stability of the input–output relationship of a process, as well as eliminating human errors to which we are particularly prone during mechanical, repetitive, and seemingly simple tasks. Fatigue, routine, and inattention are not exceptions — they are inherent characteristics of human work.
        Automation does not only accelerate processes — it stabilizes quality and increases control over their execution. Properly designed script, add-in or data flow introduces mechanisms of error prevention, delivering benefits that go far beyond mere speed.

      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Placeholder training illustration">
    </div>
  </div>

  <div class="feature-section feature-section--reverse">
    <div class="feature-section__content">
      <h2>STANDARDS ARE DECISION ENABLERS — LET THEM BE ONE</h2>
      <p>
        Standards are often created to satisfy contractual requirements. Over time, they become longer, more detailed, and increasingly less useful in practice. Difficult to follow, unintuitive, and nearly impossible to remember - yet we still expect to return to them consistently and apply them in everyday engineering work.
        Why were they created this way? We wanted to cover as wide as possible field of work. Meanwhile, reality has changed. The way we work, learn, and process information has evolved. On one hand, we rely on templates created a decade ago; on the other, we try to convince users to work their way through blocks of text, duplicated information, and unintuitive summary tables.
        The question is not whether we need standards. The answer is obvious — yes. The real challenge is how to design standards as usable decision guides, equipped with tools that support their application across our entire BIM domain.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Placeholder integrations illustration">
    </div>
  </div>

  <div class="feature-section">
    <div class="feature-section__content">
      <h2>FROM DATA AVAILABILITY TO DECISION CLARITY</h2>
      <p>
        “Data is the new oil” — a popular metaphor coined over twenty years ago, comes with an important catch. More data does not mean better decisions. It simply means more data.
        Handling data complexity in the construction process is undeniably challenging, especially in an industry where no two projects are ever truly the same. In practice data accumulates faster than it can be meaningfully interpreted. People are not expected to reason over raw, complex datasets at industrial scale. Collecting data alone has little value without a clear purpose, a defined audience, and intentional filtering. Only then can data be transformed into understandable structures, meaningful visualizations, and - ultimately - decisions that can be communicated and acted upon.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Placeholder partnership illustration">
    </div>
  </div>

  <div class="feature-section feature-section--reverse">
    <div class="feature-section__content">
      <h2>TOOLS DO NOT CREATE DIGITAL DELIVERY — PEOPLE DO</h2>
      <p>
        A jackhammer will hinder the work if the operator does not know how to plug it. The same applies to software.
        Simply owning tools does not mean that we are “doing BIM”, nor that we are genuinely improving the part of the construction reality we are responsible for. A purchase only means that the tools are placed on the table.
        Without the skills to use them, without understanding their potential, limitations, and - sometimes convoluted, yet inherent logic, they remain just tools. Often more frustrating than the ones we already know, especially when we expect them to transform the way we work on their own.
        Digital Delivery is not created by tools. It is created through their conscious use by competent, trained professionals who understand them. On both the project delivery side and the client side, awareness of a tool’s capabilities and limitations is the starting point for building a mature digital process.
      </p>
    </div>
    <div class="feature-section__media">
      <img src="xyz.jpg" alt="Placeholder sixth section illustration">
    </div>
  </div>
</section>

## Latest posts:

<div class="blog__cards">
  {% assign posts = site.posts | where: "lang", "en" | sort: "date" | reverse %}
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
        <p class="blog-card__description">{{ post.description | default: 'Discover more insights and details about this article.' }}</p>
        <div class="blog-card__tags">
          {% for tag in post.filter_hash_list %}
            <span class="blog-card__tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% if post.author %}
          <p class="blog-card__author">by {{ post.author }}</p>
        {% endif %}
        <a href="{{ site.baseurl }}{{ post.url }}" class="blog-card__label">
          <div class="blog-card__icon"><img src="{{ site.baseurl }}/images/icons/icons_alt-arrow-right.svg" alt="arrow"></div>
          <div class="blog-card__info">
            <div class="blog-card__main">Read more</div>
          </div>
        </a>
      </div>
    </article>
  {% endfor %}
</div>

<nav class="expertise__nav">
  <a href="{{ site.baseurl }}/{{ page.lang }}/blog/" class="expertise__nav-link expertise__nav-link--collection">
    <svg class="expertise__nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 5H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
      <path d="M16 5h4v4"></path>
      <path d="M14 7l6-6"></path>
    </svg>
    Blog
  </a>

  <button type="button" class="expertise__nav-link expertise__nav-link--top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
    Go to top
    <svg class="expertise__nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>
</nav>

