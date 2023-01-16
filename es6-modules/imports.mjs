/**
 * At ES6 (or ES2015), a way to export/import modules was specified.
 * 
 * By using the import keyword it is possible to import any data type from
 * another module into the current.
 * 
 * To achieve this, use the import keyword providing the name of the imports and the
 * path to the module.
 * 
 * For using ES6 modules within NodeJs > 13 < 19, a few steps are necessary.
 * https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling
 */
import defaultValue from './exports.mjs';
import { example } from './exports.mjs';
// It's possible to alias an import using the "as" keyword
import { example as alias } from './exports.mjs';
// It's also possible to import everything being exported using the "*" keyword.
import * as everything from './exports.mjs';

/**
 * A few important notes:
 * - imports are hoisted
 * - you can't export or import things from inside blocks
 */