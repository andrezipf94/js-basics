/**
 * Inheritance in js is based on prototypes.
 * A literal object default prototype is the Object class.
 */
let example = {};
console.log(example.__proto__);
console.log(Object.getPrototypeOf(example));

/**
 * Be careful when creating objects through the object api, as setting null
 * for the prototype will make the created object lack the Object class functions
 */
let example2 = Object.create(null);
console.log(example2.__proto__);
console.log(Object.getPrototypeOf(example2));