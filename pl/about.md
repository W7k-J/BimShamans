---
layout: page
title: O nas
lang: pl
ref: about
permalink: /pl/about/
---

<style>
.authors-container {
    --image-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;

    .author-card {
        display: flex;
        align-items: start;
        gap: 2rem;
        padding: 1rem;
        
        .author-image-section {
            flex: 0 0 250px;
        }
        
        .author-content-section {
            flex: 1;
            text-align: justify;
            
            h3 {
                margin-top: 0;
                margin-bottom: 1rem;
                color: var(--firstGray-color);
                text-align: left;
            }

            p {
                margin-bottom: 1rem;
                line-height: 1.6;
            }
        }

        .author-image-container {
            position: relative;
            width: 100%;
            aspect-ratio: 2/3;
            overflow: hidden;
            border-radius: var(--image-radius);
            transition: box-shadow 0.3s ease-in-out;

            &:hover {
                box-shadow: 0 3px 20px -3px var(--firstBlue-color);
            }

            .author-image {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: var(--image-radius);
                transition: opacity 0.4s ease;

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

Od lat **aktywnie obserwujemy rozwój BIM-u i towarzyszących mu rozwiązań technologicznych**. Widzieliśmy, jak pracownie i firmy, w których pracowaliśmy, zakupywały pierwsze licencje na „oprogramowanie do BIM-u", mianowały pierwszego BIM managera, a także podejmowały trud pierwszych standaryzacji. Obserwowaliśmy to z bliska, sami będąc uczestnikami procesów projektowych, koordynacyjnych, standaryzacyjnych, modelarskich i zarządzania danymi. Tworzyliśmy pierwsze automatyzacje, skrypty w Dynamo, zasady pracy oraz wymyślaliśmy triki łamiące ograniczenia nałożone przez twórców oprogramowania. Z czasem **staliśmy się 'tymi, którzy wiedzą'** – osobami, do których inni przychodzą w poszukiwaniu odpowiedzi.

Zawsze **byliśmy i jesteśmy tam, gdzie BIM się DZIEJE – nie tylko w teoriach i dyskusjach, ale w codziennych wyzwaniach projektowych**. W naszym „szamańskim" projekcie dzielimy się przemyśleniami, trikami i automatyzacjami. Nie będziemy mówić, jaki BIM powinien być – pokażemy, jaki jest i co można z niego wycisnąć tu i teraz.

Wielokrotnie **widzieliśmy, jak 'jedyne słuszne' rozwiązania przegrywały w zderzeniu z realnymi wyzwaniami - codziennością projektantów, inżynierów i klientów** i z tego powodu nie zamierzamy nikogo przekonywać, że nasze podejście jest właściwe, rewolucyjne czy też najlepsze na świecie. Wiemy jednak, że działa – bo testowaliśmy je na froncie, tam, gdzie „słuszne" plany często przegrywają z rzeczywistością. Eksperymentowanie to w BIM-ie codzienność, a my nie boimy się próbować. Pozwolimy sobie również trochę ponarzekać oraz pożartować, ponieważ chcemy pokazać, że lubimy to, co robimy – rozwiązywać wyzwania stawiane na naszej ścieżce.

**Połączyło nas podejście stawiające efekt na pierwszym miejscu, z pominięciem otoczki marketingu, inżyniersko do celu.** Gdy kapłani tego czy innego narzędzia, formatu wymiany danych lub normy głosili ich wyższość nad innymi rozwiązaniami, my z szamańską zawziętością zajmowaliśmy się kończeniem kolejnego projektu.

## O autorach

<div class="authors-container">
    <div class="author-card">
        <div class="author-image-section">
            <div class="author-image-container">
                <img class="author-image front" src="/images/images-main/julian-1.jpg" alt="Julian Wandzilak">
                <img class="author-image back" src="/images/images-main/julian-2.jpg" alt="Julian Wandzilak - alternatywne">
            </div>
        </div>
        <div class="author-content-section">
            <h3>Julian Wandzilak</h3>
            <p>I am an independent architect, designer, C# developer, and a BIM coordinator.</p>

            <p>I've gained my professional experience working in the UK (Manchester, London), USA (Chicago) and Poland (Kraków). I was also involved in architectural projects in Australia and Norway.</p>

            <p>During my professional life I've been involved in preparing masterplans, factories, healthcare projects, education, high-end residential projects, high-rise buildings (residential & student), interiors for a museum, extensions and refurbishment of heritage-listed projects and small houses. I also took part in some competitions. Lately I did some concepts for playgrounds and historic gardens…</p>

            <p>All of it showed me that everywhere in the world we have a similar problem → "WE NEED MORE AUTOMATIONS". Sadly no one is interested in doing it for us!</p>

            <p>Because of that I decided to do it myself. I learnt programming and so far published two plugins for Autodesk Revit – Drafter and Leveler. They automate the work of architects and engineers, allowing them to do their tasks faster. Drafter is one of the largest plugins for Revit out there containing around 180 automations helping you to work faster!</p>

            <p>You can get them from Autodesk App Store, and both were featured as the most popular paid plugins there at some point during last 6 months! And more apps are under construction!</p>

            <p>Also, I am a UAV pilot (VLOS and BVLOS, up to 25kg) and photographer (You can find me in some books). And I do 3d models, 2d & 3d graphic design, brand identities and laser scanning for construction (point clouds are so cool) 😉 And I am probably interested in too many things but "specialisation is for insects…".</p>
        </div>
    </div>
    
    <div class="author-card">
        <div class="author-image-section">
            <div class="author-image-container">
                <img class="author-image front" src="/images/images-main/natalia-1.jpg" alt="Natalia Gawlik">
                <img class="author-image back" src="/images/images-main/natalia-2.jpg" alt="Natalia Gawlik - alternatywne">
            </div>
        </div>
        <div class="author-content-section">
            <h3>Natalia Gawlik</h3>
            <p>I'm a BIM Coordinator who is working on large-scale infrastructure projects, especially railways. With nine years of experience, I've worked on diverse projects, from photogrammetry, 3D laser scanning, drone and land surveying, 3D modelling to BIM.</p>

            <p>At work, my focus is on the 'I' in BIM – the information. After all, BIM without information is just a fancy 3D model.</p>

            <p>I'm always on the lookout for automation opportunities because, let's face it, no one wants to spend their day manually entering data into a model.</p>

            <p>Honestly, I'm pretty lazy and can't stand doing boring tasks over and over… That's why I try to find the fastest, most efficient ways to automate my work.</p>

            <p>Automation isn't just a passion; it's a necessity — so I can spend more time hiking, training or chilling on the terrace with my adorable cat 🐾</p>

            <p>If there's a shortcut, I've probably already coded it 😊</p>
        </div>
    </div>
    
    <div class="author-card">
        <div class="author-image-section">
            <div class="author-image-container">
                <img class="author-image front" src="/images/images-main/About_Authors_PiotrSpyra_Main.png" alt="Piotr Spyra">
                <img class="author-image back" src="/images/images-main/About_Authors_PiotrSpyra_Alter.jpg" alt="Piotr Spyra - alternatywne">
            </div>
        </div>
        <div class="author-content-section">
            <h3>Piotr Spyra</h3>
            <p>I'm the kind of person who sees a repetitive task and thinks:</p>

            <p>"I won't waste my colleagues' or my own potential on endless clicking…" 🤔 You are here, so we've got that in common 🫡</p>

            <p>I believe automation is the key to minimizing human errors, cutting out tedious, time-consuming work, and ensuring thorough checks before delivery.</p>

            <p>BIM Coordinator, BIM Manager, and Civil Engineer with structural design expertise, on-site experience, and an unlimited building license for managing and design. I'm currently working as a BIM Coordinator in the Advanced Technology and Life Science industry and as a BIM Manager in Real Estate.</p>

            <p>Throughout my professional journey, I've spent hours creating and controlling models for material take-offs, managing clashes, looking for potential technical issues (spinning a model from left to right 😎), and verifying input and output data.</p>

            <p>I'm a huge fan of the BIM concept as a significant advancement and transparency improvement for the civil engineering industry. Professionally, I focus on eliminating inefficiencies and overproduction, developing useful data flows, and creating effective checklists to control them. In my free time, I enjoy both indoor and outdoor climbing and long hiking trips.</p>
        </div>
    </div>
</div>

<div class="collapsible-section">
    <button class="button expand collapsible" aria-expanded="false">Nie klikać</button>
    <div class="collapsible-content" aria-hidden="true">
        <img src="/images/images-main/Image_About_BIMSpecialist.jpg" alt="BIM Specialist in a nutshell" style="width:100%;max-width:600px;display:block;margin:20px auto;">
    </div>
</div>

&nbsp;