// jshint  esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true }));

app.get("/", function(req, res){
  // When we use .send() we are sending individual buts of HTML data;
  // There's a way for sending an entire file.
  // res.sendFile(__dirname + "/ + nameOfFile")
  // __dirname = file path of the current file no matter where is hosted
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  // var num1 = req.body.num1;
  // var num2 = req.body.num2;
  // var result = num1 + num2;  When we use body parser it turns everything into strings
  // We need to specify that num1 & num2 are numbers;
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  result = num1 + num2;
  
  res.send("The result of the calculation is " + result);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
