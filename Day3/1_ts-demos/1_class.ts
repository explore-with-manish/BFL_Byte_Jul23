// // class Employee {
// //     // Data Properties
// //     private _name: string;

// //     // Multiple constructor implementations are not allowed.
// //     // constructor() {
// //     //     this._name = "na";
// //     // }

// //     // constructor(value: string) {
// //     //     this._name = value;
// //     // }

// //     constructor(value = "na") {
// //         this._name = value;
// //     }

// //     getName(): string {
// //         return this._name;
// //     }

// //     setName(name: string): void {
// //         this._name = name;
// //     }

// //     // Never use function expressions to create member functions, it will increase the memory usage
// //     // getName = function(): string {
// //     //     return this._name;
// //     // }

// //     // setName = function(name: string): void {
// //     //     this._name = name;
// //     // }

// //     // Never use Lambdas to create member functions, it will increase the memory usage
// //     // getName = (): string => {
// //     //     return this._name;
// //     // }

// //     // setName = (name: string): void => {
// //     //     this._name = name;
// //     // }
// // }

// // // let emp = new Employee();
// // let emp = new Employee("Manish");
// // console.log(emp.getName());
// // emp.setName("John");
// // console.log(emp.getName());

// // ----------------------------------------------

// // class Employee {
// //     // private _name: string;

// //     // constructor(value = "na") {
// //     //     this._name = value;
// //     // }

// //     private _name: string = "";
// //     private _age?: number;
// //     private _city!: string;

// //     getName(): string {
// //         return this._name.toUpperCase();
// //     }

// //     setName(name: string): void {
// //         this._name = name;
// //     }

// //     // getAge() {
// //     //     if (this._age !== undefined)
// //     //         return this._age.toFixed();
// //     //     else
// //     //         return this._age;
// //     // }

// //     getAge() {
// //         return this._age?.toFixed();
// //     }

// //     getCity() {
// //         return this._city.toUpperCase();
// //     }
// // }

// // let emp = new Employee();
// // console.log(emp.getName());
// // emp.setName("John");
// // console.log(emp.getName());

// // // ------------------------------------------------------------ Using Accessor and Mutator Methods
// // class Employee {
// //     // Data Property
// //     private _name: string;
// //     private _age?: number | undefined;

// //     constructor(name = "na") {
// //         this._name = name;
// //     }

// //     getName() {
// //         return this._name.toUpperCase();
// //     }

// //     setName(value: string) {
// //         this._name = value;
// //     }

// //     getAge() {
// //         return this._age?.toFixed();
// //     }

// //     setAge(value: number | undefined) {
// //         this._age = value;
// //     }
// // }

// // let e1 = new Employee();
// // console.log(e1.getName());
// // console.log(e1.getAge());
// // e1.setName("Abhijeet");
// // e1.setAge(39);
// // console.log(e1.getName());
// // console.log(e1.getAge());

// // // ------------------------------------------------------------ Using Accessor Property
// // class Employee {
// //     // Data Property
// //     private _name: string;
// //     private _age?: number | undefined;

// //     constructor(name = "na") {
// //         this._name = name;
// //     }

// //     // Accessor Property
// //     get Name() {
// //         return this._name.toUpperCase();
// //     }

// //     set Name(value: string) {
// //         this._name = value;
// //     }

// //     get Age() {
// //         return this._age;
// //     }

// //     set Age(value: number | undefined) {
// //         this._age = value;
// //     }
// // }

// // let e1 = new Employee();
// // console.log(e1.Name);           // GET
// // console.log(e1.Age);
// // e1.Name = "Abhijeet";           // SET
// // e1.Age = 39;
// // console.log(e1.Name);
// // console.log(e1.Age);

// // ---------------------------------------------------------------------- Parameter Property / Parameter Members
// // Parameter Property / Parameter Member let us create and initialize member variables in one place. 
// // It is a shorthand for creating member variables.

// class Employee {
//     // private _name: string;
//     // private _age: number;

