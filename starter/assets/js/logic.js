let currentTime = document.querySelector("#time").innerHTML
let startButton = document.querySelector("#start")
let header = document.querySelector("h1")
let mainText = document.querySelector("#mainText")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")
let button5 = document.querySelector("#button5")
let questionNo = 0
let score = 0
let counter = 0



// Array containing questions

let questions = [
    "Commonly used data types DO NOT include :",
    "The condition in an if/else statement is enclosed within : ",
    "Arrays in Javascript can be used to store : ",
    "String values must be enclosed within ____ when being assigned to variables",
    "Is it necessary to end each line of code with a semicolon in Javascript?"
]

function endGame() {
  
  mainText.innerHTML = ("Thanks for playing! Here's your score: " +score)
  
  button2.classList.add("hide")
  button3.classList.add("hide")
  button4.classList.add("hide")
  button5.classList.add("hide")
  
  currentTime = 0
 }


// Once start is clicked, begin the countdown

startButton.addEventListener("click", function () {
  currentTime = 30
 
  header.classList.add("hide")
  startButton.classList.add("hide")
  button2.classList.remove("hide")
  button3.classList.remove("hide")
  button4.classList.remove("hide")
  button5.classList.remove("hide")

  mainText.innerHTML = questions[questionNo]
  questionNo++

   button2.innerHTML = "Strings"
   button3.innerHTML = "Bananas"
   button4.innerHTML = "Alerts"
   button5.innerHTML = "Numbers"

  
       button2.addEventListener("click", function() {
         currentTime -=5
         getNextQuestion()
       })
     
       button3.addEventListener("click", function() {
         score++
         getNextQuestion()
       })
     
       button4.addEventListener("click", function() {
         currentTime -=5
         getNextQuestion()
       })
     
       button5.addEventListener("click", function() {
         currentTime -=5
         getNextQuestion()
       })

  function getNextQuestion() {
    mainText.innerHTML = questions[questionNo++]
    console.log(questionNo)
    counter++
    console.log(counter)

    if (counter === 1){
      button2.innerHTML = "Quotes"
      button3.innerHTML = "Parentheses"
      button4.innerHTML = "Square Brackets"
      button5.innerHTML = "Curly Braces"
    }

    if (counter === 2){
      button2.innerHTML = "Strings"
      button3.innerHTML = "All the above"
      button4.innerHTML = "Arrays"
      button5.innerHTML = "Numbers"

    }

    if (counter === 3){
      button2.innerHTML = "Curly Braces"
      button3.innerHTML = "Quotes"
      button4.innerHTML = "Square Brackets"
      button5.innerHTML = "Parentheses"
    }

    if (counter === 4){
      button2.innerHTML = "Yes"
      button3.innerHTML = "No"
      button4.innerHTML = "Only when assigning variables"
      button5.innerHTML = "Only at the end of function declarations"

    }


    if (questionNo > questions.length){
      endGame()
    }
  }

  // while

    
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

  






