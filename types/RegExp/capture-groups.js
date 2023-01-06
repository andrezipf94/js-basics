/**
 * Capturing groups are a way to collect matches from a RegExp
 * Those are simply a parenthesis grouping, and results will be returned by order of appearance 
 */
let sampleString = 'john@doe.com';
let regExp = /(\w+)@(\w+)\.com/;
console.log(regExp.exec(sampleString));