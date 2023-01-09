/**
 * A object is a dynamic collection of properties.
 * Those properties keys can be strings or Symbols, and it's values can be
 * of any data type.
 */

// An object can be created by three methods.
// Using a literal object
let literal = {};

// Using the Object constructor
let constructor = new Object();

// Using the Object API
let api = Object.create({}); // Be careful not to pass null here

// There's also the possibility of dynamically setting the keys of a object
let keyName = 'key';
let dynamicKeys = {
    [keyName]: 'value'
};
console.log(dynamicKeys);


// You can set and get properties of an object using it's accessors
let example = {};
example.property = 'hello!';
console.log(property);

example['property-with-hyphens'] = 'hello again! 😀';
console.log(example['property-with-hyphens']);

// To delete a property, use the delete operator
delete example.property;
delete example["property-with-hyphens"];
console.log(example);