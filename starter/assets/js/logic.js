var currentTime = document.querySelector("#time").innerHTML
var startButton = document.querySelector("#start")

// Array containing questions

let questions = [
    "Commonly used data types DO NOT include :",
    "The condition in an if/else statement is enclosed within : ",
    "Arrays in Javascript can be used to store : ",
    "String values must be enclosed within ____ when being assigned to variables",
    "Is it necessary to end each line of code with a semicolon in Javascript?"
]

// Create function that counts down from current time

// function countingDown() {
//     currentTime--
//     seti
// }




// // Adds events that occur once the start button is clicked

currentTime = 20

startButton.addEventListener("click", function () {
    setInterval(function() {
        if (currentTime > 0) {
          currentTime--;
          console.log(currentTime);
        }
      }
      )
    }, 1000);




