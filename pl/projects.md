---
layout: page
title: Projekty
lang: pl
ref: projects
permalink: /pl/projects/
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

> Termin **_szamanizm_** pochodzi od mandżursko-tunguskiego słowa **_šaman_**. Rzeczownik ten wywodzi się od czasownika **_ša-_**, oznaczającego **_wiedzieć_**. Szaman to dosłownie **_'ten, który wie'_**.
<p style="text-align: right;"><a href="https://www.britannica.com/topic/shamanism">~ Britannica.com</a></p>

#### TL;DR
Zajmujemy się tematami orbitującymi wokół technologii BIM, inżynierii lądowej, automatyzacji, analizy i przetwarzania danych. Łączy nas podejście stawiające efekt na pierwszym miejscu, z pominięciem otoczki marketingu, inżyniersko do celu. **Projekt: BIM Shamans** to nasza przestrzeń do dzielenia się przemyśleniami zawodowymi i rozwiązaniami, które uznamy za warte pokazania.

## O projekcie

Od lat **aktywnie obserwujemy rozwój BIM-u i towarzyszących mu rozwiązań technologicznych**. Widzieliśmy, jak pracownie i firmy, w których pracowaliśmy, zakupywały pierwsze licencje na „oprogramowanie do BIM-u", mianowały pierwszego BIM managera, a także podejmowały trud pierwszych standaryzacji. Obserwowaliśmy to z bliska, sami będąc uczestnikami procesów projektowych, koordynacyjnych, standaryzacyjnych, modelarskich i zarządzania danymi. Tworzyliśmy pierwsze automatyzacje, skrypty w Dynamo, zasady pracy oraz wymyślaliśmy triki łamiące ograniczenia nałożone przez twórców oprogramowania. Z czasem **staliśmy się 'tymi, którzy wiedzą'** – osobami, do których inni przychodzą w poszukiwaniu odpowiedzi.

Zawsze **byliśmy i jesteśmy tam, gdzie BIM się DZIEJE – nie tylko w teoriach i dyskusjach, ale w codziennych wyzwaniach projektowych**. W naszym „szamańskim" projekcie dzielimy się przemyśleniami, trikami i automatyzacjami. Nie będziemy mówić, jaki BIM powinien być – pokażemy, jaki jest i co można z niego wycisnąć tu i teraz.

Wielokrotnie **widzieliśmy, jak 'jedyne słuszne' rozwiązania przegrywały w zderzeniu z realnymi wyzwaniami - codziennością projektantów, inżynierów i klientów** i z tego powodu nie zamierzamy nikogo przekonywać, że nasze podejście jest właściwe, rewolucyjne czy też najlepsze na świecie. Wiemy jednak, że działa – bo testowaliśmy je na froncie, tam, gdzie „słuszne" plany często przegrywają z rzeczywistością. Eksperymentowanie to w BIM-ie codzienność, a my nie boimy się próbować. Pozwolimy sobie również trochę ponarzekać oraz pożartować, ponieważ chcemy pokazać, że lubimy to, co robimy – rozwiązywać wyzwania stawiane na naszej ścieżce.

**Połączyło nas podejście stawiające efekt na pierwszym miejscu, z pominięciem otoczki marketingu, inżyniersko do celu.** Gdy kapłani tego czy innego narzędzia, formatu wymiany danych lub normy głosili ich wyższość nad innymi rozwiązaniami, my z szamańską zawziętością zajmowaliśmy się kończeniem kolejnego projektu.

<div class="collapsible-section">
    <button class="button expand collapsible" aria-expanded="false">Nie rozwijaj tego pola.</button>
    <div class="collapsible-content" aria-hidden="true">
        Odnalazłeś prawdę:
        <img src="/images/images-main/Image_About_BIMSpecialist.jpg" alt="BIM Specialist in a nutshell" style="width:100%;max-width:600px;display:block;margin:20px auto;">
    </div>
</div>

&nbsp;
