console.log("Bank Sept 11")

var balance = 0;

var deposit = function (amount) {
  balance = balance + amount
  return balance;
}
var withdraw = function (amount) {
  balance = balance - amount
  return balance;
}
var savings = {
  balance: 0,
  deposit: function (amount) {
    savings.balance = savings.balance + amount;
  }

}

// --------
//presentation functions
var balanceDiv = document.querySelector('.balance');
var amountInput = document.querySelector('.amount');
var depositBtn = document.querySelector('.deposit-btn')

var renderBalance = function () {
  balanceDiv.textContent = '$' + savings.balance;
}
renderBalance();

depositBtn.addEventListener('click', function () {
  // input
  var amount = Number(amountInput.value);
  // process
  savings.deposit(amount);
  // output
  renderBalance();
});
