/**
 * Using double or triple equals to compare objects may not work as expected.
 * 
 * This happens because whats actually being compared is the memory address, and not
 * the object values.
 * 
 * To work around this, we need to evaluate the values of each object against each other,
 * using two for in loops. This way we can control whether to check for ownProperties only
 * or the whole proto chain.
 */

let example = {};
let example2 = {};
console.log(example == example2);
console.log(example === example2);

let isEqual = true;
for (let key in example) {
    if (example[key] !== example2[key]) {
        isEqual = false;
    }
}
for (let key in example2) {
    if (example[key] !== example2[key]) {
        isEqual = false;
    }
}
console.log(isEqual);

// Another way to compare objects is to compare the json representation
// This has a few flaws, like only checking for enumerable properties
console.log(JSON.stringify(example) === JSON.stringify(example2));