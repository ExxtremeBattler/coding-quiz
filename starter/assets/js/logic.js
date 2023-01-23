let currentTime = document.querySelector("#time").innerHTML
let startButton = document.querySelector("#start")
let header = document.querySelector("h1")
let mainText = document.querySelector("#mainText")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")

// Array containing questions

let questions = [
    "Commonly used data types DO NOT include :",
    "The condition in an if/else statement is enclosed within : ",
    "Arrays in Javascript can be used to store : ",
    "String values must be enclosed within ____ when being assigned to variables",
    "Is it necessary to end each line of code with a semicolon in Javascript?"
]


// Once start is clicked, begin the countdown

startButton.addEventListener("click", function () {
  currentTime = 10
  header.classList.add("hide")
  button2.classList.remove("hide")
  button3.classList.remove("hide")
  button4.classList.remove("hide")


  // add a for loop here
  mainText.innerHTML = " "
// for (let index = 0; index < questions.length; index++) {
//   mainText.innerHTML = questions[index]
// }
    
setInterval(function() {
        if (currentTime > 0) {
          currentTime--;
          document.querySelector("#time").innerHTML = currentTime
          console.log(currentTime);
        }
      }, 1000
      )
    });

  






