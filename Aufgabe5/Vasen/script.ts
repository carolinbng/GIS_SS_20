namespace Aufgabe5 {

    // Artikelliste
    for (let i: number = 0; i < vasen.length; i++) {
        // Überschrift für die Vase
        let artikelUeberschrift: HTMLElement = document.createElement("h2");
        // Unterscheide zwischen ersten Vase und dem Rest
        if (i == 0) {
            artikelUeberschrift.innerHTML = "Vasen";
        } else {
            artikelUeberschrift.innerHTML = "✿";
        }
        artikelUeberschrift.setAttribute("id", "Überschrift");
        // Container für die Vase
        let divVase: HTMLElement = document.createElement("div");
        divVase.setAttribute("class", "vase");
        // Bild
        let imgVase: HTMLElement = document.createElement("img");
        imgVase.setAttribute("src", vasen[i].bild);
        imgVase.setAttribute("alt", "tolle Vase");
        // Name der Vase
        let artikelName: HTMLElement = document.createElement("h3");
        artikelName.innerHTML = vasen[i].name;
        // Beschreibung der Vase
        let artikelBeschreibung: HTMLElement = document.createElement("ul");
        let artikelBeschreibungInhalt: HTMLElement = document.createElement("li");
        artikelBeschreibungInhalt.innerHTML = vasen[i].beschreibung;
        artikelBeschreibung.appendChild(artikelBeschreibungInhalt);

        let breakElement: HTMLElement = document.createElement("br");
        // Preis der Vase
        let pPreis: HTMLElement = document.createElement("p");
        pPreis.setAttribute("class" , "Preis");
        pPreis.innerHTML = vasen[i].preis;
        // Button für den Warenkorb
        let buttonWarenkorb: HTMLElement = document.createElement("button");
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
}