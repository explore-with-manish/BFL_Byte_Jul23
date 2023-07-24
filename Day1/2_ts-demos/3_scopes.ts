// Global Scope
// File Scope
// Namespace Scope
// Local Scope
// Block Scope

// namespace scopes {
//     export var i = 20;

//     function test() {
//         console.log("Inside test, i is:", i);
//     }

//     test();
//     console.log("Outside test, i is:", i);
// }

// namespace scopes2 { 
//     console.log(scopes.i);
// }

// namespace varkeyword {
// var i = 20;
// var i = 30;
// console.log(i);

// var j = 10;
// var j = "Manish";

// Hoisting
// a1 = "Hello";
// console.log(a1);
// var a1;

// Block Scoping is not Supported by var 

// var i = 100;
// console.log("Before, i is:", i);

// for (var i = 0; i < 5; i++) {
//     console.log("Inside Loop, i is:", i);
// }

// console.log("After, i is:", i);
// }

// namespace letKeyword {
//     // let i = 20;
//     // // let i = 30;     // Error: Cannot redeclare block-scoped variable 'i'.
//     // console.log(i);

//     // Hoisting - Not Supported
//     // a1 = "Hello";
//     // console.log(a1);
//     // let a1;

//     let i = 100;
//     console.log("Before, i is:", i);

//     for (let i = 0; i < 5; i++) {
//         console.log("Inside Loop, i is:", i);
//     }

//     console.log("After, i is:", i);
// }

namespace constKeyword {
    // let j: number;
    // j = 10;
    // j =20;

    // // const env: string;          // 'const' declarations must be initialized.
    // const env = "Development";

    // // env = "Production";         // Cannot assign to 'env' because it is a constant. 

    // if(true) {
    //     const env = "Production";
    // }

    const obj = { id: 1, name: "Manish" };
    console.log(obj);

    obj.id = 1000;
    console.log(obj);

    delete obj.name;
    console.log(obj);

    // obj = { id: 2, name: "Manish" };        // Cannot assign to 'obj' because it is a constant.
}