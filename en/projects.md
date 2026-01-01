---
layout: page
title: Projects
lang: en
ref: projects
permalink: /en/projects/
feature_cards:
  - title: "Observation"
    content: For years, **we have been closely following the evolution of BIM and the technological solutions** that come with it. We witnessed how the studios and companies we worked for purchased their first licenses for "BIM software," appointed their first BIM managers, and took on the challenge of their first standardization efforts. We observed it all up close - actively participating in design, coordination, standardization, modeling, and data management processes ourselves. We created the first automations, Dynamo scripts, workflows, and even devised tricks to bypass the limitations imposed by software developers. Over time, **we became 'those who know'** - the ones people turn to for answers.
    icon: "/images/icons/icon-1.svg"
  - title: "Expertise"
    content: "Card content 2"
    icon: "/images/icons/icon-2.svg"
  - title: "Tryouts"
    content: "Card content 3"
    icon: "/images/icons/icon-3.svg"
  - title: "Solutions"
    content: "Card content 4"
    icon: "/images/icons/icon-4.svg"
  - title: "Reality"
    content: "Card content 5"
    icon: "/images/icons/icon-5.svg"
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

> The term **_shamanism_** comes from the Manchu-Tungus word **_šaman_**. The noun is formed from the verb **_ša-_**, which means **_to&nbsp;know_**. A shaman is literally the **_'one who knows'_**.
<p style="text-align: right;"><a href="https://www.britannica.com/topic/shamanism">~ Britannica.com</a></p>

#### TL;DR
We solve problems which satellites civil enginneering, BIM technology, automation and data analysis. What unites us is a results-first approach - cutting through the marketing fluff and taking a straight engineering path to the goal. **Project: BIM Shamans** is the space to share thoughts and solutions worth mentioned outside our everyday talks.

## About the project

For years, **we have been closely following the evolution of BIM and the technological solutions** that come with it. We witnessed how the studios and companies we worked for purchased their first licenses for "BIM software," appointed their first BIM managers, and took on the challenge of their first standardization efforts. We observed it all up close - actively participating in design, coordination, standardization, modeling, and data management processes ourselves. We created the first automations, Dynamo scripts, workflows, and even devised tricks to bypass the limitations imposed by software developers. Over time, **we became 'those who know'** - the ones people turn to for answers.

**We've always been on the front line, where BIM HAPPENS** - not just in theories and discussions but in the daily grind of project challenges. In our "shamanic" project, we share insights, tricks, and automations. We won't be preaching what BIM should be - we'll show you what it is and how much you can squeeze out of it, right here and now.

Time and again, **we've seen how the so-called "only right" solutions collapse when faced with real-world challenges - the daily struggles of designers, engineers, and clients**. That's why we're not here to convince anyone that our approach is the ultimate, the most revolutionary, or the best in the world. But we do know that it works - we've tested it on the front lines, where "correct" plans often lose to reality. Experimentation is a daily practice in BIM, and we're not afraid to try new things. We'll also allow ourselves a bit of complaining and a few jokes, because we want to show that we enjoy what we do - solving the challenges that cross our path.

**What brought us together was a results-driven mindset—one that skips the marketing fluff and takes a straight engineering route to the goal.** While the high priests of this or that tool, data exchange format, or standard preached their superiority, we - like stubborn shaman, were busy finishing yet another project.

<div class="collapsible-section">
    <button class="button expand collapsible" aria-expanded="false">Do not expand this field.</button>
    <div class="collapsible-content" aria-hidden="true">
        You've found the truth:
        <img src="/images/images-main/Image_About_BIMSpecialist.jpg" alt="BIM Specialist in a nutshell" style="width:100%;max-width:600px;display:block;margin:20px auto;">
    </div>
</div>

{% include sections/feature-cards.html %}

&nbsp;
