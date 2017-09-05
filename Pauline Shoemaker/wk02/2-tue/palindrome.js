console.log('PALINDROME');


function checkPalindrom(wordNormal) {
  var wordReversed = wordNormal.split('').reverse().join('');
  if (wordNormal === wordReversed) {
    return true;
  } else {
    return false;
  }
}

// OTHER ATTEMPTS--------------------------

// var lastLetterIndex = (word.length - 1)
// var lastLetter = word[lastLetter];
// var firstLetter = word[0];

// var checkLetters = function (){
//   if (lastLetter === firstLetter) {
//     var lettersMatch = true;
//   } else ( lettersMatch = false;)
// }
//
// while (lettersMatch) {
//   lastLetter = lastLetter - 1;
//   firstLetter = firstLetter + 1;
// }

// chatAt Return the first character of a string:

// var word = "Hello";
// var lastLetterIndex = (word.length - 1)
// function checkPalindrom(word){
//     for( var i = word.length; i > 0; i-- ){
//         if( word[i] = word.charAt(lastLetterIndex)){
//           return true;
//         } else {
//             return false;
//         }
//     }
// }
// checkPalindrom(word);
