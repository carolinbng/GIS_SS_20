"use strict";
var Aufgabe5;
(function (Aufgabe5) {
    // Artikelliste
    for (let i = 0; i < Aufgabe5.vasen.length; i++) {
        // Überschrift für die Vase
        let artikelUeberschrift = document.createElement("h2");
        // Unterscheide zwischen ersten Vase und dem Rest
        if (i == 0) {
            artikelUeberschrift.innerHTML = "Vasen";
        }
        else {
            artikelUeberschrift.innerHTML = "✿";
        }
        artikelUeberschrift.setAttribute("id", "Überschrift");
        // Container für die Vase
        let divVase = document.createElement("div");
        divVase.setAttribute("class", "vase");
        // Bild
        let imgVase = document.createElement("img");
        imgVase.setAttribute("src", Aufgabe5.vasen[i].bild);
        imgVase.setAttribute("alt", "tolle Vase");
        // Name der Vase
        let artikelName = document.createElement("h3");
        artikelName.innerHTML = Aufgabe5.vasen[i].name;
        // Beschreibung der Vase
        let artikelBeschreibung = document.createElement("ul");
        let artikelBeschreibungInhalt = document.createElement("li");
        artikelBeschreibungInhalt.innerHTML = Aufgabe5.vasen[i].beschreibung;
        artikelBeschreibung.appendChild(artikelBeschreibungInhalt);
        let breakElement = document.createElement("br");
        // Preis der Vase
        let pPreis = document.createElement("p");
        pPreis.setAttribute("class", "Preis");
        pPreis.innerHTML = Aufgabe5.vasen[i].preis;
        // Button für den Warenkorb
        let buttonWarenkorb = document.createElement("button");
        buttonWarenkorb.innerHTML = "In den Warenkorb";
        // Füge alle Tags als Kind zu div Container hinzu
        divVase.appendChild(imgVase);
        divVase.appendChild(artikelName);
        divVase.appendChild(artikelBeschreibung);
        divVase.appendChild(breakElement);
        divVase.appendChild(pPreis);
        divVase.appendChild(buttonWarenkorb);
        // greife auf den DOM zu und füge Überschrift und Container für die Vase hinzu
        document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
        document.getElementById("artikelListe")?.appendChild(divVase);
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=script.js.map