//     // constructor(name = "na", age = 0) {
//     //     this._name = name;
//     //     this._age = age;
//     // }

//     constructor(private _name = "na", private _age = 0) { }

//     get Name() {
//         return this._name.toUpperCase();
//     }

//     set Name(value: string) {
//         this._name = value;
//     }

//     get Age() {
//         return this._age;
//     }

//     set Age(value: number) {
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.Name);           // GET
// console.log(e1.Age);
// e1.Name = "Abhijeet";           // SET
// e1.Age = 39;
// console.log(e1.Name);
// console.log(e1.Age);

// -------------------------------------------------------------------------

// Create a BankAccount Class with bankName and accName as data members and create Properties to access
// the data outside using instance.

// class BankAccount {
//     constructor(private _bankName: string, private _accName: string) { }

//     get BankName() {
//         return this._bankName;
//     }

//     set BankName(value: string) {
//         this._bankName = value;
//     }

//     get AccountHolderName() {
//         return this._accName;
//     }
// }

// let accountOne = new BankAccount("HDFC", "Abhijeet");
// console.log(`Bank Name: ${accountOne.BankName}`);
// console.log(`Account Holder Name: ${accountOne.AccountHolderName}`);

// let accountTwo = new BankAccount("HDFC", "Pravin");
// console.log(`Bank Name: ${accountTwo.BankName}`);
// console.log(`Account Holder Name: ${accountTwo.AccountHolderName}`);

// accountOne.BankName = "SBI";
// console.log("\nAfter Updating the BankName");
// console.log(`Bank Name: ${accountOne.BankName}`);
// console.log(`Account Holder Name: ${accountOne.AccountHolderName}`);

// console.log(`Bank Name: ${accountTwo.BankName}`);
// console.log(`Account Holder Name: ${accountTwo.AccountHolderName}`);

// // ------------------------------------------------------------------------- Static (Class) Members
// class BankAccount {
//     private static _bankName: string = "HDFC";

//     constructor(private _accName: string) { }

//     get BankName() {
//         return BankAccount._bankName;
//     }

//     static set BankName(value: string) {
//         BankAccount._bankName = value;
//     }

//     get AccountHolderName() {
//         return this._accName;
//     }
// }

// let accountOne = new BankAccount("Abhijeet");
// console.log(`Bank Name: ${accountOne.BankName}`);
// console.log(`Account Holder Name: ${accountOne.AccountHolderName}`);

// let accountTwo = new BankAccount("Pravin");
// console.log(`Bank Name: ${accountTwo.BankName}`);
// console.log(`Account Holder Name: ${accountTwo.AccountHolderName}`);

// BankAccount.BankName = "SBI";

// console.log("\nAfter Updating the BankName");
// console.log(`Bank Name: ${accountOne.BankName}`);
// console.log(`Account Holder Name: ${accountOne.AccountHolderName}`);

// console.log(`Bank Name: ${accountTwo.BankName}`);
// console.log(`Account Holder Name: ${accountTwo.AccountHolderName}`);

// ---------------------------------------------------
class BankAccount {
    private static _bankName: string = "HDFC";

    constructor(private readonly _accNumber: number, private _accName: string) { }

    get BankName() {
        return BankAccount._bankName;
    }

    static set BankName(value: string) {
        BankAccount._bankName = value;
    }

    get AccountHolderName() {
        return this._accName;
    }

    get AccountNumber() { 
        // this._accNumber = 100;           // Cannot assign to '_accNumber' because it is a read-only property.
        return this._accNumber;
    }
}

let accountOne = new BankAccount(1, "Abhijeet");
console.log(`Bank Name: ${accountOne.BankName}`);
console.log(`Account Number: ${accountOne.AccountNumber}`);
console.log(`Account Holder Name: ${accountOne.AccountHolderName}`);

let accountTwo = new BankAccount(2, "Pravin");
console.log(`Bank Name: ${accountTwo.BankName}`);
console.log(`Account Number: ${accountTwo.AccountNumber}`);
console.log(`Account Holder Name: ${accountTwo.AccountHolderName}`);