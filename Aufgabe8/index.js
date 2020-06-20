"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    document.getElementById("submitBtn")?.addEventListener("click", submit);
    //Hängt Formulardaten an URL
    async function submit() {
        let formData = new FormData(document.forms[0]);
        let url = "http://127.0.0.1:8100";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=index.js.map