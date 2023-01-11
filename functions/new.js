/**
 * The "new" operator is used for creating an object, setting its prototype and binding
 * it's "this" context.
 * 
 * We can recreate this by creating the following function.
 */
let _new = function(constructorFunction, ...params) {
    let obj = {};
    Object.setPrototypeOf(obj, constructorFunction.prototype);
    constructorFunction.apply(obj, params);
    return obj;
}

const Person = function(name, country, birthYear) {
    this.name = name;
    this.country = country;
    this.birthYear = birthYear;
};
Person.prototype.getAge = function() {
    return (new Date()).getFullYear() - this.birthYear;
};

console.log(_new(Person, 'John', 'USA', 1950));
console.log(_new(Person, 'Mary', 'Canada', 1952));

