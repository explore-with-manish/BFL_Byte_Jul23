// // function hello() {
// //     console.log("Hello World!");
// //     return 10;
// // }

// // function hello1(): void {
// //     console.log("Hello World!");
// // }

// // function iterate(): never {
// //     while (true) {
// //         console.log("Hello World!");
// //     }
// // }

// // iterate();
// // console.log("Last Line....");

// let r1: any;
// console.log(r1.trim());

// let r2: unknown;
// console.log(r2.trim());

// ----------------------------------------

// 1. Fn Declaration
function add1(x: number, y: number): number {
    return x + y;
}

// 2. Fn Expression
const add2 = function (x: number, y: number): number {
    return x + y;
}

let add3: (a: number, b: number) => number;
add3 = function (x: number, y: number): number {
    return x + y;
}

let add4: (a: number, b: number) => number;
add4 = function (x, y) {
    return x + y;
}

// 3. Lambdas

// Multiline Lambda
let add5: (a: number, b: number) => number;
add5 = (x, y) => {
    return x + y;
}

// Singleline Lambda
let add6: (a: number, b: number) => number;
add6 = (x, y) => x + y;

console.log(add1(20, 30));
console.log(add2(20, 30));
console.log(add3(20, 30));
console.log(add4(20, 30));
console.log(add5(20, 30));
console.log(add6(20, 30));