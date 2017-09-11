console.log("Bank Account Redo")


var savings = {
  balance: 0,
  deposit: function(amount) {
    savings.balance = savings.balance + amount;
    return savings.balance;
  },
  withdraw: function(amount) {
    savings.balance = savings.balance - amount;
    return savings.balance;
  }
}

var checking = {
  balance: 0,
  deposit: function(amountChecking) {
    checking.balance = checking.balance + amountChecking;
    return checking.balance;
  },
  withdraw: function(amountChecking) {
    checking.balance = checking.balance - amountChecking;
    return checking.balance;
  }
}

// --------
//presentation functions
var balanceDiv = document.querySelector('.balance');
var balanceCheckingDiv = document.querySelector('.balanceChecking')
var amountInput = document.querySelector('.amount');
var depositBtn = document.querySelector('.deposit-btn');
var withdrawBtn = document.querySelector('.withdraw-btn');
var savingsBox = document.querySelector('.savings');
var depositCheckingBtn = document.querySelector('.deposit-checking-btn');
var withdrawCheckingBtn = document.querySelector('.withdraw-checking-btn');
var amountInputChecking = document.querySelector('.amount-checking');
var checkingBox = document.querySelector('.checking');

// SAVINGS ACCOUNT

var renderBalance = function () {
  balanceDiv.textContent = '$' + savings.balance.toFixed(2);
  return savings.balance;
}
renderBalance();

depositBtn.addEventListener('click', function () {
  if (savingsBox.lastElementChild.textContent === "You don't have enough money, mate"){
    savingsBox.lastElementChild.textContent = "";
  }
  var amount = Number(amountInput.value);
  savings.deposit(amount);
  renderBalance();
  amountInput.value = "";
});

withdrawBtn.addEventListener('click', function () {
  var amount = Number(amountInput.value);
  if (savingsBox.lastElementChild.textContent === "You don't have enough money, mate"){
    savingsBox.lastElementChild.textContent = "";
  }
  if (savings.balance >= amount) {
    savings.withdraw(amount);
    amountInput.value = "";
    renderBalance();
  } else {
    var noFunds = document.createElement("P");
    var alertText = document.createTextNode("You don't have enough money, mate")
    noFunds.appendChild(alertText);
    savingsBox.appendChild(noFunds);
  }
});

// CHECKING ACCOUNT

var renderCheckingBalance = function () {
  balanceCheckingDiv.textContent = '$' + checking.balance.toFixed(2);
  return checking.balance;
}
renderCheckingBalance();

depositCheckingBtn.addEventListener('click', function () {
  if (checkingBox.lastElementChild.textContent === "You don't have enough money, mate"){
    checkingBox.lastElementChild.textContent = "";
  }
  var amountChecking = Number(amountInputChecking.value);
  checking.deposit(amountChecking);
  renderCheckingBalance();
  amountInputChecking.value = "";
});

withdrawCheckingBtn.addEventListener('click', function () {
  var amountChecking = Number(amountInputChecking.value);
  if (checkingBox.lastElementChild.textContent === "You don't have enough money, mate"){
    checkingBox.lastElementChild.textContent = "";
  }
  if (checking.balance >= amountChecking) {
    checking.withdraw(amountChecking);
    amountInputChecking.value = "";
    renderCheckingBalance();
  } else if (checking.balance < amountChecking) {
    checking.withdraw(amountChecking);
    renderCheckingBalance();
    var amountNeeded = checking.balance * -1;//magic

    if (savings.balance < amountNeeded){
      var noFunds = document.createElement("P");
      var alertText = document.createTextNode("You don't have enough money, mate")
      noFunds.appendChild(alertText);
      checkingBox.appendChild(noFunds);
      checking.deposit(amountChecking);
      renderCheckingBalance();

    } else if (savings.balance >= amountNeeded){
    var noFunds = document.createElement("P");
    var alertText = document.createTextNode("Now transferring $" + amountNeeded + " to your checking account.")
    noFunds.appendChild(alertText);
    checkingBox.appendChild(noFunds);
    transferFunds(amountNeeded);
    renderCheckingBalance();
    renderBalance();
  }
  }
});

// Transferring from Savings to Checking

var transferFunds = function (amountNeeded) {
  savings.balance = savings.balance - amountNeeded;
  checking.balance = checking.balance + amountNeeded;
}
