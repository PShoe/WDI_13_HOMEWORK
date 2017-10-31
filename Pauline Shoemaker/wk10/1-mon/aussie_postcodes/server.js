var http = require('http');
var fs = require('fs');

var app = function(request, response) {

  arrayObjects = []
  fs.readFile('postcodes_test.csv', 'utf-8', function(err, data){
    array = data.split('\n');
    headers = array[0];
    eachHeader = headers.split(',')
    array.shift() //remove the headers?

    for(var i = 0; i < (array.length - 1); i++){
      var eachLine = array[i].split(',');
      object = {};
      for(var j = 0; j < eachHeader.length; j++) {
        var key = eachHeader[j];
        var value = eachLine[j];
        object[key] = value;
      }
      arrayObjects.push(object);
    }
  var myJSON = JSON.stringify(arrayObjects);
  response.write(myJSON);
  response.end();
  })
}


var server = http.createServer( app );
server.listen(8888);
