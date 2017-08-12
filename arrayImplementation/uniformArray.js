function uniformArray(arr){
  var len  = arr.length;
  var count = 0;
  for( var i=1 ; i != len ; i++){
    if(arr[i] == arr[0])
      count++;
  }
  if (count == len-1)
    console.log("Array is uniform.")
  else
    console.log("Array is non uniform.")

}

uniformArray([1,1,'a',1]);
