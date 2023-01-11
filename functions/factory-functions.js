/**
 * Factory functions are used to create objects after being directly called.
 */
const personPrototype = {
    getAge() {
        return (new Date()).getFullYear() - this.birthYear;
    }
};
const buildPerson = function(name, country, birthYear) {
    const obj = {
        name,
        country,
        birthYear
    };
    Object.setPrototypeOf(obj, personPrototype);
};

console.log(buildPerson('John', 'USA', 1950));
console.log(buildPerson('Mary', 'Canada', 1952));