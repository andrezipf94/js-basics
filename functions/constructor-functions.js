/**
 * Constructor functions builds objects by using the new operator.
 * The prototype is set by using the "prototype" attribute.
 */
const Person = function(name, country, birthYear) {
    this.name = name;
    this.country = country;
    this.birthYear = birthYear;
};
Person.prototype.getAge = function() {
    return (new Date()).getFullYear() - this.birthYear;
};

console.log(new Person('John', 'USA', 1950));
console.log(new Person('Mary', 'Canada', 1952));