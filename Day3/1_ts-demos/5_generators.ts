// // Eager Executed
// function idNormal() {
//     console.log("Id Normal Function Executed....");
// }

// // Lazy (On Demand) Executed
// function* idGen() {
//     console.log("Id Generator Function Executed....");
// }

// // idNormal();
// // idGen();

// let gObj = idGen();
// // console.log(gObj);
// gObj.next();

// ---------------------------------

// Lazy (On Demand) Executed
// function* idGen() {
//     console.log("Id Generator Function Execution Started....");
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     console.log("Id Generator Function Execution Completed....");
// }

// let gObj = idGen();
// console.log(gObj.next());
// console.log(gObj.next());
// console.log(gObj.next());
// console.log(gObj.next());
// console.log(gObj.next());

class Queue<T> {
    private _data: T[] = [];
    
    push(item: T) {
        this._data.push(item);
    }

    pop(): T | undefined {
        return this._data.shift();
    }

    // *[Symbol.iterator]() {
    //     for (let I = 0; I < this._data.length; I++) {
    //        yield this._data[I];
    //     }
    // }

    *[Symbol.iterator]() {
        yield* this._data;
    }
}

type Order = {
    id: number,
    description: string
}

var ordersQ = new Queue<Order>();
ordersQ.push({ id: 1, description: "Order One" });
ordersQ.push({ id: 2, description: "Order Two" });
ordersQ.push({ id: 3, description: "Order Three" });

for (const item of ordersQ) {
    console.log(item);
}