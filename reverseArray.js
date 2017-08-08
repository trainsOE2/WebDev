var array = ["Saab", "BMW", "Tesla", "Koenigsegg", "Maserati"];
var newArray = new Array();
var len = array.length;
var i=0;
printReverse(array);

function printReverse(array)
{
  for( i=len-1, j=0 ; i >= 0, j<len ; i--, j++)
  {
      newArray[j] = array[i];
  }

  newArray.forEach(function(ele){
    console.log(ele + " ");
  })

}
