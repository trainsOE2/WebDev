var tasks = [];
var input = prompt("What would you like to do?");
while(input != "Quit")
{
  if (input ===   "New")
    addTasks();
  else if(input === "List")
    listTasks();
  else if(input === "Delete")
    deleteTasks();
  input = prompt("What would you like to do?");
}


function addTasks()
{
  var newTask = prompt("Enter a new Task");
  tasks.push(newTask);
  console.log("Added Task");
}

function listTasks()
{
    tasks.forEach(function(task, i){
      console.log(i + ": " + task);
    })
}

function deleteTasks()
{
  var index = prompt("Index of task to be deleted?")
  tasks.splice(index, 1);
  console.log("Deleted Task");
}
