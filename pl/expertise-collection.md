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

  <!-- Panel sterowania: Wyszukiwanie, kierunek i sortowanie -->
  <div class="blog__controls exp-collection__controls">
    <div class="searchbar searchbar--portfolio" data-searchbar="portfolio">
      <form class="searchbar__form" role="search" aria-label="Szukaj projektów">
        <input
          type="search"
          class="searchbar__input"
          placeholder="szukaj projektów..."
          aria-label="Szukaj projektów"
        >
        <button
          type="button"
          class="searchbar__clear"
          title="Wyczyść wyszukiwanie"
          aria-label="Wyczyść wyszukiwanie"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <button
          type="button"
          class="searchbar__icon"
          title="Przełącz wyszukiwanie"
          aria-label="Przełącz wyszukiwanie"
          aria-expanded="false"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <polyline points="21 21 16.65 16.65"></polyline>
          </svg>
        </button>
      </form>
    </div>

    <div class="blog__direction-toggle" role="group" aria-label="Kierunek sortowania">
      <button
        class="blog__direction-btn blog__Direction-btn--desc"
        data-direction="desc"
        title="Sortuj malejąco (Z-A)"
        aria-pressed="true"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <button
        class="blog__direction-btn blog__direction-btn--asc"
        data-direction="asc"
        title="Sortuj rosnąco (A-Z)"
        aria-pressed="false"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>

    <div class="blog__sort-wrapper">
      <button
        class="blog__sort-button"
        id="portfolio-sort-button"
        role="button"
        onclick="return false"
        aria-label="Opcje sortowania"
      >
        sortuj wg:<span id="portfolio-sort-label">tytuł</span>
      </button>
      <div class="blog__sort-menu">
        <button class="blog__sort-option" data-sort="date">data</button>
        <button class="blog__sort-option" data-sort="title">tytuł</button>
      </div>
    </div>

  </div>

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
    <article class="project-tile" data-tags="architecture, heritage, scans, revit" data-date="2025/03/14">

      <!-- Slideshow (60%) -->
      <div class="project-tile__slideshow">
        <div class="project-tile__slides">
          <!-- Slajd 1 -->
          <div class="project-tile__slide project-tile__slide--active">
            <img src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=900&q=80" alt="Budynek zabytkowy - zewnątrz" loading="lazy">
          </div>
          <!-- Slajd 2 -->
          <div class="project-tile__slide">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" alt="Skan chmury punktów" loading="lazy">
          </div>
          <!-- Slajd 3 -->
          <div class="project-tile__slide" data-text-sync="1">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80" alt="Widok modelu 3D" loading="lazy">
          </div>
        </div>

        <!-- Strzałki nawigacji -->
        <button class="project-tile__nav project-tile__nav--prev" aria-label="Poprzedni slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="project-tile__nav project-tile__nav--next" aria-label="Następny slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>

        <!-- Przycisk powiększenia -->
        <button class="project-tile__zoom" aria-label="Zobacz obraz w pełnym rozmiarze">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </button>

        <!-- Wskaźnik kropek -->
        <div class="project-tile__dots"></div>
      </div>

      <!-- Treść tekstowa (40%) -->
      <div class="project-tile__content">
        <h2 class="project-tile__title">Dokumentacja budynku zabytkowego</h2>
        <!-- data przechowywana w atrybucie data-date na elemencie article -->

        <div class="project-tile__text-area">
          <div class="project-tile__text-slides">
            <!-- Slajd tekstowy 1 (domyślny - wyświetla się dla slajdów 1 i 2) -->
            <div class="project-tile__text-slide project-tile__text-slide--active">
              <p class="project-tile__description">
                Kompleksowa dokumentacja XIX-wiecznego budynku zabytkowego z wykorzystaniem naziemnego
                skanowania laserowego i fotogrametrii dronowej. Dane chmury punktów zostały przetworzone
                i przekonwertowane do szczegółowego modelu Revit na potrzeby planowania konserwacji i analizy konstrukcyjnej.
              </p>
            </div>
            <!-- Slajd tekstowy 2 (wyświetla się dla slajdu 3 poprzez data-text-sync) -->
            <div class="project-tile__text-slide">
              <p class="project-tile__description">
                Finalny model BIM zawiera dokładną geometrię, specyfikacje materiałów i dane dotyczące
                stanu technicznego. Umożliwia to zespołowi konserwatorskiemu planowanie interwencji
                przy zachowaniu autentyczności historycznej.
              </p>
            </div>
          </div>
        </div>

        <div class="project-tile__fade"></div>

        <div class="project-tile__tags">
          <a href="#heritage" class="project-tile__tag">heritage</a>
          <a href="#scans" class="project-tile__tag">scans</a>
          <a href="#revit" class="project-tile__tag">revit</a>
        </div>

        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-recap.svg" alt="ReCap"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-autocad.svg" alt="AutoCAD"></span>
        </div>
      </div>

    </article>

    <!-- ========================================== -->
    <!-- PROJEKT: Data: Terraforming Mars -->
    <!-- Parzysty = Tekst LEWO (40%), Zdjęcie PRAWO (60%) -->
    <!-- Autor kafelka: Piotr -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="data, powerbi, dashboards, analytics" data-date="2025/12/15">

      <!-- Slideshow (60%) -->
      <div class="project-tile__slideshow">
        <div class="project-tile__slides">
          <!-- Slajd 1 -->
          <div class="project-tile__slide project-tile__slide--active">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_TerraformingMarsDashboard_01.png" alt="Terraforming Mars dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 2 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_TerraformingMarsDashboard_02.png" alt="Terraforming Mars dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 3 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_TerraformingMarsDashboard_04.png" alt="Terraforming Mars dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 4 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_TerraformingMarsDashboard_05.png" alt="Terraforming Mars dashboard - przegląd" loading="lazy">
          </div>
        </div>
        <button class="project-tile__nav project-tile__nav--prev" aria-label="Poprzedni slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="project-tile__nav project-tile__nav--next" aria-label="Następny slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>

        <!-- Przycisk powiększenia -->
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
        <h2 class="project-tile__title">Analiza strategii gry planszowej</h2>

        <div class="project-tile__text-area">
          <div class="project-tile__text-slides">
            <div class="project-tile__text-slide project-tile__text-slide--active">
              <p class="project-tile__description">
                Terraforming Mars to zdecydowanie moja ulubiona planszówka. Kiedy odkryłem, że istnieje plik .json z logiem rozgrywki, nie mogłem się oprzeć, aby sprawdzić, która strategia przyniosła najlepsze wyniki. Jeden plik, powtarzalna struktura danych i pytanie: "jak pobić swój własny rekord". <br><br> Ciekawostka dotycząca doboru kolorów korporacji na dashboardzie - nie są one losowe ani wybrane ręcznie. Z pomocą Pythona i GPT powstał skrypt do rozpoznawania kolorów RGB z logo. Analizuje główną część pliku .png logo, ekstrahuje piksele RGB, określa dominującą chromatykę i oblicza najlepiej pasujący kolor, eliminując szum i nieistotne tło. <br><br> Ostatni szlif - interfejs w stylu aplikacji z paskiem menu, wyszukiwarką i przyciskami do nawigacji między dashboardami.<br><br>
              </p>
            </div>
          </div>
        </div>

        <div class="project-tile__fade"></div>

        <div class="project-tile__tags">
          <a href="#powerbi" class="project-tile__tag">#data</a>
          <a href="#dashboards" class="project-tile__tag">#powerbi</a>
          <a href="#analytics" class="project-tile__tag">#dashboards</a>
        </div>

        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powerbi-yellow_short.png" alt="Power BI"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powershell_short.webp" alt="PowerShell"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_python_short.png" alt="Python"></span>
        </div>
      </div>

    </article>

    <!-- ========================================== -->
    <!-- PROJEKT: Data: Hike Tracker -->
    <!-- Parzysty = Tekst LEWO (40%), Zdjęcie PRAWO (60%) -->
    <!-- Autor kafelka: Piotr -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="data, powerbi, dashboards, analytics" data-date="2025/11/15">

      <!-- Slideshow (60%) -->
      <div class="project-tile__slideshow">
        <div class="project-tile__slides">
          <!-- Slajd 1 -->
          <div class="project-tile__slide project-tile__slide--active">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_HikeTracker_01.png" alt="Hike Tracker dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 2 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_HikeTracker_02.png" alt="Hike Tracker dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 3 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_HikeTracker_03.png" alt="Hike Tracker dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 4 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_HikeTracker_04.png" alt="Hike Tracker dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 5 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_HikeTracker_05.png" alt="Hike Tracker dashboard - przegląd" loading="lazy">
          </div>
        </div>
        <button class="project-tile__nav project-tile__nav--prev" aria-label="Poprzedni slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="project-tile__nav project-tile__nav--next" aria-label="Następny slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>

        <!-- Przycisk powiększenia -->
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
        <h2 class="project-tile__title">Dashboard śledzenia wędrówek</h2>

        <div class="project-tile__text-area">
          <div class="project-tile__text-slides">
            <div class="project-tile__text-slide project-tile__text-slide--active">
              <p class="project-tile__description">
                Ślady GPX, wiele źródeł danych i potrzeba zwizualizowania, jak wyglądały górskie wypady. Kto nie lubi śledzić własnych aktywności w czasie i przestrzeni? Prawie 100 tras górskich w Tatrach zebrane w tabelach, wykresach słupkowych, wskaźnikach, a nawet interaktywnych mapach terenu i widoku mapy cieplnej. <br><br> Kluczowe wyzwania po drodze:
                <ul><li>Python: ~25 MB surowych danych GPS uproszczonych i zredukowanych o 93% bez utraty kontekstu i kluczowych punktów (setki tysięcy punktów obciążają wydajność).</li>
                <li>Power BI: model danych z dynamicznym kodowaniem kolorów na wizualizacjach i mapach (złożone miary i funkcje).</li>
                <li>QGIS: wyekstrahowane i przekonwertowane granice parków narodowych i krajów do lekkich kształtów.</li>
                <li>Power Automate: automatyczne pobieranie GPX i kodowane nazewnictwo na podstawie URL + ID wędrówki (bez ręcznej interakcji z UI).</li></ul><br>
              </p>
            </div>
          </div>
        </div>

        <div class="project-tile__fade"></div>

        <div class="project-tile__tags">
          <a href="#powerbi" class="project-tile__tag">#data</a>
          <a href="#dashboards" class="project-tile__tag">#powerbi</a>
          <a href="#analytics" class="project-tile__tag">#dashboards</a>
        </div>

        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powerbi-yellow_short.png" alt="Power BI"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_excel_short.png" alt="Power BI"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powershell_short.webp" alt="PowerShell"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_qgis_short.png" alt="QGIS"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_microsoftpowerautomate_short.png" alt="Power Automate"></span>
        </div>
      </div>

    </article>

    <!-- ========================================== -->
    <!-- PROJEKT: Data: IFC MMI Check -->
    <!-- Parzysty = Tekst LEWO (40%), Zdjęcie PRAWO (60%) -->
    <!-- Autor kafelka: Piotr -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="data, powerbi, dashboards, IFC, BIM" data-date="2025/12/28">

      <!-- Slideshow (60%) -->
      <div class="project-tile__slideshow">
        <div class="project-tile__slides">
          <!-- Slajd 1 -->
          <div class="project-tile__slide project-tile__slide--active">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_IFCMMICheck_00.png" alt="IFC MMI Data dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 2 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_IFCMMICheck_02.png" alt="IFC MMI Data dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 3 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_IFCMMICheck_03.png" alt="IFC MMI Data dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 4 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_IFCMMICheck_04.png" alt="IFC MMI Data dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 5 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_IFCMMICheck_05.png" alt="IFC MMI Data dashboard - przegląd" loading="lazy">
          </div>
        </div>
        <button class="project-tile__nav project-tile__nav--prev" aria-label="Poprzedni slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="project-tile__nav project-tile__nav--next" aria-label="Następny slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>

        <!-- Przycisk powiększenia -->
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
        <h2 class="project-tile__title">Weryfikacja MMI IFC w plikach ACC</h2>

        <div class="project-tile__text-area">
          <div class="project-tile__text-slides">
            <div class="project-tile__text-slide project-tile__text-slide--active">
              <p class="project-tile__description">
                Weryfikacja dojrzałości obiektów IFC i interaktywne raportowanie to przykład skoku w dane, by wyłowić tę jedną, konkretną informację i zaprezentować jako stronę główną CDE, SharePointa lub część serii dashboardów do monitorowania postępu. Bez komplikowania, wykorzystując najnowszy Data Exchange dla plików IFC (add-in wydany przez Autodesk w listopadzie '25) i potencjał otwartego formatu.
                <br><br>
                Są trzy warunki, które muszą być spełnione, aby mówić o wiarygodnych wnioskach: <ul>
                <li>weryfikacja pustych wartości, nulli, niepoprawnych danych musi być uwzględniona, nie pominięta podczas czyszczenia danych,</li>
                <li>wskaźnik walidacji musi być zdefiniowany,</li>
                <li>musi być ustalona przynajmniej jedna metoda szybkiej identyfikacji niepoprawnych danych - może to być lista GUID-ów lub ID dla określonego oprogramowania, cokolwiek pozwalające managerowi reagować precyzyjnie: co i gdzie wymaga korekty w następnej rewizji modelu.</li></ul><br>
              </p>
            </div>
          </div>
        </div>

        <div class="project-tile__fade"></div>

        <div class="project-tile__tags">
          <a href="#powerbi" class="project-tile__tag">#data</a>
          <a href="#dashboards" class="project-tile__tag">#powerbi</a>
          <a href="#analytics" class="project-tile__tag">#IFC</a>
        </div>

        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powerbi-yellow_short.png" alt="Power BI"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_ifc_short.png" alt="IFC format"></span>
          <span class="project-tile__tool-icon tool-icon--themed"><img src="{{ site.baseurl }}/images/logos/software/logo_autodesk-dataexchange_short.png" alt="Autodesk Data Exchange"></span>
          <span class="project-tile__tool-icon tool-icon--themed"><img src="{{ site.baseurl }}/images/logos/software/logo_autodesk-constructioncloud_short.png" alt="Autodesk Construction Cloud"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_microsoftsharepoint_short.svg" alt="SharePoint"></span>
        </div>
      </div>

    </article>

    <!-- ========================================== -->
    <!-- PROJEKT: Data: 3D Flats reporting -->
    <!-- Parzysty = Tekst LEWO (40%), Zdjęcie PRAWO (60%) -->
    <!-- Autor kafelka: Piotr -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="data, powerbi, BIM" data-date="2025/10/30">

      <!-- Slideshow (60%) -->
      <div class="project-tile__slideshow">
        <div class="project-tile__slides">
          <!-- Slajd 1 -->
          <div class="project-tile__slide project-tile__slide--active">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2024_PS_3DBIFlats_01.png" alt="3D Flats BI dashboard - przegląd" loading="lazy">
          </div>
          <!-- Slajd 2 -->
          <div class="project-tile__slide">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2024_PS_3DBIFlats_02.png" alt="3D Flats BI dashboard - przegląd" loading="lazy">
          </div>
        </div>
        <button class="project-tile__nav project-tile__nav--prev" aria-label="Poprzedni slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button class="project-tile__nav project-tile__nav--next" aria-label="Następny slajd">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="9 6 15 12 9 18"></polyline></svg>
        </button>

        <!-- Przycisk powiększenia -->
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
        <h2 class="project-tile__title">Raportowanie BI mieszkań 3D</h2>

        <div class="project-tile__text-area">
          <div class="project-tile__text-slides">
            <div class="project-tile__text-slide project-tile__text-slide--active">
              <p class="project-tile__description">
                BI napędzane modelem 3D dla lokali mieszkalnych na etapie koncepcji wnosi świeże spojrzenie na analizę wymagań. Koniec z tabelami przestawnymi na jednej połowie ekranu i rysunkami na drugiej. Może być jedno, może być interaktywne, może wyciągać więcej wartości z już wyprodukowanych danych.
                <br>
                <br>Przykład pokazuje bounding boxy pomieszczeń, więc przed eksportem danych wymagana jest szybka kontrola QA, szczególnie gdy w grę wchodzi oprogramowanie firm trzecich. Użytkownicy Revita wiedzą, że czasem można znaleźć niegeometryczną, ale wciąż istniejącą reprezentację pomieszczenia! Może wpłynąć na bazę danych i wprowadzić trochę bałaganu do dashboardu.<br><br>
              </p>
            </div>
          </div>
        </div>

        <div class="project-tile__fade"></div>

        <div class="project-tile__tags">
          <a href="#powerbi" class="project-tile__tag">#data</a>
          <a href="#dashboards" class="project-tile__tag">#powerbi</a>
          <a href="#analytics" class="project-tile__tag">#bim</a>
        </div>

        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_autodesk-revit_short.png" alt="Autodesk Revit"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powerbi-yellow_short.png" alt="Power BI"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_speckle_short.png" alt="Speckle"></span>

        </div>
      </div>

    </article>

    <!-- ========================================== -->
    <!-- PROJEKT 5: Framework ISO 19650 -->
    <!-- Nieparzysty = Zdjęcie LEWO, Tekst PRAWO -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="bim-standards, iso19650, bep, digitaldelivery" data-date="2025/07/18">

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

        <!-- Przycisk powiększenia -->
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
                Zawiera szablony dokumentów, definicje ról, kamienie milowe dostarczania informacji
                i procedury zapewnienia jakości do wdrożenia w całej organizacji.
              </p>
            </div>
          </div>
        </div>

        <div class="project-tile__fade"></div>

        <div class="project-tile__tags">
          <a href="#iso19650" class="project-tile__tag">#iso19650</a>
          <a href="#bep" class="project-tile__tag">#bep</a>
          <a href="#digitaldelivery" class="project-tile__tag">#digitaldelivery</a>
        </div>

        <div class="project-tile__tools">
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-word.svg" alt="Word"></span>
          <span class="project-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-excel.svg" alt="Excel"></span>
        </div>
      </div>

    </article>

    <!-- ========================================== -->
    <!-- PROJEKT 6: Wizualizacja 3D -->
    <!-- Parzysty = Tekst LEWO, Zdjęcie PRAWO -->
    <!-- ========================================== -->
    <article class="project-tile" data-tags="software, visualization, enscape, twinmotion" data-date="2025/11/05">

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

        <!-- Przycisk powiększenia -->
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

        <div class="project-tile__fade"></div>

        <div class="project-tile__tags">
          <a href="#visualization" class="project-tile__tag">#visualization</a>
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

<!-- Nawigacja w stopce -->
<nav class="expertise__nav">
  <a href="{{ site.baseurl }}/{{ page.lang }}/home/" class="expertise__nav-link">
    <svg class="expertise__nav-icon expertise__nav-icon--before" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
    strona główna
  </a>

  <a href="{{ site.baseurl }}/{{ page.lang }}/expertise/" class="expertise__nav-link">
    <svg class="expertise__nav-icon expertise__nav-icon--before" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 10 14 10 14 4"></polyline>
      <polyline points="4 14 10 14 10 20"></polyline>
    </svg>
    podsumowanie doświadczenia
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

<script>
document.addEventListener('DOMContentLoaded', function () {
  var list = document.querySelector('.exp-collection__list');
  if (!list) return;

  var tilesContainer = list;
  var getTiles = function() { return Array.from(tilesContainer.querySelectorAll('.project-tile')); };

  // Filtrowanie wyszukiwania
  function applySearchFilter(query) {
    query = (query || '').trim().toLowerCase();
    var tiles = getTiles();
    var visible = 0;

    tiles.forEach(function(tile) {
      var title = (tile.querySelector('.project-tile__title') || {textContent: ''}).textContent || '';
      var desc = (tile.querySelector('.project-tile__description') || {textContent: ''}).textContent || '';
      var tags = (tile.getAttribute('data-tags') || '');
      var hay = (title + ' ' + desc + ' ' + tags).toLowerCase();
      var show = !query || hay.indexOf(query) !== -1;
      tile.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    var empty = tilesContainer.querySelector('.exp-collection__empty');
    if (visible === 0) {
      if (!empty) {
        var e = document.createElement('div');
        e.className = 'exp-collection__empty';
        e.innerHTML = '<p>Nie znaleziono projektów.</p>';
        tilesContainer.appendChild(e);
      } else {
        empty.style.display = '';
      }
    } else if (empty) {
      empty.style.display = 'none';
    }
  }

  // Podłączenie instancji UniversalSearchBar (jeśli auto-zainicjalizowana)
  try {
    var sb = window.searchbar_portfolio;
    if (sb) {
      sb.onSearch = applySearchFilter;
      sb.onClear = function() { applySearchFilter(''); };
    }
  } catch (e) {
    console.warn('Inicjalizacja searchbara nie powiodła się', e);
  }

  // Kontrolki sortowania (podstawowa implementacja: sortuje po tytule)
  var sortLabel = document.getElementById('portfolio-sort-label');
  var currentDirection = 'desc';

  function sortTiles(criteria) {
    var tiles = getTiles();
    if (criteria === 'title' || criteria === 'tytuł') {
      tiles.sort(function(a, b) {
        var at = (a.querySelector('.project-tile__title') || {textContent:''}).textContent.trim().toLowerCase();
        var bt = (b.querySelector('.project-tile__title') || {textContent:''}).textContent.trim().toLowerCase();
        if (at < bt) return currentDirection === 'asc' ? -1 : 1;
        if (at > bt) return currentDirection === 'asc' ? 1 : -1;
        return 0;
      });
    } else if (criteria === 'date' || criteria === 'data') {
      function parseYMD(s) {
        if (!s) return 0;
        // Oczekuje YYYY/MM/DD
        var parts = s.split(/[\/\-]/);
        if (parts.length < 3) return 0;
        var y = parseInt(parts[0], 10);
        var m = parseInt(parts[1], 10) - 1;
        var d = parseInt(parts[2], 10);
        return new Date(y, m, d).getTime();
      }

      tiles.sort(function(a, b) {
        var ad = parseYMD(a.getAttribute('data-date'));
        var bd = parseYMD(b.getAttribute('data-date'));
        if (ad < bd) return currentDirection === 'asc' ? -1 : 1;
        if (ad > bd) return currentDirection === 'asc' ? 1 : -1;
        return 0;
      });
    } else {
      // Nieobsługiwane kryterium - zachowaj oryginalną kolejność
      console.warn('Sortowanie po', criteria, 'nie jest zaimplementowane dla kolekcji portfolio.');
      return;
    }

    // Ponowne dołączenie w nowej kolejności
    tiles.forEach(function(t) { tilesContainer.appendChild(t); });
  }

  // Przełącznik kierunku
  var dirBtns = document.querySelectorAll('.blog__direction-btn');
  dirBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var dir = btn.getAttribute('data-direction') || 'desc';
      currentDirection = dir;
      dirBtns.forEach(function(b){ b.setAttribute('aria-pressed', 'false'); });
      btn.setAttribute('aria-pressed', 'true');
      // Ponowne sortowanie używając bieżącej etykiety
      var label = (sortLabel && sortLabel.textContent) ? sortLabel.textContent : 'tytuł';
      sortTiles(label);
    });
  });

  // Menu sortowania
  var sortOptions = document.querySelectorAll('.blog__sort-option');
  sortOptions.forEach(function(opt) {
    opt.addEventListener('click', function() {
      var criteria = opt.getAttribute('data-sort');
      if (sortLabel) sortLabel.textContent = criteria === 'date' ? 'data' : 'tytuł';
      sortTiles(criteria);
    });
  });

});
</script>

  <!-- Informacja o logo -->
  <div class="exp-collection__notice">
    <blockquote class="notice-logos">
      <p>
        <b>Informacja:</b>
        Wszystkie logo oprogramowania, nazwy handlowe, znaki towarowe i oznaczenia formatów wymiany danych prezentowane na tej stronie są własnością ich odpowiednich właścicieli. Są używane wyłącznie w celach informacyjnych i referencyjnych, aby wskazać narzędzia wykorzystywane w prezentowanych działaniach zawodowych. Ich użycie nie stanowi oficjalnego wykorzystania materiałów producentów ani nie sugeruje żadnej afiliacji, sponsoringu, partnerstwa czy poparcia ze strony odpowiednich właścicieli znaków towarowych.
      </p>
    </blockquote>
  </div>

<!-- Osadzenie skryptu slideshow -->
<script src="{{ site.baseurl }}/assets/portfolio-tiles.js" defer></script>
