function sumArray(arr){
  var len = arr.length;
  var i = 0;
  var sum = 0;
  arr.forEach(function(ele){
      sum += ele;
  })
  console.log(sum);
}

sumArray([1, 3, 5, 2, 1, 30]);
