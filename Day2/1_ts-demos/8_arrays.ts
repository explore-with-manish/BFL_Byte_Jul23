// // // // Implicit
// // // var arr1 = [1, 2, 3, 4, 5];
// // // var arr2 = ["Manish", "Sharma"];
// // // var arr3 = [1, "Manish"];

// // // // Explicit
// // // var arr4: number[];
// // // var arr5: string[];

// // // arr6: Array<number>;
// // // arr7: Array<string>;

// // var arr8 = new Array();
// // console.log(arr8);
// // console.log(arr8.length);

// var arr9 = new Array(3);
// console.log(arr9);
// console.log(arr9.length);

// arr9[0] = 10;
// arr9.push(20);
// arr9.unshift(30);
// arr9.unshift(3);

// // console.log(arr9);

// // for (var i = 0; i < arr9.length; i++) {
// //     console.log(arr9[i]?.toFixed());
// // }

// // for (var i = 0; i < arr9.length; i++) {
// //     if (arr9[i] !== void 0)
// //         console.log(arr9[i].toFixed());
// //     else
// //         console.log(arr9[i]);
// // }

// arr9.forEach(function (v, i, a) {
//     console.log(v.toFixed());
// });

// // ------------------------------------------------

// var empList: Array<{ id: number, name: string, city: string }>;

// empList = [
//     { id: 1, name: "Manish", city: "Pune" },
//     { id: 2, name: "Ramesh", city: "Mumbai" },
//     { id: 3, name: "Suresh", city: "Delhi" },
//     { id: 4, name: "Rajesh", city: "Bangalore" },
//     { id: 5, name: "Ganesh", city: "Chennai" }    
// ];

// empList.push({ id: 6, name: "Rakesh", city: "Hyderabad" });

// // delete empList[2];

// for(const e of empList) {
//     console.log(e);
// }

// ------------------------------------------------ Type Alias

type Employee = { id: number, name: string, city: string };

var empList: Array<Employee>;

empList = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Ramesh", city: "Mumbai" },
    { id: 3, name: "Suresh", city: "Delhi" },
    { id: 4, name: "Rajesh", city: "Bangalore" },
    { id: 5, name: "Ganesh", city: "Chennai" }    
];

empList.push({ id: 6, name: "Rakesh", city: "Hyderabad" });

// delete empList[2];

// for(const e of empList) {
//     console.log(e);
// }

var names = empList.map(e=>e.name.toUpperCase());
console.log(names);

var result = names.includes("MANISH");
console.log(result);

// What should we do to use Array includes method in TypeScript?
// Solution: Change the lib section in tsconfig.json file to include ES2016

const person = { id: 1, name: "Manish", city: "Pune" };
console.log(Object.values(person));

// What should we do to use Object.values method in TypeScript?
// Solution: Change the lib section in tsconfig.json file to include ES2017