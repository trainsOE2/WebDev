var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Whitestone Bridge", image: "https://professortaboo.files.wordpress.com/2014/01/campingstargazing.jpg" },
  {name: "Pinewood Hilltop", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFxcjk6jfxXoi2YwdCjsec4OsipZvqomdVLZQzTIBvsWJVTC8qA"},
  {name: "Clearskies Iceground", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlHtsQVJztVP4CxxWdUWxuPmnJfFpIxY43uOESvlXf6ASDq_8xw" },
  {name: "Riverside Walks", image: "http://nomanbefore.com/wp-content/uploads/2017/07/JoshuaTree_Summer17_WEB-8770-1024x683.jpg"},
  {name: "Horizon Hunters", image: "http://cdn.hiconsumption.com/wp-content/uploads/2016/05/Best-Camping-Tents-2016.jpg"},
  {name: "Ranger", image: "https://www.mountainphotography.com/images/xl/20140226-Bridge-of-Heaven-Dusk-Camp.jpg"},
  {name: "Stargazer", image: "https://s.blogcdn.com/travel.aol.co.uk/media/2012/05/tent.jpg"},
  {name: "Starlight", image: "https://ak0.picdn.net/shutterstock/videos/7539250/thumb/1.jpg"}
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
