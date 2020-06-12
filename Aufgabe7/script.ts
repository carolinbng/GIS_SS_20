namespace Aufgabe6 {

    let aktuelleKategorie: string = "";


    function produkteErzeugen(allProducts: Produkt): void {
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
        divArtikel.setAttribute("id", allProducts.id);


        // Bild
        let imgArtikel: HTMLElement = document.createElement("img");
        imgArtikel.setAttribute("src", allProducts.bild);
        imgArtikel.setAttribute("alt", "toller Blumenstrauss");

        // Name der Blume/ Vase
        let artikelName: HTMLElement = document.createElement("h3");
        artikelName.innerHTML = allProducts.name;

        // Beschreibung der Blume und Vase
        let artikelBeschreibung: HTMLElement = document.createElement("ul");
        let artikelBeschreibungInhalt: HTMLElement = document.createElement("li");
        artikelBeschreibungInhalt.innerHTML = allProducts.beschreibung;
        artikelBeschreibung.appendChild(artikelBeschreibungInhalt);
        let breakElement: HTMLElement = document.createElement("br");

        // Preis der Blume/ Vase
        let pPreis: HTMLElement = document.createElement("p");
        pPreis.setAttribute("class", "Preis");
        pPreis.innerHTML = allProducts.preis + " €";

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

    function locationHashChanged(): void {
        let artikelListe = document.getElementById("artikelListe");
        if (artikelListe) {
            artikelListe.innerHTML = "";
        }
        ladeProdukte();
    }

    function pageLoad(): void {
        const blase = document.getElementById("divBlase");
        if (blase) blase.innerHTML = "" + artikelZaehler;
        ladeProdukte();
    }

    async function ladeProdukte(): Promise<void> {
        if (location.hash) {
            aktuelleKategorie = location.hash.split("#")[1];
            let artikelUeberschrift: HTMLElement = document.createElement("h2");
            artikelUeberschrift.innerHTML = aktuelleKategorie;
            document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
        }
        else {
            let artikelUeberschrift: HTMLElement = document.createElement("h2");
            artikelUeberschrift.innerHTML = "Frische Blumen und Vasen";
            document.getElementById("artikelListe")?.appendChild(artikelUeberschrift);
        }

        // Artikelliste
        let dataUrl: string = "./data/shop_data.json";
        await communicate(dataUrl);
        for (let i: number = 0; i < allProducts.length; i++) {
            if (aktuelleKategorie == allProducts[i].kategorie) {
                produkteErzeugen(allProducts[i]);
            }
            else if (aktuelleKategorie == "") {
                produkteErzeugen(allProducts[i]);
            }
        }
    }

    window.onhashchange = locationHashChanged;
    window.onload = pageLoad;



    //let warenkorbTotal: number = 0;
    let artikelZaehler: number = localStorage.getItem("artikelAnzahl");
    let warenkorbTotal: number = 0;

    function handleClick(_event: Event): void {
        artikelZaehler++;
        if (artikelZaehler >= 0) {
            const blase = document.getElementById("divBlase");
            if (blase) blase.innerHTML = "" + artikelZaehler;
        }
        localStorage.setItem("artikelAnzahl", artikelZaehler.toString());
        let produktId: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("id")!;

        // Summe der Preise  
        for (let i: number = 0; i < allProducts.length; i++) {
            if (allProducts[i].id == produktId) {
                warenkorbTotal = warenkorbTotal + allProducts[i].preis;
                produktAuswahl.push(allProducts[i]);
            }
        }
        warenkorbTotal = Math.round(warenkorbTotal * 100) / 100;
        localStorage.setItem("warenkorbGesamtwert", warenkorbTotal.toString());
        localStorage.setItem("warenkorbProdukte", JSON.stringify(produktAuswahl));
    }
}