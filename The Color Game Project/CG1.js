var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(6);
var h = document.querySelector("h1");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
})

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
})

resetButton.addEventListener("click", function(){
  resetButton.textContent = "New Colors";
  h.style.background = "#232323";
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for( var i=0 ; i<squares.length ; ++i){
    squares[i].style.background = colors[i];
  }
})

colorDisplay.textContent = pickedColor;

for( var i = 0 ; i < squares.length ; ++i){
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function(){
    clickedColor = this.style.background;
    console.log(clickedColor, pickedColor);
    if(clickedColor === pickedColor){
        resetButton.textContent = "Play again?";
        messageDisplay.textContent = "Correct";
        changecolors(pickedColor);
        h.style.background = clickedColor;
    }
    else{
      this.style.background = "#232323"
      // var newColor = colors[i].replace("b", "ba");
      // newColor.replace(")", ", 0.5)");
      // console.log(newColor);
      // this.style.background = newColor;
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
