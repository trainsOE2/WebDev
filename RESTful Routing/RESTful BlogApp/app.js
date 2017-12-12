var express     =    require('express'),
    app         =    express(),
    bodyParser  =    require('body-parser'),
    mongoose    =    require('mongoose');

mongoose.connect("mongodb://localhost/yelp_camp");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded{extended: true});
app.use(express.static("public"));

var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("")

app.listen(3000, function(req, res){
  console.log("Server is listening!");
});
