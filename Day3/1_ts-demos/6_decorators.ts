// class Calculator {
//     add(x: number, y: number) {
//         console.log(`add method called with arguments as ${x} and ${y}`);
//         return x + y;
//     }

//     sub(x: number, y: number) {
//         console.log(`sub method called with arguments as ${x} and ${y}`);
//         return x - y;
//     }
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// // I want to log the arguments passed to the method, when we call the methods
// // Where should we write the Code for logging?


// --------------------------------------------

// class Calculator {
//     add(x: number, y: number) {
//         log(`add method called with arguments as ${x} and ${y}`);
//         return x + y;
//     }

//     sub(x: number, y: number) {
//         log(`sub method called with arguments as ${x} and ${y}`);
//         return x - y;
//     }
// }

// function log(message: string) {
//     console.log(message);
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// I want to log the arguments passed to the method, when we call the methods
// Where should we write the Code for logging?

// HOF - Higher Order Function

// --------------------------------------------

// class Calculator {
//     add(x: number, y: number) {
//         return x + y;
//     }

//     sub(x: number, y: number) {
//         return x - y;
//     }
// }

// function logHOF(fnRef: (...items:any[])=>any) {
//     return function(...args: any[]) {
//         console.log(`Function called with arguments as ${args}`);
//         return fnRef(...args);
//     }
// }

// var c = new Calculator();

// const addWithLogging = logHOF(c.add);
// const subWithLogging = logHOF(c.sub);

// console.log(addWithLogging(2, 3));
// console.log(subWithLogging(24, 35));

// --------------------------------------------

class Calculator {
    @log
    add(x: number, y: number) {
        return x + y;
    }

    @log
    sub(x: number, y: number) {
        return x - y;
    }
}

function log<T>(target: T, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function(...args: any[]) {   
        console.log(`${propertyKey} is called with arguments as ${args}`);
        return originalFn(...args);
    }
    return descriptor;
}

var c = new Calculator();
console.log(c.add(2, 3));
console.log(c.sub(24, 35));
