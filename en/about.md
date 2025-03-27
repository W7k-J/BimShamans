---
layout: page
title: About
lang: en
ref: about
permalink: /en/about/
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
                overflow: visible;

                &:hover {
                box-shadow: 0 0 20px -2px var(--firstBlue-color);
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

## Project: BIM Shamans

> The term **_shamanism_** comes from the Manchu-Tungus word **_šaman_**. The noun is formed from the verb **_ša-_**, which means **_to&nbsp;know_**. **_A shaman_** is literally **_'one who knows'_**.
<p style="text-align: right;"><a href="https://www.britannica.com/topic/shamanism">~ Britannica.com</a></p>

#### TL;DR
We solve problems which satellites civil enginneering, BIM technology, automation and data analysis. What unites us is a results-first approach - cutting through the marketing fluff and taking a straight engineering path to the goal. **Project: BIM Shamans** is the space to share thoughts and solutions worth mentioned outside our everyday talks.

## About the project

For years, **we have been closely following the evolution of BIM and the technological solutions** that come with it. We witnessed how the studios and companies we worked for purchased their first licenses for “BIM software,” appointed their first BIM managers, and took on the challenge of their first standardization efforts. We observed it all up close - actively participating in design, coordination, standardization, modeling, and data management processes ourselves. We created the first automations, Dynamo scripts, workflows, and even devised tricks to bypass the limitations imposed by software developers. Over time, **we became 'those who know'** - the ones people turn to for answers.

**We've always been on the front line, where BIM HAPPENS** - not just in theories and discussions but in the daily grind of project challenges. In our “shamanic” project, we share insights, tricks, and automations. We won’t be preaching what BIM should be - we’ll show you what it is and how much you can squeeze out of it, right here and now.

Time and again, **we’ve seen how the so-called “only right” solutions collapse when faced with real-world challenges - the daily struggles of designers, engineers, and clients**. That’s why we’re not here to convince anyone that our approach is the ultimate, the most revolutionary, or the best in the world. But we do know that it works - we’ve tested it on the front lines, where “correct” plans often lose to reality. Experimentation is a daily practice in BIM, and we’re not afraid to try new things. We’ll also allow ourselves a bit of complaining and a few jokes, because we want to show that we enjoy what we do - solving the challenges that cross our path.

**What brought us together was a results-driven mindset—one that skips the marketing fluff and takes a straight engineering route to the goal.** While the high priests of this or that tool, data exchange format, or standard preached their superiority, we - like stubborn shaman, were busy finishing yet another project.

## About authors

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
            <p>I am an independent architect, designer, C# developer, and a BIM coordinator.</p>

            <p>I've gained my professional experience working in the UK (Manchester, London), USA (Chicago) and Poland (Kraków). I was also involved in architectural projects in Australia and Norway.</p>

            <p>During my professional life I've been involved in preparing masterplans, factories, healthcare projects, education, high-end residential projects, high-rise buildings (residential & student), interiors for a museum, extensions and refurbishment of heritage-listed projects and small houses. I also took part in some competitions. Lately I did some concepts for playgrounds and historic gardens…</p>

            <p>All of it showed me that everywhere in the world we have a similar problem - "WE NEED MORE AUTOMATIONS". Sadly no one is interested in doing it for us!</p>

            <p>So I decided to take matters into my own hands. I learned to program and started publishing. You can find my plugins for Revit on the Autodesk App Store – Drafter and Leveler. They automate the work of architects and engineers, allowing them to complete tasks faster and with predictable repeatability across multiple areas at once. Drafter is one of the largest plugins for Revit, containing around 180 automations that help streamline daily work! More apps are on the way!</p>

            <p>You can get them from Autodesk App Store, and both were featured as the most popular paid plugins there at some point during last 6 months! And more apps are under construction!</p>

            <p>Also, I am a UAV pilot (VLOS and BVLOS, up to 25kg) and photographer (You can find me in some books). And I do 3d models, 2d & 3d graphic design, brand identities and laser scanning for construction (point clouds are so cool) 😉 And I am probably interested in too many things but "specialisation is for insects…".</p>
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
            <p>I'm a BIM Coordinator with a strong background in large-scale infrastructure projects. My background is in land surveying, but over time, my focus shifted toward BIM and it became the field where I could focus on everything I enjoy - technology, programming and problem-solving. Over the past decade, my career has taken me from photogrammetry and laser scanning, through drone mapping and 3D modeling (Scan to BIM), all the way to BIM coordination, automation and project management using VDC methodology on public projects in Norway.</p>

            <p>To me, BIM isn’t just about 3D models—it’s about the data that gives them meaning. Without solid, structured information, even the most impressive model is just a geometric representation - nice to look at, but not very useful. That’s why I focus on the “I” in BIM—Information. With tools like Dynamo, Grasshopper, the Automation Tool in Quadri, and Python (using IfcOpenShell), I automate the process of creating and managing property sets in models. My goal is to make sure models are complete, consistent, and up to standard—without wasting hours on mindless, repetitive tasks.</p>
            
            <p>To be honest, I’m too lazy for boring tasks. I can't stand doing the same thing many times if I can automate it. Yes, I may have spent hours coding just to skip a 10-minute task. No regrets 😄 </p>

            <p> For me, automation isn’t just a technical solution—it’s what gives me the freedom to do more of what I love: hiking, training, and relaxing on the terrace with my charming cat 🐾.</p>
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
            <p>I'm the kind of person who sees a repetitive task and thinks: "I won't waste my colleagues' or my own potential on endless clicking…" 🤔 You are here, so we've got that in common 🫡</p>

            <p>I believe automation is the key to minimizing human errors, cutting out tedious, time-consuming work, and ensuring thorough checks before delivery.</p>

            <p>BIM Coordinator, BIM Manager, and Civil Engineer with structural design expertise, on-site experience, and an unlimited building license for managing and design. I'm currently working as a BIM Coordinator in the Advanced Technology and Life Science industry and as a BIM Manager in Real Estate.</p>

            <p>Throughout my professional journey, I've spent hours creating and controlling models for material take-offs, managing clashes, looking for potential technical issues (spinning a model from left to right 😎), and verifying input and output data.</p>

            <p>I'm a fan of the BIM concept as a major leap forward in transparency, efficiency, and reducing wasted effort in the construction industry. I focus on eliminating inefficiencies and overproduction, optimizing data workflows, and creating effective checklists for their verification.</p>
            
            <p>In my free time, I enjoy both indoor and outdoor climbing and long hiking trips.</p>
        </div>
    </div>
</div>

<div class="collapsible-section">
    <button class="button expand collapsible" aria-expanded="false">Do not expand this field.</button>
    <div class="collapsible-content" aria-hidden="true">
        You've found the truth:
        <img src="/images/images-main/Image_About_BIMSpecialist.jpg" alt="BIM Specialist in a nutshell" style="width:100%;max-width:600px;display:block;margin:20px auto;">
    </div>
</div>

&nbsp;

