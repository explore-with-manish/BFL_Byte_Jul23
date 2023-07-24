// Variables created in TypeScript are optionally typesafe
// Untyped Variable - Not TypeSafe, we will not get any intellisense on an untyped variable (any)
// var data;
// data = 10;
// data = "Manish";

// Implicitly Typed
var data = 10;
// data = "Manish";        // Error: Type 'string' is not assignable to type 'number'

// Explicitly Typed
var age: number;
// age = "asdsa";         // Error: Type 'string' is not assignable to type 'number'
age = 0b10;
age = 0o10;
age = 0x10;

var i: number = 10;

// Function to add 2 numbers
// function add(x, y) {
//     return x + y;
// }

// function add(x: any, y: any) {
//     return x + y;
// }

function add(x: number, y: number) {
    return x + y;
}

console.log(add(2, 3));
// console.log(add(2, "abc"));
// console.log(add("abc", true));

// number / string / boolean / undefined / null / array / object / Date / RegExp / Function / void
// All new types which are supported by latest version of ECMAScript
// Lefthand side of assignment operator, all JS Types can be used (Declaration)

var a: Array<number>;
var s: Symbol;
var p: Promise<string>;

// Righthand side of assignment operator, API's (Functions or Types) will come
// If you want to use any API, You can only use them with proper configuration
// Based on target in tsconfig.json
// And lib section configured in your tsconfig.json
a = new Array<number>();
s = Symbol("Hello");
p = new Promise<string>((resolve, reject) => {})