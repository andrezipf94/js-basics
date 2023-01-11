/**
 * JS functions are first class functions. This means they can be attributed to a 
 * variable, passed as a parameter, or be returned by another function.
 */

const sum = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const calculator = function (operationFunction) {
    return function (a, b) {
        return operationFunction(a, b);
    }
}

console.log(calculator(sum)(1, 1));
console.log(calculator(subtract)(1, 1));