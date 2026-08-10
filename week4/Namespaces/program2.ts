namespace Calculator {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }

    export function divide(a: number, b: number): number {
        return a / b;
    }
}

console.log("Addition:", Calculator.add(10, 5));
console.log("Subtraction:", Calculator.subtract(10, 5));
console.log("Multiplication:", Calculator.multiply(10, 5));
console.log("Division:", Calculator.divide(10, 5));