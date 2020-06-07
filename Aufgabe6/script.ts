namespace Aufgabe6 {

    let aktuelleKategorie: string = "";


    function produkteErzeugen(produkt: Produkt): void {
        // Überschrift für die Blume/ Vase
        let artikelUeberschrift: HTMLElement = document.createElement("h2");
        // Unterscheide zwischen erster Blume und dem Rest
        if (false) {
            artikelUeberschrift.innerHTML = "Frische Blumen und tolle Vasen";
        } else {
            artikelUeberschrift.innerHTML = "✿";
        }
        artikelUeberschrift.setAttribute("id", "Überschrift");
        
        // Container für die Blume/ Vase
        let divArtikel: HTMLElement = document.createElement("div");
        divArtikel.setAttribute("class", "blume");
        divArtikel.setAttribute("id", produkt.id);

        
        // Bild
        let imgArtikel: HTMLElement = document.createElement("img");
        imgArtikel.setAttribute("src", produkt.bild);
        imgArtikel.setAttribute("alt", "toller Blumenstrauss");

        // Name der Blume/ Vase
        let artikelName: HTMLElement = document.createElement("h3");
        artikelName.innerHTML = produkt.name;
        
        // Beschreibung der Blume und Vase
        let artikelBeschreibung: HTMLElement = document.createElement("ul");
        let artikelBeschreibungInhalt: HTMLElement = document.createElement("li");
        artikelBeschreibungInhalt.innerHTML = produkt.beschreibung;
        artikelBeschreibung.appendChild(artikelBeschreibungInhalt);
        let breakElement: HTMLElement = document.createElement("br");

        // Preis der Blume/ Vase
        let pPreis: HTMLElement = document.createElement("p");
        pPreis.setAttribute("class" , "Preis");
        pPreis.innerHTML = produkt.preis + " €";

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

    function locationHashChanged() {
        let artikelListe = document.getElementById("artikelListe");
        if (artikelListe) {
            artikelListe.innerHTML = ""; }

        if (location.hash) {
            aktuelleKategorie = location.hash.split("#")[1];
            if (aktuelleKategorie == "home") {
                let artikelUeberschrift: HTMLElement = document.createElement("h2");
                artikelUeberschrift.innerHTML = "Frische Blumen und Vasen";
                document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
            }
            else {
                let artikelUeberschrift: HTMLElement = document.createElement("h2");
                artikelUeberschrift.innerHTML = aktuelleKategorie;
                document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
            }
        }
        for (let i: number = 0; i < produkt.length; i++) {
            if (aktuelleKategorie == produkt[i].kategorie) {
                produkteErzeugen(produkt[i]);
            }
            else if (aktuelleKategorie == "home") {
                produkteErzeugen(produkt[i]);
            }
        }
    }

    function pageLoad() {
        location.hash = "#home";
        aktuelleKategorie = "home";
        // Artikelliste
        if (location.hash) {
            aktuelleKategorie = location.hash.split("#")[1];
            if (aktuelleKategorie == "home") {
                let artikelUeberschrift: HTMLElement = document.createElement("h2");
                artikelUeberschrift.innerHTML = "Frische Blumen und Vasen";
                document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
            }
            else {
                let artikelUeberschrift: HTMLElement = document.createElement("h2");
                artikelUeberschrift.innerHTML = aktuelleKategorie;
                document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
            }
        }
        for (let i: number = 0; i < produkt.length; i++) {
            if (aktuelleKategorie == produkt[i].kategorie) {
                produkteErzeugen(produkt[i]);
            }
            else if (aktuelleKategorie == "home") {
                produkteErzeugen(produkt[i]);
            }
        }
    }
    
    window.onhashchange = locationHashChanged;  
    window.onload = pageLoad;


   
    //let warenkorbTotal: number = 0;
    let artikelZaehler: number = 0;
    let warenkorbTotal: number = 0;
    function handleClick(_event: Event): void  {
        artikelZaehler ++;
        if (artikelZaehler >= 0) {
            const blase = document.getElementById("divBlase");
            if (blase) blase.innerHTML = "" + artikelZaehler;
        }
        let produktId: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("id")!;
        
        
    // Summe der Preise  
        for (let i: number = 0; i < produkt.length; i++) {
            if (produkt[i].id == produktId) {
                warenkorbTotal = warenkorbTotal + produkt[i].preis; 
            }
        }
        console.log("Aktuelle Warenkorb Summe: " + warenkorbTotal + "€");  
    }}






