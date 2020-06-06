namespace Aufgabe6 {

    // Artikelliste
    for (let i: number = 0; i < produkt.length; i++) {
        // Überschrift für die Blume/ Vase
        let artikelUeberschrift: HTMLElement = document.createElement("h2");
        // Unterscheide zwischen erster Blume und dem Rest
        if (i == 0) {
            artikelUeberschrift.innerHTML = "Frische Blumen und tolle Vasen";
        } else {
            artikelUeberschrift.innerHTML = "✿";
        }
        artikelUeberschrift.setAttribute("id", "Überschrift");
        
        // Container für die Blume/ Vase
        let divArtikel: HTMLElement = document.createElement("div");
        divArtikel.setAttribute("class", "blume");
        
        // Bild
        let imgArtikel: HTMLElement = document.createElement("img");
        imgArtikel.setAttribute("src", produkt[i].bild);
        imgArtikel.setAttribute("alt", "toller Blumenstrauss");

        // Name der Blume/ Vase
        let artikelName: HTMLElement = document.createElement("h3");
        artikelName.innerHTML = produkt[i].name;
        
        // Beschreibung der Blume und Vase
        let artikelBeschreibung: HTMLElement = document.createElement("ul");
        let artikelBeschreibungInhalt: HTMLElement = document.createElement("li");
        artikelBeschreibungInhalt.innerHTML = produkt[i].beschreibung;
        artikelBeschreibung.appendChild(artikelBeschreibungInhalt);
        let breakElement: HTMLElement = document.createElement("br");

        // Preis der Blume/ Vase
        let pPreis: HTMLElement = document.createElement("p");
        pPreis.setAttribute("class" , "Preis");
        pPreis.innerHTML = produkt[i].preis + " €";

        // Button für den Warenkorb
        let buttonWarenkorb: HTMLElement = document.createElement("button");
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


//Ab hier Aufgabe06.01


    //let warenkorbTotal: number = 0;
    let artikelZaehler: number = 0;
//let zaehlerAnzeigen: HTMLParagraphElement = document.createElement("p");
    let divBlase: HTMLDivElement = document.createElement("div");
    divBlase.id = "blase";

    function handleClick(_event: Event): void  {

        if (artikelZaehler >= 0) {
            document.getElementById("div")?.appendChild(divBlase);
        }
        artikelZaehler ++;
        divBlase.innerHTML = "" + artikelZaehler;


 //Summe ausrechnen
    
        
    }}





    //Ab hier Aufgabe06.02

