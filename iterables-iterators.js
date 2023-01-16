/**
 * iterables and iterators are conventions applied by Arrays, Maps, Sets and Strings.
 * Applying this convention allows them to be iterable, using a protocol.
 */
let array = [1, 2, 3, 4, 5];
for (let number of array) {
    console.log(number);
}

let map = new Map([1, 1], [2, 2], [3, 3]);
for (let entry of map) {
    console.log(entry);
}

let set = new Set([1, 2, 3]);
for (let number of set) {
    console.log(number);
}

let string  = 'hello world!';
for (let char of string) {
    console.log(char);
}

/**
 * every iterable has a property keyed as Symbol.iterator which defines the iteration protocol
 * for that object
 */
const arrayIterator = array[Symbol.iterator]();
for (let i in array) {
    console.log(iterator.next());
}
console.log(iterator.next());

/**
 * to create a iterable, we must define a iterator using Symbol.iterator in the object.
 */
let object = {
    items: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let i = 0;
        let that = this;
        return {
            next() {
                if (i < that.items.length) {
                    return { value: that.items[i++], done: false };
                }
                return { value: undefined, done: true };
            }
        }
    }
}
console.log([...object]);
for (let number of object) {
    console.log(number);
}