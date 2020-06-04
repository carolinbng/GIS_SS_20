"use strict";
var Aufgabe6;
(function (Aufgabe6) {
    // Artikelliste
    for (let i = 0; i < Aufgabe6.produkt.length; i++) {
        // Überschrift für die Blume
        let artikelUeberschrift = document.createElement("h2");
        // Unterscheide zwischen erster Blume und dem Rest
        if (i == 0) {
            artikelUeberschrift.innerHTML = "Frische Blumen und tolle Vasen";
        }
        else {
            artikelUeberschrift.innerHTML = "✿";
        }
        artikelUeberschrift.setAttribute("id", "Überschrift");
        // Container für die Blume
        let divBlume = document.createElement("div");
        divBlume.setAttribute("class", "blume");
        // Bild
        let imgBlume = document.createElement("img");
        imgBlume.setAttribute("src", Aufgabe6.produkt[i].bild);
        imgBlume.setAttribute("alt", "toller Blumenstrauss");
        // Name der Blume
        let artikelName = document.createElement("h3");
        artikelName.innerHTML = Aufgabe6.produkt[i].name;
        // Beschreibung der Blume
        let artikelBeschreibung = document.createElement("ul");
        let artikelBeschreibungInhalt = document.createElement("li");
        artikelBeschreibungInhalt.innerHTML = Aufgabe6.produkt[i].beschreibung;
        artikelBeschreibung.appendChild(artikelBeschreibungInhalt);
        let breakElement = document.createElement("br");
        // Preis der Blume
        let pPreis = document.createElement("p");
        pPreis.setAttribute("class", "Preis");
        pPreis.innerHTML = Aufgabe6.produkt[i].preis + " €";
        // Button für den Warenkorb
        let buttonWarenkorb = document.createElement("button");
        buttonWarenkorb.innerHTML = "In den Warenkorb";
        // Füge alle Tags als Kind zu div Container hinzu
        divBlume.appendChild(imgBlume);
        divBlume.appendChild(artikelName);
        divBlume.appendChild(artikelBeschreibung);
        divBlume.appendChild(breakElement);
        divBlume.appendChild(pPreis);
        divBlume.appendChild(buttonWarenkorb);
        // greife auf den DOM zu und füge Überschrift und Container für die Blume hinzu
        document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
        document.getElementById("artikelListe")?.appendChild(divBlume);
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=script.js.map