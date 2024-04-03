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

    const url = new URL(req.url)
    const queryStringParams = url.searchParams
    const fieldsParam = queryStringParams.get('fields')

    let result = undefined

    if (fieldsParam) {

        const keys = fieldsParam.split(',')

        result = countries.map((country) => {
            return filterKeys(country, keys)
        })
    }
    else {
        result = countries
    }

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