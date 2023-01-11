/**
 * instanceof checks the whole prototype chain for a match of the provided constructor function
 */

let _instanceof = function(object, constructorFunction) {
    if (object === constructorFunction.prototype) {
        return true;
    }
    if (object === null) {
        return false;
    }
    return _instanceof(object.__proto__, constructorFunction);
}

const date = new Date();
console.log(date instanceof Date);
console.log(date instanceof Object);
console.log(date instanceof Array);
console.log(_instanceof(date, Date));
console.log(_instanceof(date, Object));
console.log(_instanceof(date, Array));
