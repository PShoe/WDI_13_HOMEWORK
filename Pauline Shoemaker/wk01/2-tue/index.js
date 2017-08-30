// August 29, 2017 Homework


//
// //_________LOGGING NAME TO CONSOLE_____________________


var firstName = prompt('What is your first name?');
console.log(firstName);


// // _________USING MULTIPLE CHOICE ON MENU____(this is allowed?)____

alert("Welcome " + firstName + '. Please choose from the menu:');

var submitAnswer = function() {
  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value;
         break;
       }
  }

  if (val == "" ) {
    alert('Do not leave blank, select an intem from the menu');
} else if ( val == "pork" || val == "steak") {
    alert('Vegans beware!');
} else if (val == "salad" || val == "tofurkey" ) {
    alert("This cuisine is vegan friendly.");
  }
};


// //______________EVEN/ODD______________________________


var x = 0;
while (x <= 20){
    if (x%2 === 0){
        console.log(x + ' is an even number');
    }
    if (x%2 !== 0){
        console.log(x + ' is an odd number');
    }
    x ++;
}

// //______________MULTIPLICATION__________________________


var x = 0;
while (x <= 10){
    result = x * 9;
    console.log(x + ' times 9 is equal to ' + result);
    x++;
}


// //______________MY TOP CHOICES__________________________

var favoriteTV = ['Mad Men','Handmaids Tale', 'Twin Peaks', 'Colbert', 'Orange is the New Black'];
var choiceNum = 0;
while (choiceNum < favoriteTV.length){
    console.log('My #' + (choiceNum + 1) + ' choice is ' + favoriteTV[choiceNum]);
    choiceNum ++;
}
