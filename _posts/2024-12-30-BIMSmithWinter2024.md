---
layout: post  
title: BIMsmith Winter Wonderland Holiday Revit Family Competition 2024
date: 2024-12-30 12:00:00
author: Julian
---
![PostPage](/images/2024_BlogPost/BimSmithWWL_Cover.jpg)

<!--excerpt-->

<div>
  <div style="position:relative;padding-top:56.25%;">
    <iframe src="https://www.youtube.com/embed/HtpMSAjAEd8?si=EaMDue0p5_Vxd4cy" frameborder="0" allowfullscreen
      style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
  </div>
</div>

It was an intensive year full of several architectural projects, including two castles in Poland and two large offices in London, along with some smaller things. On my programming front, I’ve started coding another five plugins, two of which are already on the Autodesk App Store - Extra and Viewer. Additionally, I had to upgrade all my previous plugins from .NET Framework 4.8 to .NET Core 8, and I had plenty of fun learning more about the Revit API. On top of that, I took part in one architectural competition, I did some cool aerial photos for new developments in Cracow and got involved in various other projects. It was a busy year!

But in December, I always reserve some time for the BIMsmith Winter Wonderland challenge. Each year, I try to push myself and expand my understanding of what is possible in Revit. While writing my plugins, I spent a lot of time testing my solutions on Revit sample project (BTW Paul Aubin, big thanks for making it!). So I decided to add some “snow” to Snowdon Towers. And it made me wonder if I’m able to create my own “particle system” allowing to simulate “the first snow” falling on it.

To achieve that, I made a "snowflake" family. It is a relatively simple family, and it includes basic parametric formulas to control its shape. But on top of that, it has a mathematical formula that allows it to swing in the wind as it falls. I did it this way so later while animating I was able to control its fall with just a single parameter, element’s altitude (KISS rule). Also, to make the whole thing possible, I had to use a clever trick to enable parametric length with both positive and negative values – yeap, you can do it in Revit.

As some of you may know, I had previously created a cool & fully parametric snowflake for the BIMsmith Winter Wonderland challenge, but replicating it and/or making it better was not the aim this time. Instead, I was trying to make something small and extremely well optimized so editing thousands of them wouldn't be an issue. Performance was rather important to me, as I had to export almost 2,500 frames to create this short animation.

I hope you will like it, and Happy New Year!

//The way the family is built allows swapping my snowflake for something else - feel free to test it and use frogs instead.

Below some images showing how everything works:  

<div style="padding-bottom:56.25%; position:relative; display:block; width: 100%">
  <iframe width="100%" height="100%"
    src="https://drive.google.com/file/d/115DX4RA_8W0TaZhMN4XY3b-sVaa5a54m/preview"
    frameborder="0" allowfullscreen="" style="position:absolute; top:0; left: 0">
  </iframe>
</div>
  
![Internal Flake Family](/images/2024_BlogPost/BimSmithWWL_ParametricFlake_1.png)  
  
![Movement family](/images/2024_BlogPost/BimSmithWWL_ParametricFlake_2.png)  
  
<div style="padding-bottom:56.25%; position:relative; display:block; width: 100%">
  <iframe width="100%" height="100%"
    src="https://drive.google.com/file/d/110Pr42SR6HTxoxysvCULbkoFwZ0VWGvl/preview"
    frameborder="0" allowfullscreen="" style="position:absolute; top:0; left: 0">
  </iframe>
</div>

The code in C#:  

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