var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);

//Users
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

//New User Creation
// var newUser = new User({
//   email: "hermione@hogwarts.edu",
//   name: "Hermione Granger"
// });
//
// newUser.posts.push({
//   title: "How to brew Ployjuice potion",
//   content: "Go to potions class and learn it"
// })
//
// newUser.save(function(err, user){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// })

// Find Users
// all users from findOne function.
// user in user.save() new user with the added post.
User.findOne({name: "Hermione Granger"}, function(err, user){
  if(err){
    //console.log(err);
  } else {
    user.posts.push({
      title: "3 Thins I really hate",
      content: "Voldemort. Voldemort. Voldemort"
    });
    user.save(function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log(user);
      }
    });

  }
});
