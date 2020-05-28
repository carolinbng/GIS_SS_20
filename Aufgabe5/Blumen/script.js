"use strict";
var Aufgabe5;
(function (Aufgabe5) {
    // Artikelliste
    for (let i = 0; i < Aufgabe5.blumen.length; i++) {
        let artikelUeberschrift = document.createElement("h2");
        if (i == 0) {
            artikelUeberschrift.innerHTML = "Frische Blumen";
        }
        else {
            artikelUeberschrift.innerHTML = "✿";
        }
        artikelUeberschrift.setAttribute("id", "Überschrift");
        let divBlume = document.createElement("div");
        divBlume.setAttribute("class", "blume");
        let imgBlume = document.createElement("img");
        imgBlume.setAttribute("src", Aufgabe5.blumen[i].bild);
        imgBlume.setAttribute("alt", "toller Blumenstrauss");
        let artikelName = document.createElement("h3");
        artikelName.innerHTML = Aufgabe5.blumen[i].name;
        let artikelBeschreibung = document.createElement("ul");
        let artikelBeschreibungInhalt = document.createElement("li");
        artikelBeschreibungInhalt.innerHTML = Aufgabe5.blumen[i].beschreibung;
        artikelBeschreibung.appendChild(artikelBeschreibungInhalt);
        let breakElement = document.createElement("br");
        let pPreis = document.createElement("p");
        pPreis.setAttribute("class", "Preis");
        pPreis.innerHTML = Aufgabe5.blumen[i].preis;
        let buttonWarenkorb = document.createElement("button");
        buttonWarenkorb.innerHTML = "In den Warenkorb";
        divBlume.appendChild(imgBlume);
        divBlume.appendChild(artikelName);
        divBlume.appendChild(artikelBeschreibung);
        divBlume.appendChild(breakElement);
        divBlume.appendChild(pPreis);
        divBlume.appendChild(buttonWarenkorb);
        document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
        document.getElementById("artikelListe")?.appendChild(divBlume);
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=script.js.map