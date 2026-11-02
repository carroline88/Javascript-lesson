// BANK ACCOUNT OBJECT
const account = {
  accountName: "Caroline Strandberg",
  balance: 1000,

  // Display the total balance
  getBalance: function () {
    alert("Current balance: $" + this.balance);
    console.log("Current balance: $" + this.balance);
  },

  // Deposit money into the account
  deposit: function () {
    const input = prompt("Enter the amount to deposit:");
    if (input === null) return;

    const amount = parseFloat(input);
    if (isNaN(amount) || amount <= 0) {
      this.accountError("Invalid deposit amount.");
    } else {
      this.balance += amount;
      alert("Successfully deposited $" + amount + ". New balance: $" + this.balance);
      console.log("Deposited $" + amount + ". New balance: $" + this.balance);
    }
  },

  // Withdraw money from the account
  withdrawal: function () {
    const input = prompt("Enter the amount to withdraw:");
    if (input === null) return;

    const amount = parseFloat(input);
    if (isNaN(amount) || amount <= 0) {
      this.accountError("Invalid withdrawal amount.");
    } else if (amount > this.balance) {
      this.accountError("Insufficient funds. You only have $" + this.balance);
    } else {
      this.balance -= amount;
      alert("Successfully withdrew $" + amount + ". Remaining balance: $" + this.balance);
      console.log("Withdrew $" + amount + ". Remaining balance: $" + this.balance);
    }
  },

  // Display the account holder's name
  getAccountName: function () {
    alert("Account holder: " + this.accountName);
    console.log("Account holder: " + this.accountName);
  },

  // Error handling function
  accountError: function (errorMessage) {
    alert("Error: " + errorMessage);
    console.log("Error: " + errorMessage);
  },

  // Exit account function
  exitAccount: function () {
    alert("Thank you for using the ATM. Goodbye!");
    console.log("ATM session ended.");
  }
};

// ATM FUNCTION (User Interface with switch-case menu)
function atm() {
  let running = true;

  while (running) {
    const message = parseFloat(
      prompt("Select a choice:\n1.) See balance\n2.) Make a deposit\n3.) Make a withdrawal\n4.) Get account name\n5.) Exit")
    );

    switch (message) {
      case 1:
        account.getBalance();
        break;
      case 2:
        account.deposit();
        break;
      case 3:
        account.withdrawal();
        break;
      case 4:
        account.getAccountName();
        break;
      case 5:
        account.exitAccount();
        running = false;
        break;
      default:
        account.accountError("Invalid menu choice. Please select 1 to 5.");
        break;
    }
  }
}

// Start the ATM program
atm();