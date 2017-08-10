function average(array)
{
  var sum = 0;
  array.forEach(function(score){
    sum += score;
  })
  var fval = sum/array.length;
  return Math.round(fval);
}

console.log("Average for EVS");
var scores = [90, 98, 89, 100, 86, 94];
console.log(average(scores));

console.log("Average for Chemistry");
var scores = [59, 98, 80, 71, 95, 76];
console.log(average(scores));
