class BankAccount {
  constructor(accountNumber, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({
        type: "deposit",
        amount: amount,
        date: new Date(),
      });
      return `Deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be positive";
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({
        type: "withdrawal",
        amount: amount,
        date: new Date(),
      });
      return `Withdrew $${amount}. New balance: $${this.balance}`;
    } else if (amount > this.balance) {
      return "Insufficient funds";
    } else {
      return "Withdrawal amount must be positive";
    }
  }

  getBalance() {
    return this.balance;
  }

  getTransactionHistory() {
    return this.transactions;
  }
}

// Create a bank account
let account = new BankAccount("123456", 1000);
console.log(account.deposit(500)); // "Deposited $500. New balance: $1500"
console.log(account.withdraw(200)); // "Withdrew $200. New balance: $1300"
console.log(account.getBalance()); // 1300