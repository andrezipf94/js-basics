/**
 * let is declared at function scope, respects blocks and allows reassignments, but not redeclarations.
 */

// This will work, as reassignments are allowed in let declared variables.
(function() {
    let pi = 3.141592;
    console.log(pi);
    pi = 3;
    console.log(pi);
})();

// This will lead to an error because the variable is not declared outside the if statement block.
(function() {
    if (true) {
        let pi = 3.141592;
    }
    console.log(pi);
})();


// This will lead to an error because variables declared with let doesn't allow redeclarations.
(function() {
    let pi = 3.141592;
    let pi = 3;
})();
