/**
 * globals are declared without using any of let, var or const prefixes.
 * it works like var, except it's saved at the global scope, and are likely to create problems.
 */

(function() {
    pi = 3.141592;
})();
console.log(pi);

(function() {
    pi = 3;
})();
console.log(pi);

pi = 4;
console.log(pi);
