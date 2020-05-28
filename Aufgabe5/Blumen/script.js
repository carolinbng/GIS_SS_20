"use strict";
var Aufgabe5;
(function (Aufgabe5) {
    // Das ist der erste Artikel
    // Er unterscheidet sich von dem Rest
    let artikelUeberschrift = document.createElement("h2");
    artikelUeberschrift.innerHTML = "Frische Blumen";
    artikelUeberschrift.setAttribute("id", "Überschrift");
    let divBlume = document.createElement("div");
    divBlume.setAttribute("class", "blume");
    let imgBlume = document.createElement("img");
    imgBlume.setAttribute("src", Aufgabe5.blumen[0].bild);
    imgBlume.setAttribute("alt", "toller Blumenstrauss");
    let artikelName = document.createElement("h3");
    artikelName.innerHTML = Aufgabe5.blumen[0].name;
    let artikelBeschreibung = document.createElement("ul");
    let artikelBeschreibungInhalt = document.createElement("li");
    artikelBeschreibungInhalt.innerHTML = Aufgabe5.blumen[0].beschreibung;
    artikelBeschreibung.appendChild(artikelBeschreibungInhalt);
    let breakElement = document.createElement("br");
    let pPreis = document.createElement("p");
    pPreis.setAttribute("class", "Preis");
    pPreis.innerHTML = Aufgabe5.blumen[0].preis;
    let buttonWarenkorb = document.createElement("button");
    buttonWarenkorb.innerHTML = "In den Warenkorb";
    divBlume.appendChild(imgBlume);
    divBlume.appendChild(artikelName);
    divBlume.appendChild(artikelBeschreibung);
    divBlume.appendChild(breakElement);
    divBlume.appendChild(pPreis);
    divBlume.appendChild(buttonWarenkorb);
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=script.js.map