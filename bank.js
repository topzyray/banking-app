class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    #monthlyInterest() {}
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        return this;
    }
    checkBalance() {
        return this.balance;
    }
}

const customerOne = new BankAccount("0101191941", "Tope Taiwo", 5000)
// console.log(customerOne);

class SavingsAccount extends BankAccount {}

const customerTwo = new SavingsAccount("1232144376", "Taiwo Olabimpe", 2000)
customerTwo.withdraw(530)
console.log(customerTwo);

class CurrentAccount extends BankAccount {}