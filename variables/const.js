/**
 * consts behaves similar to let, except it does not allow for reassignments
 */

// This will NOT work, as reassignments are NOT allowed in const declared variables.
(function() {
    const pi = 3.141592;
    console.log(pi);
    pi = 3;
    console.log(pi);
})();

// This will lead to an error because the variable is not declared outside the if statement block.
(function() {
    if (true) {
        const pi = 3.141592;
    }
    console.log(pi);
})();


// This will lead to an error because variables declared with let doesn't allow redeclarations.
(function() {
    const pi = 3.141592;
    const pi = 3;
})();