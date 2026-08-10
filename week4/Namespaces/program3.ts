namespace Bank {

    export class Account {
        constructor(
            public accountNo: number,
            public holderName: string,
            public balance: number
        ) {}

        display(): void {
            console.log("Account No:", this.accountNo);
            console.log("Holder Name:", this.holderName);
            console.log("Balance:", this.balance);
        }
    }
}

let acc = new Bank.Account(12345, "Rahul", 25000);
acc.display();