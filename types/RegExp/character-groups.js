/**
 * Character groups are a way to define a group of allowed or not allowed characters.
 * A allowed group is defined by [] and a not allowed group by [^]
 * A range of characters can also be defined by using "-".
 */
let sampleString = 'john@doe.com';
let regExp = /[a-zA-Z0-9]+@[a-zA-z0-9]+.com/;
console.log(regExp.test(sampleString));