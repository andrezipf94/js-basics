/**
 * Proxy API is a way to intercept object behaviors and act upon them.
 * To do so, create a proxy class passing it's target, and set up the traps.
 * Traps are a list of known object operations, like:
 * - apply
 * - construct
 * - defineProperty
 * - deleteProperty
 * - get
 * ...
 * A full list is available here, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
 */
const proxyTarget = {};
const proxy = new Proxy(proxyTarget, {
    set(target, key, value) {
        console.log(key, value);
        target[key, value];
    }
})
proxyTarget.example = 'hi!';

/**
 * Reflect is not a constructor function, and can't be instantiated by the new operator.
 * It provides methods for interceptable JavaScript operations. Those are the same "traps" used
 * by the Proxy API.
 */
console.log(Reflect.has(proxyTarget, 'example'));
console.log(Reflect.set(proxyTarget, 'example2', 'hello!'));