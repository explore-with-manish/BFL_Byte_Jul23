var CEmployee = /** @class */ (function () {
    function CEmployee(name) {
        this._name = name;
    }
    CEmployee.prototype.getName = function () {
        return this._name;
    };
    CEmployee.prototype.setName = function (value) {
        this._name = value;
    };
    return CEmployee;
}());
console.log("Demo Two.....");
var employeeOne = new CEmployee("Manish");
console.log(employeeOne.getName());
employeeOne.setName("Ramakant");
console.log(employeeOne.getName());
var employeeTwo = new CEmployee("Subodh");
console.log(employeeTwo.getName());
employeeTwo.setName("Abhijeet");
console.log(employeeTwo.getName());
