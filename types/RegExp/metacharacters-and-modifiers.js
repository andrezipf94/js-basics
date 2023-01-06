/**
 * Meta characters are reserved keywords used to define things like a blank space,
 * or a commonly used group of characters.
 */

/./; // any character
/^/; // the start of the string
/&/; // the end of the string
/\w/; // [a-zA-Z0-9_]
/\W/; // [^a-zA-Z0-9_]
/\d/; // [0-9]
/\D/; // [^0-9]
/\s/; // blank space
/\S/; // non blank space
/\n/; // line break
/\t/; // tab

/**
 * Modifiers alter the behavior or scope of the RegExp, and are added after the closing /
 * Example: /\d/g
 */

// i - Case-insensitive matching
// g - Global matching
// m - Multiline matching 