function Employee(name) {
    this._name = name;

    this.getName = function () {
        return this._name;
    }

    this.setName = function (value) {
        this._name = value;
    }
}

console.log("Demo One.....");

var employeeOne = new Employee("Manish");
console.log(employeeOne.getName());
employeeOne.setName("Ramakant");
console.log(employeeOne.getName());

var employeeTwo = new Employee("Subodh");
console.log(employeeTwo.getName());
employeeTwo.setName("Abhijeet");
console.log(employeeTwo.getName());

// 280 bytes (140 bytes per instance)