var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

//POST Schema
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

//USER Schema
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});
var User = mongoose.model("User", userSchema);

Post.create({
  title: "How to cook the best burger",
  content: "blah blah blah blah blah"
}, function(err, post){
  User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
    if(err){
      console.log(err);
    } else {
      foundUser.update({$push: {post}});
      foundUser.save(function(err, data){
        if(err){
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  });
});

// User.findOne({email: "bob@gmail.com"}, function(err, currUser){
//   console.log(currUser.posts.title);
// })

// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher"
// });
