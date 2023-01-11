/**
 * It is possible to invoke a function with less or more parameters.
 */
let sum = function (a, b) {
    return a + b;
};
console.log(sum());
console.log(sum(1));
console.log(sum(1, 2, 3));

/**
 * It's possible to define default values for a function parameter.
 */
sum = function (a = 0, b = 0) {
    return a + b;
};
console.log(sum());
console.log(sum(1));

/**
 * It's possible to access a function set of parameters by using the implicit
 * variable "arguments", which returns an object containing the argument name
 * and it's value.
 */
sum = function () {
    let sum = 0;
    for (let argument in arguments) {
        sum += arguments[argument];
    }
    return sum;
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

/**
 * The same could be achieved by using rest parameter, which returns an
 * array with the provided values.
 * The rest parameter MUST be the last declared parameter.
 */
sum = function (...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));