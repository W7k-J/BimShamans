---
layout: page
title: O nas
lang: pl
ref: about
permalink: /pl/about/
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

## Projekt: BIM Shamans

> Termin **_szamanizm_** pochodzi od mandżursko-tunguskiego słowa **_šaman_**. Rzeczownik ten wywodzi się od czasownika **_ša-_**, oznaczającego **_wiedzieć_**. **_Szaman_** to dosłownie **_'ten, który wie'_**.
<p style="text-align: right;"><a href="https://www.britannica.com/topic/shamanism">~ Britannica.com</a></p>

#### TL;DR
Zajmujemy się tematami orbitującymi wokół technologii BIM, inżynierii lądowej, automatyzacji, analizy i przetwarzania danych. Łączy nas podejście stawiające efekt na pierwszym miejscu, z pominięciem otoczki marketingu, inżyniersko do celu. **Projekt: BIM Shamans** to nasza przestrzeń do dzielenia się przemyśleniami zawodowymi i rozwiązaniami, które uznamy za warte pokazania.

## O projekcie

Od lat **aktywnie obserwujemy rozwój BIM-u i towarzyszących mu rozwiązań technologicznych**. Widzieliśmy, jak pracownie i firmy, w których pracowaliśmy, zakupywały pierwsze licencje na „oprogramowanie do BIM-u", mianowały pierwszego BIM managera, a także podejmowały trud pierwszych standaryzacji. Obserwowaliśmy to z bliska, sami będąc uczestnikami procesów projektowych, koordynacyjnych, standaryzacyjnych, modelarskich i zarządzania danymi. Tworzyliśmy pierwsze automatyzacje, skrypty w Dynamo, zasady pracy oraz wymyślaliśmy triki łamiące ograniczenia nałożone przez twórców oprogramowania. Z czasem **staliśmy się 'tymi, którzy wiedzą'** – osobami, do których inni przychodzą w poszukiwaniu odpowiedzi.

Zawsze **byliśmy i jesteśmy tam, gdzie BIM się DZIEJE – nie tylko w teoriach i dyskusjach, ale w codziennych wyzwaniach projektowych**. W naszym „szamańskim" projekcie dzielimy się przemyśleniami, trikami i automatyzacjami. Nie będziemy mówić, jaki BIM powinien być – pokażemy, jaki jest i co można z niego wycisnąć tu i teraz.

Wielokrotnie **widzieliśmy, jak 'jedyne słuszne' rozwiązania przegrywały w zderzeniu z realnymi wyzwaniami - codziennością projektantów, inżynierów i klientów** i z tego powodu nie zamierzamy nikogo przekonywać, że nasze podejście jest właściwe, rewolucyjne czy też najlepsze na świecie. Wiemy jednak, że działa – bo testowaliśmy je na froncie, tam, gdzie „słuszne" plany często przegrywają z rzeczywistością. Eksperymentowanie to w BIM-ie codzienność, a my nie boimy się próbować. Pozwolimy sobie również trochę ponarzekać oraz pożartować, ponieważ chcemy pokazać, że lubimy to, co robimy – rozwiązywać wyzwania stawiane na naszej ścieżce.

