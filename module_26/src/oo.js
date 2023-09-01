"use strict";
class Person {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    saysHello() {
        return `${this.name} said Hello!`;
    }
}
class BankAccount {
    constructor(accountNum) {
        this.amount = 0;
        this.accountNum = accountNum;
    }
    getAmount() {
        return this.amount;
    }
    static getBankCode() {
        return 125;
    }
    deposit(value) {
        this.amount += value;
    }
}
class PFBankAccount extends BankAccount {
    deposit(value) {
        this.amount = value * 2;
    }
}
const pedroAccount = new PFBankAccount(134578);
