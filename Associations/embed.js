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
// newUser.posts.push({ //somehow this push() works!
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

//if nothing else works
// user.update({$push: {
//   'posts.$.title': "3 Things I really hate",
//   'posts.$.content': "Voldemort. Voldemort. Voldemort"
// }});

// Find Users
// all users from findOne function.
// user in user.save() new user with the added post.
User.findOne({name: "Hermione Granger"}, function(err, user){
  if(err){
    console.log(err);
  } else {
    user.update({$push: { //this doesn't give error but doesn't push either
      'posts.title': "3 Things I really hate",
      'posts.content': "Voldemort. Voldemort. Voldemort"
    }});
    //the "push" below doesn't work and gives the error in the .txt file attached to this email
    // user.posts.push({
    //         title: "3 Things I really hate",
    //         content: "Voldemort.  Voldemort. Voldemort"
    //     });
    user.save(function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
