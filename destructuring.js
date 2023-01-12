/**
 * destructuring is basically a syntax sugar for assigning positions in an array or
 * keys in an object to variables.
 */
let persons = 'John;50';
let [name, age] = persons.split(';');
console.log(name, age);

// If you don't want an array position to be assigned to a variable, leave it's position empty
[, age] = persons.split(';');
console.log(age);

// for objects it's almost the same, but using {}
let personAsObject = {
    name: 'John',
    age: 50,
    address: {
        street: 'Example St.',
    }
};
let {personName, personAge, address: { street }} = personAsObject;
console.log(personName, personAge, street);

// it's possible to set a different variable name, making reference to the key, then its name
let { name: example } = personAsObject;
console.log(example);