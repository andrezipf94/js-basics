/**
 * classes are a special kind of function used as a template for object creation
 * classes are not hoisted, even if declared by using a const (function expression) 
 */
class Example {};
console.log(Example);
console.log(typeof Example);

const builtExample = new Example();
console.log(builtExample);

const example = class {};
console.log(example);

/**
 * Classes are formed by 3 members: constructor, prototype methods and static methods.
 * 
 * The constructor is invoked in the moment of the instantiation, and initializes the object.
 */
class Square {
    constructor(side) {
        this.side = side;
    }
}
let builtSquare = new Square(4);
console.log(builtSquare);

/**
 * Prototype methods are dependant on an instance to be called
 */
class Square2 {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side}; area: ${this.calculateArea()}`;
    }
}
const builtSquare2 = new Square2(4);
console.log(builtSquare2, builtSquare2.toString());

/**
 * static methods are not dependant on a class instance to be called
 */
class Square3 {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side}; area: ${this.calculateArea()}`;
    }

    static fromArea(area) {
        return new Square3(Math.sqrt(area));
    }
}
const builtSquare3 = Square3.fromArea(12);
console.log(builtSquare3);

/**
 * Classes work similarly to constructor functions
 */
function Square4(side) {
    this.side = side;
};

Square4.prototype.calculateArea = function() {
    return Math.pow(this.side, 2);
};

Square4.prototype.toString = function() {
    return `side: ${this.side}; area: ${this.calculateArea()}`;
};

Square4.fromArea = function(area) {
    return new Square4(Math.sqrt(area));
}

console.log(Square4.fromArea(12));

/**
 * A class can inherit from another by using the extends keyword
 */
class GeometricForm {
    toString() {
        return `area: ${this.calculateArea()}`;
    }
}

class Square5 extends GeometricForm {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side}; ${super.toString()}`;
    }

    static fromArea(area) {
        return new Square5(Math.sqrt(area));
    }
}

class Circle extends GeometricForm {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    toString() {
        return `radius: ${this.radius}; ${super.toString()}`;
    }

    static fromArea(area) {
        return new Circle(Math.ceil(Math.sqrt(area / Math.PI)));
    }
}

const builtSquare5 = Square5.fromArea(12);
const builtCircle = Circle.fromArea(314.159265);
console.log(builtSquare5, builtSquare5.toString());
console.log(builtCircle, builtCircle.toString());