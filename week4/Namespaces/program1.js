"use strict";
var StudentInfo;
(function (StudentInfo) {
    class Student {
        rollNo;
        name;
        constructor(rollNo, name) {
            this.rollNo = rollNo;
            this.name = name;
        }
        display() {
            console.log("Roll No:", this.rollNo);
            console.log("Name:", this.name);
        }
    }
    StudentInfo.Student = Student;
})(StudentInfo || (StudentInfo = {}));
let s = new StudentInfo.Student(101, "Anusha");
s.display();
