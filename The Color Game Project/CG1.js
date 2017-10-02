<<<<<<< HEAD
var numSquares = 6
var colors = [];
var pickedColor;
var h = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for(var i=0 ; i < modeBtns.length ; i++){
    modeBtns[i].addEventListener("click",function(){
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    })
  }
}

function setupSquares(){
  for( var i = 0 ; i < squares.length ; ++i){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
      clickedColor = this.style.background;
      console.log(clickedColor, pickedColor);
      if(clickedColor === pickedColor){
          resetButton.textContent = "Play again?";
          messageDisplay.textContent = "Correct!";
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
}


function reset(){
  resetButton.textContent = "New Colors";
  h.style.background = "steelblue ";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  colorDisplay.textContent = pickedColor;
  for( var i=0 ; i<squares.length ; ++i){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
}


resetButton.addEventListener("click", function(){
  reset();
})

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
=======
var numSquares = 6
var colors = [];
var pickedColor;
var h = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for(var i=0 ; i < modeBtns.length ; i++){
    modeBtns[i].addEventListener("click",function(){
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    })
  }
}

function setupSquares(){
  for( var i = 0 ; i < squares.length ; ++i){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
      clickedColor = this.style.background;
      console.log(clickedColor, pickedColor);
      if(clickedColor === pickedColor){
          resetButton.textContent = "Play again?";
          messageDisplay.textContent = "Correct!";
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
}


function reset(){
  resetButton.textContent = "New Colors";
  h.style.background = "steelblue ";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  colorDisplay.textContent = pickedColor;
  for( var i=0 ; i<squares.length ; ++i){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
}


resetButton.addEventListener("click", function(){
  reset();
})

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
>>>>>>> baf7fade89acc02c3fb6bae3446193ec6c2a0dc5
