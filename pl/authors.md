---
layout: page
title: Autorzy
lang: pl
ref: authors
permalink: /pl/authors/
---

<style>
.authors-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 2rem 0;

    .author-card {
        display: flex;
        gap: 2rem;
        align-items: flex-start;
        
        .author-image-section {
            flex: 0 0 300px;
            margin-top: 1rem;
            
            .author-image-container {
                position: relative;
                width: 100%;
                aspect-ratio: 2/3;
                border-radius: 4px;
                overflow: hidden;

                &:hover {
                box-shadow: 0 4px 20px -2px var(--firstBlue-color);
                }

                .author-image {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 4px;
                    transition: opacity 0.4s ease;

                    &.back {
                        opacity: 0;
                    }
                }

                &:hover {
                    .author-image.front { opacity: 0; }
                    .author-image.back { opacity: 1; }
                }
            }
        }
        
        .author-content-section {
            flex: 1;
            
            h3 {
                @extend .post h2;
                margin: 1rem 0;  // Explicit margin definition
                color: var(--firstBlue-color);
            }

            p {
                @extend .post p;   // Dziedziczenie stylów z głównego arkusza
                text-align: justify;
                margin-bottom: 1rem;
            }
        }
    }
}
</style>

## O autorach

<div class="authors-container">
    <div class="author-card">
        <div class="author-image-section">
            <div class="author-image-container">
                <img class="author-image front" src="/images/images-main/About_Authors_JulianWandzilak_Main.png" alt="Julian Wandzilak">
                <img class="author-image back" src="/images/images-main/About_Authors_JulianWandzilak_Alter.webp" alt="Julian Wandzilak - alternatywne">
            </div>
        </div>
        <div class="author-content-section">
            <h3>Julian Wandzilak</h3>
            <p>Jestem niezależnym architektem, projektantem, programistą C# i koordynatorem BIM.</p>

            <p>Doświadczenie zawodowe zdobywałem w Wielkiej Brytanii (Manchester, Londyn), USA (Chicago) oraz w Polsce (Kraków). Brałem również udział w projektach architektonicznych w Australii i Norwegii.</p>

            <p>Zajmowałem się przygotowywaniem masterplanów, projektowaniem fabryk, obiektów służby zdrowia, budynków edukacyjnych, luksusowych rezydencji, wieżowców mieszkalnych i akademików, wnętrz muzeów, rozbudową i renowacją budynków objętych ochroną konserwatorską oraz projektowaniem małych domów. Uczestniczyłem również w konkursach architektonicznych. Ostatnio miałem okazję pracować nad koncepcjami placów zabaw i historycznych ogrodów…</p>

            <p>Utwierdziło mnie to w przekonaniu, że wszędzie na świecie mamy ten sam problem - „POTRZEBUJEMY WIĘCEJ AUTOMATYZACJI". Niestety, nikt nie zamierza zrobić tego za nas!</p>

            <p>Postanowiłem więc wziąć sprawy w swoje ręce. Nauczyłem się programować i publikować. Na Autodesk Appstore znajdziesz moje wtyczki, m. in. do Autodesk Revit – Drafter i Leveler. Automatyzują one pracę architektów i inżynierów, pozwalając im wykonywać zadania szybciej i z przewidywalną powtarzalnością efektu dla wielu obszarów jednocześnie. Drafter to jeden z największych pluginów dla Revit, zawierający około 180 automatyzacji, które pomagają usprawnić codzienną pracę! Kolejne apki w drodze!</p>

            <p>Jestem też pilotem drona (VLOS i BVLOS, do 25 kg) oraz fotografem (można mnie znaleźć w kilku książkach). Tworzę modele 3D, zajmuję się grafiką 2D i 3D, identyfikacją wizualną oraz skanowaniem laserowym w budownictwie (chmury punktów są niesamowite) 😉 Pewnie interesuję się zbyt wieloma rzeczami, ale… „specjalizacja jest dla owadów"..</p>
        </div>
    </div>
    
    <div class="author-card">
        <div class="author-image-section">
            <div class="author-image-container">
                <img class="author-image front" src="/images/images-main/About_Authors_NataliaGawlik_Main.jpg" alt="Natalia Gawlik">
                <img class="author-image back" src="/images/images-main/About_Authors_NataliaGawlik_Alter.webp" alt="Natalia Gawlik - alternatywne">
            </div>
        </div>
        <div class="author-content-section">
            <h3>Natalia Gawlik</h3>
            <p>Jestem Koordynatorem BIM, a duże kontrakty infrastrukturalne, głównie kolejowe, to mój chleb powszedni. Z wykształcenia geodeta, z zamiłowania specjalistka BIM. Dekada mojego życia zawodowego obejmuje doświadczenia od fotogrametrii, skaningu laserowego, nalotów dronowych, przez modelowanie 3D (Scan to BIM), aż po BIM i zarządzanie projektami w metodyce VDC w norweskich inwestycjach publicznych.</p>

            <p>BIM to nie tylko obiekty 3D, ale przede wszystkim użyteczne dane, które je opisują. Bez informacji nawet najbardziej dopracowany model 3D pozostaje jedynie cyfrową makietą – ładną, ale mało użyteczną. Dlatego w pracy skupiam się na literze „I" – Information. </p>
            <p>Dzięki narzędziom takim jak Dynamo, Grasshopper, Automation Tool w Quadri oraz Python (IfcOpenShell) upraszczam procesy tworzenia i wypełniania Property Setów w modelach. Moim celem jest, aby dane w modelach były kompletne, spójne i zgodne ze standardami, ale jednocześnie praca z nimi nie byla żmudna i manualne. Szczerze mówiąc, jestem dość leniwa i nie znoszę powtarzalnych, nudnych zadań… Dlatego zawsze szukam najszybszego i najbardziej efektywnego sposobu na automatyzację pracy. </p>

            <p>Automatyzacja to dla mnie nie tylko pasja, ale i konieczność – dzięki niej mam więcej czasu na wędrówki, treningi i relaks na tarasie z moim uroczym kotem 🐾 </p> 
        </div>
    </div>
    
    <div class="author-card">
        <div class="author-image-section">
            <div class="author-image-container">
                <img class="author-image front" src="/images/images-main/About_Authors_PiotrSpyra_Main.png" alt="Piotr Spyra">
                <img class="author-image back" src="/images/images-main/About_Authors_PiotrSpyra_Alter.webp" alt="Piotr Spyra - alternatywne">
            </div>
        </div>
        <div class="author-content-section">
            <h3>Piotr Spyra</h3>
            <p>Jestem osobą, która widząc powtarzalne zadanie, myśli: „Nie będę marnować potencjału mojego ani moich współpracowników na bezsensowne klikanie…" 🤔 Skoro tu jesteś, to chyba mamy coś wspólnego 🫡</p>

            <p>Wierzę, że automatyzacja to klucz do minimalizowania błędów ludzkich, eliminowania żmudnej, czasochłonnej pracy i zapewnienia dokładnej kontroli przed oddaniem projektu. Standaryzacja natomiast jest podwaliną do sukcesu automatyzacji.</p>

            <p>Koordynator BIM, Menedżer BIM i uprawniony inżynier budownictwa z doświadczeniem w projektowaniu konstrukcji obiektów kubaturowych. Obecnie pracuję jako Koordynator BIM w branży Advance Technology, a przez lata współpracowałem również z branżą budownictwa mieszkaniowego.</p>

            <p>Jestem fanem koncepcji BIM jako ogromnego kroku naprzód w zakresie przejrzystości, standaryzacji i uporządkowania procesu oraz ograniczania marnotrawstwa pracy w branży budowlanej. Koncentruję się na eliminowaniu nieefektywności i nadprodukcji, rozwijaniu przepływów danych oraz wielokrotnego ich wykorzystywania w jak najszerszym spektrum przypadków. Wspieram firmy w implementacji tych "przypadków użycia" BIM, które dają największą stopę zwrotu i mają szansę realnie poprawić frustrujące obszary pracy </p>

            <p>W trakcie mojej kariery zawodowej spędziłem niezliczone godziny na tworzeniu i kontrolowaniu modeli do przedmiarów materiałowych (wraz z przyjaciółmi - Excelem i PowerBI), zarządzaniu kolizjami i przede wszyskim wnioskami płynącymi z ich wykrywania, wyszukiwaniu potencjalnych problemów technicznych (obracając model w lewo i w prawo 😎) i rozwijaniu standardów, biblitek i skryptów w środowisku Autodesk Revit i Dynamo.</p>

            <p>W wolnym czasie lubię wspinaczkę (zarówno na ściance, jak i w plenerze) oraz długie górskie wędrówki.</p>
        </div>
    </div>
</div>

&nbsp;
