/**
 * array mutators modify the array in some way
 */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.push(10); // push adds an item to the end of the array
array.pop(); // pop removes an item from the end of the array, returning its value
array.unshift(0); // unshift adds an element to the start of the array
array.shift(); // shift removes and returns the value of the item at the start of the array.
array.splice(0, 1); // splice removes, replaces or adds one or more elements in a determined position.
array.sort((a, b) => a > b); // sort sorts an array based on a function returning -1, 0 or 1.
array.reverse(); // reverse reverses the array.
array.fill(100, array.length, array.length + 5); // fill adds a value from a specific index N times