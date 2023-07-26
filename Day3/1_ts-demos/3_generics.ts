// class Queue {
//     private _data: number[] = [];

//     push(item:number) {
//         this._data.push(item);
//     }

//     pop(): number | undefined { 
//         return this._data.shift();
//     }
// }

// var numbersQueue = new Queue();
// numbersQueue.push(10);
// numbersQueue.push(20);
// numbersQueue.push(30);

// console.log(numbersQueue.pop());
// console.log(numbersQueue.pop());
// console.log(numbersQueue.pop());

// ---------------------------------------------
// class Queue {
//     private _data: any[] = [];

//     push(item: any) {
//         this._data.push(item);
//     }

//     pop(): any | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQueue = new Queue();
// numbersQueue.push(10);
// numbersQueue.push(20);
// numbersQueue.push(30);

// console.log(numbersQueue.pop());
// console.log(numbersQueue.pop());
// console.log(numbersQueue.pop());

// var namesQueue = new Queue();
// namesQueue.push("John");
// namesQueue.push("Subodh");
// namesQueue.push("Mary");
// namesQueue.push(10);

// console.log(namesQueue.pop());
// console.log(namesQueue.pop());
// console.log(namesQueue.pop());
// console.log(namesQueue.pop().toUpperCase());

// -------------------------------

// class Queue<T> {
//     private _data: T[] = [];

//     push(item: T) {
//         this._data.push(item);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQueue = new Queue<number>();
// numbersQueue.push(10);
// numbersQueue.push(20);
// numbersQueue.push(30);

// console.log(numbersQueue.pop());
// console.log(numbersQueue.pop());
// console.log(numbersQueue.pop());

// var namesQueue = new Queue<string>();
// namesQueue.push("John");
// namesQueue.push("Subodh");
// namesQueue.push("Mary");

// console.log(namesQueue.pop());
// console.log(namesQueue.pop());
// console.log(namesQueue.pop());
// console.log(namesQueue.pop());

// -----------------------------------------

// function merge<T1, T2>(obj1: T1, obj2: T2): T1 & T2 {
//     return { ...obj1, ...obj2 };
// }

// let rObj1 = merge<{ id: number }, { price: number }>({ id: 1 }, { price: 100 });
// console.log(rObj1);

// let rObj2 = merge<number, boolean>(10, true);
// console.log(rObj2);


function merge<T1 extends object, T2 extends object>(obj1: T1, obj2: T2): T1 & T2 {
    return { ...obj1, ...obj2 };
}

// let rObj1 = merge<{ id: number }, { price: number }>({ id: 1 }, { price: 100 });
// console.log(rObj1);

type tOne = { id: number };
type tTwo = { price: number };

let rObj1 = merge<tOne, tTwo>({ id: 1 }, { price: 100 });
console.log(rObj1);

// let rObj2 = merge<number, boolean>(10, true);
// console.log(rObj2);


// function add<T1, T2>(x: T1, y: T2) {
//     return x.toFixed();
// }

interface IShape {
    draw(): void;
}

function drawShapes<T extends IShape>(shapes: T[]) {
    shapes.forEach(shape => {
        shape.draw();
    });
}

drawShapes([{ draw: function () { } }])