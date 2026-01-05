---
layout: default
title: Portfolio
lang: pl
ref: portfolio
permalink: /pl/portfolio/
excerpt: "Wybrane projekty i kompetencje z zakresu BIM, architektury, automatyzacji i cyfrowej realizacji."
---
{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.t[lang] %}

<div class="portfolio__container">

  <div class="portfolio__header">
    <h1>Portfolio</h1>
    <p>Wyselekcjonowane przykłady naszej pracy obejmujące wdrożenia BIM, projektowanie architektoniczne, analitykę danych i automatyzację procesów. Każda kategoria reprezentuje wieloletnie doświadczenie zdobyte w różnorodnych projektach.</p>
  </div>

  <!-- ========================================== -->
  <!-- SEKCJA 1: Architektura -->
  <!-- Układ: Obrazy LEWO (65%), Tekst PRAWO (35%) -->
  <!-- ========================================== -->
  <section class="portfolio-section" id="architecture">
    
    <!-- Stos kafelków (3 nachodzące obrazy) -->
    <div class="portfolio-section__media">
      <div class="portfolio-tiles-stack">
        
        <!-- Kafelek 1 -->
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80" alt="Wizualizacja architektoniczna" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-autocad.svg" alt="AutoCAD"></span>
            </div>
            <p class="portfolio-tile__description">Dokumentacja budynku zabytkowego z wykorzystaniem chmury punktów i modelowania parametrycznego.</p>
          </div>
        </div>
        
        <!-- Kafelek 2 -->
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80" alt="Projektowanie fasady" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-rhino.svg" alt="Rhino"></span>
            </div>
            <p class="portfolio-tile__description">Optymalizacja fasady łącząca projektowanie obliczeniowe z koordynacją BIM.</p>
          </div>
        </div>
        
        <!-- Kafelek 3 -->
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="Nowoczesna architektura" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-enscape.svg" alt="Enscape"></span>
            </div>
            <p class="portfolio-tile__description">Inwestycja wielofunkcyjna z analizą zrównoważonego rozwoju i wizualizacją w czasie rzeczywistym.</p>
          </div>
        </div>
        
      </div>
    </div>
    
    <!-- Treść tekstowa -->
    <div class="portfolio-section__content">
      <h2>{{ t.portfolio_categories.architecture }}</h2>
      <p>Od szkiców koncepcyjnych po dokumentację wykonawczą — nasza praca architektoniczna łączy wizję twórczą z precyzją techniczną. Specjalizujemy się w konserwacji zabytków, inżynierii fasad i optymalizacji projektowej.</p>
      <ul>
        <li>Dokumentacja i konserwacja zabytków</li>
        <li>Projektowanie i analiza fasad</li>
        <li>Integracja skaningu 3D</li>
      </ul>
      <div class="portfolio-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#design" class="portfolio-section__tag">#design</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#heritage" class="portfolio-section__tag">#heritage</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#scans" class="portfolio-section__tag">#scans</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#architecture" class="portfolio-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
  </section>

  <!-- ========================================== -->
  <!-- SEKCJA 2: Standaryzacja BIM -->
  <!-- Układ: Tekst LEWO (35%), Obrazy PRAWO (65%) - REVERSE -->
  <!-- ========================================== -->
  <section class="portfolio-section portfolio-section--reverse" id="bim-standards">
    
    <!-- Treść tekstowa -->
    <div class="portfolio-section__content">
      <h2>{{ t.portfolio_categories.bim_standards }}</h2>
      <p>Opracowywanie i wdrażanie standardów BIM, które faktycznie działają. Nasze podejście koncentruje się na praktycznej adopcji, przejrzystej dokumentacji i mierzalnych wynikach zamiast teoretycznych ram.</p>
      <ul>
        <li>Wdrożenia ISO 19650</li>
        <li>Plany Realizacji BIM (BEP)</li>
        <li>Standardy cyfrowej realizacji</li>
      </ul>
      <div class="portfolio-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#iso19650" class="portfolio-section__tag">#ISO19650</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#bep" class="portfolio-section__tag">#BEP</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#digitaldelivery" class="portfolio-section__tag">#digitaldelivery</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#bim-standards" class="portfolio-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
    <!-- Stos kafelków -->
    <div class="portfolio-section__media">
      <div class="portfolio-tiles-stack">
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Dokumentacja workflow" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-word.svg" alt="Word"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-excel.svg" alt="Excel"></span>
            </div>
            <p class="portfolio-tile__description">Kompletny framework BEP zgodny z wymaganiami ISO 19650.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80" alt="Szablony standardów" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-acc.svg" alt="ACC"></span>
            </div>
            <p class="portfolio-tile__description">Firmowy szablon Revit ze standaryzowanymi rodzinami, zestawieniami i szablonami widoków.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" alt="Sesja szkoleniowa" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-powerpoint.svg" alt="PowerPoint"></span>
            </div>
            <p class="portfolio-tile__description">Materiały szkoleniowe i strategia wdrożenia dla organizacji 200+ osób.</p>
          </div>
        </div>
        
      </div>
    </div>
    
  </section>

  <!-- ========================================== -->
  <!-- SEKCJA 3: Dane i raporty BI -->
  <!-- Układ: Obrazy LEWO (65%), Tekst PRAWO (35%) -->
  <!-- ========================================== -->
  <section class="portfolio-section" id="data-reporting">
    
    <div class="portfolio-section__media">
      <div class="portfolio-tiles-stack">
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Dashboard analityczny" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-powerbi.svg" alt="Power BI"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-excel.svg" alt="Excel"></span>
            </div>
            <p class="portfolio-tile__description">Dashboard projektowy w czasie rzeczywistym śledzący jakość modelu, problemy koordynacyjne i produktywność zespołu.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Wizualizacja danych" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-python.svg" alt="Python"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-powerbi.svg" alt="Power BI"></span>
            </div>
            <p class="portfolio-tile__description">Zautomatyzowany pipeline ekstrakcji danych z modeli Revit do platformy BI.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80" alt="Generowanie raportów" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-excel.svg" alt="Excel"></span>
            </div>
            <p class="portfolio-tile__description">Automatyczny system raportowania tygodniowego redukujący pracę manualną o 80%.</p>
          </div>
        </div>
        
      </div>
    </div>
    
    <div class="portfolio-section__content">
      <h2>{{ t.portfolio_categories.data_reporting }}</h2>
      <p>Przekształcanie danych BIM w użyteczne informacje. Tworzymy dashboardy, automatyzujemy raportowanie i budujemy pipeline'y danych łączące narzędzia projektowe z platformami BI.</p>
      <ul>
        <li>Dashboardy Power BI</li>
        <li>Automatyczne raportowanie</li>
        <li>Ekstrakcja danych i ETL</li>
      </ul>
      <div class="portfolio-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#powerbi" class="portfolio-section__tag">#powerbi</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#dashboards" class="portfolio-section__tag">#dashboards</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#analytics" class="portfolio-section__tag">#analytics</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#data-reporting" class="portfolio-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
  </section>

  <!-- ========================================== -->
  <!-- SEKCJA 4: Automatyzacja i programowanie -->
  <!-- Układ: Tekst LEWO (35%), Obrazy PRAWO (65%) - REVERSE -->
  <!-- ========================================== -->
  <section class="portfolio-section portfolio-section--reverse" id="automation">
    
    <div class="portfolio-section__content">
      <h2>{{ t.portfolio_categories.automation }}</h2>
      <p>Dedykowane narzędzia, skrypty i dodatki eliminujące powtarzalne zadania i egzekwujące standardy jakości. Od grafów Dynamo po pełne pluginy Revit — budujemy rozwiązania dopasowane do Twojego workflow.</p>
      <ul>
        <li>Skrypty i pakiety Dynamo</li>
        <li>Dodatki Revit API</li>
        <li>Automatyzacja Python</li>
      </ul>
      <div class="portfolio-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#dynamo" class="portfolio-section__tag">#dynamo</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#revitapi" class="portfolio-section__tag">#revitAPI</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#python" class="portfolio-section__tag">#python</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#automation" class="portfolio-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
    <div class="portfolio-section__media">
      <div class="portfolio-tiles-stack">
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" alt="Programowanie" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-python.svg" alt="Python"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-vscode.svg" alt="VS Code"></span>
            </div>
            <p class="portfolio-tile__description">Dedykowany dodatek Revit do automatycznego audytu modeli i kontroli jakości.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=800&q=80" alt="Skrypty Dynamo" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-dynamo.svg" alt="Dynamo"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
            </div>
            <p class="portfolio-tile__description">Pakiet Dynamo do wsadowego zarządzania parametrami i aktualizacji rodzin.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80" alt="Workflow automatyzacji" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-csharp.svg" alt="C#"></span>
            </div>
            <p class="portfolio-tile__description">Automatyzacja eksportu zestawień redukująca czas dokumentacji o 60%.</p>
          </div>
        </div>
        
      </div>
    </div>
    
  </section>

  <!-- ========================================== -->
  <!-- SEKCJA 5: Koordynacja BIM i OpenBIM -->
  <!-- Układ: Obrazy LEWO (65%), Tekst PRAWO (35%) -->
  <!-- ========================================== -->
  <section class="portfolio-section" id="coordination">
    
    <div class="portfolio-section__media">
      <div class="portfolio-tiles-stack">
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Koordynacja budowy" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-navisworks.svg" alt="Navisworks"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-bim360.svg" alt="BIM 360"></span>
            </div>
            <p class="portfolio-tile__description">Koordynacja międzybranżowa dla inwestycji wielofunkcyjnej 50 000 m².</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80" alt="Workflow IFC" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-ifc.svg" alt="IFC"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-solibri.svg" alt="Solibri"></span>
            </div>
            <p class="portfolio-tile__description">Wdrożenie workflow OpenBIM z walidacją modeli opartą o IFC.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&q=80" alt="Detekcja kolizji" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-navisworks.svg" alt="Navisworks"></span>
            </div>
            <p class="portfolio-tile__description">Zautomatyzowany workflow detekcji kolizji redukujący spotkania koordynacyjne o 40%.</p>
          </div>
        </div>
        
      </div>
    </div>
    
    <div class="portfolio-section__content">
      <h2>{{ t.portfolio_categories.coordination }}</h2>
      <p>Skuteczna koordynacja wykracza poza detekcję kolizji. Wdrażamy workflow zapobiegające problemom, zanim one wystąpią, i zapewniające płynną współpracę międzybranżową z wykorzystaniem standardów OpenBIM.</p>
      <ul>
        <li>Workflow zarządzania kolizjami</li>
        <li>Optymalizacja IFC</li>
        <li>Wdrożenia OpenBIM</li>
      </ul>
      <div class="portfolio-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#clashmanagement" class="portfolio-section__tag">#clashmanagement</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#ifc" class="portfolio-section__tag">#IFC</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#openbim" class="portfolio-section__tag">#OpenBIM</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#coordination" class="portfolio-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
  </section>

  <!-- ========================================== -->
  <!-- SEKCJA 6: Oprogramowanie i modelowanie 3D -->
  <!-- Układ: Tekst LEWO (35%), Obrazy PRAWO (65%) - REVERSE -->
  <!-- ========================================== -->
  <section class="portfolio-section portfolio-section--reverse" id="software">
    
    <div class="portfolio-section__content">
      <h2>{{ t.portfolio_categories.software }}</h2>
      <p>Ekspertyza obejmująca pełne spektrum narzędzi BIM i modelowania 3D. Pomagamy zespołom w wyborze, wdrożeniu i optymalizacji workflow programowych dla maksymalnej produktywności i interoperacyjności.</p>
      <ul>
        <li>Wdrożenia oprogramowania</li>
        <li>Tworzenie szablonów</li>
        <li>Optymalizacja workflow</li>
      </ul>
      <div class="portfolio-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#revit" class="portfolio-section__tag">#revit</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#archicad" class="portfolio-section__tag">#archicad</a>
        <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#rhino" class="portfolio-section__tag">#rhino</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/portfolio-collection/#software" class="portfolio-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
    <div class="portfolio-section__media">
      <div class="portfolio-tiles-stack">
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Modelowanie 3D" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-rhino.svg" alt="Rhino"></span>
            </div>
            <p class="portfolio-tile__description">Modelowanie złożonej geometrii łączące elastyczność Rhino z mocą dokumentacyjną Revit.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80" alt="Szkolenie software" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
            </div>
            <p class="portfolio-tile__description">Firmowe wdrożenie Revit z dedykowanymi szablonami i programem szkoleniowym.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80" alt="Wizualizacja" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-enscape.svg" alt="Enscape"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-twinmotion.svg" alt="Twinmotion"></span>
            </div>
            <p class="portfolio-tile__description">Pipeline wizualizacji w czasie rzeczywistym dla prezentacji klienckich i przeglądów projektowych.</p>
          </div>
        </div>
        
      </div>
    </div>
    
  </section>

</div>

<!-- Navigation Footer -->
<nav class="portfolio__nav">
  <a href="{{ site.baseurl }}/{{ page.lang }}/portfolio-collection/" class="portfolio__nav-link portfolio__nav-link--collection">
    <svg class="portfolio__nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 5H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
      <path d="M16 5h4v4"></path>
      <path d="M14 7l6-6"></path>
    </svg>
    Pełna kolekcja
  </a>
  
  <button type="button" class="portfolio__nav-link portfolio__nav-link--top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
    Na górę
    <svg class="portfolio__nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>
</nav>
