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
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 2rem 0;

    .author-card {
        flex: 1;
        min-width: 250px;
        max-width: 350px;
        text-align: center;

        h3 {
            margin-top: 1rem;
            color: var(--firstGray-color);
        }

        .author-image-container {
            position: relative;
            width: 100%;
            aspect-ratio: 1;
            overflow: hidden;
            border-radius: 4px;

            .author-image {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: opacity 0.3s ease;

                &.back { opacity: 0; }
            }

            &:hover {
                .author-image.front { opacity: 0; }
                .author-image.back { opacity: 1; }
            }
        }
    }
}
</style>

## Projekt: BIM Shamans

> Termin **_szamanizm_** pochodzi od mandżursko-tunguskiego słowa **_šaman_**. Rzeczownik ten wywodzi się od czasownika **_ša-_**, oznaczającego **_wiedzieć_**. **_Szaman_** to dosłownie **_'ten, który wie'_**.
<p style="text-align: right;"><a href="https://www.britannica.com/topic/shamanism">~ Britannica.com</a></p>

#### TL;DR
Zajmujemy się tematami orbitującymi wokół technologii BIM, inżynierii lądowej, automatyzacji, analizy i przetwarzania danych. Łączy nas podejście stawiające efekt na pierwszym miejscu, z pominięciem otoczki marketingu, inżyniersko do celu, w myśl **make engineering approach great again**.

**BIM Shamans** to nasza przestrzeń do dzielenia się przemyśleniami zawodowymi i rozwiązaniami, które uznamy za warte pokazania.

## O projekcie

Od lat **aktywnie obserwujemy rozwój BIM-u i towarzyszących mu rozwiązań technologicznych**. Widzieliśmy, jak pracownie i firmy, w których pracowaliśmy, zakupywały pierwsze licencje na „oprogramowanie do BIM-u”, mianowały pierwszego BIM managera, a także podejmowały trud pierwszych standaryzacji. Obserwowaliśmy to z bliska, sami będąc uczestnikami procesów projektowych, koordynacyjnych, standaryzacyjnych, modelarskich i zarządzania danymi. Tworzyliśmy pierwsze automatyzacje, skrypty w Dynamo, zasady pracy oraz wymyślaliśmy triki łamiące ograniczenia nałożone przez twórców oprogramowania. Z czasem **staliśmy się 'tymi, którzy wiedzą'** – osobami, do których inni przychodzą w poszukiwaniu odpowiedzi.

Zawsze **byliśmy i jesteśmy tam, gdzie BIM się DZIEJE – nie tylko w teoriach i dyskusjach, ale w codziennych wyzwaniach projektowych**.
W naszym „szamańskim” projekcie dzielimy się przemyśleniami, trikami i automatyzacjami. Nie będziemy mówić, jaki BIM powinien być – pokażemy, jaki jest i co można z niego wycisnąć tu i teraz.

Wielokrotnie **widzieliśmy, jak 'jedyne słuszne' rozwiązania przegrywały w zderzeniu z realnymi wyzwaniami - codziennością projektantów, inżynierów i klientów** i z tego powodu nie zamierzamy nikogo przekonywać, że nasze podejście jest właściwe, rewolucyjne czy też najlepsze na świecie. Wiemy jednak, że działa – bo testowaliśmy je na froncie, tam, gdzie „słuszne” plany często przegrywają z rzeczywistością. Eksperymentowanie to w BIM-ie codzienność, a my nie boimy się próbować.
Pozwolimy sobie również trochę ponarzekać oraz pożartować, ponieważ chcemy pokazać, że lubimy to, co robimy – rozwiązywać wyzwania stawiane na naszej ścieżce.

**Połączyło nas podejście stawiające efekt na pierwszym miejscu, z pominięciem otoczki marketingu, inżyniersko do celu.** Gdy kapłani tego czy innego narzędzia, formatu wymiany danych lub normy głosili ich wyższość nad innymi rozwiązaniami, my z szamańską zawziętością zajmowaliśmy się kończeniem kolejnego projektu. 

<div class="authors-container">
    <div class="author-card">
        <div class="author-image-container">
            <img class="author-image front" src="/images/authors/julian-1.jpg" alt="Julian Wandzilak">
            <img class="author-image back" src="/images/authors/julian-2.jpg" alt="Julian Wandzilak - alternatywne">
        </div>
        <h3>Julian Wandzilak</h3>
    </div>
    
    <div class="author-card">
        <div class="author-image-container">
            <img class="author-image front" src="/images/authors/natalia-1.jpg" alt="Natalia Gawlik">
            <img class="author-image back" src="/images/authors/natalia-2.jpg" alt="Natalia Gawlik - alternatywne">
        </div>
        <h3>Natalia Gawlik</h3>
    </div>
    
    <div class="author-card">
        <div class="author-image-container">
            <img class="author-image front" src="/images/authors/piotr-1.jpg" alt="Piotr Spyra">
            <img class="author-image back" src="/images/authors/piotr-2.jpg" alt="Piotr Spyra - alternatywne">
        </div>
        <h3>Piotr Spyra</h3>
    </div>
</div>

Julian Wandzilak
Natalia Gawlik
Piotr Spyra

<button class="button expand collapsible" aria-expanded="false">Rozwiń</button>
<div class="collapsible-content" aria-hidden="true">
    Tekst przykladowy

    <img src="{{ site.baseurl }}/images/images-main/Image_About_BIMSpecialist.jpg" alt="BIM Specialist in a nutshell" style="width:100%;max-width:600px;">
</div>