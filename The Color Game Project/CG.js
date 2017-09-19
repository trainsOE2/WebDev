
var squares = document.querySelectorAll('.square');
function colorGenerator(){
   return (Math.floor(Math.random() * 255) + 1) ;
}

var colors = [];
var random = colorGenerator();

for (var i=0 ; i < squares.length ; ++i){
   colors[i] = rgb(random, random, random);
   console.log(colors[i]);
   squares[i].style.background = colors[i];
}

var pickedSquare = Math.floor(Math.random() * 6) + 1
var pickedColor = colors[pickedSquare];
var rgb = document.getElementById('colorDisplay');
rgb.textContent = "RGB(" + pickedColor + ")";
