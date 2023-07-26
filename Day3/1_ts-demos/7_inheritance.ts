// interface IVehicle {
//     start(): string;
//     move(): string;
// }

// class Vehicle implements IVehicle {
//     private _id: number;
//     protected _make: string;

//     constructor(id: number, make = "na") {
//         this._id = id;
//         this._make = make;
//     }

//     start(): string {
//         return `Vehicle with id ${this._id}, make as ${this._make}, is started`;
//     }

//     move(): string {
//         return `Moving like a vehicle`;
//     }
// }

// class FourWheeler extends Vehicle { }

// let v = new FourWheeler(1, "Ford");
// console.log(v.start());
// console.log(v.move());

// // ---------------------------------------

// interface IVehicle {
//     start(): string;
//     move(): string;
// }

// class Vehicle implements IVehicle {
//     private _id: number;
//     protected _make: string;

//     constructor(id: number, make = "na") {
//         this._id = id;
//         this._make = make;
//     }

//     start(): string {
//         return `Vehicle with id ${this._id}, make as ${this._make}, is started`;
//     }

//     move(): string {
//         return `Moving like a vehicle`;
//     }
// }

// class FourWheeler extends Vehicle {
//     private _model: string;

//     constructor(id: number, make = "Honda", model = "Civic") {
//         super(id);
//         this._make = make;
//         this._model = model;
//     }

//     start(): string {
//         var bResult = super.start();
//         return `${bResult}, model is ${this._model}`;
//     }

//     move(): string {
//         return `Moving like ${this._model}`;
//     }
// }

// let v = new FourWheeler(1, "Ford", "Mustang");
// console.log(v.start());
// console.log(v.move());

// ---------------------------------------

interface IVehicle {
    start(): string;
    move(): string;
}

abstract class Vehicle implements IVehicle {
    private _id: number;
    protected _make: string;

    constructor(id: number, make = "na") {
        this._id = id;
        this._make = make;
    }

    start(): string {
        return `Vehicle with id ${this._id}, make as ${this._make}, is started`;
    }

    abstract move(): string;
}

class FourWheeler extends Vehicle {
    private _model: string;

    constructor(id: number, make = "Honda", model = "Civic") {
        super(id);
        this._make = make;
        this._model = model;
    }

    start(): string {
        var bResult = super.start();
        return `${bResult}, model is ${this._model}`;
    }

    move(): string {
        return `Moving like ${this._model}`;
    }
}

let v = new FourWheeler(1, "Ford", "Mustang");
console.log(v.start());
console.log(v.move());