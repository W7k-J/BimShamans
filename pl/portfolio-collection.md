---
layout: default
title: Wszystkie projekty
lang: pl
ref: portfolio-collection
permalink: /pl/portfolio-collection/
excerpt: "Pełna kolekcja projektów portfolio. Filtruj według kategorii lub technologii."
---
{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.t[lang] %}

<div class="portfolio-collection__container">

  <!-- Link powrotu do Portfolio -->
  <a href="{{ site.baseurl }}/{{ lang }}/portfolio/" class="portfolio__back-link">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
    {{ t.back_to_portfolio }}
  </a>

  <h1>{{ t.portfolio_collection }}</h1>

  <!-- Filtry tagów (wypełniane przez JavaScript) -->
  <div class="portfolio-collection__tags" id="portfolio-filters">
    <!-- Przyciski filtrów generowane przez portfolio-tiles.js -->
  </div>

  <!-- Siatka projektów -->
  <div class="portfolio-collection__grid">

    <!-- ========================================== -->
    <!-- PROJEKTY ARCHITEKTONICZNE -->
    <!-- ========================================== -->
    
    <!-- Projekt: Dokumentacja zabytkowa -->
    <div class="portfolio-collection-tile" data-tags="architecture, design, heritage, scans, revit">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&q=80" alt="Dokumentacja budynku zabytkowego" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Architektura</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-autocad.svg" alt="AutoCAD"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-recap.svg" alt="ReCap"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Dokumentacja budynku zabytkowego</h3>
        <p class="portfolio-collection-tile__description">Integracja chmury punktów i modelowanie parametryczne dla konserwacji zabytków.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#heritage</span>
          <span class="portfolio-collection-tile__tag">#scans</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Optymalizacja fasady -->
    <div class="portfolio-collection-tile" data-tags="architecture, design, revit, rhino">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80" alt="Optymalizacja fasady" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Architektura</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-rhino.svg" alt="Rhino"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Optymalizacja fasady</h3>
        <p class="portfolio-collection-tile__description">Projektowanie obliczeniowe w połączeniu z koordynacją BIM dla złożonych systemów elewacyjnych.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#design</span>
          <span class="portfolio-collection-tile__tag">#rhino</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Inwestycja wielofunkcyjna -->
    <div class="portfolio-collection-tile" data-tags="architecture, design, revit, visualization">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" alt="Inwestycja wielofunkcyjna" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Architektura</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-enscape.svg" alt="Enscape"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Inwestycja wielofunkcyjna</h3>
        <p class="portfolio-collection-tile__description">Zintegrowana analiza zrównoważonego rozwoju z workflow wizualizacji w czasie rzeczywistym.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#design</span>
          <span class="portfolio-collection-tile__tag">#revit</span>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- PROJEKTY STANDARYZACJI BIM -->
    <!-- ========================================== -->

    <!-- Projekt: ISO 19650 BEP -->
    <div class="portfolio-collection-tile" data-tags="bim-standards, iso19650, bep, digitaldelivery">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" alt="Plan Realizacji BIM" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Standaryzacja BIM</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-word.svg" alt="Word"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-excel.svg" alt="Excel"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Framework BEP ISO 19650</h3>
        <p class="portfolio-collection-tile__description">Kompletny Plan Realizacji BIM zgodny z wymaganiami ISO 19650.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#ISO19650</span>
          <span class="portfolio-collection-tile__tag">#BEP</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Szablon firmowy -->
    <div class="portfolio-collection-tile" data-tags="bim-standards, revit, digitaldelivery">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80" alt="Szablon Revit" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Standaryzacja BIM</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-acc.svg" alt="ACC"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Firmowy szablon Revit</h3>
        <p class="portfolio-collection-tile__description">Standaryzowane rodziny, zestawienia i szablony widoków do użytku organizacyjnego.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#revit</span>
          <span class="portfolio-collection-tile__tag">#digitaldelivery</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Program szkoleniowy -->
    <div class="portfolio-collection-tile" data-tags="bim-standards, digitaldelivery">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" alt="Materiały szkoleniowe" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Standaryzacja BIM</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-powerpoint.svg" alt="PowerPoint"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Program wdrożenia BIM</h3>
        <p class="portfolio-collection-tile__description">Materiały szkoleniowe i strategia adopcji dla organizacji 200+ osób.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#digitaldelivery</span>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- PROJEKTY DANE I RAPORTOWANIE -->
    <!-- ========================================== -->

    <!-- Projekt: Dashboard Power BI -->
    <div class="portfolio-collection-tile" data-tags="data-reporting, powerbi, dashboards, analytics">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Dashboard Power BI" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Dane i raporty</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-powerbi.svg" alt="Power BI"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-excel.svg" alt="Excel"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Dashboard jakości projektu</h3>
        <p class="portfolio-collection-tile__description">Śledzenie w czasie rzeczywistym jakości modelu, problemów koordynacyjnych i produktywności zespołu.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#powerbi</span>
          <span class="portfolio-collection-tile__tag">#dashboards</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Pipeline danych -->
    <div class="portfolio-collection-tile" data-tags="data-reporting, python, powerbi, analytics">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Pipeline danych" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Dane i raporty</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-python.svg" alt="Python"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-powerbi.svg" alt="Power BI"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Automatyczny pipeline danych</h3>
        <p class="portfolio-collection-tile__description">Workflow ETL ekstrahujący dane z modeli Revit do platformy BI.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#python</span>
          <span class="portfolio-collection-tile__tag">#analytics</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Automatyczne raportowanie -->
    <div class="portfolio-collection-tile" data-tags="data-reporting, analytics">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80" alt="Automatyczne raporty" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Dane i raporty</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-excel.svg" alt="Excel"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">System raportowania tygodniowego</h3>
        <p class="portfolio-collection-tile__description">Automatyczne raportowanie redukujące pracę manualną o 80%.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#analytics</span>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- PROJEKTY AUTOMATYZACJI -->
    <!-- ========================================== -->

    <!-- Projekt: Audytor modeli -->
    <div class="portfolio-collection-tile" data-tags="automation, python, revitapi">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" alt="Programowanie" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Automatyzacja</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-python.svg" alt="Python"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-vscode.svg" alt="VS Code"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Audytor modeli Revit</h3>
        <p class="portfolio-collection-tile__description">Dedykowany dodatek do automatycznego audytu modeli i kontroli jakości.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#python</span>
          <span class="portfolio-collection-tile__tag">#revitAPI</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Pakiet Dynamo -->
    <div class="portfolio-collection-tile" data-tags="automation, dynamo, revit">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=600&q=80" alt="Skrypty Dynamo" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Automatyzacja</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-dynamo.svg" alt="Dynamo"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Pakiet zarządzania parametrami</h3>
        <p class="portfolio-collection-tile__description">Pakiet Dynamo do wsadowych aktualizacji parametrów i zarządzania rodzinami.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#dynamo</span>
          <span class="portfolio-collection-tile__tag">#revit</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Eksport zestawień -->
    <div class="portfolio-collection-tile" data-tags="automation, revitapi, csharp">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80" alt="Workflow automatyzacji" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Automatyzacja</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-csharp.svg" alt="C#"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Automatyzacja eksportu zestawień</h3>
        <p class="portfolio-collection-tile__description">Automatyczna dokumentacja redukująca czas eksportu o 60%.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#revitAPI</span>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- PROJEKTY KOORDYNACJI -->
    <!-- ========================================== -->

    <!-- Projekt: Koordynacja międzybranżowa -->
    <div class="portfolio-collection-tile" data-tags="coordination, clashmanagement, navisworks">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" alt="Koordynacja budowy" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Koordynacja</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-navisworks.svg" alt="Navisworks"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-bim360.svg" alt="BIM 360"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Koordynacja międzybranżowa</h3>
        <p class="portfolio-collection-tile__description">Workflow koordynacyjny dla inwestycji wielofunkcyjnej 50 000 m².</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#clashmanagement</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Workflow OpenBIM -->
    <div class="portfolio-collection-tile" data-tags="coordination, ifc, openbim, solibri">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" alt="Workflow IFC" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Koordynacja</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-ifc.svg" alt="IFC"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-solibri.svg" alt="Solibri"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Wdrożenie OpenBIM</h3>
        <p class="portfolio-collection-tile__description">Workflow walidacji modeli oparty o IFC.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#IFC</span>
          <span class="portfolio-collection-tile__tag">#OpenBIM</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Detekcja kolizji -->
    <div class="portfolio-collection-tile" data-tags="coordination, clashmanagement, navisworks">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=600&q=80" alt="Detekcja kolizji" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Koordynacja</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-navisworks.svg" alt="Navisworks"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Automatyczna detekcja kolizji</h3>
        <p class="portfolio-collection-tile__description">Workflow redukujący spotkania koordynacyjne o 40%.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#clashmanagement</span>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- PROJEKTY OPROGRAMOWANIA -->
    <!-- ========================================== -->

    <!-- Projekt: Złożona geometria -->
    <div class="portfolio-collection-tile" data-tags="software, revit, rhino">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Modelowanie 3D" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Oprogramowanie</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-rhino.svg" alt="Rhino"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Workflow złożonej geometrii</h3>
        <p class="portfolio-collection-tile__description">Elastyczność Rhino w połączeniu z mocą dokumentacyjną Revit.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#revit</span>
          <span class="portfolio-collection-tile__tag">#rhino</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Wdrożenie Revit -->
    <div class="portfolio-collection-tile" data-tags="software, revit">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80" alt="Szkolenie software" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Oprogramowanie</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Firmowe wdrożenie Revit</h3>
        <p class="portfolio-collection-tile__description">Szablony i program szkoleniowy dla adopcji organizacyjnej.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#revit</span>
        </div>
      </div>
    </div>

    <!-- Projekt: Pipeline wizualizacji -->
    <div class="portfolio-collection-tile" data-tags="software, visualization, enscape">
      <div class="portfolio-collection-tile__image">
        <img src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80" alt="Wizualizacja" loading="lazy">
      </div>
      <span class="portfolio-collection-tile__category">Oprogramowanie</span>
      <div class="portfolio-collection-tile__overlay">
        <div class="portfolio-collection-tile__tools">
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-enscape.svg" alt="Enscape"></span>
          <span class="portfolio-collection-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-twinmotion.svg" alt="Twinmotion"></span>
        </div>
        <h3 class="portfolio-collection-tile__title">Pipeline wizualizacji w czasie rzeczywistym</h3>
        <p class="portfolio-collection-tile__description">Workflow prezentacji klienckich i przeglądów projektowych.</p>
        <div class="portfolio-collection-tile__tags">
          <span class="portfolio-collection-tile__tag">#visualization</span>
        </div>
      </div>
    </div>

  </div>

</div>
