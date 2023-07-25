// const area = function (rect: { h: number, w: number }) {
//     return rect.w * rect.h;
// }

// let s1 = { h: 20, w: 10 };
// console.log(area(s1));

// let s2 = { h: 20, w: 10, d: 30 };
// console.log(area(s2));

// ------------------------------------------------------
// type Shape = { h: number, w: number };

// const area = function (rect: Shape) {
//     return rect.w * rect.h;
// }

// let s1: Shape = { h: 20, w: 10 };
// console.log(area(s1));

// let s2: Shape = { h: 20, w: 10, d: 30 };
// console.log(area(s2));

// ------------------------------------------------------
// interface Shape {
//     h: number;
//     w?: number;
// };

// const area = function (rect: Shape) {
//     return rect.w * rect.h;
// }

// let s1: Shape = { h: 20, w: 10 };
// console.log(area(s1));

// let s2: Shape = { h: 20, w: 10, d: 30 };
// console.log(area(s2));

// let s3: Shape = { h: 20 };
// console.log(area(s3));

// ----------------------------------------------

// type TShape = { 
//     h: number 
// };

// // Error: Duplicate identifier 'TShape'
// type TShape = { 
//     w: number 
// };

// interface IShape {
//     h: number;
// };

// interface IShape {
//     w: number;
// };

// let s3: IShape = {};

interface ICustomer {
    doShopping(): string;
}

interface IEmployee {
    doWork(): string;
}


type ICustomerOrEmployee = ICustomer | IEmployee;

var person1: ICustomerOrEmployee = {
    doShopping: function () { 
        return "Shopping done!";
    }
}

type ICustomerAndEmployee = ICustomer & IEmployee;

var person2: ICustomerAndEmployee = { 
    doShopping: function () {
        return "Shopping done!";
    },
    doWork: function () { 
        return "Work done!";
    }
}