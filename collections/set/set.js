/**
 * a set is a object which store unique elements.
 * it differs from an array, as it does not allow for duplicated values.
 */
const set = new Set();
set.add(1);
set.add(1);
set.add(1);
console.log(set);
console.log(set.size);

set.entries(); // returns a iterable of entries (key/value pairs)
set.forEach(value => console.log(value)); // executes the function for each item in the set
set.has(1); // returns true if the value is present in the set
set.keys(); // returns an array of keys
set.values(); // returns an array of values
set.delete(1); // deletes an value from the set
set.clear(); // clears the set, removing all items