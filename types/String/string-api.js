"JavaScript".length; // returns the string length
"PHP".indexOf("P"); // finds the first index of a character in the string, returns -1 if its not found
"PHP".lastIndexOf("P"); // finds the last index of a character in the string, returns -1 if its not found
"cobol".toUpperCase(); // transforms the string into uppercase
"ALGOL".toLowerCase(); // transforms the string into lowercase

"JavaScript".charAt(1); // returns the character at the nth position in the string, starting at 0
"JavaScript".charCodeAt(1); // returns the character unicode code at the nth position in the string, starting at 0
String.fromCharCode(97); // converts a unicode into a string

"JavaScript".includes("Java"); // checks if a string contains the provided text
"Ruby".startsWith("R"); // checks if the string starts with the provided text
"Erlang".endsWith("lang"); // checks if the string ends with the provided text

"C++".localeCompare("Ruby"); // compares an string, returning 1, 0, and -1 (follows the sort logic). This works with accented letter.
"Python".localeCompare("Java");
"JavaScript".localeCompare("JavaScript");

"C++".match(/\+/g); // finds regexp matches in the string, returning an array of results if the global flag is present, or the first match if it's not.
"Java".search(/a/); // finds the index of the first regex match.
"JavaScript".replace("Java", "Ecma"); // replaces a text in the string.
"JavaScript".replace(/a/g, 4); // if a regex is provided, replaces the first match (or all matches if the global flag is present)

"JavaScript".slice(0, 4); // returns a section of the string, having a offset and a length as parameters.
"JavaScript".slice(4); // if no offset is provided, starts from 0
"JavaScript".slice(0, -6); // if a negative length is provided, starts from the string end, moving to it's beginning
"JavaScript".slice(-6); // if a negative offset is provided, starts from the string end, moving towards its end.
"C;Java;JavaScript;Ruby".split(";"); // slits an string based on a text, returns an array of parts.
"JavaScript".substring(0, 4); // works similarly to splice, returning a section of the string
"JavaScript".substring(4, 0); // if the first argument (start) is greater than the second (end), the function swaps them automatically
"JavaScript".substring(4); // it also accepts a single value, returning from start 0.

"Java".concat("Script"); // concatenates a value to the string
"Data".concat("Flex");
"Script".padStart(10, "Java"); // adds the provided second argument to the beginning of the string until the string has the provided length
"C".padEnd(3, "+"); // adds the provided second argument to the end of the string until the string has the provided length
"C".concat("+".repeat(2));
" Self ".trim(); // remove blank spaces from the beginning and end of a string
" Scheme ".trimStart(); // remove blank spaces from the beginning of a string
" Perl ".trimEnd(); // remove blank spaces from the end of a string