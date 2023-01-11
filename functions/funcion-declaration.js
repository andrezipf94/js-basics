/**
 * Creating a function by the function declaration method allows for
 * hoisting to happen. This makes so the order of which it's declared does not
 * matter, as it will be hoisted to the top of the block.
 */
console.log(sum(1, 1));

function sum(a, b) {
    return a + b;
}