/**
 * weak set is similar to set, but takes in only objects as its values.
 * weak sets are volatile and not iterable.
 */
const weakSet = new WeakSet();
const obj1 = {};
const obj2 = {};
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet);

weakSet.has(obj1); // returns true if the item is present in the set
weakSet.delete(obj1); // deletes an item from the set