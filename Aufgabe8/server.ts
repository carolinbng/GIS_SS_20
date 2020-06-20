import * as Http from "http";

export namespace A08Server {
  // Ausgabe in der Konsole, Server startet
  console.log("Starting server");
  // Erstelle Variable port vom Datentyp number. env = Environment = Umgebung. process= liefert Infos zur Umgebung
  // In der Variable port wird der Wert der Umgebungsvariable "PORT" gespeichert.
  let port: number = Number(process.env.PORT);
  // Wenn Umgebungsvariable nicht vorhanden, dann eigene Wertzuweisung; 
  if (!port)
    port = 8100;

  // Einen http Server erstellen
  let server: Http.Server = Http.createServer();
  // Sobald Server eine Anfrage bekommt, wird der handleRequest Funktion aufgerufen
  server.addListener("request", handleRequest);
  // Sobald der Server "zuhört" wird handleListen Funktion aufgerufen
  server.addListener("listening", handleListen);
  // Server hört ab jetzt auf port; Server startet
  server.listen(port);

  // Sobald Funktion aufgerufen wird, gibt die Konsole "Listening" aus.
  function handleListen(): void {
    console.log("Listening");
  }

  
  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    // Sobald Funktion aufgerufen wird, gibt die Konsole "I hear voices!" aus.
    console.log("I hear voices!");
    const queryString: string = _request.url;
    // Gebe query string in Konsole aus.
    console.log(queryString);
    // Sobald eine Anfrage kommt, wird folgender Inhalt diesem zurückgeschickt:
    // Header für Antwort (Was für eine Art von Inhalt ist unsere Antwort)
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    // Man schickt dem Anforderer seine eigene URL zurück
    _response.write(_request.url);

    // Ende der Antwort
    _response.end();
  }
}