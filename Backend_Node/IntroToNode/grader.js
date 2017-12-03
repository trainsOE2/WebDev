function grader(arr) {
  var sum=0;
  var average;
  for(var i=0 ; i<arr.length ; i++){
    sum += arr[i];
  }
  average = sum/arr.length;
  var avg = Math.ceil(average);
  console.log("Average score is: " + avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
grader(scores);
