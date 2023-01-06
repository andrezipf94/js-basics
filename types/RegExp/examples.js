let sampleString = 'john@doe.com';

// Using a simple text match
// Note that . is escaped, as it's a reserved character used to represent any character.
let regExp = /john@doe\.com/;
console.log(regExp.test(sampleString));

// Using metacharacters (\w) and quantifiers ({2,3} or +)
regExp = /^\w+@\w+(\.+\w{2,3})$/;
console.log(regExp.test(sampleString));