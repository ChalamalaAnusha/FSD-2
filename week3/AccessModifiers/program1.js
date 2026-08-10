class Student1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let s1 = new Student1("Anusha", 20);
console.log("Student Name:", s1.name);
console.log("Student Age:", s1.age);
s1.display();
let s2 = new Student1("John", 22);
console.log("Student Name:", s2.name);
console.log("Student Age:", s2.age);
s2.display();
export {};
