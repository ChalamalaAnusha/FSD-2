class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    showBalance(): void {
        console.log("Balance:", this.balance);
    }
}

let account = new BankAccount(10000);

account.deposit(5000);
account.showBalance();

// console.log(account.balance); // Error: 'balance' is private