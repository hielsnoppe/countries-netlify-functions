# countries-netlify-functions

Naïve reproduction of the [REST Countries](https://restcountries.com/) API for educational purposes using [Netlify Functions](https://www.netlify.com/platform/core/functions/).

## Aufgaben

1. Implementiere den Endpunkte `all`.
2. Implementiere den Endpunkt `name`.
3. Implementiere einen Endpunkt `random`.

Um die Daten zu laden, kannst du die Datei `countries.json` wie folgt einbinden:

    const countries = require('../../countries.json')

Um JSON in einer Response zurückzugeben, kannst du folgenden Code verwenden:

    const body = JSON.stringify(result)

    return new Response(body, {
        headers: {
            status: 200,
            statusText: 'OK',
            'Content-Type: 'application/json'
        }
    })