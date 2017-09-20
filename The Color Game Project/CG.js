
var squares = document.querySelectorAll('.square');
function colorGenerator(){
   return (Math.floor(Math.random() * 255) + 1) ;
}

var colors = [];
colors.length = squares.length;
var random = colorGenerator();


for (var i=0 ; i < squares.length ; ++i){
   colors[i] = "rgb(90, 90, 90)";
   console.log(colors[i]);
   squares[i].style.background = colors[i];
   squares[i].addEventListener("click", function(){
     alert(this.style.background);
   })
}
var pickedSquare = Math.floor(Math.random() * 6) + 1
var pickedColor = colors[pickedSquare];
var rgb = document.getElementById('colorDisplay');
rgb.textContent = pickedColor;
