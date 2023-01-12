/**
 * An array is an object which provides operations to access and manipulate it's properties.
 */
console.log(typeof []);

/**
 * An array can be defined by [] or using it's constructor
 */
let array = [1, 2, 3];
let constructorArray = new Array(1, 2, 3);
console.log(array, constructorArray);

/**
 * Be careful! you can instantiate an array passing its arguments to the constructor,
 * but if you provide a single Number, it will create the same number of empty elements.
 */ 
let arrayWithEmptyElements = new Array(10);
console.log(arrayWithEmptyElements);

// The length property indicates the amount of items in an array
// Empty elements inside the array are NOT considered in it's length
console.log(arrayWithEmptyElements.length);

// The delete operator deletes an item from an array, but leaves an empty item in it's place
let exampleArray = [1, 2, 3, 4, 5];
delete exampleArray[3];
console.log(exampleArray);