/**
 * weak maps are maps of which the keys can be only objects.
 * 
 * this is done to avoid memory leaks, as the key references are weak, and can be 
 * collected by GC when not in use.
 * 
 * weak maps are volatile and not iterable.
 */
let obj1 = {};
let obj2 = {};

const weakMap = new WeakMap();
weakMap.set(obj1, 'Object 1');
weakMap.set(obj2, 'Object 2');

weakMap.has(obj1); // returns true if the key is present
weakMap.get(obj1); // returns the value of the key, if present
weakMap.delete(obj1); // deletes the key/value pair, if present.