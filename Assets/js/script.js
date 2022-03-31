console.log(moment().format());

//$(document).ready(function() {});
//Today's date displayed at the top of the page
let currentDate = moment().format("MMMM Do, YYYY - hh:mm:ss a");
$("#currentDate").text(currentDate);

//this is today's date
let currentTime = moment().format("HH:mm");
console.log(currentTime);


 


//Saves the task description and 
$(".saveBtn").on("click", function() {
  let text = $(this).siblings(".description").val();
  let time = $(this).closest(".time-div").attr("id");

  localStorage.setItem(text, time);
})