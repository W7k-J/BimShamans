---
layout: default
title: Expertise
lang: en
ref: portfolio
permalink: /en/expertise/
excerpt: "Selected projects and expertise across BIM, architecture, automation, and digital delivery."
---
{% assign lang = page.lang | default: site.default_lang %}
{% assign t = site.t[lang] %}

<div class="expertise__container">

  <div class="expertise__header">
    <!--<h1>Portfolio</h1>-->
    <!--<p>A curated selection of our work spanning BIM implementation, architectural design, data analytics, and process automation. Each category represents years of hands-on experience across diverse projects.</p>-->
  </div>

  <!-- ========================================= -->
  <!-- SECTION 1: Architecture -->
  <!-- Layout: Images LEFT (65%), Text RIGHT (35%) -->
  <!-- ========================================== -->
  <section class="expertise-section" id="architecture">
    
    <!-- Tiles Stack (3 overlapping images) -->
    <div class="expertise-section__media">
      <div class="portfolio-tiles-stack">
        
        <!-- Tile 1 -->
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80" alt="Architectural visualization" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-autocad.svg" alt="AutoCAD"></span>
            </div>
            <p class="portfolio-tile__description">Heritage building documentation using point cloud data and parametric modeling for conservation planning.</p>
          </div>
        </div>
        
        <!-- Tile 2 -->
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80" alt="Building facade design" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-rhino.svg" alt="Rhino"></span>
            </div>
            <p class="portfolio-tile__description">Facade optimization study combining computational design with BIM coordination workflows.</p>
          </div>
        </div>
        
        <!-- Tile 3 -->
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="Modern architecture" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-enscape.svg" alt="Enscape"></span>
            </div>
            <p class="portfolio-tile__description">Mixed-use development with integrated sustainability analysis and real-time visualization.</p>
          </div>
        </div>
        
      </div>
    </div>
    
    <!-- Text Content -->
    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.architecture }}</h2>
      <p>From concept sketches to construction documentation, our architectural work bridges creative vision with technical precision. We specialize in heritage conservation, facade engineering, and design optimization.</p>
      <ul>
        <li>Heritage documentation & conservation</li>
        <li>Facade design & analysis</li>
        <li>3D scanning integration</li>
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
  <!-- SECTION 2: BIM Standards -->
  <!-- Layout: Text LEFT (35%), Images RIGHT (65%) - REVERSE -->
  <!-- ========================================== -->
  <section class="expertise-section expertise-section--reverse" id="bim-standards">
    
    <!-- Text Content -->
    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.bim_standards }}</h2>
      <p>Developing and implementing BIM standards that actually work. Our approach focuses on practical adoption, clear documentation, and measurable outcomes rather than theoretical frameworks.</p>
      <ul>
        <li>ISO 19650 implementation</li>
        <li>BIM Execution Plans</li>
        <li>Digital delivery standards</li>
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
    
    <!-- Tiles Stack -->
    <div class="expertise-section__media">
      <div class="portfolio-tiles-stack">
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Documentation workflow" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-word.svg" alt="Word"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-excel.svg" alt="Excel"></span>
            </div>
            <p class="portfolio-tile__description">Complete BIM Execution Plan framework aligned with ISO 19650 requirements.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80" alt="Standard templates" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-acc.svg" alt="ACC"></span>
            </div>
            <p class="portfolio-tile__description">Company-wide Revit template with standardized families, schedules, and view templates.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" alt="Training session" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-powerpoint.svg" alt="PowerPoint"></span>
            </div>
            <p class="portfolio-tile__description">Training materials and adoption strategy for 200+ person organization.</p>
          </div>
        </div>
        
      </div>
    </div>
    
  </section>

  <!-- ========================================== -->
  <!-- SECTION 3: Data & BI Reporting -->
  <!-- Layout: Images LEFT (65%), Text RIGHT (35%) -->
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
            </div>
            <p class="portfolio-tile__description">Terraforming Mars is definitely my favorite board game. When I discovered there is a .json game log I couldn't resist to find out which strategy brought me to the best results. One file, repetitive data structure and a question: "how can I beat my last record". </p>
          </div>
        </div>

        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_HikeTracker_02.png" alt="HikeTracker - Analytics" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powerbi-yellow_short.png" alt="Power BI"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_excel_short.png" alt="Excel"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powershell_short.webp" alt="PowerShell"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_qgis_short.png" alt="QGIS"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_microsoft-powerautomate_short.png" alt="Power Automate"></span>
            </div>
            <p class="portfolio-tile__description">GPX tracks, multiple data sources and the strong need to find out how journeys looked liked. Who doesn't like tracking their own activities across time and...area? Connecting interaction for maps and data with over 90% gpx files optimization was quite a challenge. </p>
          </div>
        </div>

        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2024_PS_3DBIFlats_01.png" alt="3D BI Flats - Data model" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_autodesk-revit_short.png" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powerbi-yellow_short.png" alt="Power BI"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_speckle_short.png" alt="Speckle"></span>
            </div>
            <p class="portfolio-tile__description">3D-driven BI for residential units on concept design stage brings fresh perspective to requirements analysis. No more pivot tables on one half of screen and drawings on the other. It can be one, it can interact, it can mean more use from the data is already produced.</p>
          </div>
        </div>

        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="{{ site.baseurl }}/images/images-expertise/Data_2025_PS_IFCMMICheck_01.png" alt="IFC MMI Check - QA" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_powerbi-yellow_short.png" alt="Power BI"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logos_ifc_short.png" alt="IFC Format"></span>
              <span class="portfolio-tile__tool-icon tool-icon--themed"><img src="{{ site.baseurl }}/images/logos/software/logo_autodesk-dataexchange_short.png" alt="Autodesk Data Exchange"></span>
              <span class="portfolio-tile__tool-icon tool-icon--themed"><img src="{{ site.baseurl }}/images/logos/software/logo_autodesk-constructioncloud_short.png" alt="Autodesk Construction Cloud"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/logos/software/logo_microsoftsharepoint_short.svg" alt="SharePoint"></span>
            </div>
            <p class="portfolio-tile__description">IFC-based objects maturity check and reporting is an example of diving into data to catch that one, specified insight and bring it to the main page of CDE or Sharepoint. No overcoplication, newest Data Exchange for IFC files potencial and Open format. </p>
          </div>
        </div>

      </div>
    </div>
    
    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.data_reporting }}</h2>
      <p>Conclusion is the point of diving into data. Presentation is the way. Nowadays we collect data all the time - financial budgets, running reports, hike tracks notes, game logs, PV metrics and more! <br><br> Of course, our main goal is to bring value through data for AEC industry, but if the playground offers you infinite source of sand and gives you pretty useful tools, shape of the castles depends only on your imagination.</p>
      <ul>
        <li>Diagnostic dashboards (not decorative ones)</li>
        <li>Data extraction & transformation pipelines</li>
        <li>Intuitive interface</li>
        <li>Insights connected with questions</li>
      </ul>
      <div class="expertise-section__tags">
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#powerbi" class="expertise-section__tag">#powerbi</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#dashboards" class="expertise-section__tag">#dashboards</a>
        <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#analytics" class="expertise-section__tag">#analytics</a>
      </div>
      <a href="{{ site.baseurl }}/{{ lang }}/expertise-collection/#data-reporting" class="expertise-section__cta">
        {{ t.view_all_projects }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </a>
    </div>
    
  </section>

  <!-- ========================================== -->
  <!-- SECTION 4: Automation & Programming -->
  <!-- Layout: Text LEFT (35%), Images RIGHT (65%) - REVERSE -->
  <!-- ========================================== -->
  <section class="expertise-section expertise-section--reverse" id="automation">
    
    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.automation }}</h2>
      <p>Custom tools, scripts, and add-ins that eliminate repetitive tasks and enforce quality standards. From Dynamo graphs to full Revit plugins, we build solutions that fit your workflow.</p>
      <ul>
        <li>Dynamo scripts & packages</li>
        <li>Revit API add-ins</li>
        <li>Python automation</li>
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
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" alt="Code development" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-python.svg" alt="Python"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-vscode.svg" alt="VS Code"></span>
            </div>
            <p class="portfolio-tile__description">Custom Revit add-in for automated model auditing and quality control.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=800&q=80" alt="Dynamo scripts" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-dynamo.svg" alt="Dynamo"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
            </div>
            <p class="portfolio-tile__description">Dynamo package for batch parameter management and family updates.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80" alt="Automation workflow" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-csharp.svg" alt="C#"></span>
            </div>
            <p class="portfolio-tile__description">Schedule export automation reducing documentation time by 60%.</p>
          </div>
        </div>
        
      </div>
    </div>
    
  </section>

  <!-- ========================================== -->
  <!-- SECTION 5: BIM Coordination & OpenBIM -->
  <!-- Layout: Images LEFT (65%), Text RIGHT (35%) -->
  <!-- ========================================== -->
  <section class="expertise-section" id="coordination">
    
    <div class="expertise-section__media">
      <div class="portfolio-tiles-stack">
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construction coordination" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-navisworks.svg" alt="Navisworks"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-bim360.svg" alt="BIM 360"></span>
            </div>
            <p class="portfolio-tile__description">Multi-discipline coordination for 50,000 sqm mixed-use development.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80" alt="IFC workflow" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-ifc.svg" alt="IFC"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-solibri.svg" alt="Solibri"></span>
            </div>
            <p class="portfolio-tile__description">OpenBIM workflow implementation with IFC-based model checking.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&q=80" alt="Clash detection" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-navisworks.svg" alt="Navisworks"></span>
            </div>
            <p class="portfolio-tile__description">Automated clash detection workflow reducing coordination meetings by 40%.</p>
          </div>
        </div>
        
      </div>
    </div>
    
    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.coordination }}</h2>
      <p>Effective coordination goes beyond clash detection. We implement workflows that prevent issues before they occur and ensure seamless collaboration across disciplines using OpenBIM standards.</p>
      <ul>
        <li>Clash management workflows</li>
        <li>IFC optimization</li>
        <li>OpenBIM implementation</li>
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
  <!-- SECTION 6: Software & 3D Modelling -->
  <!-- Layout: Text LEFT (35%), Images RIGHT (65%) - REVERSE -->
  <!-- ========================================== -->
  <section class="expertise-section expertise-section--reverse" id="software">
    
    <div class="expertise-section__content">
      <h2>{{ t.portfolio_categories.software }}</h2>
      <p>Expertise across the full spectrum of BIM and 3D modeling tools. We help teams select, implement, and optimize software workflows for maximum productivity and interoperability.</p>
      <ul>
        <li>Software implementation</li>
        <li>Template development</li>
        <li>Workflow optimization</li>
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
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="3D modeling" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-rhino.svg" alt="Rhino"></span>
            </div>
            <p class="portfolio-tile__description">Complex geometry modeling combining Rhino's flexibility with Revit's documentation power.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80" alt="Software training" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-revit.svg" alt="Revit"></span>
            </div>
            <p class="portfolio-tile__description">Company-wide Revit rollout with custom templates and training program.</p>
          </div>
        </div>
        
        <div class="portfolio-tile">
          <div class="portfolio-tile__image">
            <img src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80" alt="Visualization" loading="lazy">
          </div>
          <div class="portfolio-tile__overlay">
            <div class="portfolio-tile__tools">
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-enscape.svg" alt="Enscape"></span>
              <span class="portfolio-tile__tool-icon"><img src="{{ site.baseurl }}/images/icons/icon-twinmotion.svg" alt="Twinmotion"></span>
            </div>
            <p class="portfolio-tile__description">Real-time visualization pipeline for client presentations and design reviews.</p>
          </div>
        </div>
        
      </div>
    </div>
    
  </section>

</div>

<!-- Navigation Footer -->
<nav class="expertise__nav">
  <a href="{{ site.baseurl }}/{{ page.lang }}/expertise-collection/" class="expertise__nav-link expertise__nav-link--collection">
    <svg class="expertise__nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 5H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
      <path d="M16 5h4v4"></path>
      <path d="M14 7l6-6"></path>
    </svg>
    Full expertise
  </a>
  
  <button type="button" class="expertise__nav-link expertise__nav-link--top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
    Go to top
    <svg class="expertise__nav-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  </button>
</nav>
