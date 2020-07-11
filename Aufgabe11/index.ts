namespace Aufgabe8 {

    document.getElementById("submitBtnSend")?.addEventListener("click", submit);
    document.getElementById("submitBtnRequest")?.addEventListener("click", submit);
    //Hängt Formulardaten an URL
    async function submit(_event: Event): Promise<void> {
        let btnId: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget)).getAttribute("id")!;
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://testgisss2020.herokuapp.com/";
        if (btnId == "submitBtnSend") {
            url = url + "/send" + "?" + query.toString();
            let serverResponse: Response = await fetch(url);
            let response: JSON = await serverResponse.json();
            console.log(response);
        }
        else if (btnId == "submitBtnRequest") {
            url = url + "/request" + "?" + query.toString();
            let serverResponse: Response = await fetch(url);
            let responseJSON: JSON = await serverResponse.json();
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
}