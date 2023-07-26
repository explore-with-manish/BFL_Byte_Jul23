// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// // let p1: IPerson = {
// //     name: "John",
// //     age: 40,
// //     greet: function (message: string): string {
// //         return "Hola";
// //     }
// // }; 

// // let p2: IPerson = {
// //     name: "Subodh",
// //     age: 30,
// //     greet: function (message: string): string { 
// //         return "Hello";
// //     }  
// // };

// class Person implements IPerson { 
//     constructor(public name: string, public age: number) { }
    
//     greet(message: string): string {
//         return "Hey";
//     }
// }

// let p1: IPerson = new Person("John", 40);
// p1.greet("Hello");

// let p2: IPerson = new Person("Subodh", 30);
// p2.greet("Hello");

// // ------------------------------------------------- Multiple Interface Implementations
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// class Person implements IPerson, IEmployee {
//     constructor(public name: string, public age: number) { }
    
//     greet(message: string): string {
//         return "Hello";
//     }
    
//     doWork(): string {
//         return "I am learning TypeScript";
//     }
// }

// let p1: Person = new Person("John", 40);
// console.log(p1.greet("Hello"));
// console.log(p1.doWork());

// // ------------------------------------------------- Multiple Interface Implementations
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// interface ICustomer {
//     doShopping(): string;
// }

// class Person implements IPerson, IEmployee, ICustomer {
//     constructor(public name: string, public age: number) { }
        
//     greet(message: string): string {
//         return "Hello";
//     }
    
//     doWork(): string {
//         return "I am learning TypeScript";
//     }

//     doShopping(): string {
//         return "I am at the mall";
//     }
// }

// // let p1: Person = new Person("John", 40);
// // console.log(p1.greet("Hello"));
// // console.log(p1.doWork());
// // console.log(p1.doShopping());

// // let p2: IPerson = new Person("Subodh", 30);
// // console.log(p2.greet("Hello"));

// // let p3: IEmployee = new Person("Subodh", 30);
// // console.log(p3.doWork());

// // let p4: ICustomer = new Person("Subodh", 30);
// // console.log(p4.doShopping());

// let p1: IPerson | IEmployee  = new Person("John", 40);
// (p1 as IPerson).greet("Hello");
// (p1 as IEmployee).doWork();

// let p2: IPerson & IEmployee  = new Person("John", 40);
// p2.greet("Hello");
// p2.doWork();

// ------------------------------------------------- Interface can extend other Interface
interface IPerson {
    name: string;
    age: number;
    greet(message: string): string;
}

interface IEmployee extends IPerson {
    doWork(): string;
}

interface ICustomer extends IPerson {
    doShopping(): string;
}

class Person implements IPerson, IEmployee, ICustomer {
    constructor(public name: string, public age: number) { }
        
    greet(message: string): string {
        return "Hello";
    }
    
    doWork(): string {
        return "I am learning TypeScript";
    }

    doShopping(): string {
        return "I am at the mall";
    }
}

let p1: IEmployee  = new Person("John", 40);
p1.greet("Hello");
p1.doWork();

let p2: ICustomer  = new Person("John", 40);
p2.greet("Hello");
p2.doShopping();