namespace Aufgabe8 {

document.getElementById("submitBtn")?.addEventListener("click", submit);
//Hängt Formulardaten an URL
async function submit(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
   
    let url: string = "http://127.0.0.1:8100";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();

    await fetch(url);
}

}