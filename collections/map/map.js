/**
 * a map is a data structure which contains key-value pairs.
 * it differs from common objects in the accepted key types, which can be of any type
 */
let map = new Map();
map.set(1, 'Number');
map.set('1', 'String');
map.set(true, 'Boolean');
map.set(null, 'Null');
map.set(undefined, 'Undefined');
let object = {};
map.set(object, 'Object');

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(true));
console.log(map.get(null));
console.log(map.get(undefined));
console.log(map.get(object));

map.has(1); // returns true if the map has the provided key
map.delete(1); // deletes an key/value pair.
map.keys(); // returns an iterator of keys
map.values(); // returns an iterator of values
map.forEach((value) => console.log(value)); // executes the provided function for each item
map.entries(); // returns an iterator of key/value pairs
map.clear(); // clears the map, removing all key/value pairs