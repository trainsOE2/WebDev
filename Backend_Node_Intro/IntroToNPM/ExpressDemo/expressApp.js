var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
var friends = ["Akku", "Alankrith", "Amorthyo", "Ankita", "Haripriya", "Samyak", "Shreyas"];

app.get("/", function(req, res){
  res.render("home");
});

app.post("/addFriend", function(req, res){
  var newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends", function(req, res){
  res.render("friends", {friends: friends});
});

app.listen(3000, function(){
  console.log("Server is listening!");
});
