namespace Aufgabe5 {

    // Das ist der erste Artikel
    // Er unterscheidet sich von dem Rest
    let artikelUeberschrift: HTMLElement = document.createElement("h2");
    artikelUeberschrift.innerHTML = "Frische Blumen";
    artikelUeberschrift.setAttribute("id", "Überschrift");
    
    let divBlume: HTMLElement = document.createElement("div");
    divBlume.setAttribute("class", "blume");

    let imgBlume: HTMLElement = document.createElement("img");
    imgBlume.setAttribute("src", blumen[0].bild);
    imgBlume.setAttribute("alt", "toller Blumenstrauss");

    let artikelName: HTMLElement = document.createElement("h3");
    artikelName.innerHTML = blumen[0].name;

    let artikelBeschreibung: HTMLElement = document.createElement("ul");
    let artikelBeschreibungInhalt: HTMLElement = document.createElement("li");
    artikelBeschreibungInhalt.innerHTML = blumen[0].beschreibung;
    artikelBeschreibung.appendChild(artikelBeschreibungInhalt);

    let breakElement: HTMLElement = document.createElement("br");

    let pPreis: HTMLElement = document.createElement("p");
    pPreis.setAttribute("class" , "Preis");
    pPreis.innerHTML = blumen[0].preis;

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