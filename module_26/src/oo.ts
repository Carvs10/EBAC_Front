class Person {
  name: string;
  amount?: number;
  constructor(name: string, amount?: number) {
    this.name = name;
    this.amount = amount;
  }
  saysHello(): string {
    return `${this.name} said Hello!`;
  }
}

class BankAccount {
  protected amount: number = 0;
  public accountNum: number;
  constructor(accountNum: number) {
    this.accountNum = accountNum;
  }

  private getAmount() {
    return this.amount;
  }

  static getBankCode() {
    return 125;
  }

  deposit(value: number) {
    this.amount += value;
  }
}

class PFBankAccount extends BankAccount {
  deposit(value: number): void {
    this.amount = value * 2;
  }
}

const pedroAccount = new PFBankAccount(134578);
