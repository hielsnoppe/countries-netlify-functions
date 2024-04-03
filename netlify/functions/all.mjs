/**
 * Heads up! Will error when key is not in object.
 * 
 * @param {*} obj 
 * @param {*} keys 
 * @returns 
 */
const filterKeys = (obj, keys) => {
    
    const result = {}

    for (let key of keys) {
        result[key] = obj[key]
    }

    return result
}

export default async (req, context) => {

    const countries = require('../../countries.json')

    // Step 11: Create URL object
    const url = new URL(req.url)
    // Step 12: Access query string parameters
    const queryStringParams = url.searchParams
    // Step 13: Access `fields` parameter
    const fieldsParam = queryStringParams.get('fields')

    // Step 14: Split fields parameter by comma
    const keys = fieldsParam.split(',')

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