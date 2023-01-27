let currentTime = document.querySelector("#time").innerHTML
let startButton = document.querySelector("#start")
let header = document.querySelector("h1")
let mainText = document.querySelector("#mainText")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")
let button5 = document.querySelector("#button5")
let questionNo = 0

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
  console.log(questions)
  currentTime = 10
  header.classList.add("hide")
  startButton.classList.add("hide")
  button2.classList.remove("hide")
  button3.classList.remove("hide")
  button4.classList.remove("hide")
  button5.classList.remove("hide")

  mainText.innerHTML = questions[questionNo]
  questionNo++

  function getNextQuestion() {
    mainText.innerHTML = questions[questionNo++]
    console.log(questionNo)
  }
  
  button2.addEventListener("click", function() {
    getNextQuestion()
  })

  button3.addEventListener("click", function() {
    getNextQuestion()
  })

  button4.addEventListener("click", function() {
    getNextQuestion()
  })

  button5.addEventListener("click", function() {
    getNextQuestion()
  })

  function endGame() {
   mainText.innerHTML = "Thanks for playing!"
   button2.classList.add("hide")
   button3.classList.add("hide")
   button4.classList.add("hide")
   button5.classList.add("hide")
  }

  if (questionNo === questions.length){
    endGame()
  }
    
   setInterval(function() {
        if (currentTime > 0) {
          currentTime--;
          document.querySelector("#time").innerHTML = currentTime
        }
        else if (currentTime === 0){
          endGame()
        }
      }, 1000)

    }
    );

  






