---
layout: post
title: BIMsmith Winter Wonderland Holiday Revit Family Competition 2024
lang: en
ref: 2024-12-30-BIMSmithWinter2024
date: 2024-12-30 12:00:00
author: Julian
excerpt: "How I built a custom particle system in Revit to simulate falling snow - complete with wind physics, 2,500 animation frames, and the code to make it happen."
filter_hash_list:
  - "Revit"
  - "Community"
  - "Competition"
category: "Community"
image: /images/images-posts/2026-01-03-DigitalDelivery-CDE (2).png
popularity: 8
---

<!--excerpt-->

## What I Built: A Particle System in Revit

**The challenge:** Create a realistic falling snow animation using only Revit families and parameters.

**The result:** A custom snowflake family with wind physics, animated across 2,500 frames on the Snowdon Towers sample project.

---

## Why Take on This Challenge?

Every December, I reserve time for the BIMsmith Winter Wonderland competition. It's my annual excuse to push Revit's boundaries and discover what's actually possible.

This year's question: *Can I build a working particle system in Revit?*

While testing my plugins on Paul Aubin's Revit sample project (thanks Paul!), I decided to make it snow on Snowdon Towers. Not just static snow - animated snowflakes falling and swirling in the wind.

---

## How the Snowflake Family Works

The snowflake family looks simple, but it packs some clever engineering:

- **Parametric shape control** - Basic formulas adjust the snowflake geometry
- **Wind physics** - A mathematical formula creates realistic swaying as it falls
- **Single-parameter animation** - The entire fall is controlled by one value: altitude
- **Positive AND negative lengths** - Yes, you can do this in Revit (it's a neat trick)

> **Design principle:** Following the KISS rule, I wanted to animate thousands of snowflakes by changing just one parameter per element.

---

## Performance: Why Optimization Mattered

I've built [fancy parametric snowflakes before](https://bimsmith.com/), but this time the goal was different.

**Previous approach:** Complex, detailed, visually impressive

**This year's approach:** Minimal, optimized, animation-ready

The reason? **I needed to export nearly 2,500 frames.** With thousands of snowflake instances updating per frame, every bit of optimization counted.

---

## Try It Yourself

Happy New Year! I hope you enjoy the animation.

> **Pro tip:** The family structure supports swapping geometries. Replace the snowflake with frogs, leaves, or confetti - the physics still work!

## Snowflake Animation Demo

Below you can see the final animation result:

<div style="padding-bottom:56.25%; position:relative; display:block; width: 100%">
  <iframe width="100%" height="100%"
    src="https://drive.google.com/file/d/115DX4RA_8W0TaZhMN4XY3b-sVaa5a54m/preview"
    frameborder="0" allowfullscreen="" style="position:absolute; top:0; left: 0">
  </iframe>
</div>

## Behind the Scenes

Here's another look at how the parametric families work together:

<div style="padding-bottom:56.25%; position:relative; display:block; width: 100%">
  <iframe width="100%" height="100%"
    src="https://drive.google.com/file/d/110Pr42SR6HTxoxysvCULbkoFwZ0VWGvl/preview"
    frameborder="0" allowfullscreen="" style="position:absolute; top:0; left: 0">
  </iframe>
</div>

## The Code  

```c#
using Autodesk.Revit.DB;
using Autodesk.Revit.UI;
using System.Collections.Generic;
using System.Linq;

namespace W7k.Drafter
{
    [Autodesk.Revit.Attributes.Transaction(Autodesk.Revit.Attributes.TransactionMode.Manual)]
    internal class TestAnimation : IExternalCommand
    {
        public Result Execute(ExternalCommandData commandData, ref string message, ElementSet elementSet)
        {
            // SETUP
            Autodesk.Revit.ApplicationServices.Application app = commandData.Application.Application;
            Autodesk.Revit.DB.Document doc = commandData.Application.ActiveUIDocument.Document;
            UIDocument uidoc = new UIDocument(doc);

            //SELECTION
            var collectorByBuiltInCategory = new W7k.RevitAPI.CollectorByBuiltInCategory(doc, BuiltInCategory.OST_Site);
            List<Element> elements = (from s in collectorByBuiltInCategory.GetElements() 
                                      where s is FamilyInstance fI && fI.Symbol.FamilyName == "SnowFlake" 
                                      select s).ToList();
            TaskDialog.Show("Count", elements.Count.ToString());


            double step = 0.05;
            /* Code to update the animation after crash
            using Transaction t2 = new Transaction(doc, $"Previous animation");
            {
                t2.Start();
                foreach (Element el in elements)
                {
                    Parameter param = el.GetParameters("Altitude").First();
                    param.Set(param.AsDouble() - step * 1013);
                }
                t2.Commit();
            }
            */

            //for (int i = 1013; i < 3000; i++)

            for (int i = 0; i < 3000; i++)
            {
                using Transaction t1 = new Transaction(doc, $"Animate {i}");
                {
                    t1.Start();
                    foreach (Element el in elements)
                    {
                        Parameter param = el.GetParameters("Altitude").First();
                        param.Set(param.AsDouble() - step);
                    }
                    t1.Commit();
                }

                uidoc.RefreshActiveView();

                ImageExportOptions options = new ImageExportOptions
                {
                    FilePath = @"D:\test\" + i + ".png",
                    ZoomType = ZoomFitType.Zoom,
                    HLRandWFViewsFileType = ImageFileType.PNG,
                    ImageResolution = ImageResolution.DPI_300,
                    ShouldCreateWebSite = false
                };
                options.ExportRange = ExportRange.CurrentView;
                doc.ExportImage(options);
            }
            return Result.Succeeded;
        }
    }
}

```  