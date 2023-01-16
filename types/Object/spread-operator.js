/**
 * The spread operator allows for "spreading" or copying an array or object properties
 * into another.
 */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log([...array1, ...array2]);
console.log([...array2, ...array1]);

const object1 = {
    example: 'hello!'
};
const object2 = {
    example2: 'hello!'
};
console.log({
    ...object1,
    ...object2
});