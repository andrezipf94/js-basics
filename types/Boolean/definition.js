/**
 * Booleans are defined by the reserved keywords false and true
 */
false;
true;

/**
 * There's also a constructor available
 */
new Boolean(true);
new Boolean(false);

// Be careful! using a constructor with a false value won´t work as expected in if statements
if (new Boolean(false)) {
    console.log('what?!?');
}
// This happens because it's being evaluated as an object
typeof (new Boolean(false));
// So this should work properly
if ((new Boolean(false)).valueOf) {
    console.log('this should not be printed');
}

/**
 * the values below are the only falsy values in the language
 */
!!false;
!!0;
!!'';
!!NaN;
!!undefined;
!!null;

/**
 * so every other value when converted is considered true
 */
!!'Hi!';
!!-10;
!![];
!!{};
!!new Date();
!!/Ecma/;
!!function() {};