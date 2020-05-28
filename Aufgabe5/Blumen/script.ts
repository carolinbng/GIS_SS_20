namespace Aufgabe5 {

    // Artikelliste
    for (let i: number = 0; i < blumen.length; i++) {
        let artikelUeberschrift: HTMLElement = document.createElement("h2");
        if (i == 0) {
            artikelUeberschrift.innerHTML = "Frische Blumen";
        } else {
            artikelUeberschrift.innerHTML = "✿";
        }
 
        artikelUeberschrift.setAttribute("id", "Überschrift");
        
        let divBlume: HTMLElement = document.createElement("div");
        divBlume.setAttribute("class", "blume");

        let imgBlume: HTMLElement = document.createElement("img");
        imgBlume.setAttribute("src", blumen[i].bild);
        imgBlume.setAttribute("alt", "toller Blumenstrauss");

        let artikelName: HTMLElement = document.createElement("h3");
        artikelName.innerHTML = blumen[i].name;

        let artikelBeschreibung: HTMLElement = document.createElement("ul");
        let artikelBeschreibungInhalt: HTMLElement = document.createElement("li");
        artikelBeschreibungInhalt.innerHTML = blumen[i].beschreibung;
        artikelBeschreibung.appendChild(artikelBeschreibungInhalt);

        let breakElement: HTMLElement = document.createElement("br");

        let pPreis: HTMLElement = document.createElement("p");
        pPreis.setAttribute("class" , "Preis");
        pPreis.innerHTML = blumen[i].preis;

        let buttonWarenkorb: HTMLElement = document.createElement("button");
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
}