"use strict";
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    showBalance() {
        console.log("Balance:", this.balance);
    }
}
let account = new BankAccount(10000);
account.deposit(5000);
account.showBalance();
// console.log(account.balance); // Error: 'balance' is private
