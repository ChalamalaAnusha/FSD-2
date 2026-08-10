export class Student {
    rollNo;
    name;
    branch;
    constructor(rollNo, name, branch) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
    }
    display() {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Branch:", this.branch);
    }
}
