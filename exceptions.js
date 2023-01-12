/**
 * Exceptions can be thrown and have any data type
 * Those can be caught by using try/catch
 */
const Rectangle = function(x, y) {
    this.x = x;
    this.y = y;
    this.calculateArea = function() {
        if (this.x < 0) {
            throw 'Invalid value for x';
        }
        if (this.y < 0) {
            throw 'Invalid value for y';
        }
        return this.x * this.y;
    }
};

try {
    const rectangle = new Rectangle(-1, -2);
    rectangle.calculateArea();
} catch (error) {
    console.error(error);
}
