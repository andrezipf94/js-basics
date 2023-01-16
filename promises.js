/**
 * Promises are objects created to facilitate async operations handling.
 * A promise can either resolve or reject.
 * 
 * If it resolves, the result can be accessed by the then function.
 * If it rejects, the error should be taken care of by the catch function.
 */
const asyncFunction = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 1000);
    });
};
const promise = asyncFunction();
console.log(promise);
promise.then(result => console.log(result));

const failingAsyncFunction = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('I failed!'), 1000);
    });
};
const failingPromise = failingAsyncFunction();
console.log(failingPromise);
failingPromise.catch(reason => console.error(reason));

/**
 * It's possible to nest async function calls, providing a way to centralize it's
 * error handling.
 */
asyncFunction().then(
    () => asyncFunction()
        .then(
            () => asyncFunction()
                .then(() => failingAsyncFunction())
        )
).catch(reason => console.error(reason));

/**
 * Promise.all allows running multiple promises in parallel, returning after all succeeds
 */
Promise.all(
    asyncFunction(),
    asyncFunction(),
    asyncFunction()
).then((results) => console.log(results));

/**
 * Promise.race also allows for parallel execution, but returns after the first succeeds
 */
Promise.race(
    asyncFunction(),
    asyncFunction(),
    asyncFunction()
).then(result => console.log(result));