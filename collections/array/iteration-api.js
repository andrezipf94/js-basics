/**
 * arrays can be iterated upon by the following functions
 */
let example = [1, 2, 3, 4, 5, 6, 7, 8, 9];
example.forEach(console.log); // executes a function for each item
example.filter(value => value >= 5); // filters the array based on a function, returns a new array
example.find(value => value === 2); // returns the first item which returned true from the provided function
example.some(value => value > 8); // returns true if one or more items matches the function criteria
example.every(value => value > 0); // returns true if all of the items match the function criteria
example.map(value => value + 1); // returns a new array of the same length, containing the result of the provided function
example.reduce((accumulator, value) => accumulator += value, 0); // returns the accumulator value after all iterations