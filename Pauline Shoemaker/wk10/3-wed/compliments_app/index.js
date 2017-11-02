const PORT = 8888;
var http = require('http')
var express = require('express');
var app = express();

app.set('views','./views');
app.set('view engine','ejs');

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = [
  "#FFBF00",
  "#0080FF",
  "#01DF3A",
  "#FF0080"
]

app.get('/', function(request,response){

  var randCompliment = compliments[Math.floor ( Math.random() * compliments.length )]
  var randColor = colors[Math.floor ( Math.random() * colors.length )]

  response.render('index', { randCompliment: randCompliment, randColor : randColor });
})

app.get('/:name', function(request,response){

  var randCompliment = compliments[Math.floor ( Math.random() * compliments.length )]
  var randColor = colors[Math.floor ( Math.random() * colors.length )]

  userName = request.params.name
  response.render('name', { userName: userName, randColor : randColor, randCompliment: randCompliment })
})

app.listen(PORT)

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
