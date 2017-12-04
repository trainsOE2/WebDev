function grader(arr) {
  var sum=0;
  var average;
  arr.forEach(function (arrEle) {
    sum += arrEle;
  })
  average = sum/arr.length;
  return Math.round(average);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log("Average score for setA: " + grader(scores));

var scores = [81, 82, 99, 86, 74, 88, 91, 82];
console.log("Average score for setB: " + grader(scores));
