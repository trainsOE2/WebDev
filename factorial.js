function factorial(num){
if(isNaN(num))
  return "Next time give a valid input";
if( num === 0)
  return 1;
return num * factorial(num-1);
}
