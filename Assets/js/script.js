



//Today's date displayed at the top of the page
let currentDate = moment().format("MMMM Do, YYYY - hh:mm:ss a");
$("#currentDate").text(currentDate);

//this is today's date
let currentTime = moment().format("HH:mm");
console.log(currentTime);


//load task function
let loadTasks = function (){
tasks = JSON.parse(localStorage.getItem("tasks"));

//if there is nothing in localStorage, create a new object to task the tasks
if (!tasks) {
  tasks = {};
  };

  for(let i=0; i<localStorage.length; i++) {
    let tasks = localStorage.tasks(i);
    alert(`${tasks}: ${localStorage.getItem(tasks)}`);
    console.log(tasks)
  }
  displayTasks(tasks);

}

//displayTasks(tasks){

 // $.each(tasks)
//}


//Saves the task description and time when the user clicks the 'save' button
$(".saveBtn").click(function(event) {
  event.preventDefault();
  console.log("save button was clicked");
//get form values
 var taskText= $(this).siblings(".description").val();
 var taskTime= $(this).parent().attr("id");

 localStorage.setItem(taskText, taskTime);

 
  
  
})  

