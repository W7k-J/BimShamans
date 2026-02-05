---
layout: default
title: Doświadczenie
lang: pl
ref: portfolio
permalink: /pl/expertise/
excerpt: "Wybrane projekty i kompetencje z zakresu BIM, architektury, automatyzacji i cyfrowej realizacji."
---
{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.t[lang] %}

<div class="expertise__container">

  <div class="expertise__header">
    <!--<h1>Portfolio</h1>-->
    <!--<p>Wyselekcjonowane przykłady naszej pracy obejmujące wdrożenia BIM, projektowanie architektoniczne, analitykę danych i automatyzację procesów. Każda kategoria reprezentuje wieloletnie doświadczenie zdobyte w różnorodnych projektach.</p>-->
  </div>

  <!-- ========================================== -->
  <!-- SEKCJA 1: Architektura -->
  <!-- Układ: Obrazy LEWO (65%), Tekst PRAWO (35%) -->
  <!-- ========================================== -->
  <section class="expertise-section" id="architecture">
    
    <!-- Stos kafelków (3 nachodzące obrazy) -->
    <div class="expertise-section__media">
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
    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.architecture }}</h2>
      <p>Od szkiców koncepcyjnych po dokumentację wykonawczą — nasza praca architektoniczna łączy wizję twórczą z precyzją techniczną. Specjalizujemy się w konserwacji zabytków, inżynierii fasad i optymalizacji projektowej.</p>
      <ul>
        <li>Dokumentacja i konserwacja zabytków</li>
        <li>Projektowanie i analiza fasad</li>
        <li>Integracja skaningu 3D</li>
      </ul>
      <div class="expertise-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#design" class="expertise-section__tag">#design</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#heritage" class="expertise-section__tag">#heritage</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#scans" class="expertise-section__tag">#scans</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#architecture" class="expertise-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
  </section>

  <!-- ========================================== -->
  <!-- SEKCJA 2: Standaryzacja BIM -->
  <!-- Układ: Tekst LEWO (35%), Obrazy PRAWO (65%) - REVERSE -->
  <!-- ========================================== -->
  <section class="expertise-section expertise-section--reverse" id="bim-standards">
    
    <!-- Treść tekstowa -->
    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.bim_standards }}</h2>
      <p>Opracowywanie i wdrażanie standardów BIM, które faktycznie działają. Nasze podejście koncentruje się na praktycznej adopcji, przejrzystej dokumentacji i mierzalnych wynikach zamiast teoretycznych ram.</p>
      <ul>
        <li>Wdrożenia ISO 19650</li>
        <li>Plany Realizacji BIM (BEP)</li>
        <li>Standardy cyfrowej realizacji</li>
      </ul>
      <div class="expertise-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#iso19650" class="expertise-section__tag">#ISO19650</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#bep" class="expertise-section__tag">#BEP</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#digitaldelivery" class="expertise-section__tag">#digitaldelivery</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#bim-standards" class="expertise-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
    <!-- Stos kafelków -->
    <div class="expertise-section__media">
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
  <section class="expertise-section" id="data-reporting">

    <div class="expertise-section__media">
      <div class="portfolio-tiles-stack">

        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_TerraformingMarsDashboard_01.png" alt="Terraforming Mars - Dashboard" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powerbi-yellow_short.png" alt="Power BI"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powershell_short.webp" alt="PowerShell"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_python_short.png" alt="Python"></span>
            </div>
            <p class="portfolio-tile__description">Terraforming Mars to zdecydowanie moja ulubiona planszówka. Kiedy odkryłem, że istnieje plik .json z logiem rozgrywki, nie mogłem się oprzeć, aby sprawdzić, która strategia przyniosła najlepsze wyniki. Jeden plik, powtarzalna struktura danych i pytanie: "jak pobić swój własny rekord".</p>
          </div>
        </div>

        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_HikeTracker_02.png" alt="HikeTracker - Analityka" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powerbi-yellow_short.png" alt="Power BI"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_excel_short.png" alt="Excel"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powershell_short.webp" alt="PowerShell"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_qgis_short.png" alt="QGIS"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_microsoftpowerautomate_short.png" alt="Power Automate"></span>
            </div>
            <p class="portfolio-tile__description">Ślady GPX, wiele źródeł danych i potrzeba zwizualuziwania, jak wyglądały górskie wypady. Kto nie lubi śledzić własnych aktywności w czasie i... przestrzeni? Połączenie interakcji map i danych z ponad 90% optymalizacją plików GPX było sporym wyzwaniem.</p>
          </div>
        </div>

        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2024_PS_3DBIFlats_01.png" alt="3D BI Flats - Model danych" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_autodesk-revit_short.png" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powerbi-yellow_short.png" alt="Power BI"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_speckle_short.png" alt="Speckle"></span>
            </div>
            <p class="portfolio-tile__description">BI napędzane modelem 3D dla lokali mieszkalnych na etapie koncepcji przykuwa wzrok i ułatwia analizę wymagań. Koniec z tabelami przestawnymi na jednej połowie ekranu i rysunkami na drugiej. Jeden dashboard, interakcja i wykorzystanie już i tak wyprodukowanych danych.
            </p>
          </div>
        </div>

        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_IFCMMICheck_00.png" alt="IFC MMI Check - QA" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powerbi-yellow_short.png" alt="Power BI"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_ifc_short.png" alt="IFC Format"></span>
              <span class="portfolio-tile__tool-icon tool-icon--themed"><img src="{{ site.baseurl }}/images/logos/software/logo_autodesk-dataexchange_short.png" alt="Autodesk Data Exchange"></span>
              <span class="portfolio-tile__tool-icon tool-icon--themed"><img src="{{ site.baseurl }}/images/logos/software/logo_autodesk-constructioncloud_short.png" alt="Autodesk Construction Cloud"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_microsoftsharepoint_short.svg" alt="SharePoint"></span>
            </div>
            <p class="portfolio-tile__description">Weryfikacja i raportowanie dojrzałości (MMI) obiektów IFC to przykład skoku w dane, by wyłowić tę jedną, konkretną informację i zaprezentować na stronie głównej CDE lub SharePointa. Bez komplikowania, wykorzystując potencjał Data Exchange dla plików IFC i otwarty format.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.data_reporting }}</h2>
      <p>Wnioski są podstawowym celem zagłębiania się w dane. Prezentacja jest drogą do nich. Dziś zbieramy dane cały czas - budżety finansowe, raporty z aktywności sportowych, notatki z wędrówek, logi gier, metryki PV i wiele więcej! <br><br> Oczywiście, głównym celem naszej pracy jest dostarczanie decyzyjnego wkładu poprzez dane dla branży AEC, ale jeśli plac zabaw oferuje nieskończone pokłady piasku i daje całkiem użyteczne narzędzia, kształt budowanych zamków zależy tylko od naszej wyobraźni.</p>
      <ul>
        <li>Diagnostyczne dashboardy (nie dekoracyjne)</li>
        <li>Pipeline'y ekstrakcji i transformacji danych</li>
        <li>Intuicyjny interfejs</li>
        <li>Wnioski połączone z pytaniami</li>
      </ul>
      <div class="expertise-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#data" class="expertise-section__tag">#data</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#powerbi" class="expertise-section__tag">#powerbi</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#dashboards" class="expertise-section__tag">#dashboards</a>

      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#data-reporting" class="expertise-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>

  </section>

  <!-- ========================================== -->
  <!-- SEKCJA 4: Automatyzacja i programowanie -->
  <!-- Układ: Tekst LEWO (35%), Obrazy PRAWO (65%) - REVERSE -->
  <!-- ========================================== -->
  <section class="expertise-section expertise-section--reverse" id="automation">
    
    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.automation }}</h2>
      <p>Dedykowane narzędzia, skrypty i dodatki eliminujące powtarzalne zadania i egzekwujące standardy jakości. Od grafów Dynamo po pełne pluginy Revit — budujemy rozwiązania dopasowane do Twojego workflow.</p>
      <ul>
        <li>Skrypty i pakiety Dynamo</li>
        <li>Dodatki Revit API</li>
        <li>Automatyzacja Python</li>
      </ul>
      <div class="expertise-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#dynamo" class="expertise-section__tag">#dynamo</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#revitapi" class="expertise-section__tag">#revitAPI</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#python" class="expertise-section__tag">#python</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#automation" class="expertise-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
    <div class="expertise-section__media">
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
  <section class="expertise-section" id="coordination">
    
    <div class="expertise-section__media">
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
    
    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.coordination }}</h2>
      <p>Skuteczna koordynacja wykracza poza detekcję kolizji. Wdrażamy workflow zapobiegające problemom, zanim one wystąpią, i zapewniające płynną współpracę międzybranżową z wykorzystaniem standardów OpenBIM.</p>
      <ul>
        <li>Workflow zarządzania kolizjami</li>
        <li>Optymalizacja IFC</li>
        <li>Wdrożenia OpenBIM</li>
      </ul>
      <div class="expertise-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#clashmanagement" class="expertise-section__tag">#clashmanagement</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#ifc" class="expertise-section__tag">#IFC</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#openbim" class="expertise-section__tag">#OpenBIM</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#coordination" class="expertise-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
  </section>

  <!-- ========================================== -->
  <!-- SEKCJA 6: Oprogramowanie i modelowanie 3D -->
  <!-- Układ: Tekst LEWO (35%), Obrazy PRAWO (65%) - REVERSE -->
  <!-- ========================================== -->
  <section class="expertise-section expertise-section--reverse" id="software">
    
    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.software }}</h2>
      <p>Ekspertyza obejmująca pełne spektrum narzędzi BIM i modelowania 3D. Pomagamy zespołom w wyborze, wdrożeniu i optymalizacji workflow programowych dla maksymalnej produktywności i interoperacyjności.</p>
      <ul>
        <li>Wdrożenia oprogramowania</li>
        <li>Tworzenie szablonów</li>
        <li>Optymalizacja workflow</li>
      </ul>
      <div class="expertise-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#revit" class="expertise-section__tag">#revit</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#archicad" class="expertise-section__tag">#archicad</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#rhino" class="expertise-section__tag">#rhino</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#software" class="expertise-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
    <div class="expertise-section__media">
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
<nav class="expertise__nav">
  <a href="{{ site.baseurl }}/{{ page.lang }}/home/" class="expertise__nav-link">
    <svg class="expertise__nav-icon expertise__nav-icon--before" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
    strona główna
  </a>

  <a href="{{ site.baseurl }}/{{ page.lang }}/expertise-collection/" class="expertise__nav-link">
    <svg class="expertise__nav-icon expertise__nav-icon--before" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="12 4 20 4 20 12"></polyline>
      <polyline points="4 12 4 20 12 20"></polyline>
    </svg>
    pełne doświadczenie
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

  <!-- Notice about logos -->
  <div class="exp-collection__notice">
    <blockquote class="notice-logos">
      <p>
        <b>Informacja:</b>
        Wszystkie logo oprogramowania, nazwy handlowe, znaki towarowe i oznaczenia formatów wymiany danych prezentowane na tej stronie są własnością ich odpowiednich właścicieli. Są używane wyłącznie w celach informacyjnych i referencyjnych, aby wskazać narzędzia wykorzystywane w prezentowanych działaniach zawodowych. Ich użycie nie stanowi oficjalnego wykorzystania materiałów producentów ani nie sugeruje żadnej afiliacji, sponsoringu, partnerstwa czy poparcia ze strony odpowiednich właścicieli znaków towarowych.
      </p>
    </blockquote>
  </div>
