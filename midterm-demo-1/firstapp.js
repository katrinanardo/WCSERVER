//Activity Name: firstapp.js
//Author Name: Nardo, Katrina R.
//Section and Codr: WD-202 / 2083

var express = require('express');
var app = express();

app.get("/", function(request, response){
  response.send("Hello World! -Nardo, Katrina R. WD202");
});

app.listen(3000, function(){
  console.log('Server running at https://localhost:3000');
});