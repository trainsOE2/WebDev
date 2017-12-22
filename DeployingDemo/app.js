var express                = require("express"),
    mongoose               = require("mongoose"),
    passport               = require("passport"),
    bodyParser             = require("body-parser"),
    localStrategy          = require("passport-local"),
    passportLocalMongoose  = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo");

var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/secret", function(req, res){
  res.sender("secret");
});

app.listen(3000, function(req, res){
  console.log("Server is Listening!!!");
})
