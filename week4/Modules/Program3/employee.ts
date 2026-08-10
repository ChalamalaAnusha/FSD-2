export class Employee {
    constructor(
        public id: number,
        public name: string,
        public salary: number
    ) {}

    display(): void {
        console.log("Employee ID:", this.id);
        console.log("Employee Name:", this.name);
        console.log("Salary:", this.salary);
    }
}