"use strict";
var Aufgabe6;
(function (Aufgabe6) {
    const blume1 = {
        id: "blume1",
        bild: "blume1.jpg",
        name: "Cupid Pink",
        beschreibung: "Cupid Pink ist ein Trockenstrauß aus Ruscus, Schleierkraut, Rhodanthe und Setaria.",
        preis: 30.00,
        kategorie: "blumen"
    };
    const blume2 = {
        id: "blume2",
        bild: "blume2.jpg",
        name: "Clara Flower",
        beschreibung: "Die Stängel von Astromelia und Bouvardia vermischen sich mit den zarten Rosen zu einem beeindruckenden Blumenstrauß.",
        preis: 34.99,
        kategorie: "blumen"
    };
    const blume3 = {
        id: "blume3",
        bild: "blume3.jpg",
        name: "Arielle",
        beschreibung: "Diese Farbe symbolisiert die Leidenschaft und Liebe",
        preis: 29.95,
        kategorie: "blumen"
    };
    const blume4 = {
        id: "blume4",
        bild: "blume4.jpg",
        name: "Red Evie",
        beschreibung: "In diesem Blumenstrauß haben wir die Pfingstrosen Sarah Bernhardt, Duchesse de Nemour zusammen mit Nelken,Lavendel und Eukalyptus vereint.",
        preis: 32.99,
        kategorie: "blumen"
    };
    const blume5 = {
        id: "blume5",
        bild: "blume5.jpg",
        name: "Escada",
        beschreibung: "Lass dich von weißen Pfingstrosen, weißen Pfingstrosen, weißen Nelken, rosa Limonium- und Eukalyptus verzaubern.",
        preis: 25.99,
        kategorie: "blumen"
    };
    const blume6 = {
        id: "blume6",
        bild: "blume6.jpg",
        name: "Louvre",
        beschreibung: "Die Zusammensetzung aus Triticum, Hafer, Phalaris und Munigras versprechen eine Reise ins Blumenparadies.",
        preis: 24.95,
        kategorie: "blumen"
    };
    const blume7 = {
        id: "blume7",
        bild: "blume7.jpg",
        name: "Spring Vibes",
        beschreibung: "Eine Kombination aus rosa Lilien und Astromelien wird jede Ecke mit Aroma füllen.",
        preis: 23.00,
        kategorie: "blumen"
    };
    const blume8 = {
        id: "blume8",
        bild: "blume8.jpg",
        name: "Harper",
        beschreibung: "Trockenblumen sind mehr als nur getrocknete Blumen.",
        preis: 30.00,
        kategorie: "blumen"
    };
    const blume9 = {
        id: "blume9",
        bild: "blume9.jpg",
        name: "Rainbow Flowers",
        beschreibung: "Orangefarbenen Pfirsich-Rosen bilden zusammen mit den lila Rosen ein gutes Team.",
        preis: 16.99,
        kategorie: "blumen"
    };
    const blume10 = {
        id: "blume10",
        bild: "blume10.jpg",
        name: "Coco Loco",
        beschreibung: "Die rosa Rosen mit dem Limonium und dem Eukalyptus scheitern einfach nie.",
        preis: 29.99,
        kategorie: "blumen"
    };
    const blume11 = {
        id: "blume11",
        bild: "blume11.jpg",
        name: "Natural Optimist",
        beschreibung: "Die rosa Rosen haben viele Bedeutungen.",
        preis: 18.99,
        kategorie: "blumen"
    };
    const blume12 = {
        id: "blume12",
        bild: "blume12.jpg",
        name: "White Light",
        beschreibung: "Spüre bereits beim Anblick des White Light Blumenstraußes, Harmonie und Gelassenheit.",
        preis: 23.95,
        kategorie: "blumen"
    };
    const vase1 = {
        id: "vase1",
        bild: "vase1.jpg",
        name: "Vase Notches",
        beschreibung: "Vase aus Glas. Höhe 20cm.",
        preis: 15.00,
        kategorie: "vasen"
    };
    const vase2 = {
        id: "vase2",
        bild: "vase2.jpg",
        name: "Vase Virbel",
        beschreibung: "Tolle Vase aus Porzellan in der Farbe beige.",
        preis: 14.99,
        kategorie: "vasen"
    };
    const vase3 = {
        id: "vase3",
        bild: "vase3.jpg",
        name: "Vase Notcha",
        beschreibung: "Vase Notcha in Kugelform. Farbe korall.",
        preis: 29.95,
        kategorie: "vasen"
    };
    const vase4 = {
        id: "vase4",
        bild: "vase4.jpg",
        name: "Vase long",
        beschreibung: "Vase long in einer eleganten Form. Aus Glas; Höhe 23cm",
        preis: 19.99,
        kategorie: "vasen"
    };
    const vase5 = {
        id: "vase5",
        bild: "vase5.jpg",
        name: "Dekovase Ethno",
        beschreibung: "Dekovase Ethno mit speziellem Design. Aus Porzellan; Höhe 19cm",
        preis: 13.99,
        kategorie: "vasen"
    };
    const vase6 = {
        id: "vase6",
        bild: "vase6.jpg",
        name: "Bodenvase Wirbel",
        beschreibung: "Tolle Vase aus Glas mit einem leichten, pinken Touch.",
        preis: 18.95,
        kategorie: "vasen"
    };
    const vase7 = {
        id: "vase7",
        bild: "vase7.jpg",
        name: "Vase Ministripe",
        beschreibung: "Vase Ministripe zum Aufhängen. Perfekt für Abende im Garten.",
        preis: 13.00,
        kategorie: "vasen"
    };
    const vase8 = {
        id: "vase8",
        bild: "vase8.jpg",
        name: "Marokko Vase",
        beschreibung: "Außergewöhnliches Muster hat diese Marokkanische Vase.",
        preis: 14.95,
        kategorie: "vasen"
    };
    const vase9 = {
        id: "vase9",
        bild: "vase9.jpg",
        name: "Vase Shine",
        beschreibung: "Stylische Vase in beige. Porzellan; Höhe 8cm",
        preis: 16.99,
        kategorie: "vasen"
    };
    const vase10 = {
        id: "vase10",
        bild: "vase10.jpg",
        name: "Vase Coconut",
        beschreibung: "Vase Coconut in geripptem Muster. Ein Hingucker.",
        preis: 19.99,
        kategorie: "vasen"
    };
    const vase11 = {
        id: "vase11",
        bild: "vase11.jpg",
        name: "Vasen Fine Stripe",
        beschreibung: "Vasen im 3er Set. Glas; Höhe 11cm",
        preis: 18.99,
        kategorie: "vasen"
    };
    const vase12 = {
        id: "vase12",
        bild: "vase12.jpg",
        name: "Vase Monday Funday",
        beschreibung: "Vase Monday Funday mit außergewöhnlichen Glas-Muster. Höhe 18cm",
        preis: 12.95,
        kategorie: "vasen"
    };
    Aufgabe6.produkt = [blume1, blume2, blume3, blume4, blume5, blume6, blume7, blume8, blume9, blume10, blume11, blume12, vase1, vase2, vase3, vase4, vase5, vase6, vase7, vase8, vase9, vase10, vase11, vase12];
    Aufgabe6.kategorien = ["blumen", "vasen"];
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=data.js.map