**Połączyło nas podejście stawiające efekt na pierwszym miejscu, z pominięciem otoczki marketingu, inżyniersko do celu.** Gdy kapłani tego czy innego narzędzia, formatu wymiany danych lub normy głosili ich wyższość nad innymi rozwiązaniami, my z szamańską zawziętością zajmowaliśmy się kończeniem kolejnego projektu.

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

            <p>Utwierdziło mnie to w przekonaniu, że wszędzie na świecie mamy ten sam problem - „POTRZEBUJEMY WIĘCEJ AUTOMATYZACJI”. Niestety, nikt nie zamierza zrobić tego za nas!</p>

            <p>Postanowiłem więc wziąć sprawy w swoje ręce. Nauczyłem się programować i publikować. Na Autodesk Appstore znajdziesz moje wtyczki, m. in. do Autodesk Revit – Drafter i Leveler. Automatyzują one pracę architektów i inżynierów, pozwalając im wykonywać zadania szybciej i z przewidywalną powtarzalnością efektu dla wielu obszarów jednocześnie. Drafter to jeden z największych pluginów dla Revit, zawierający około 180 automatyzacji, które pomagają usprawnić codzienną pracę! Kolejne apki w drodze!</p>

            <p>Jestem też pilotem drona (VLOS i BVLOS, do 25 kg) oraz fotografem (można mnie znaleźć w kilku książkach). Tworzę modele 3D, zajmuję się grafiką 2D i 3D, identyfikacją wizualną oraz skanowaniem laserowym w budownictwie (chmury punktów są niesamowite) 😉 Pewnie interesuję się zbyt wieloma rzeczami, ale… „specjalizacja jest dla owadów”..</p>
        </div>
    </div>
    
    <div class="author-card">
        <div class="author-image-section">
            <div class="author-image-container">
                <img class="author-image front" src="/images/images-main/natalia-1.jpg" alt="Natalia Gawlik">
                <img class="author-image back" src="/images/images-main/About_Authors_NataliaGawlik_Alter.webp" alt="Natalia Gawlik - alternatywne">
            </div>
        </div>
        <div class="author-content-section">
            <h3>Natalia Gawlik</h3>
            <p>Jestem Koordynatorem BIM, a duże kontrakty infrastrukturalne, głównie kolejowe, to mój chleb powszedni. Z wykształcenia - geodeta, a z wielu szczęśliwych zbiegów okoliczności - specjalista BIM. Dekada mojego życia zawodowego obejmuje doświadczenia od fotogrametrii, skanowania laserowego 3D, pomiarów dronowych i naziemnych, przez modelowanie 3D, aż po BIM w norweskich inwestycjach publicznych.</p>

            <p>W pracy skupiam się na „I” w BIM – czyli informacji. Bo BIM bez informacji to tylko ładny model 3D. Szczerze mówiąc, jestem dość leniwa i nie znoszę powtarzalnych, nudnych zadań… Dlatego zawsze szukam najszybszego i najbardziej efektywnego sposobu na automatyzację pracy.</p>

            <p>Automatyzacja to dla mnie nie tylko pasja, ale i konieczność – dzięki niej mam więcej czasu na wędrówki, treningi i relaks na tarasie z moim uroczym kotem 🐾 </p> 
            
            <p>Jeśli istnieje jakaś droga na skróty, to prawdopodobnie już ją zakodowałam.</p>
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
            <p>Jestem osobą, która widząc powtarzalne zadanie, myśli: „Nie będę marnować potencjału mojego ani moich współpracowników na bezsensowne klikanie…” 🤔 Skoro tu jesteś, to chyba mamy coś wspólnego 🫡</p>

            <p>Wierzę, że automatyzacja to klucz do minimalizowania błędów ludzkich, eliminowania żmudnej, czasochłonnej pracy i zapewnienia dokładnej kontroli przed oddaniem projektu. Standaryzacja natomiast jest podwaliną do sukcesu automatyzacji.</p>

            <p>Koordynator BIM, Menedżer BIM i uprawniony inżynier budownictwa z doświadczeniem w projektowaniu konstrukcji obiektów kubaturowych. Obecnie pracuję jako Koordynator BIM w branży Advance Technology, a przez lata współpracowałem również z branżą budownictwa mieszkaniowego.</p>

            <p>W trakcie mojej kariery zawodowej spędziłem niezliczone godziny na tworzeniu i kontrolowaniu modeli do przedmiarów materiałowych, zarządzaniu kolizjami, wyszukiwaniu potencjalnych problemów technicznych (obracając model w lewo i w prawo 😎) oraz weryfikowaniu danych wejściowych i wyjściowych.</p>

            <p>Jestem fanem koncepcji BIM jako ogromnego kroku naprzód w zakresie przejrzystości, efektywności i ograniczania marnotrawstwa pracy w branży budowlanej. Koncentruję się na eliminowaniu nieefektywności i nadprodukcji, rozwijaniu przepływów danych oraz tworzeniu skutecznych checklist do ich weryfikacji.</p>

            <p>W wolnym czasie lubię wspinaczkę (zarówno na ściance, jak i w plenerze) oraz długie górskie wędrówki.</p>
        </div>
    </div>
</div>

<div class="collapsible-section">
    <button class="button expand collapsible" aria-expanded="false">Nie rozwijaj tego pola.</button>
    <div class="collapsible-content" aria-hidden="true">
        Odnalazłeś prawdę:
        <img src="/images/images-main/Image_About_BIMSpecialist.jpg" alt="BIM Specialist in a nutshell" style="width:100%;max-width:600px;display:block;margin:20px auto;">
    </div>
</div>

&nbsp;