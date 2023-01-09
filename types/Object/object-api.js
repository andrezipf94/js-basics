/**
 * Object.assign is used to copy properties from other objects
 */
let target = {};
let copied = {
    property: 'hello!'
};
let secondCopied = {
    secondProperty: 'hello again!'
}
Object.assign(target, copied, secondCopied);
console.log(target);

/**
 * Object.keys returns the object keys as an array
 */
console.log(Object.keys(target));

/**
 * Object.values returns the object values as an array
 */
console.log(Object.values(target));

/**
 * Object.entries returns the object key-value pairs as an array
 */
console.log(Object.entries(target));

/**
 * Object.is compares two objects, much like the === operator does.
 * There are a few things like NaN === NaN would actually return true
 */
let NaNExample1 = { key: NaN };
let NaNExample2 = { key: NaN };
console.log(Object.is(NaNExample1, NaNExample1));
console.log(Object.is(NaNExample1, NaNExample2));

/**
 * Object.defineProperty is a way to create a new property.
 * It allows for configuring a few things like:
 * configurable: allows deleting the property
 * enumerable: allows enumeration (showing up in for ins for example)
 * value: the property value
 * writable: allows for updating the property value
 */
Object.defineProperty(target, 'definedProperty', {
    configurable: true,
    enumerable: true,
    value: 'I\'ve been defined using defineProperty',
    writable: true,
});

/**
 * Object.preventExtensions makes the object unable to receive new properties.
 * You can use Object.isExtensible to check for this modifier.
 */
let preventExtensions = { property: 'hello!' };
Object.preventExtensions(preventExtensions);
preventExtensions.newProperty = 'hi!';
console.log(preventExtensions);
console.log(Object.isExtensible(preventExtensions));

/**
 * Object.seal makes the object unable to receive new properties and also
 * makes it's properties not deletable.
 * You can use Object.isSealed to check for this modification.
 */
let seal = { property: 'hi!' };
Object.seal(seal);
setInterval.newProperty = 'hello!';
delete seal.property;
console.log(seal);
console.log(Object.isExtensible(seal));
console.log(Object.isSealed(seal));

/**
 * Object.freeze prevents adding properties, updating properties and removing
 * properties from the object.
 * You can use Object.isFrozen to check for this modifier.
 */
let frozen = { isCold: true };
Object.freeze(frozen);
frozen.isCold = false;
frozen.newProperty = 'cooooold';
delete frozen.isCold;
console.log(Object.isExtensible(frozen));
console.log(Object.isSealed(frozen));

// It's not possible to change the prototype of a immutable object
let protoFrozenExample = {};
try {
    Object.setPrototypeOf(protoFrozenExample, null);
} catch (error) {
    console.log(error);
}
