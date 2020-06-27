"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    document.getElementById("submitBtnHTML")?.addEventListener("click", submit);
    document.getElementById("submitBtnJSON")?.addEventListener("click", submit);
    //Hängt Formulardaten an URL
    async function submit(_event) {
        let btnId = _event.currentTarget.getAttribute("id");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://testgisss2020.herokuapp.com";
        if (btnId == "submitBtnJSON") {
            url = url + "/json" + "?" + query.toString();
            let serverResponse = await fetch(url);
            let response = await serverResponse.json();
            console.log(response);
        }
        else if (btnId == "submitBtnHTML") {
            url = url + "/html" + "?" + query.toString();
            let serverResponse = await fetch(url);
            let responseText = await serverResponse.text();
            let responseDiv = document.getElementById("responseText");
            if (responseDiv) {
                responseDiv.innerHTML = responseText;
            }
        }
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=index.js.map