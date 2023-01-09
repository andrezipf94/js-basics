// undefined usually defines a key does not exist
let example = {};
console.log(example.key);

// null is used for values that exists, yet have no value
// an example may be a query result from a database where the column exists
// but has no value in it.
example = {
    name: 'example',
    surname: 'example',
    age: null
};
console.table(example);

// setting a value in a object as undefined does not remove that key
example.age = undefined;
console.log(example.age);

// to effectively remove that key, use the operator delete
delete example.age;
console.log(example.age);

// you can check if a key exists in the object by using the in operator
console.log(age in example);
example.age = null;
console.log(age in example);