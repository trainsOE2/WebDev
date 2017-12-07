var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Whitestone Bridge", image: "http://pinezanita.com/wp-content/uploads/2010/12/Tent-Campers-1.jpg" },
  {name: "Pinewood Hilltop", image: "https://i.pinimg.com/736x/74/64/a0/7464a08b81342ce64ab658e12df63a68--camping-life-tent-camping.jpg"},
  {name: "Clearskies Iceground", image: "https://blog.nationalparks.nsw.gov.au/uploads/2016/08/Stars_Camping-_DSC9408_Adrian-Mascenon-1600x1200.jpg" }
];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){


  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new");
});

app.listen(3000, function(req, res){
  console.log("The YelpCamp Server has started!");
});
