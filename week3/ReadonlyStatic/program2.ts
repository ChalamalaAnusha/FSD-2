class Employees {
    static companys
    : string = "Infosys";
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log("Employee Name:", this.name);
        console.log("Company:", Employees.companys);
    }
}

let emp11 = new Employees("Rahul");
let emp22 = new Employees("Anusha");

emp11.display();
emp22.display();