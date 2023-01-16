/**
 * Async/await is syntax sugar for promises that are chained.
 * These can be used at the top level of modules, or inside async functions.
 * 
 * Exceptions or promise rejections are handled by a try/catch block when using async/await
 * 
 * Async/await DOES NOT block JS main thread.
 */

// Using promise chaining
async function findWally() {
    setTimeout(() => console.log('found wally!'), Math.random() * 3000);
}
findWally()
    .then(() => {
        findWally()
            .then(() => {
                findWally();
            })
    });

/**
 * Using await
 * The code will work exactly as before, executing one promise after the other.
 */
await findWally();
await findWally();
await findWally();

/**
 * You can loop through promises using for await of
 */
async function getRandomNumberAsync(max) {
    max = max || 10;
    return Math.floor(Math.random() * max);
}
const promises = [
    getRandomNumberAsync(100),
    getRandomNumberAsync(1000),
    getRandomNumberAsync(1000)
];
for await (promise of promises) {
    console.log(promise);
}