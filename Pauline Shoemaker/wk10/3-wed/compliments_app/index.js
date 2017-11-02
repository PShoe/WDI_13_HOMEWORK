const PORT = 8888;
var http = require('http')
var app = function(request, response) {

  compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]

  var randCompliment = compliments[Math.floor ( Math.random() * compliments.length )]
  response.write(randCompliment)
  response.end()
  console.log(randCompliment);
}

var server = http.createServer(app)
server.listen(PORT)
//
// console.log('hello')
//
// var args = process.argv
// args = args
//
// .slice(2)
// .map(function(strNum){
//   return Number(strNum);
// })
// .reduce(function(a,b){
//   return a + b;
// })
// console.log(args)
