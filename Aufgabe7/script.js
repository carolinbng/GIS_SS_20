"use strict";
var Aufgabe6;
(function (Aufgabe6) {
    let aktuelleKategorie = "";
    function produkteErzeugen(produkt) {
        // Überschrift für die Blume/ Vase
        let artikelUeberschrift = document.createElement("h2");
        // Unterscheide zwischen erster Blume und dem Rest
        if (false) {
            artikelUeberschrift.innerHTML = "Frische Blumen und tolle Vasen";
        }
        else {
            artikelUeberschrift.innerHTML = "✿";
        }
        artikelUeberschrift.setAttribute("id", "Überschrift");
        // Container für die Blume/ Vase
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "blume");
        divArtikel.setAttribute("id", produkt.id);
        // Bild
        let imgArtikel = document.createElement("img");
        imgArtikel.setAttribute("src", produkt.bild);
        imgArtikel.setAttribute("alt", "toller Blumenstrauss");
        // Name der Blume/ Vase
        let artikelName = document.createElement("h3");
        artikelName.innerHTML = produkt.name;
        // Beschreibung der Blume und Vase
        let artikelBeschreibung = document.createElement("ul");
        let artikelBeschreibungInhalt = document.createElement("li");
        artikelBeschreibungInhalt.innerHTML = produkt.beschreibung;
        artikelBeschreibung.appendChild(artikelBeschreibungInhalt);
        let breakElement = document.createElement("br");
        // Preis der Blume/ Vase
        let pPreis = document.createElement("p");
        pPreis.setAttribute("class", "Preis");
        pPreis.innerHTML = produkt.preis + " €";
        // Button für den Warenkorb
        let buttonWarenkorb = document.createElement("button");
        buttonWarenkorb.innerHTML = "In den Warenkorb";
        divArtikel.appendChild(buttonWarenkorb);
        buttonWarenkorb.addEventListener("click", handleClick);
        // Füge alle Tags als Kind zu div Container hinzu
        divArtikel.appendChild(imgArtikel);
        divArtikel.appendChild(artikelName);
        divArtikel.appendChild(artikelBeschreibung);
        divArtikel.appendChild(breakElement);
        divArtikel.appendChild(pPreis);
        divArtikel.appendChild(buttonWarenkorb);
        // greife auf den DOM zu und füge Überschrift und Container für die Blume/ Vasehinzu
        document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
        document.getElementById("artikelListe")?.appendChild(divArtikel);
    }
    function locationHashChanged() {
        let artikelListe = document.getElementById("artikelListe");
        if (artikelListe) {
            artikelListe.innerHTML = "";
        }
        if (location.hash) {
            aktuelleKategorie = location.hash.split("#")[1];
            if (aktuelleKategorie == "home") {
                let artikelUeberschrift = document.createElement("h2");
                artikelUeberschrift.innerHTML = "Frische Blumen und Vasen";
                document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
            }
            else {
                let artikelUeberschrift = document.createElement("h2");
                artikelUeberschrift.innerHTML = aktuelleKategorie;
                document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
            }
        }
        for (let i = 0; i < Aufgabe6.produkt.length; i++) {
            if (aktuelleKategorie == Aufgabe6.produkt[i].kategorie) {
                produkteErzeugen(Aufgabe6.produkt[i]);
            }
            else if (aktuelleKategorie == "home") {
                produkteErzeugen(Aufgabe6.produkt[i]);
            }
        }
    }
    function pageLoad() {
        location.hash = "#home";
        aktuelleKategorie = "home";
        // Artikelliste
        if (location.hash) {
            aktuelleKategorie = location.hash.split("#")[1];
            if (aktuelleKategorie == "home") {
                let artikelUeberschrift = document.createElement("h2");
                artikelUeberschrift.innerHTML = "Frische Blumen und Vasen";
                document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
            }
            else {
                let artikelUeberschrift = document.createElement("h2");
                artikelUeberschrift.innerHTML = aktuelleKategorie;
                document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
            }
        }
        for (let i = 0; i < Aufgabe6.produkt.length; i++) {
            if (aktuelleKategorie == Aufgabe6.produkt[i].kategorie) {
                produkteErzeugen(Aufgabe6.produkt[i]);
            }
            else if (aktuelleKategorie == "home") {
                produkteErzeugen(Aufgabe6.produkt[i]);
            }
        }
    }
    window.onhashchange = locationHashChanged;
    window.onload = pageLoad;
    //let warenkorbTotal: number = 0;
    let artikelZaehler = 0;
    let warenkorbTotal = 0;
    function handleClick(_event) {
        artikelZaehler++;
        if (artikelZaehler >= 0) {
            const blase = document.getElementById("divBlase");
            if (blase)
                blase.innerHTML = "" + artikelZaehler;
        }
        let produktId = _event.currentTarget.parentElement.getAttribute("id");
        // Summe der Preise  
        for (let i = 0; i < Aufgabe6.produkt.length; i++) {
            if (Aufgabe6.produkt[i].id == produktId) {
                warenkorbTotal = warenkorbTotal + Aufgabe6.produkt[i].preis;
            }
        }
        console.log("Aktuelle Warenkorb Summe: " + warenkorbTotal + "€");
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=script.js.map