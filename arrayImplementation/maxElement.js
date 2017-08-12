

var arr = [1, 2, 4, 9, 2];
var max;
function maxElement(arr){
  max = arr[0];
  arr.forEach(function(ele){
    if (max < ele)
      max = ele;
  })
  return max;
}

console.log("Max element: " + maxElement(arr) + ", found at " + arr.indexOf(max) );
