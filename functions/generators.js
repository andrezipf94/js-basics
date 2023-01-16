/**
 * Generators are special functions which can be controlled (paused, resumed...)
 * programmatically. This allows for the usage of the event loop in a cooperative way.
 */
function* forever() {
    let value = 1;
    while (true) {
        let reset = yield i++;
        console.log(reset);
        if (reset) {
            return 1;
        }
    }
}

const generator = forever();
console.log(generator);
console.log(typeof generator);
console.log(Object.getOwnPropertyNames(generator));

/**
 * Generators make use of the method next() to execute the function.
 * The function will then run until it finds a yield. After that it pauses until next()
 * is called again.
 */
function returnOne() {
    return 1;
}

/**
 * The return obtained from next() is an object containing keys value and done, following
 * the iterator protocol.
 */
console.log(forever.next());
console.log(returnOne());
console.log(forever.next());

/**
 * It is also possible to pass a value as a return for yield, injecting it into the function.
 * This is done by passing a parameter to next().
 * 
 * If the function reaches a return statement, the execution ends, and the iterator returns
 * done = true.
 */
console.log(forever.next(true));
console.log(forever.next());

/**
 * It's also possible to raise an exception inside the function by using the method throw.
 */
forever.throw('error!');