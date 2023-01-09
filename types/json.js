/**
 * JSON (JavaScript object notation) is a data exchange format.
 * It's derived from JavaScript, and was discovered by Douglas Crockford
 * and standardized by ECMA-404.
 * 
 * It's values can be of the following types:
 * - Number
 * - String
 * - Boolean
 * - Object
 * - Array
 * - Null
 * 
 * JSON and JS objects are completely different things!
 */
10
'"string"'
true
{}
[]
null

/**
 * JS provides a JSON API, which contains functions like JSON.stringify and 
 * JSON.parse.
 * 
 * JSON.stringify parses a determined data type to JSON.
 * JSON.parse parses a JSON string into a data type.
 */
let jsonExample = {
    string: 'string',
    number: 10.1,
    bool: true,
    object: {},
    array: [],
    null: null
};
console.log(JSON.stringify(jsonExample));
let jsonString = '{"example": "example"}';
console.log(JSON.parse(jsonString));