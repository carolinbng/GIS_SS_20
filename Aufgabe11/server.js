"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A11Server = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var A11Server;
(function (A11Server) {
    let dbUrl = "mongodb+srv://test_user:tester2105@cluster11.hf6zk.mongodb.net/Aufgabe11?retryWrites=true&w=majority";
    let kundendaten;
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        kundendaten = mongoClient.db("Aufgabe11").collection("Kundendaten");
        if (kundendaten != undefined) {
            console.log("Datenbank verbunden");
        }
    }
    connectToDatabase(dbUrl);
    // Ausgabe in der Konsole, Server startet
    console.log("Starting server");
    // Erstelle Variable port vom Datentyp number. env = Environment = Umgebung. process= liefert Infos zur Umgebung
    // In der Variable port wird der Wert der Umgebungsvariable "PORT" gespeichert.
    let port = Number(process.env.PORT);
    // Wenn Umgebungsvariable nicht vorhanden, dann eigene Wertzuweisung; 
    if (!port)
        port = 8100;
    // Einen http Server erstellen
    let server = Http.createServer();
    // Sobald Server eine Anfrage bekommt, wird der handleRequest Funktion aufgerufen
    server.addListener("request", handleRequest);
    // Sobald der Server "zuhört" wird handleListen Funktion aufgerufen
    server.addListener("listening", handleListen);
    // Server hört ab jetzt auf port; Server startet
    server.listen(port);
    // Sobald Funktion aufgerufen wird, gibt die Konsole "Listening" aus.
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        const adresse = _request.url;
        let q = url.parse(adresse, true);
        /*Die query Eigenschaft gibt ein Ojekt zurück, dass alle query-string Parameter als Eigenschaften besitzt. So können beliebig gesendete Attribute ausgelesen werden:*/
        let qdata = q.query;
        // Sobald eine Anfrage kommt, wird folgender Inhalt diesem zurückgeschickt:
        // Header für Antwort (Was für eine Art von Inhalt ist unsere Antwort)
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Man schickt dem Anforderer seine eigene URL zurück
        if (q.pathname == "/request") {
            let dbDaten = await kundendaten.find().toArray();
            _response.write(JSON.stringify(dbDaten));
        }
        else if (q.pathname == "/send") {
            kundendaten.insertOne(qdata);
            let jsonString = JSON.stringify(qdata);
            _response.write(jsonString);
        }
        else {
            _response.write("Was geht?");
        }
        // Ende der Antwort
        _response.end();
    }
})(A11Server = exports.A11Server || (exports.A11Server = {}));
//# sourceMappingURL=server.js.map