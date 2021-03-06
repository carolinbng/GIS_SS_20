namespace Aufgabe6 {

    export interface Produkt {
        id: string;
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }
    
    const blume1: Produkt = {
        id : "blume1",
        bild: "blume1.jpg",
        name: "Cupid Pink",
        beschreibung: "Cupid Pink ist ein Trockenstrauß aus Ruscus, Schleierkraut, Rhodanthe und Setaria.",
        preis: 30.00,
        kategorie: "blumen"
    };
    
    const blume2: Produkt = {
        id : "blume2",
        bild: "blume2.jpg",
        name: "Clara Flower",
        beschreibung: "Die Stängel von Astromelia und Bouvardia vermischen sich mit den zarten Rosen zu einem beeindruckenden Blumenstrauß.",
        preis: 34.99,
        kategorie: "blumen"
    };
    
    const blume3: Produkt = {
        id : "blume3",
        bild: "blume3.jpg",
        name: "Arielle",
        beschreibung: "Diese Farbe symbolisiert die Leidenschaft und Liebe",
        preis: 29.95,
        kategorie: "blumen"
    };
    
    const blume4: Produkt = {
        id : "blume4",
        bild: "blume4.jpg",
        name: "Red Evie",
        beschreibung: "In diesem Blumenstrauß haben wir die Pfingstrosen Sarah Bernhardt, Duchesse de Nemour zusammen mit Nelken,Lavendel und Eukalyptus vereint.",
        preis: 32.99,
        kategorie: "blumen"
    };
    
    const blume5: Produkt = {
        id : "blume5",
        bild: "blume5.jpg",
        name: "Escada",
        beschreibung: "Lass dich von weißen Pfingstrosen, weißen Pfingstrosen, weißen Nelken, rosa Limonium- und Eukalyptus verzaubern.",
        preis: 25.99,
        kategorie: "blumen"
    };
    
    const blume6: Produkt = {
        id : "blume6",
        bild: "blume6.jpg",
        name: "Louvre",
        beschreibung: "Die Zusammensetzung aus Triticum, Hafer, Phalaris und Munigras versprechen eine Reise ins Blumenparadies.",
        preis: 24.95,
        kategorie: "blumen"
    };
    
    const blume7: Produkt = {
        id : "blume7",
        bild: "blume7.jpg",
        name: "Spring Vibes",
        beschreibung: "Eine Kombination aus rosa Lilien und Astromelien wird jede Ecke mit Aroma füllen.",
        preis: 23.00,
        kategorie: "blumen"
    };
    
    const blume8: Produkt = {
        id : "blume8",
        bild: "blume8.jpg",
        name: "Harper",
        beschreibung: "Trockenblumen sind mehr als nur getrocknete Blumen.",
        preis: 30.00,
        kategorie: "blumen"
    };
    
    const blume9: Produkt = {
        id : "blume9",
        bild: "blume9.jpg",
        name: "Rainbow Flowers",
        beschreibung: "Orangefarbenen Pfirsich-Rosen bilden zusammen mit den lila Rosen ein gutes Team.",
        preis: 16.99,
        kategorie: "blumen"
    };
    
    const blume10: Produkt = {
        id : "blume10",
        bild: "blume10.jpg",
        name: "Coco Loco",
        beschreibung: "Die rosa Rosen mit dem Limonium und dem Eukalyptus scheitern einfach nie.",
        preis: 29.99,
        kategorie: "blumen"
    };
    
    const blume11: Produkt = {
        id : "blume11",
        bild: "blume11.jpg",
        name: "Natural Optimist",
        beschreibung: "Die rosa Rosen haben viele Bedeutungen.",
        preis: 18.99,
        kategorie: "blumen"
    };
    
    const blume12: Produkt = {
        id : "blume12",
        bild: "blume12.jpg",
        name: "White Light",
        beschreibung: "Spüre bereits beim Anblick des White Light Blumenstraußes, Harmonie und Gelassenheit.",
        preis: 23.95,
        kategorie: "blumen"
    };
    const vase1: Produkt = {
        id : "vase1",
        bild: "vase1.jpg",
        name: "Vase Notches",
        beschreibung: "Vase aus Glas. Höhe 20cm.",
        preis: 15.00,
        kategorie: "vasen"
    };
    
    const vase2: Produkt = {
        id : "vase2",
        bild: "vase2.jpg",
        name: "Vase Virbel",
        beschreibung: "Tolle Vase aus Porzellan in der Farbe beige.",
        preis: 14.99,
        kategorie: "vasen"
    };
    
    const vase3: Produkt = {
        id : "vase3",
        bild: "vase3.jpg",
        name: "Vase Notcha",
        beschreibung: "Vase Notcha in Kugelform. Farbe korall.",
        preis: 29.95,
        kategorie: "vasen"
    };
    
    const vase4: Produkt = {
        id : "vase4",
        bild: "vase4.jpg",
        name: "Vase long",
        beschreibung: "Vase long in einer eleganten Form. Aus Glas; Höhe 23cm",
        preis: 19.99,
        kategorie: "vasen"
    };
    
    const vase5: Produkt = {
        id : "vase5",
        bild: "vase5.jpg",
        name: "Dekovase Ethno",
        beschreibung: "Dekovase Ethno mit speziellem Design. Aus Porzellan; Höhe 19cm",
        preis: 13.99,
        kategorie: "vasen"
    };
    
    const vase6: Produkt = {
        id : "vase6",
        bild: "vase6.jpg",
        name: "Bodenvase Wirbel",
        beschreibung: "Tolle Vase aus Glas mit einem leichten, pinken Touch.",
        preis: 18.95,
        kategorie: "vasen"
    };
    
    const vase7: Produkt = {
        id : "vase7",
        bild: "vase7.jpg",
        name: "Vase Ministripe",
        beschreibung: "Vase Ministripe zum Aufhängen. Perfekt für Abende im Garten.",
        preis: 13.00,
        kategorie: "vasen"
    };
    
    const vase8: Produkt = {
        id : "vase8",
        bild: "vase8.jpg",
        name: "Marokko Vase",
        beschreibung: "Außergewöhnliches Muster hat diese Marokkanische Vase.",
        preis: 14.95,
        kategorie: "vasen"
    };
    
    const vase9: Produkt = {
        id : "vase9",
        bild: "vase9.jpg",
        name: "Vase Shine",
        beschreibung: "Stylische Vase in beige. Porzellan; Höhe 8cm",
        preis: 16.99,
        kategorie: "vasen"
    };
    
    const vase10: Produkt = {
        id : "vase10",
        bild: "vase10.jpg",
        name: "Vase Coconut",
        beschreibung: "Vase Coconut in geripptem Muster. Ein Hingucker.",
        preis: 19.99,
        kategorie: "vasen"
    };
    
    const vase11: Produkt = {
        id : "vase11",
        bild: "vase11.jpg",
        name: "Vasen Fine Stripe",
        beschreibung: "Vasen im 3er Set. Glas; Höhe 11cm",
        preis: 18.99,
        kategorie: "vasen"
    };
    
    const vase12: Produkt = {
        id: "vase12",
        bild: "vase12.jpg",
        name: "Vase Monday Funday",
        beschreibung: "Vase Monday Funday mit außergewöhnlichen Glas-Muster. Höhe 18cm",
        preis: 12.95,
        kategorie: "vasen"
    };
    
    
    
    export let produkt: Produkt[] = [blume1, blume2, blume3, blume4, blume5, blume6, blume7, blume8, blume9, blume10, blume11, blume12, vase1, vase2, vase3, vase4, vase5, vase6, vase7, vase8, vase9, vase10, vase11, vase12];
    export let kategorien: string[] = ["blumen", "vasen"];

    }
    
        
        