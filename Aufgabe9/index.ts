namespace Aufgabe8 {

    document.getElementById("submitBtnHTML")?.addEventListener("click", submit);
    document.getElementById("submitBtnJSON")?.addEventListener("click", submit);
    //Hängt Formulardaten an URL
    async function submit(_event: Event): Promise<void> {
        let btnId: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget)).getAttribute("id")!;
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://testgisss2020.herokuapp.com/";
        if (btnId == "submitBtnJSON") {
            url = url + "/json" + "?" + query.toString();
            let serverResponse: Response = await fetch(url);
            let response: JSON = await serverResponse.json();
            console.log(response);
        }
        else if (btnId == "submitBtnHTML") {
            url = url + "/html" + "?" + query.toString();
            let serverResponse: Response = await fetch(url);
            let responseText: string = await serverResponse.text();
            let responseDiv = document.getElementById("responseText");
            if (responseDiv) {
                responseDiv.innerHTML = responseText;
            }
        }
    }
}