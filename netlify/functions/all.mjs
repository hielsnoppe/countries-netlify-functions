export default async (req, context) => {

    // Step 1: Load countries
    const countries = require('../../countries.json')

    // Step 2: Create countries JSON
    const result = countries

    const body = JSON.stringify(result)

    // Step 3: Return JSON response
    return new Response(body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const config = {
    path: '/all'
}