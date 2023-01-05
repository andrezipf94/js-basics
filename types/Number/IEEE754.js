/**
 * [...]
 * IEEE754 is a technical standard for floating-point arithmetic established in 1985 by the Institute of Electrical and Electronics Engineers (IEEE).
 * The standard addressed many problems found in the diverse floating-point implementations that made them difficult to use reliably and portably. Many hardware floating-point units use the IEEE 754 standard.
 * [...]
 * Source: https://en.wikipedia.org/wiki/IEEE_754
 * 
 * This standard basically describes how EcmaScript and many other programming languages handles/stores numeric values.
 */

/**
 * Number rounding problems
 * This happens because of the way the number is stored, due to rounding problems.
 * The issue can be visually seen using this tool: http://weitz.de/ieee/
 */ 
0.1 + 0.2; // => 0.30000000000000004
666.7 - 666.6; // => 0.10000000000002274
33.3 * 3; // => 99.89999999999999
12.2 / 0.1; // => 121.99999999999999

/**
 * Upper and lower limits
 * JS defines the highest and lowest number it can deal with using constants in the Number API.
 */
Number.MAX_VALUE;
Number.MIN_VALUE;

/**
 * Anything below the MIN_VALUE or above the MAX_VALUE will result in INFINITY
 */
Number.MAX_VALUE *2;
-Number.MAX_VALUE *2;

/**
 * Any operations which are not resolvable by the interpreter will return NaN (Not a Number)
 */
10 * 'string';
0/0;
Math.sqrt(-9);
Math.log(-1);
parseFloat('string');

NaN === NaN; // This is false
isNaN(NaN); // This is true