/**
 * boolean operators can either apply type coercion in case of mismatch
 * or simply validate if the types match first
 * 
 * ==, !== does not validate the type first, hence applying type coercion
 * >=, <=, >, < are also available, and apply type coercion
 * 
 * ===, !=== do check the type first
 */

1 == '1';
1 === '1';
1 != '1';
1 !== '1';
1 < 1;
1 <= 1;
1 > 1;
1 >= 1;

/**
 * there's also || and &&, which applies boolean comparing logic
 * || takes the first truthy value
 * && takes the latest value, stopping when it finds a falsy value
 */
0 || 1
1 || 0
1 && 2
2 && 1
'0' || '1'
'1' || '0'
'1' && '2'
'2' && '1'
2 && 1 && 3 && 0 && 1 // 0

/**
 * also, there's ternary conditions, used as syntax sugar for regular ifs
 * the value after "?" is used when the condition is truthy, and after : if it's falsy
 */
(0) ? 'good' : 'bad';
(1) ? 'good' : 'bad';
true ? 'good' : 'bad';
false ? 'good' : 'bad';