let data1: any = 'this is a string';
// console.log(data1.toUppercase());

console.log((<string>data1).toUpperCase());
console.log((data1 as string).toUpperCase());

let a1 = data1.length;
console.log(a1);

let a2 = (<string>data1).length;
console.log(a2);

let a3 = (data1 as string).length;
console.log(a3);

// Wrong Assertion will cost you runtime error
console.log((data1 as number).toFixed());