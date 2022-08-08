// variables using moment.js to create the time and date
var todaysDAte = moment().format("MMMM Do YYYY");
var displayDate = document.getElementById("currentDay");
displayDate.innerHTML = todaysDAte;
var time = moment().format("HH");

//function to change the color of each row depending on the time of day
$(".time-div").each(function () {
var timeDivEl = $(this).attr("id").split("-")[1]

if (time == timeDivEl) {
    $(this).addClass("present");
} else if (time > timeDivEl) {
    $(this).removeClass("present");
    $(this).addClass("past");
} else if(time < timeDivEl) {
    $(this).removeClass("past");
    $(this).addClass("future");
}

});

// saves the user input to the local sotrage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".toDO").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });


$("#hour-9 .Todo").val(localStorage.getItem("9"));
$("#hour-10 .Todo").val(localStorage.getItem("10"));
$("#hour-11 .Todo").val(localStorage.getItem("11"));
$("#hour-12 .Todo").val(localStorage.getItem("12"));
$("#hour-13 .Todo").val(localStorage.getItem("13"));
$("#hour-14 .Todo").val(localStorage.getItem("14"));
$("#hour-15 .Todo").val(localStorage.getItem("15"));
$("#hour-16 .Todo").val(localStorage.getItem("16"));
$("#hour-17 .Todo").val(localStorage.getItem("17"));
$("#hour-18 .Todo").val(localStorage.getItem("18"));
