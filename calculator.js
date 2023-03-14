// jshint  esversion:6
const express = require("express");

const app = express();

app.get("/", function(req, res){
  // When we use .send() we are sending individual buts of HTML data;
  // There's a way for sending an entire file.
  // res.sendFile(__dirname + "/ + nameOfFile")
  // __dirname = file path of the current file no matter where is hosted
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});

