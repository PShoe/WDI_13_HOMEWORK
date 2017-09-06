console.log('Bank Account App');

var withInput = document.querySelector('#withdraw');
var depoInput = document.querySelector('#deposit');
var withButton = document.querySelector('#withButton');
var depoButton = document.querySelector('#depoButton');
var curAmtSpanAud = document.querySelector('#aud');
var curAmtSpanUsd = document.querySelector('#usd');


depoButton.addEventListener('click',function(){
  var current = 0;
  var deposit = Number(depoInput.value); //5
  var newAmt = current + deposit;  //5
  var current = newAmt
  curAmtSpanAud.textContent = newAmt.toFixed(2);
  curAmtSpanUsd.textContent = (newAmt * .8).toFixed(2);
})

withButton.addEventListener('click', function(){
  var withdrawal = Number(withInput.value);
  var current = Number(curAmtSpanAud.textContent);
  if (withdrawal < current){
    var ausAmt = current - withdrawal;
    audAmt = ausAmt.toFixed(2);
    usdAmt = (ausAmt * .8).toFixed(2);
    curAmtSpanAud.textContent = ausAmt;
    curAmtSpanUsd.textContent = usdAmt;
  } else { alert("You do not have that kind of money, mate!")}
})
