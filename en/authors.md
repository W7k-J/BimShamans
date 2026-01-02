---
layout: page
title: Authors
lang: en
ref: authors
permalink: /en/authors/
cards_height: 500px
authors:
  - name: "Julian Wandzilak"
    intro: "Independent architect, designer, C# developer, and BIM coordinator with international experience across the UK, USA, and Poland. Pioneer in missing Revit's automation with published Revit plugins used by professionals worldwide."
    initial_active: 2
    feature_cards:
      - title: ""
        image_width_start: "300px"
        image_width: "300px"
        image_front: "/images/images-main/About_Authors_JulianWandzilak_Main.png"
        image_back: "/images/images-main/About_Authors_JulianWandzilak_Alter.webp"
      - title: "Independent Architect & Programmer"
        content: "I've gained my professional experience working in the UK (Manchester, London), USA (Chicago) and Poland (Kraków). I was also involved in architectural projects in Australia and Norway. During my professional life I've participated in preparing **masterplans, factories, healthcare projects, education, high-end residential projects, high-rise buildings, interiors for a museum, extensions and refurbishment of heritage-listed projects and small houses.** \n\n All of it showed me that everywhere in the world we have a similar problem - 'WE NEED MORE AUTOMATIONS'. Sadly no one is interested in doing it for us! So I decided to take matters into my own hands. I learned to program and started publishing. You can find my plugins for Revit on the Autodesk App Store – Drafter and Leveler. They automate the work of architects and engineers, allowing them to complete tasks faster and with predictable repeatability."
      - title: "Expertise & Tools"
        content: "**Dynamo scripts** | **Revit automation** | **C# development** | **Plugin creation** | **Workflow optimization** | **Data management**\n\n- Published **Drafter** and **Leveler** plugins on Autodesk App Store\n- Drafter contains ~180 automations for streamlined daily work\n- **UAV pilot** (VLOS and BVLOS, up to 25kg)\n- **3D modeling**, 2D & 3D graphic design, brand identities\n- Laser scanning for construction (point cloud processing)"
      - title: "Specialization Philosophy"
        content: "I believe that **\"specialisation is for insects\"** — the best solutions come from interdisciplinary thinking. I am a UAV pilot and photographer (You can find me in some books). And I do 3d models, 2d & 3d graphic design, brand identities and laser scanning for construction (point clouds are so cool) And I am probably interested in too many things but as I said, 'specialisation is for insects…'."

  - name: "Natalia Gawlik"
    intro: "BIM Coordinator with expertise in large-scale infrastructure projects. Specialist in data management, information-driven modeling, and automation using Dynamo, Grasshopper, and Python. Passionate about converting \\\"I\\\" in BIM from modeling to Information."
    initial_active: 2
    feature_cards:
      - title: ""
        image_width_start: "300px"
        image_width: "300px"
        image_front: "/images/images-main/About_Authors_NataliaGawlik_Main.jpg"
        image_back: "/images/images-main/About_Authors_NataliaGawlik_Alter.webp"
      - title: "Infrastructure BIM Coordinator & Workflow Specialist"
        content: "I'm a BIM Coordinator with a strong background in large-scale infrastructure projects. My background is in land surveying, but over time, my focus shifted toward BIM and it became the field where I could focus on everything I enjoy — technology, programming and problem-solving. Over the past decade, my career has taken me from photogrammetry and laser scanning, through drone mapping and 3D modeling (Scan to BIM), all the way to BIM coordination, automation and project management using VDC methodology on public projects in Norway."
      - title: "Expertise & Tools"
        content: "**Focus on the 'I' in BIM** — Information is what gives models meaning. I automate the process of creating and managing property sets in models.\n\n**Tools & Skills:**\n- **Dynamo** | **Grasshopper** | **Quadri Automation Tool**\n- **Python** (IfcOpenShell) for IFC processing\n- **Property set management** & data consistency\n- **Scan to BIM** workflows\n- **VDC methodology** implementation\n- **3D model optimization** & standardization"
      - title: "Specialization Philosophy"
        content: "To be honest, I'm **too lazy for boring tasks**. I can't stand doing the same thing many times if I can automate it. Yes, I may have spent hours coding just to skip a 10-minute task. No regrets 😄\n\nFor me, automation isn't just a technical solution — it's what gives me the freedom to do more of what I love: **hiking**, **training**, and **relaxing on the terrace with my charming cat** 🐾"

  - name: "Piotr Spyra"
    intro: "BIM Coordinator and BIM Manager with strong civil engineering background. Specialist in coordination, data analysis, material take-offs and value delivery between construction site and design "
    initial_active: 2
    feature_cards:
      - title: ""
        image_width_start: "300px"
        image_width: "300px"
        image_front: "/images/images-main/About_Authors_PiotrSpyra_Main.png"
        image_back: "/images/images-main/About_Authors_PiotrSpyra_Alter.webp"
      - title: "BIM Coordinator, Data Analyst & Structural Designer"
        content: "I'm the kind of person who sees a repetitive task and thinks: **'I won't waste my colleagues' or my own potential on endless clicking...'** \n\nI believe **automation is the key** to minimizing human errors, cutting out tedious, time-consuming work, and ensuring thorough checks before delivery. **Standardization**, on the other hand, is the foundation of successful automation. \n\n**BIM Coordinator** in Advanced Technology and Life Science, **BIM Manager** in Real Estate\n, **Civil Engineer** with structural design expertise\n, **On-site experience** & unlimited building license.\n\n"
      - title: "Expertise & Tools"
        content: "**Specializations:**\n- **Revit & Dynamo** scripting\n- **Material take-offs** (Excel & Power BI)\n- **Clash management** & resolution\n- **Data-driven insights** for decision-making\n- **Standards & libraries** development"
      - title: "Specialization Philosophy"
        content: "I'm a **fan of the BIM concept** as a major leap forward in transparency, standardization, process organization, and reducing wasted effort in the construction industry.\n\nI focus on **eliminating inefficiencies** and overproduction, **developing data workflows**, and **maximizing their reuse** across the widest possible range of use cases. I support companies in implementing those **BIM 'use cases' with the highest ROI** and potential to significantly improve daily work.\n\n**In my free time:** Indoor and outdoor climbing, long hiking trips"
---

## About Authors

> The term **_shamanism_** comes from the Manchu-Tungus word **_šaman_**. The noun is formed from the verb **_ša-_**, which means **_to&nbsp;know_**. A shaman is literally the **_'one who knows'_**.
<p style="text-align: right;"><a href="https://www.britannica.com/topic/shamanism">~ Britannica.com</a></p>

The team behind BIM Shamans brings diverse expertise and a shared passion for solving real-world BIM challenges through **automation**, **standardization**, and **pragmatic engineering**.

{% for author in page.authors %}

#### {{ author.name }}

{{ author.intro }}

{% include sections/feature-cards.html cards=author.feature_cards initial_active=author.initial_active %}

{% endfor %}
