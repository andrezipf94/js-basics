/**
 * Declaring a function by the function expression method avoids function hoisting,
 * so the place of it's declaration matters.
 */
try {
    sum(1, 1);
} catch (error) {
    console.log(error);
}

const sum = function (a, b) {
    return a + b;
}
console.log(sum(1, 1));