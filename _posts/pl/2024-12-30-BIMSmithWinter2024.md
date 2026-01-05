---
layout: post  
title: BIMsmith Winter Wonderland Holiday Revit Family Competition 2024
lang: pl
ref: 2024-12-30-BIMSmithWinter2024
date: 2024-12-30 12:00:00
author: Julian
excerpt: "Intensywny rok pełen projektów architektonicznych, wyzwań programistycznych i zaangażowania w ekosystem BIM."
filter_hash_list:
  - "Revit"
  - "Społeczność"
  - "Konkurs"
category: "Społeczność"
image: /images/images-posts/2026-01-03-DigitalDelivery-CDE (2).png
popularity: 8
---

<!--excerpt-->

## Pracowity Rok w Pigułce

To był intensywny rok pełen kilku projektów architektonicznych, w tym dwóch zamków w Polsce i dwóch dużych biur w Londynie. Po stronie programistycznej rozpocząłem prace nad kolejnymi pięcioma wtyczkami, z których dwie są już na Autodesk App Store - Extra i Viewer. Musiałem również zaktualizować wszystkie moje poprzednie wtyczki z .NET Framework 4.8 do .NET Core 8 i przy okazji nauczyłem się sporo nowego o Revit API. Do tego wziąłem udział w jednym konkursie architektonicznym, zrobiłem kilka ciekawych zdjęć lotniczych dla nowych inwestycji w Krakowie i zaangażowałem się w różne inne projekty. Pracowity rok!

## Wyzwanie BIMsmith Winter Wonderland

Ale w grudniu zawsze rezerwuję trochę czasu na wyzwanie BIMsmith Winter Wonderland. Co roku staram się pchać granice i poszerzać moją wiedzę o tym, co jest możliwe w Revit. Pisząc wtyczki, spędziłem dużo czasu testując rozwiązania na przykładowym projekcie Revit (BTW Paul Aubin, wielkie dzięki za jego udostępnienie!). Postanowiłem więc dodać trochę "śniegu" do Snowdon Towers. I zacząłem się zastanawiać, czy jestem w stanie stworzyć własny "system cząsteczkowy" pozwalający symulować "pierwszy śnieg" opadający na budynek.

## Tworzenie Rodziny Płatka Śniegu

Aby to osiągnąć, stworzyłem rodzinę "płatka śniegu". To stosunkowo prosta rodzina zawierająca podstawowe parametryczne formuły kontrolujące jej kształt. Ale dodatkowo posiada matematyczną formułę, która pozwala jej kołysać się na wietrze podczas opadania. Zrobiłem to w taki sposób, żeby podczas animacji móc kontrolować upadek tylko jednym parametrem - wysokością elementu (zasada KISS). Aby to wszystko było możliwe, musiałem też użyć sprytnej sztuczki umożliwiającej parametryczną długość z wartościami dodatnimi i ujemnymi – tak, można to zrobić w Revit.

Jak niektórzy z was mogą wiedzieć, wcześniej stworzyłem fajny i w pełni parametryczny płatek śniegu dla wyzwania BIMsmith Winter Wonderland, ale replikowanie go lub ulepszanie nie było tym razem celem. Zamiast tego próbowałem stworzyć coś małego i ekstremalnie zoptymalizowanego, żeby edycja tysięcy elementów nie stanowiła problemu. Wydajność była dla mnie dość ważna, ponieważ musiałem wyeksportować prawie 2500 klatek, żeby stworzyć tę krótką animację.

## Podsumowanie

Mam nadzieję, że wam się spodoba i Szczęśliwego Nowego Roku!

*Pro tip: Sposób budowy rodziny pozwala zamienić mój płatek śniegu na coś innego - możecie to przetestować i użyć np. żab!*

## Animacja Demo Płatka Śniegu

Poniżej możesz zobaczyć końcowy rezultat animacji:

<div style="padding-bottom:56.25%; position:relative; display:block; width: 100%">
  <iframe width="100%" height="100%"
    src="https://drive.google.com/file/d/115DX4RA_8W0TaZhMN4XY3b-sVaa5a54m/preview"
    frameborder="0" allowfullscreen="" style="position:absolute; top:0; left: 0">
  </iframe>
</div>

## Za Kulisami

Oto jak parametryczne rodziny współpracują ze sobą:

<div style="padding-bottom:56.25%; position:relative; display:block; width: 100%">
  <iframe width="100%" height="100%"
    src="https://drive.google.com/file/d/110Pr42SR6HTxoxysvCULbkoFwZ0VWGvl/preview"
    frameborder="0" allowfullscreen="" style="position:absolute; top:0; left: 0">
  </iframe>
</div>

## Kod C#

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
