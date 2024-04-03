/**
 * Heads up! Will error when key is not in object.
 * 
 * @param {*} obj 
 * @param {*} keys 
 * @returns 
 */
const filterKeys = (obj, keys) => {
    
    // Step 7: Create empty object
    const result = {}

    // Step 8: Iterate over keys
    for (let key of keys) {

        // Step 9: Copy value for each key to result
        result[key] = obj[key]
    }

    // Step 10: Return result
    return result
}

export default async (req, context) => {

    const countries = require('../../countries.json')

    const keys = ['name'] // TODO

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