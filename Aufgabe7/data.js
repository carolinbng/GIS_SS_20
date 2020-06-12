"use strict";
var Aufgabe6;
(function (Aufgabe6) {
    Aufgabe6.produktAuswahl = [];
    async function communicate(_url) {
        let response1 = await fetch(_url);
        let response2 = await response1.json();
        Aufgabe6.allProducts = JSON.parse(JSON.stringify(response2));
    }
    Aufgabe6.communicate = communicate;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=data.js.map