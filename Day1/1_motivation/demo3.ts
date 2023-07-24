class CEmployee {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }
}

console.log("Demo Two.....");

var employeeOne = new CEmployee("Manish");
console.log(employeeOne.getName());
employeeOne.setName("Ramakant");
console.log(employeeOne.getName());

var employeeTwo = new CEmployee("Subodh");
console.log(employeeTwo.getName());
employeeTwo.setName("Abhijeet");
console.log(employeeTwo.getName());

var n = "Manish";

var m = 10;


console