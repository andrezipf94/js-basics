/**
     * At ES6 (or ES2015), a way to export/import modules was specified.
     * By using the export keyword it is possible to export any data type.
     * 
     * For using ES6 modules within NodeJs > 13 < 19, a few steps are necessary.
     * https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling
 */
export const example = 'hi!';
export const object = {};
export const array = [];

// it's also possible to export a default value, used for importing without
// specifying a key
export default {};