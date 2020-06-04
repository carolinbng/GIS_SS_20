namespace Aufgabe5 {

    // Artikelliste
    for (let i: number = 0; i < produkt.length; i++) {
        // Überschrift für die Blume
        let artikelUeberschrift: HTMLElement = document.createElement("h2");
        // Unterscheide zwischen erster Blume und dem Rest
        if (i == 0) {
            artikelUeberschrift.innerHTML = "Frische Blumen";
        } else {
            artikelUeberschrift.innerHTML = "✿";
        }
        artikelUeberschrift.setAttribute("id", "Überschrift");
        
        // Container für die Blume
        let divBlume: HTMLElement = document.createElement("div");
        divBlume.setAttribute("class", "blume");
        
        // Bild
        let imgBlume: HTMLElement = document.createElement("img");
        imgBlume.setAttribute("src", produkt[i].bild);
        imgBlume.setAttribute("alt", "toller Blumenstrauss");

        // Name der Blume
        let artikelName: HTMLElement = document.createElement("h3");
        artikelName.innerHTML = produkt[i].name;
        
        // Beschreibung der Blume
        let artikelBeschreibung: HTMLElement = document.createElement("ul");
        let artikelBeschreibungInhalt: HTMLElement = document.createElement("li");
        artikelBeschreibungInhalt.innerHTML = produkt[i].beschreibung;
        artikelBeschreibung.appendChild(artikelBeschreibungInhalt);

        let breakElement: HTMLElement = document.createElement("br");
        // Preis der Blume
        let pPreis: HTMLElement = document.createElement("p");
        pPreis.setAttribute("class" , "Preis");
        pPreis.innerHTML = produkt[i].preis + " €";
        // Button für den Warenkorb
        let buttonWarenkorb: HTMLElement = document.createElement("button");
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
}

