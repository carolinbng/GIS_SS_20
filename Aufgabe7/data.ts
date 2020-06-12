namespace Aufgabe6 {

    export interface Produkt {
        id: string;
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        kategorie: string;
    }
    
    
    
    export let produkt: Produkt[];

    export async function communicate(_url: RequestInfo): Promise<void> {
        let response1: Response = await fetch(_url);
        let response2: JSON = await response1.json();
        produkt = JSON.parse(JSON.stringify(response2));
        
    }

    }
    
        
        