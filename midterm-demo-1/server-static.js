//Activity Name: server-static.js
//Author Name: Nardo, Katrina R.
//Section and Codr: WD-202 / 2083

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('You have successfully created your second app');
})

var server = app.listen(4000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})