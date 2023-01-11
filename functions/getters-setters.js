/**
 * getters allows for handling the access of attributes programmatically.
 * setters allow for handling the binding of a value to a property programmatically.
 * 
 * those methods are usually created to handle validations.
 */
const obj = {
    get property() {
        console.log('This should be printed out when getting the value');
        return this._property;
    },
    set property(property) {
        console.log('This should be printed out when setting the value');
        this._property = property;
    }
};

obj.property = 'Hi!';
obj.property;

/**
 * getters and setters can also be defined using Object.defineProperty
 */
Object.defineProperty(obj, 'property', {
    get property() {
        console.log('This should be printed out when getting the value');
        return this._property;
    },
    set property(property) {
        console.log('This should be printed out when setting the value');
        this._property = property;
    }
});