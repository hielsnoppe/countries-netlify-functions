# countries-netlify-functions

Naïve reproduction of the [REST Countries](https://restcountries.com/) API for educational purposes using [Netlify Functions](https://www.netlify.com/platform/core/functions/).

## Aufgaben

1. Implementiere den Endpunkte `all`.
2. Implementiere den Endpunkt `name`.
3. Implementiere einen Endpunkt `random`.

### Endpunkt `all`

Dieser Endpunkt gibt eine Liste alle Läder zurück.

Wenn der Query String Parameter `fields` übermittelt wird, soll die Antwort nur die angegebenen Felder enthalten.

### Endpunkt `name`

Dieser Endpunkt verwendet den Path Parameter `name` und gibt eine Liste aller Länder zurück, deren Name den angegebenen Namen enthält.

Wenn der Query String Parameter `fullText=true` übermittelt wird, sollen nur Länder enthalten sein, deren Name dem gesuchten Namen genau entspricht. Ansonsten genügt es, dass der angegebene Name im Namen des Landes enthalten ist.

Wenn der Query String Parameter `fields` übermittelt wird, soll die Antwort nur die angegebenen Felder enthalten.

### Endpunkt `random`

Dieser Endpunkt gibt ein zufälliges Land zurück.

Wenn der Query String Parameter `fields` übermittelt wird, soll die Antwort nur die angegebenen Felder enthalten.

Weitere Parameter können nach eigenen Vorstellungen hinzugefügt und implementiert werden.

## Hilfestellungen

Um die Daten zu laden, kannst du die Datei `countries.json` wie folgt einbinden:

    const countries = require('../../countries.json')

Um JSON in einer Response zurückzugeben, kannst du folgenden Code verwenden:

    const body = JSON.stringify(result)

    return new Response(body, {
        headers: {
            status: 200,
            statusText: 'OK',
            'Content-Type': 'application/json'
        }
    })

Um auf Query String Parameter zuzugreifen, kannst du folgenden Code verwenden:

    const url = new URL(request.url)
    const queryStringParams = url.searchParams
    const fooParam = queryStringParams.get('foo')

Um auf Path Parameter zuzugreifen, kannst du folgenden Code verwenden:

    const result = context.params.foo