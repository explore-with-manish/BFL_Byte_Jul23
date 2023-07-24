var Employee = (function () {
    function Employee(name) {
        this._name = name;
    }

    Employee.prototype.getName = function () {
        return this._name;
    }

    Employee.prototype.setName = function (value) {
        this._name = value;
    }

    return Employee;
})();

console.log("Demo Two.....");

var employeeOne = new Employee("Manish");
console.log(employeeOne.getName());
employeeOne.setName("Ramakant");
console.log(employeeOne.getName());

var employeeTwo = new Employee("Subodh");
console.log(employeeTwo.getName());
employeeTwo.setName("Abhijeet");
console.log(employeeTwo.getName());

// 136 bytes (68 bytes per instance)
