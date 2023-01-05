// Every bit to bit operation is done by 32bits
// So 0b111 is converted to 0b00000000000000000000000000000111.

/**
 * OR
 * --------------------------------------------------------------------------------------------------------------
 * Compares every bit of the binary representation, and whenever it finds a 1 in ANY number, that bit becomes a 1.
 * 4 -> 00000000000000000000000000000100
 * 3 -> 00000000000000000000000000000011
 * r -> 00000000000000000000000000000111, which equals, in decimal, 7.
 * --------------------------------------------------------------------------------------------------------------
 */
4 | 3 // -> 7

/**
 * AND
 * --------------------------------------------------------------------------------------------------------------
 * Compares every bit of the binary representation, and whenever it finds a 1 in BOTH number, that bit becomes a 1.
 * 3 -> 00000000000000000000000000000011
 * 1 -> 00000000000000000000000000000001
 * r -> 00000000000000000000000000000001
 * --------------------------------------------------------------------------------------------------------------
 */
3 & 1 // -> 1

/**
 * XOR
 * --------------------------------------------------------------------------------------------------------------
 * Compares every bit of the binary representation, and whenever it finds a 1 and a 0, that bit becomes a 1.
 * 5 -> 00000000000000000000000000000101
 * 2 -> 00000000000000000000000000000010
 * r -> 00000000000000000000000000000111, which equals, in decimal, 7.
 * --------------------------------------------------------------------------------------------------------------
 */
5 | 2 // -> 7

/**
 * NOT
 * --------------------------------------------------------------------------------------------------------------
 * Inverts all bits, including the signal.
 * 
 * The first digit of the samples below is the signal digit (0 is positive, 1 is negative)
 * 4 -> 000000000000000000000000000000100
 * r -> 111111111111111111111111111111011, which equals, in decimal, -5.
 * --------------------------------------------------------------------------------------------------------------
 */
~4

/**
 * Left shift
 * --------------------------------------------------------------------------------------------------------------
 * Shifts the first operand a specific amount of bits to the left.
 * This keeps the signal digit as is.
 * 4 -> 000000000000000000000000000000100
 * r -> 000000000000000000000000000010000, which equals, in decimal, 16.
 * --------------------------------------------------------------------------------------------------------------
 */
4 << 2

/**
 * Right shift
 * --------------------------------------------------------------------------------------------------------------
 * Shifts the first operand a specific amount of bits to the right.
 * This keeps the signal digit as is.
 * 4 -> 000000000000000000000000000000100
 * r -> 000000000000000000000000000000001, which equals, in decimal, 1.
 * --------------------------------------------------------------------------------------------------------------
 */
4 >> 2

/**
 * Unsigned right shift
 * --------------------------------------------------------------------------------------------------------------
 * Shifts the first operand a specific amount of bits to the right. This treats the number as unsigned, so the
 * signal digit is shifted as well.
 * 
 * The first digit of the samples below is the signal digit (0 is positive, 1 is negative)
 * -2 -> 11111111111111111111111111111110 
 * r  -> 01111111111111111111111111111111, which equals, in decimal, 2147483647.
 * --------------------------------------------------------------------------------------------------------------
 */
-2 >>> 1