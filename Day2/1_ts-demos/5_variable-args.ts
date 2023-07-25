// // -------------------------------- REST parameter

// function Average(...args: number[]) {
//     if (args.length > 0) {
//         // let sum = 0;
//         // for (let i = 0; i < args.length; i++) {
//         //     sum += args[i];
//         // }
//         // return sum / args.length;
//         let sum = args.reduce((acc, n) => acc + n);
//         return sum / args.length;
//     } else {
//         return 0;
//     }
// }

// console.log(Average());
// console.log(Average(1));
// console.log(Average(1, 2));
// console.log(Average(1, 2, 3, 4, 5));
// console.log(Average(1, 2, 3, 4, 5, 6, 7, 8, 9));

// // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // let result2 = numbers.map(n => n * 100).reduce((acc, n) => acc + n);
// // console.log(result2);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Average(...numbers));       // Spread Operator

// --------------------------------

// let arr1 = [1, 2, 3, 4, [50, 60, 70]];

// // let arr2 = arr1;        // Reference Copy

// let arr2 = [...arr1];        // Shallow Copy

// // let arr2 = JSON.parse(JSON.stringify(arr1));    // Deep Copy

// arr2[0] = 1000;
// (arr2[4] as number[])[0] = 5000;

// console.log("Array 1: ", arr1);
// console.log("Array 2: ", arr2);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // let x = nums[0];
// // let y = nums[1];

// // let [x,, y] = nums;
// // let [x, y, z] = nums;

// // console.log("x: ", x);
// // console.log("y: ", y);
// // console.log("z: ", z);

// let [x, y, ...z] = nums;

// console.log("x: ", x);
// console.log("y: ", y);
// console.log("z: ", z);

let x = 10;
let y = 20;

console.log("x: ", x);
console.log("y: ", y);

[x, y] = [y, x];

console.log("After Swaping...");
console.log("x: ", x);
console.log("y: ", y);

// Combine comma seperated items into a Array (...) - Rest Parameter
// ... used in function parameter at the time of function creation - Rest Parameter
// ... on Left hand side of assignment operator - Rest Parameter

// Split Array/Object to a comma seperated items - Spread Operator
// ... used in function argument at the time of function call - Spread Operator
// ... on Right hand side of assignment operator - Spread Operator