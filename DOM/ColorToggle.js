

var butt = document.querySelector("button");
butt.addEventListener("click", function(){
  if(document.querySelector("body").style.background == "gray"){
    document.querySelector("body").style.background = "black";
  }
  else{
    document.body.style.background = "gray";
  }
})
