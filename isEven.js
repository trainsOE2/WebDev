function isEven(num){
  if(!(num%2))
    return "It is even.";
  else
    return "It isn't even.";
}
var check = document.getElementById('check');
isEven(check);
