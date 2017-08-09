<<<<<<< HEAD
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
=======
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
>>>>>>> ff4173db09c9d47eca8a1c0a58c622a2954888d0
