/**
 * In JS there's something called the execution context stack.
 * Starting from the global context, every function (which is not an arrow function) will create it's own execution context.
 * 
 * Inside a function, it's possible to access variables declared outside of it by using the scope chain.
 */
let example = 10;
let fn1 = function() {
    console.log(example);
};
fn1(); // this works fine, as the variable example has been declared in a scope below the current one.

fn1 = function() {
    const fn2 = function() {
        console.log(example);
    }
    fn2();
};
fn1(); // this also works fine.

fn1 = function() {
    const example = 100;
    const fn2 = function() {
        console.log(example);
    }
    fn2();
};
fn1(); // this also works, and as examples value was shadowed inside the function block, will log 100.

fn1 = function() {
    const example = 100;
    const fn2 = function() {
        const example = 1000;
        console.log(example);
    }
    fn2();
};
fn1(); // again, examples value was shadowed inside the declaration of fn2, so this will log 1000.

fn1 = function() {
    let funnyVariable = '!';
}
console.log(funnyVariable); // this won't work, as accessing a variable defined inside a function, outside of it, is not allowed.

example = 'hello!';
let bestObject = {
    getExample() {
        return example;
    }
};
console.log(bestObject.getExample()); // this works fine, example is being pulled from a execution context below it's own.

let secondBestObject = {
    name: 'John',
    getName() {
        return this.name;
    }
};
console.log(secondBestObject.getName()); // this also works fine, name is being pulled from the callers object context.

let thirdBestObject = {
    name: 'Mary',
    getName() {
        return (function() {
            return this.getName();
        })();
    }
}
console.log(thirdBestObject.getName()); // this won't work as expected, as the inner function has no "this" context.

// There's a couple of ways to fix the thirdBestObject issue.
// By using a reference to the "this" context of the caller object
thirdBestObject = {
    name: 'Mary',
    getName() {
        let that = this;
        return (function() {
            return that.getName();
        })();
    }
}
console.log(thirdBestObject.getName());

// By using an arrow function (which has no this context, always using the context at which it was created at)
thirdBestObject = {
    name: 'Mary',
    getName() {
        return (() => {
            return this.getName();
        })();
    }
}
console.log(thirdBestObject.getName());