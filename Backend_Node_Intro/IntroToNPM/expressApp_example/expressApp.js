var exp = require("D:/node_modules/npm/node_modules/express");
var app = exp();

app.listen(3000, function(){
  console.log("Server started on port 3000!");
})

app.get('/', function(req, res){
  res.send("Hi there! Welcome to my assignment :)");
})

app.get('/speak/:animal', function(req, res){
  var sounds = {
    pig: "Oink!",
    cow: "Moo!",
    dog: "Woof!",
    cat: "I hate you human!",
    goldfish: "..."
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "'");
});

app.get('/repeat/:word/:number', function(req, res){
  var word = req.params.word;
  var number = parseInt(req.params.number);
  var result = " ";
  for (var i = 0 ; i < number ; i++)
  {
    result += word + ' ';
  }
  res.send(result);
});

app.get('*', function(req, res){
  res.send("Huh!!! Noob.");
});
