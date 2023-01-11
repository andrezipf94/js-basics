/**
 * Arrow functions are functions without it's own this context, nor its own arguments.
 * It also allows for some syntax abbreviations.
 */
const person = {
    name: 'John',
    country: 'USA',
    birthYear: 1950,
    getAge: () => (new Date()) - this.birthYear,
}
console.log(person.getAge()); // NaN because this.birthYear will be undefined

const sum = () => {
    let sum = 0;
    for (let argument in arguments) {
        sum += arguments[argument];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 8)); // This will not return 45 as expected

() => {
    return 1;
};

() => 1;

(a, b) => {
    return a + b;
};

(a, b) => a + b;

a => {
    return a;
};

a => a;
