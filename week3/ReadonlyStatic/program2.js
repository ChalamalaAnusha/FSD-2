"use strict";
class Employees {
    static companys = "Infosys";
    name;
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Employee Name:", this.name);
        console.log("Company:", Employees.companys);
    }
}
let emp11 = new Employees("Rahul");
let emp22 = new Employees("Anusha");
emp11.display();
emp22.display();
