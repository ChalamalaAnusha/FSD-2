namespace StudentInfo {

    export class Student {
        constructor(
            public rollNo: number,
            public name: string
        ) {}

        display(): void {
            console.log("Roll No:", this.rollNo);
            console.log("Name:", this.name);
        }
    }
}

let s = new StudentInfo.Student(101, "Anusha");
s.display();