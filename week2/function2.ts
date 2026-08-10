function calculateSalary(basicSalary: number, bonus: number): number {
  return basicSalary + bonus;
}

let finalSalary: number = calculateSalary(30000, 5000);

console.log("Final Salary:", finalSalary);
