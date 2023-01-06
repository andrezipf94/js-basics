/**
 * Quantifiers determine the amount of times a grouping or element is expected to happen.
 * 
 * {n} - determines a specific amount of times
 * {n,} - determines a minimum amount of times
 * {n,m} - determines a range
 * ? - Zero or one time
 * * - Zero or more times
 * + - One or more times
 */
let sampleString = 'mary@domain.com';
regExp = /^\w+@\w+(\.+\w{2,3})$/;
console.log(regExp.test(sampleString));