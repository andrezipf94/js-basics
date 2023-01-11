/**
 * The implicit variable "this" is used to refer to the object responsible
 * for it's invocation.
 * As a rule of thumb, it takes the context of the object immediately before the ".".
 */
let calculateArea = function () {
    return this.x * this.y;
}
console.log(calculateArea());

const rectangle = {
    x: 10,
    y: 2,
    calculateArea,
};
console.log(rectangle.calculateArea());

/**
 * It is possible to invoke a function providing it's "this" context by parameter.
 * To do so, use functions call, apply or bind.
 * 
 * The difference between call and apply is the way we can pass the function parameters.
 * 
 * Using call, the first parameter is the "this" context, the rest are ordered parameters to
 * the called function.
 * 
 * Using apply, the first parameter is the "this" context, and the second an array of ordered
 * parameters to the called function, making it easier to programmatically bind those.
 */
calculateArea = function (roundingFn) {
    return roundingFn(this.x * this.y);
}

console.log(calculateArea.call(rectangle, Math.round));
console.log(calculateArea.apply(rectangle, [Math.round]));

/**
 * You can also encapsulate the "this" context to a function by using bind.
 */
const calculateAreaForRectangle = calculateArea.bind(rectangle);
console.log(calculateAreaForRectangle());