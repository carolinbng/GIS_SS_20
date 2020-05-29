namespace Aufgabe5 {

export interface Produkt {
    bild: string;
    name: string;
    beschreibung: string;
    preis: string;
}

const blume1: Produkt = {
    bild: "blume1.jpg",
    name: "Cupid Pink",
    beschreibung: "Cupid Pink ist ein Trockenstrauß aus Ruscus, Schleierkraut, Rhodanthe und Setaria.",
    preis: "30,00€"
};

const blume2: Produkt = {
    bild: "blume2.jpg",
    name: "Clara Flower",
    beschreibung: "Die Stängel von Astromelia und Bouvardia vermischen sich mit den zarten Rosen zu einem beeindruckenden Blumenstrauß.",
    preis: "34,99€"
};

const blume3: Produkt = {
    bild: "blume3.jpg",
    name: "Arielle",
    beschreibung: "Diese Farbe symbolisiert die Leidenschaft und Liebe",
    preis: "29,95€"
};

const blume4: Produkt = {
    bild: "blume4.jpg",
    name: "Red Evie",
    beschreibung: "In diesem Blumenstrauß haben wir die Pfingstrosen Sarah Bernhardt, Duchesse de Nemour zusammen mit Nelken,Lavendel und Eukalyptus vereint.",
    preis: "32,99€"
};

const blume5: Produkt = {
    bild: "blume5.jpg",
    name: "Escada",
    beschreibung: "Lass dich von weißen Pfingstrosen, weißen Pfingstrosen, weißen Nelken, rosa Limonium- und Eukalyptus verzaubern.",
    preis: "25,99€"
};

const blume6: Produkt = {
    bild: "blume6.jpg",
    name: "Louvre",
    beschreibung: "Die Zusammensetzung aus Triticum, Hafer, Phalaris und Munigras versprechen eine Reise ins Blumenparadies.",
    preis: "24,95€"
};

const blume7: Produkt = {
    bild: "blume7.jpg",
    name: "Spring Vibes",
    beschreibung: "Eine Kombination aus rosa Lilien und Astromelien wird jede Ecke mit Aroma füllen.",
    preis: "23,00€"
};

const blume8: Produkt = {
    bild: "blume8.jpg",
    name: "Harper",
    beschreibung: "Trockenblumen sind mehr als nur getrocknete Blumen.",
    preis: "30,00€"
};

const blume9: Produkt = {
    bild: "blume9.jpg",
    name: "Rainbow Flowers",
    beschreibung: "Orangefarbenen Pfirsich-Rosen bilden zusammen mit den lila Rosen ein gutes Team.",
    preis: "16,99€"
};

const blume10: Produkt = {
    bild: "blume10.jpg",
    name: "Coco Loco",
    beschreibung: "Die rosa Rosen mit dem Limonium und dem Eukalyptus scheitern einfach nie.",
    preis: "29,99€"
};

const blume11: Produkt = {
    bild: "blume11.jpg",
    name: "Natural Optimist",
    beschreibung: "Die rosa Rosen haben viele Bedeutungen.",
    preis: "18,99€"
};

const blume12: Produkt = {
    bild: "blume12.jpg",
    name: "White Light",
    beschreibung: "Spüre bereits beim Anblick des White Light Blumenstraußes, Harmonie und Gelassenheit.",
    preis: "23,95€"
};



export let blumen: Produkt[] = [blume1, blume2, blume3, blume4, blume5, blume6, blume7, blume8, blume9, blume10, blume11, blume12];

}

