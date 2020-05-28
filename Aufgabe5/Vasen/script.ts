namespace Aufgabe5 {


export interface Produkt {
    bild: string;
    name: string;
    beschreibung: string;
    preis: string;
}

const vase1: Produkt = {
    bild: "vase1.jpg",
    name: "Vase Notches",
    beschreibung: "Vase aus Glas. Höhe 20cm.",
    preis: "15,00€"
};

const vase2: Produkt = {
    bild: "vase2.jpg",
    name: "Vase Virbel",
    beschreibung: "Tolle Vase aus Porzellan in der Farbe beige.",
    preis: "14,99€"
};

const vase3: Produkt = {
    bild: "vase3.jpg",
    name: "Vase Notcha",
    beschreibung: "Vase Notcha in Kugelform. Farbe korall.",
    preis: "29,95€"
};

const vase4: Produkt = {
    bild: "vase4.jpg",
    name: "Vase long",
    beschreibung: "Vase long in einer eleganten Form. Aus Glas; Höhe 23cm",
    preis: "19,99€"
};

const vase5: Produkt = {
    bild: "vase5.jpg",
    name: "Dekovase Ethno",
    beschreibung: "Dekovase Ethno mit speziellem Design. Aus Porzellan; Höhe 19cm",
    preis: "13,99€"
};

const vase6: Produkt = {
    bild: "vase6.jpg",
    name: "Bodenvase Wirbel",
    beschreibung: "Tolle Vase aus Glas mit einem leichten, pinken Touch.",
    preis: "18,95€"
};

const vase7: Produkt = {
    bild: "vase7.jpg",
    name: "Vase Ministripe",
    beschreibung: "Vase Ministripe zum Aufhängen. Perfekt für Abende im Garten.",
    preis: "13,00€"
};

const vase8: Produkt = {
    bild: "vase8.jpg",
    name: "Marokko Vase",
    beschreibung: "Außergewöhnliches Muster hat diese Marokkanische Vase.",
    preis: "14,95€"
};

const vase9: Produkt = {
    bild: "vase9.jpg",
    name: "Vase Shine",
    beschreibung: "Stylische Vase in beige. Porzellan; Höhe 8cm",
    preis: "16,99€"
};

const vase10: Produkt = {
    bild: "vase10.jpg",
    name: "Vase Coconut",
    beschreibung: "Vase Coconut in geripptem Muster. Ein Hingucker.",
    preis: "19,99€"
};

const vase11: Produkt = {
    bild: "vase11.jpg",
    name: "Vasen Fine Stripe",
    beschreibung: "Vasen im 3er Set. Glas; Höhe 11cm",
    preis: "18,99€"
};

const vase12: Produkt = {
    bild: "vase12.jpg",
    name: "Vase Monday Funday",
    beschreibung: "Vase Monday Funday mit außergewöhnlichen Glas-Muster. Höhe 18cm",
    preis: "12,95€"
};



export let vasen: Produkt[] = [vase1, vase2, vase3, vase4, vase5, vase6, vase7, vase8, vase9, vase10, vase11, vase12];

}