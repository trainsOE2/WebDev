var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(6);
var num;

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for( var i = 0 ; i < squares.length ; ++i){
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function(){
    if(this.style.background === pickedColor){
        messageDisplay.textContent = "Correct";
        changecolors(pickedColor);
    }
    else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  })
}

function changecolors(color){
  for (var i=0 ; i < squares.length ; ++i)
    squares[i].style.background = color;
}

function generateRandomColors(num){
  var arr = [];
  for (var j=0 ; j<num ; j++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r  = Math.floor(Math.random()*256);
  var g  = Math.floor(Math.random()*256);
  var b  = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
