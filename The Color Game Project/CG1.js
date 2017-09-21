var squares = document.querySelectorAll(".square");
var colors = [
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 0)",
  "rgb(255, 0, 0)"
]

var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for( var i = 0 ; i < squares.length ; ++i){
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function(){
    if(this.style.background === pickedColor){
        messageDisplay.textContent = "Correct";
    }
    else{
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  })
}
