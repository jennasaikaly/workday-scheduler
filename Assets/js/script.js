console.log(moment().format());

let descriptionEl = document.querySelector(".description");
let currentDateEl = document.querySelector("#currentDate");

//Today's date displayed at the top of the page
let today = moment().format("MMMM Do, YYYY - hh:mm:ss a");
currentDateEl.innerHTML = today; 

//this is current time
let currentTime = moment().format("HH:mm");

//load task function
let loadTasks = function (){
  debugger;
 let storedTask9 = localStorage.getItem("9");
 descriptionEl.textContent = storedTask9;
 let storedTask10 = localStorage.getItem("10");
 descriptionEl.textContent = storedTask10;
 let storedTask11 = localStorage.getItem("11");
 descriptionEl.textContent = storedTask11;
 let storedTask12 = localStorage.getItem("12");
 descriptionEl.textContent = storedTask12;
 let storedTask13 = localStorage.getItem("13");
 descriptionEl.textContent = storedTask13;
 let storedTask14 = localStorage.getItem("14");
 descriptionEl.textContent = storedTask14;
 let storedTask15 = localStorage.getItem("15");
 descriptionEl.textContent = storedTask15;
 let storedTask16 = localStorage.getItem("16");
 descriptionEl.textContent = storedTask16;
 let storedTask17 = localStorage.getItem("17");
 descriptionEl.textContent = storedTask17;
}
loadTasks();


//Saves the task description and time when the user clicks the 'save' button
$(".saveBtn").click(function(event) {
  event.preventDefault();
  console.log("save button was clicked");
//get form values
 var taskText= $(this).siblings(".description").val();
 var taskTime= $(this).parent().attr("id");

 localStorage.setItem(taskTime,taskText);
})  

//var auditTasks = function (){

  //for (let i = 0; i < descriptionEl; i++)
  //var timeBlock = descriptionEl[i].
  // if(currentHour = descriptionEl) {

  // }
   
//}