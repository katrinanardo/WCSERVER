//App name: getapp
//Author: Nardo, Katrina R.
//Description: this demonstrates the GET method

var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function(req, res) {
  res.sendFile( __dirname + "/" + "index.html");
  
})

app.get('/process_get', function (req, res) {
  //Prepare ouptut in JSON fprmat
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  //console.log(req.query.first_name);
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(5000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})