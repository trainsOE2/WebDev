var tasks = [];
var input = prompt("What would you like to do?");
while(input != "quit")
{
  if (input === "new")
  {
    var newTask = prompt("Enter a new Task");
    tasks.push(newTask);
  }
  else if(input === "list")
  {
    console.log(tasks);
  }
  input = prompt("What would you like to do?");
}
