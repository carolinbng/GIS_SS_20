"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    let aktuelleProdukte;
    function localStorageLaden() {
        let gesamtWert = localStorage.getItem("warenkorbGesamtwert");
        let aktuelleProdukteJSON = localStorage.getItem("warenkorbProdukte");
        aktuelleProdukte = JSON.parse(aktuelleProdukteJSON);
        if (aktuelleProdukte) {
            for (let i = 0; i < aktuelleProdukte.length; i++) {
                produkteErzeugen(aktuelleProdukte[i]);
            }
            if (gesamtWert) {
                document.getElementById("warenkorbWert").innerHTML = gesamtWert;
            }
        }
        else {
            document.getElementById("warenkorbWert").innerHTML = "0";
        }
        let artikelZaeler = aktuelleProdukte.length;
        localStorage.setItem("artikelAnzahl", artikelZaeler.toString());
        const blase = document.getElementById("divBlase");
        if (blase)
            blase.innerHTML = "" + artikelZaeler;
    }
    localStorageLaden();
    let alleArtikelEntfernen = document.getElementById("alleArtikelEntfernen");
    alleArtikelEntfernen.addEventListener("click", alleArtikelEntfernenClick);
    function artikelEntfernenClick(_event) {
        let produktId = _event.currentTarget.parentElement.getAttribute("id");
        let warenkorbTotal = 0;
        let tempProdukte = [];
        if (aktuelleProdukte) {
            let artikelListe = document.getElementById("artikelListe");
            if (artikelListe) {
                artikelListe.innerHTML = "";
            }
            for (let i = 0; i < aktuelleProdukte.length; i++) {
                if (aktuelleProdukte[i].id != produktId) {
                    warenkorbTotal = warenkorbTotal + aktuelleProdukte[i].preis;
                    tempProdukte.push(aktuelleProdukte[i]);
                }
            }
            warenkorbTotal = Math.round(warenkorbTotal * 100) / 100;
            aktuelleProdukte = tempProdukte;
            localStorage.setItem("warenkorbGesamtwert", warenkorbTotal.toString());
            localStorage.setItem("warenkorbProdukte", JSON.stringify(aktuelleProdukte));
            localStorageLaden();
        }
    }
    function alleArtikelEntfernenClick() {
        let artikelListe = document.getElementById("artikelListe");
        if (artikelListe) {
            artikelListe.innerHTML = "";
        }
        localStorage.clear();
        const blase = document.getElementById("divBlase");
        if (blase)
            blase.innerHTML = "";
        localStorageLaden();
    }
    function produkteErzeugen(allProducts) {
        // Überschrift für die Blume/ Vase
        let artikelUeberschrift = document.createElement("h2");
        // Container für die Blume/ Vase
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "blume");
        divArtikel.setAttribute("id", allProducts.id);
        // Bild
        let imgArtikel = document.createElement("img");
        imgArtikel.setAttribute("src", allProducts.bild);
        imgArtikel.setAttribute("alt", "toller Blumenstrauss");
        // Name der Blume/ Vase
        let artikelName = document.createElement("h3");
        artikelName.innerHTML = allProducts.name;
        // Beschreibung der Blume und Vase
        let artikelBeschreibung = document.createElement("ul");
        let artikelBeschreibungInhalt = document.createElement("li");
        artikelBeschreibungInhalt.innerHTML = allProducts.beschreibung;
        artikelBeschreibung.appendChild(artikelBeschreibungInhalt);
        let breakElement = document.createElement("br");
        // Preis der Blume/ Vase
        let pPreis = document.createElement("p");
        pPreis.setAttribute("class", "Preis");
        pPreis.innerHTML = allProducts.preis + " €";
        // Button für den Warenkorb
        let buttonWarenkorb = document.createElement("button");
        buttonWarenkorb.innerHTML = "löschen";
        divArtikel.appendChild(buttonWarenkorb);
        buttonWarenkorb.addEventListener("click", artikelEntfernenClick);
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
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=warenkorb.js.map