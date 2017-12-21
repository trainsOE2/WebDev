var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://i.pinimg.com/736x/43/50/f3/4350f34ba51e9504383c0b1fdec0f804--outdoor-pictures-camp-fire.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },

  {
    name: "Cloud's Rest",
    image: "https://www.campsites.co.uk/getupload/subregion/131/d62f7f82-02df-4777-81f9-7d74ddbc05b2/700/-/width/campsites-in-staffordshire.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },

  {
    name: "Cloud's Rest",
    image: "https://i.pinimg.com/736x/95/31/56/953156889a8aacf0ef19e9a942cdcf90--norway-camping-norway-travel.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]

function seedDB(){
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("Removed Campgrounds!");
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if(err){
          console.log(err)
        } else {
          console.log("added a campground");
          //create a comment
          Comment.create(
            {
              text: "This place is great, but I wish there was internet",
              author: "Homer"
            }, function(err, comment){
              if(err){
                console.log(err);
              } else{
                campground.comments.push(comment);
                campground.save();
                console.log("created new comment");
              }
            }
          );
        }
      });
    });
  });
}

module.exports = seedDB;
