/**
 * var is declared at function scope, does NOT respect blocks and allows redeclaration and reassignments.
 */

if (true) {
    var pi = 3.141592;
}
console.log(pi);

pi = 3;
console.log(pi);

var pi = 4;
console.log(pi);