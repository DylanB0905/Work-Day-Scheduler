// variables using moment.js to create the time and date
var todaysDAte = moment().format("MMMM Do YYYY");
var displayDate = document.getElementById("currentDay");
displayDate.innerHTML = todaysDAte;
var time = moment().format("HH");

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
