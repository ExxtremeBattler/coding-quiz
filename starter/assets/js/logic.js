let currentTime = document.querySelector("#time").innerHTML
let startButton = document.querySelector("#start")
let header = document.querySelector("h1")
let mainText = document.querySelector("#mainText")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")
let button5 = document.querySelector("#button5")
let questionNo

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
  startButton.classList.add("hide")
  button2.classList.remove("hide")
  button3.classList.remove("hide")
  button4.classList.remove("hide")
  button5.classList.remove("hide")

  questionNo = 0
  mainText.innerHTML = questions[questionNo]
  
  button2.addEventListener("click", function() {
    button2.classList.add("isClicked")
    mainText.innerHTML = questions[questionNo++]
    button2.classList.remove("isClicked")
  })

  button3.addEventListener("click", function() {
    button3.classList.add("isClicked")
    mainText.innerHTML = questions[questionNo++]
    button3.classList.remove("isClicked")
  })

  button4.addEventListener("click", function() {
    button4.classList.add("isClicked")
    mainText.innerHTML = questions[questionNo++]
    button4.classList.remove("isClicked")
  })

  button5.addEventListener("click", function() {
    button5.classList.add("isClicked")
    mainText.innerHTML = questions[questionNo++]
    button5.classList.remove("isClicked")
  })
  
    
setInterval(function() {
        if (currentTime > 0) {
          currentTime--;
          document.querySelector("#time").innerHTML = currentTime
          console.log(currentTime);
        }
      }, 1000
      )
    });

  






