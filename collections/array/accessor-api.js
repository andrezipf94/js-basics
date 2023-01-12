/**
 * accessor functions returns information about the array
 */
let example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
example.indexOf(1); // returns the index of the first match
example.lastIndexOf(1); // returns the index of the last match
example.includes(11); // returns true if the array contains the provided value
example.concat([11]); // concatenates (adds) the two arrays, returning a new one
example.slice(0, 2); // returns a new array containing part of the array, delimited by a start and end
example.join(';'); // transforms the array into a string, joining elements by a provided delimiter