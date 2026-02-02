---
layout: default
title: Pełne Doświadczenie
lang: pl
ref: expertise-collection
permalink: /pl/expertise-collection/
excerpt: "Kompletna kolekcja naszego doświadczenia. Filtruj według dyscypliny, technologii lub użytego oprogramowania."
---
{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.t[lang] %}

<div class="exp-collection__container">

  <!-- Powrót do Portfolio -->
  <a href="{{ site.baseurl }}/{{ lang }}/expertise/" class="exp-collection__back-link">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
    {{ t.back_to_portfolio }}
  </a>

  <h1>{{ t.portfolio_collection }}</h1>
  <p>{{ t.portfolio_collection_intro }}</p>

  <!-- Filtry tagów (generowane przez JavaScript) -->
  <div class="exp-collection__tags" id="portfolio-filters">
    <!-- Przyciski filtrów generowane przez portfolio-tiles.js -->
  </div>

  <!-- Lista projektów (Full-width tiles) -->
  <div class="exp-collection__list">

    <!-- ========================================== -->
    <!-- PROJEKT 1: Dokumentacja dziedzictwa -->
    <!-- Nieparzysty = Zdjęcie LEWO (60%), Tekst PRAWO (40%) -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="architektura, dziedzictwo, skany, revit">
      
      <!-- Slideshow (60%) -->
      <div class="project-tile__slideshow">
        <div class="project-tile__slides">
          <div class="project-tile__slide project-tile__slide--active">
            <img src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=900&q=80" alt="Budynek zabytkowy" loading="lazy">
          </div>
          <div class="project-tile__slide">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" alt="Skan chmury punktów" loading="lazy">
          </div>
          <div class="project-tile__slide" data-text-sync="1">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80" alt="Widok modelu 3D" loading="lazy">
          </div>
        </div>
        
        <button class="project-tile__nav project-tile__nav--prev" aria-label="Poprzedni slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="project-tile__nav project-tile__nav--next" aria-label="Następny slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>

        <!-- Zoom/Enlarge button -->
        <button class="project-tile__zoom" aria-label="Zobacz obraz w pełnym rozmiarze">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </button>

        <div class="project-tile__dots"></div>
      </div>
      
      <!-- Treść tekstowa (40%) -->
      <div class="project-tile__content">
        <h2 class="project-tile__title">Dokumentacja budynku zabytkowego</h2>
        
        <div class="project-tile__text-area">
          <div class="project-tile__text-slides">
            <div class="project-tile__text-slide project-tile__text-slide--active">
              <p class="project-tile__description">
                Kompleksowa dokumentacja XIX-wiecznego budynku zabytkowego z wykorzystaniem 
                naziemnego skanowania laserowego i fotogrametrii dronowej. Dane chmury punktów 
                zostały przetworzone i przekonwertowane do szczegółowego modelu Revit.
              </p>
            </div>
            <div class="project-tile__text-slide">
              <p class="project-tile__description">
                Finalny model BIM zawiera dokładną geometrię, specyfikacje materiałów i dane 
                dotyczące stanu technicznego. Umożliwia to zespołowi konserwatorskiemu planowanie 
                interwencji przy zachowaniu autentyczności historycznej.
              </p>
            </div>
          </div>
        </div>
        
        <div class="project-tile__tags">
          <a href="#dziedzictwo" class="project-tile__tag">#dziedzictwo</a>
          <a href="#skany" class="project-tile__tag">#skany</a>
          <a href="#revit" class="project-tile__tag">#revit</a>
        </div>
        
        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-recap.svg" alt="ReCap"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-autocad.svg" alt="AutoCAD"></span>
        </div>
      </div>
      
    </article>

    <!-- ========================================== -->
    <!-- PROJEKT 2: Dashboard Power BI -->
    <!-- Parzysty = Tekst LEWO (40%), Zdjęcie PRAWO (60%) -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="raportowanie, powerbi, dashboardy, analityka">
      
      <div class="project-tile__slideshow">
        <div class="project-tile__slides">
          <div class="project-tile__slide project-tile__slide--active">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80" alt="Przegląd dashboardu" loading="lazy">
          </div>
          <div class="project-tile__slide">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80" alt="Wizualizacja danych" loading="lazy">
          </div>
          <div class="project-tile__slide">
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80" alt="Ekran analityczny" loading="lazy">
          </div>
        </div>
        
        <button class="project-tile__nav project-tile__nav--prev" aria-label="Poprzedni slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="project-tile__nav project-tile__nav--next" aria-label="Następny slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>

        <!-- Zoom/Enlarge button -->
        <button class="project-tile__zoom" aria-label="Zobacz obraz w pełnym rozmiarze">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </button>

        <div class="project-tile__dots"></div>
      </div>
      
      <div class="project-tile__content">
        <h2 class="project-tile__title">Dashboard jakości projektu</h2>
        
        <div class="project-tile__text-area">
          <div class="project-tile__text-slides">
            <div class="project-tile__text-slide project-tile__text-slide--active">
              <p class="project-tile__description">
                Dashboard Power BI w czasie rzeczywistym śledzący metryki jakości modelu, 
                problemy koordynacyjne i produktywność zespołu w wielu projektach BIM. 
                Zautomatyzowany potok danych pobiera informacje bezpośrednio z modeli Revit.
              </p>
            </div>
          </div>
        </div>
        
        <div class="project-tile__tags">
          <a href="#powerbi" class="project-tile__tag">#powerbi</a>
          <a href="#dashboardy" class="project-tile__tag">#dashboardy</a>
          <a href="#analityka" class="project-tile__tag">#analityka</a>
        </div>
        
        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-powerbi.svg" alt="Power BI"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-excel.svg" alt="Excel"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-python.svg" alt="Python"></span>
        </div>
      </div>
      
    </article>

    <!-- ========================================== -->
    <!-- PROJEKT 3: Automatyzacja Dynamo -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="automatyzacja, dynamo, python, revit">
      
      <div class="project-tile__slideshow">
        <div class="project-tile__slides">
          <div class="project-tile__slide project-tile__slide--active">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80" alt="Workflow automatyzacji" loading="lazy">
          </div>
          <div class="project-tile__slide">
            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&q=80" alt="Interfejs kodu" loading="lazy">
          </div>
        </div>
        
        <button class="project-tile__nav project-tile__nav--prev" aria-label="Poprzedni slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="project-tile__nav project-tile__nav--next" aria-label="Następny slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>

        <!-- Zoom/Enlarge button -->
        <button class="project-tile__zoom" aria-label="Zobacz obraz w pełnym rozmiarze">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </button>

        <div class="project-tile__dots"></div>
      </div>
      
      <div class="project-tile__content">
        <h2 class="project-tile__title">Pakiet automatyzacji Dynamo</h2>
        
        <div class="project-tile__text-area">
          <div class="project-tile__text-slides">
            <div class="project-tile__text-slide project-tile__text-slide--active">
              <p class="project-tile__description">
                Niestandardowe skrypty Dynamo i workflow'y oparte na Pythonie automatyzujące 
                powtarzalne zadania BIM. Obejmuje automatyczne generowanie arkuszy, zarządzanie 
                parametrami i narzędzia kontroli jakości, które zmniejszyły pracę manualną o 60%.
              </p>
            </div>
          </div>
        </div>
        
        <div class="project-tile__tags">
          <a href="#dynamo" class="project-tile__tag">#dynamo</a>
          <a href="#python" class="project-tile__tag">#python</a>
          <a href="#automatyzacja" class="project-tile__tag">#automatyzacja</a>
        </div>
        
        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-dynamo.svg" alt="Dynamo"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-python.svg" alt="Python"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
        </div>
      </div>
      
    </article>

    <!-- ========================================== -->
    <!-- PROJEKT 4: Koordynacja BIM -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="koordynacja, navisworks, openbim, ifc">
      
      <div class="project-tile__slideshow">
        <div class="project-tile__slides">
          <div class="project-tile__slide project-tile__slide--active">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80" alt="Spotkanie koordynacyjne" loading="lazy">
          </div>
          <div class="project-tile__slide">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80" alt="Wykrywanie kolizji" loading="lazy">
          </div>
          <div class="project-tile__slide">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80" alt="Model budynku" loading="lazy">
          </div>
        </div>
        
        <button class="project-tile__nav project-tile__nav--prev" aria-label="Poprzedni slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="project-tile__nav project-tile__nav--next" aria-label="Następny slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>

        <!-- Zoom/Enlarge button -->
        <button class="project-tile__zoom" aria-label="Zobacz obraz w pełnym rozmiarze">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </button>

        <div class="project-tile__dots"></div>
      </div>
      
      <div class="project-tile__content">
        <h2 class="project-tile__title">Wielobranżowa koordynacja BIM</h2>
        
        <div class="project-tile__text-area">
          <div class="project-tile__text-slides">
            <div class="project-tile__text-slide project-tile__text-slide--active">
              <p class="project-tile__description">
                Pełny workflow koordynacji dla inwestycji wielofunkcyjnej o powierzchni 50 000 m² 
                z udziałem 8 branż projektowych. Podejście OpenBIM z wykorzystaniem IFC 
                dla interoperacyjności i automatycznym wykrywaniem kolizji.
              </p>
            </div>
          </div>
        </div>
        
        <div class="project-tile__tags">
          <a href="#koordynacja" class="project-tile__tag">#koordynacja</a>
          <a href="#openbim" class="project-tile__tag">#openbim</a>
          <a href="#ifc" class="project-tile__tag">#ifc</a>
        </div>
        
        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-navisworks.svg" alt="Navisworks"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-acc.svg" alt="ACC"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-solibri.svg" alt="Solibri"></span>
        </div>
      </div>
      
    </article>

    <!-- ========================================== -->
    <!-- PROJEKT 5: Framework ISO 19650 -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="standardy-bim, iso19650, bep, cyfrowa-dostawa">
      
      <div class="project-tile__slideshow">
        <div class="project-tile__slides">
          <div class="project-tile__slide project-tile__slide--active">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80" alt="Dokumentacja" loading="lazy">
          </div>
          <div class="project-tile__slide">
            <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=900&q=80" alt="Framework standardów" loading="lazy">
          </div>
        </div>
        
        <button class="project-tile__nav project-tile__nav--prev" aria-label="Poprzedni slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="project-tile__nav project-tile__nav--next" aria-label="Następny slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>

        <!-- Zoom/Enlarge button -->
        <button class="project-tile__zoom" aria-label="Zobacz obraz w pełnym rozmiarze">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </button>

        <div class="project-tile__dots"></div>
      </div>
      
      <div class="project-tile__content">
        <h2 class="project-tile__title">Framework BEP zgodny z ISO 19650</h2>
        
        <div class="project-tile__text-area">
          <div class="project-tile__text-slides">
            <div class="project-tile__text-slide project-tile__text-slide--active">
              <p class="project-tile__description">
                Kompletny framework Planu Realizacji BIM zgodny z wymaganiami ISO 19650. 
                Zawiera szablony dokumentów, definicje ról, kamienie milowe dostarczania 
                informacji i procedury zapewnienia jakości do wdrożenia w całej organizacji.
              </p>
            </div>
          </div>
        </div>
        
        <div class="project-tile__tags">
          <a href="#iso19650" class="project-tile__tag">#iso19650</a>
          <a href="#bep" class="project-tile__tag">#bep</a>
          <a href="#cyfrowa-dostawa" class="project-tile__tag">#cyfrowa-dostawa</a>
        </div>
        
        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-word.svg" alt="Word"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-excel.svg" alt="Excel"></span>
        </div>
      </div>
      
    </article>

    <!-- ========================================== -->
    <!-- PROJEKT 6: Wizualizacja 3D -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="oprogramowanie, wizualizacja, enscape, twinmotion">
      
      <div class="project-tile__slideshow">
        <div class="project-tile__slides">
          <div class="project-tile__slide project-tile__slide--active">
            <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=900&q=80" alt="Render architektoniczny" loading="lazy">
          </div>
          <div class="project-tile__slide">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80" alt="Wizualizacja wnętrza" loading="lazy">
          </div>
          <div class="project-tile__slide">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" alt="Widok zewnętrzny" loading="lazy">
          </div>
        </div>
        
        <button class="project-tile__nav project-tile__nav--prev" aria-label="Poprzedni slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="project-tile__nav project-tile__nav--next" aria-label="Następny slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>

        <!-- Zoom/Enlarge button -->
        <button class="project-tile__zoom" aria-label="Zobacz obraz w pełnym rozmiarze">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </button>

        <div class="project-tile__dots"></div>
      </div>
      
      <div class="project-tile__content">
        <h2 class="project-tile__title">Pipeline wizualizacji w czasie rzeczywistym</h2>
        
        <div class="project-tile__text-area">
          <div class="project-tile__text-slides">
            <div class="project-tile__text-slide project-tile__text-slide--active">
              <p class="project-tile__description">
                Usprawniony workflow wizualizacji łączący modele Revit bezpośrednio z silnikami 
                renderowania w czasie rzeczywistym. Umożliwia zespołom projektowym tworzenie 
                wysokiej jakości renderów i wirtualnych spacerów bez eksportowania do osobnego oprogramowania 3D.
              </p>
            </div>
          </div>
        </div>
        
        <div class="project-tile__tags">
          <a href="#wizualizacja" class="project-tile__tag">#wizualizacja</a>
          <a href="#enscape" class="project-tile__tag">#enscape</a>
          <a href="#twinmotion" class="project-tile__tag">#twinmotion</a>
        </div>
        
        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-enscape.svg" alt="Enscape"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-twinmotion.svg" alt="Twinmotion"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
        </div>
      </div>
      
    </article>

  </div><!-- /.exp-collection__list -->

</div><!-- /.exp-collection__container -->

<!-- Navigation Footer -->
<nav class="expertise__nav">
  <a href="{{ site.baseurl }}/{{ page.lang }}/home/" class="expertise__nav-link">
    <svg class="expertise__nav-icon expertise__nav-icon--before" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
    home
  </a>

  <button type="button" class="expertise__nav-link" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
    do góry
    <svg class="expertise__nav-icon expertise__nav-icon--after" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>

  <a href="{{ site.baseurl }}/{{ page.lang }}/about/" class="expertise__nav-link">
    o nas
    <svg class="expertise__nav-icon expertise__nav-icon--after" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </a>
</nav>

<!-- Embed slideshow script -->
<script src="{{ site.baseurl }}/assets/portfolio-tiles.js" defer></script>
