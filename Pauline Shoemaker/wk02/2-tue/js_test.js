console.log("JS TEST")

var captain = "Jack";
var beforeJack = "Oh ";
var afterJack = ", my Jack!";

var phrase = beforeJack.concat(captain);
phrase = phrase.concat(afterJack);
console.log(phrase);


var souls = 3;
var lifeRafts = 2;

if (souls > lifeRafts){
  console.log("SOS!");
}

var weekend = ['Saturday'];
console.log(weekend);
weekend.push('Sunday');
console.log(weekend);
weekend.unshift('Friday');
console.log(weekend);
var day = weekend[1];
console.log(day);
weekend.shift();
console.log(weekend);

var brain = {
  energyLevel: 10,
}

var energy = brain.energyLevel;
console.log(energy);
brain['dream'] = "electric sheep";
console.log (brain.dream);


var areaRect = function(length, width) {
  var area = length * width;
  return area;
}

var testRectangle = areaRect(3,4)
console.log(testRectangle);



var fruits = ['banana', 'apple', 'kiwi'];
var addFruit = function(arr) {
  arr.push('mango');
}
addFruit(fruits);
console.log(fruits);

//The entire array is being passed through the function when we addFruit(Fruits) as the local variable "arr".
