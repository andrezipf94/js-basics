/**
 * Performance wise, normal declarations of string perform better.
 */

console.time('constructor performance');
for (let counter = 0; counter < 100_000; counter++) {
    new String('example');
}
console.timeEnd('constructor performance');

console.time('normal declaration performance');
for (let counter = 0; counter < 100_000; counter++) {
    'example';
}
console.timeEnd('normal declaration performance');