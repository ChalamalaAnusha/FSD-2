export class Student {
    constructor(
        public rollNo: number,
        public name: string,
        public branch: string
    ) {}

    display(): void {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Branch:", this.branch);
    }
}