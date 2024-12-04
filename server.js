var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");


//server configuration
app.use(express.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
 

app.get('/hello', function (req, res) {
  console.log("CAlling rest api");
  var person={firstName:'Harsha',lastName:'Runwal'};
  res.send(person);
});

 app.listen(9459, '15.207.113.73', () => {
    console.log('Example app is listening on http://15.207.113.73:9459');
});
// var server = app.listen(9459, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("host = ",host)
//  console.log("port = ",port)
//   console.log("Example app is listening at http://localhost:9459", host, port)
// })
