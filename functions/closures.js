/**
 * Every function in JS is a closure.
 * 
 * A closure is a way to avoid ambiguity having first class functions. It creates a 
 * static context for that function in the moment of it's creation.
 * 
 * Although static, the scope chain may refer an object in memory, which itself is volatile
 * and may be shared by more than one function.
 */
let value = 1;
const getValue = function() {
    return value;
}

const getValue2 = function() {
    value = 100;
    return getValue();
}
// This will log 10, because the scope of getValue is static and defined at its creation.
console.log(getValue2());

