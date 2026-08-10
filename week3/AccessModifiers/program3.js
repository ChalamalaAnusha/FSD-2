class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Employee1 extends Person {
    display() {
        console.log("Employee Name:", this.name);
    }
}
let emp = new Employee1("Rahul");
emp.display();
export {};
