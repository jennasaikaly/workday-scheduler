console.log(moment().format());

$(document).ready(function() {});

let currentDate = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(currentDay);

$("#currentDay").text(currentDate);




$(".time-div").on("click", "p", function() {
    var text = $(this)
      .text()
      .trim();
    console.log(text);

  //creates dynamic element
//replaces p with textarea
  var textInput = $("<textarea>")
  .addClass("list-control");

  $(this).replaceWith(textInput);
  //highlights the input box
  textInput.trigger("focus");

});
