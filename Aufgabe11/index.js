"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    document.getElementById("submitBtnSend")?.addEventListener("click", submit);
    document.getElementById("submitBtnRequest")?.addEventListener("click", submit);
    //Hängt Formulardaten an URL
    async function submit(_event) {
        let btnId = _event.currentTarget.getAttribute("id");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let url = "https://testgisss2020.herokuapp.com";
        if (btnId == "submitBtnSend") {
            url = url + "/send" + "?" + query.toString();
            let serverResponse = await fetch(url);
            let response = await serverResponse.json();
            console.log(response);
        }
        else if (btnId == "submitBtnRequest") {
            url = url + "/request" + "?" + query.toString();
            let serverResponse = await fetch(url);
            let responseJSON = await serverResponse.json();
            console.log(responseJSON);
            let responseText = "";
            responseText += "<p>Datenbankinhalt:</p>";
            for (let i in responseJSON) {
                for (let key in responseJSON[i]) {
                    responseText += ("<div>" + key + " : " + responseJSON[i][key] + "</div>");
                }
                responseText += ("<br>");
            }
            let responseDiv = document.getElementById("responseText");
            if (responseDiv) {
                responseDiv.innerHTML = responseText;
            }
        }
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=index.js.map