// Step 4: Define filterKeys function
const filterKeys = (obj, keys) => {
    
    return obj // TODO
}

export default async (req, context) => {

    const countries = require('../../countries.json')

    // Step 5: Define keys constant
    const keys = [] // TODO

    // Step 6: Filter countries by fields
    const result = countries.map((country) => {
        return filterKeys(country, keys)
    })

    const body = JSON.stringify(result)

    return new Response(body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const config = {
    path: '/all'
}