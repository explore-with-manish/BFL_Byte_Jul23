// // Create a function Reverse which can accept string or array of any type and give the following output
// function Reverse(word: string): string[];
// function Reverse(words: string[]): string[];
// function Reverse(word: number[]): number[];

// // function Reverse(strOrArr: any) {
// //     if (typeof strOrArr === "string") {
// //         return strOrArr.split("").reverse();
// //     } else {
// //         return strOrArr.reverse();
// //     }
// // }

// function Reverse(strOrArr: any) {
//     if (typeof strOrArr === "string") {
//         return strOrArr.split("").reverse();
//     } else {
//         return (Array<any>(strOrArr)).reverse();
//     }
// }

// console.log(Reverse("Manish"));                 // [ 'h', 's', 'i', 'n', 'a', 'M' ]
// console.log(Reverse(["PQR", "XYZ", "ABC"]));    // [ 'ABC', 'XYZ', 'PQR' ]
// console.log(Reverse([10, 20, 30, 40]));         // [ 40, 30, 20, 10 ]
// console.log(Reverse(10));                       // Compile time Error

// -------------------------------------

// Create a function Reverse which can accept string or array of any type and give the following output
type StringOrArray = string | string[] | number[];
type StringOrNumberArray = string[] | number[];

function Reverse(word: string): string[];
function Reverse(words: string[]): string[];
function Reverse(word: number[]): number[];

function Reverse(strOrArr: StringOrArray): StringOrNumberArray {
    if (typeof strOrArr === "string") {
        return strOrArr.split("").reverse();
    } else {
        return strOrArr.reverse();
    }
}

console.log(Reverse("Manish"));                 // [ 'h', 's', 'i', 'n', 'a', 'M' ]
console.log(Reverse(["PQR", "XYZ", "ABC"]));    // [ 'ABC', 'XYZ', 'PQR' ]
console.log(Reverse([10, 20, 30, 40]));         // [ 40, 30, 20, 10 ]
// console.log(Reverse(10));                       // Compile time Error