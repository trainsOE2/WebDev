var express          =    require('express'),
    app              =    express(),
    bodyParser       =    require('body-parser'),
    mongoose         =    require('mongoose');
    methodOverride   =    require('method-override');

mongoose.connect("mongodb://localhost/restfulBlog_app");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

// MONGOOSE/MODEL Config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title : "Test Blog",
//   image : "https://images.unsplash.com/photo-1429552054921-018e433d7d34?auto=format&fit=crop&w=755&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
//   body  : "Storm chasers",
// });

//RESTful Routes

//Landing
app.get("/", function(req, res){
  res.redirect("/blogs");
});

//Index
app.get("/blogs", function(req, res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log("ERROR :(");
    } else{
      res.render("index", {blogs: blogs});
    }
  })
});

//New
app.get("/blogs/new", function(req, res){
  res.render("new");
});

//Create
app.post("/blogs", function(req, res){
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render("new");
    } else{
      res.redirect("/blogs");
    }
  });
});

//Show
app.get("/blogs/:id", function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect("/blogs");
    } else {
      res.render("show", {blog: foundBlog});
    }
  })
});

// Edit
 app.get("/blogs/:id/edit", function(req, res){
   Blog.findById(req.params.id, function(err, foundBlog){
     if(err){
       res.redirect("/blogs");
     } else {
       res.render("edit", {blog: foundBlog});
     }
   })
 });

//Update
app.put("/blogs/:id", function(req, res){
  res.send("Update Route!");
})

app.listen(3000, function(req, res){
  console.log("Server is listening!");
});
