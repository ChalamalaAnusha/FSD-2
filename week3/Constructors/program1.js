"use strict";
class Student {
    name;
    age;
    constructor() {
        this.name = "Anusha";
        this.age = 20;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let s1 = new Student();
s1.display();
