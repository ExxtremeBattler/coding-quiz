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
let firstClicked = false
let secondClicked = false
let thirdClicked = false
let fourthClicked = false
let fifthClicked = false
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
  mainText.innerHTML = "Thanks for playing!"
  button2.classList.add("hide")
  button3.classList.add("hide")
  button4.classList.add("hide")
  button5.classList.add("hide")
  currentTime = 0
 }


// Once start is clicked, begin the countdown

startButton.addEventListener("click", function () {
  console.log(questions)
  currentTime = 15
  header.classList.add("hide")
  startButton.classList.add("hide")
  button2.classList.remove("hide")
  button3.classList.remove("hide")
  button4.classList.remove("hide")
  button5.classList.remove("hide")

//   function firstQuestionLogic() {
//    button2.innerHTML = "Bananas"
//    button3.innerHTML = "Strings"
//    button4.innerHTML = "Alerts"
//    button5.innerHTML = "Numbers"

//    button2.addEventListener("click", function() {
//      score++
//      firstClicked = true
//      getNextQuestion()
//    })
 
//    button3.addEventListener("click", function() {
//     firstClicked = true
//      getNextQuestion()
//    })
 
//    button4.addEventListener("click", function() {
//     firstClicked = true
//      getNextQuestion()
//    })
 
//    button5.addEventListener("click", function() {
//     firstClicked = true
//      getNextQuestion()
//    })

//    return
   
//  }

//   function secondQuestionLogic() {
//     

//     button2.addEventListener("click", function() {
//       secondClicked = true
//       getNextQuestion()
//     }  )
  
//     button3.addEventListener("click", function() {
//       secondClicked = true
//       getNextQuestion()
//     })
  
//     button4.addEventListener("click", function() {
//       secondClicked = true
//       getNextQuestion()
//     })
  
//     button5.addEventListener("click", function() {
//       secondClicked = true
//       score++
//       getNextQuestion()
//     })
    
//   }

//   function thirdQuestionLogic() {

//     // once:true stops the event from being invoked more than once

//     button2.addEventListener("click", function() {
//       thirdClicked = true
//       getNextQuestion()
//     }  )
  
//     button3.addEventListener("click", function() {
//       thirdClicked = true
//       getNextQuestion()
//     })
  
//     button4.addEventListener("click", function() {
//       thirdClicked = true
//       getNextQuestion()
//     })
  
//     button5.addEventListener("click", function() {
//       thirdClicked = true
//       score++
//       getNextQuestion()
//     })
    
//   }

//   function fourthQuestionLogic() {
  

//     button2.addEventListener("click", function() {
//       fourthClicked = true
//       getNextQuestion()
//     }  )
  
//     button3.addEventListener("click", function() {
//       fourthClicked = true
//       score++
//       getNextQuestion()
//     })
  
//     button4.addEventListener("click", function() {
//       fourthClicked = true
//       getNextQuestion()
//     })
  
//     button5.addEventListener("click", function() {
//       fourthClicked = true
//       getNextQuestion()
//     })
    
//   }

//   function fifthQuestionLogic() {

//     button2.addEventListener("click", function() {
//       fifthClicked = true
//       getNextQuestion()
//     }  )
  
//     button3.addEventListener("click", function() {
//       fifthClicked = true
//       getNextQuestion()
//     })
  
//     button4.addEventListener("click", function() {
//       fifthClicked = true
//       score++
//       getNextQuestion()
//     })
  
//     button5.addEventListener("click", function() {
//       fifthClicked = true
//       getNextQuestion()
//     })
    
//   }


  mainText.innerHTML = questions[questionNo]
  questionNo++

   button2.innerHTML = "Bananas"
   button3.innerHTML = "Strings"
   button4.innerHTML = "Alerts"
   button5.innerHTML = "Numbers"

  
       button2.addEventListener("click", function() {
         score++
         firstClicked = true
         getNextQuestion()
       })
     
       button3.addEventListener("click", function() {
        firstClicked = true
         getNextQuestion()
       })
     
       button4.addEventListener("click", function() {
        firstClicked = true
         getNextQuestion()
       })
     
       button5.addEventListener("click", function() {
        firstClicked = true
         getNextQuestion()
       })

  function getNextQuestion() {
    mainText.innerHTML = questions[questionNo++]
    console.log(questionNo)
    counter++
    console.log(counter)

    if (counter === 1){
      button2.innerHTML = "Quotes"
      button3.innerHTML = "Curly Braces"
      button4.innerHTML = "Square Brackets"
      button5.innerHTML = "Parentheses"
    }

    if (counter === 2){
      button2.innerHTML = "Strings"
      button3.innerHTML = "Numbers"
      button4.innerHTML = "Arrays"
      button5.innerHTML = "All the above"

    }

    if (counter === 3){
      button2.innerHTML = "Curly Braces"
      button3.innerHTML = "Quotes"
      button4.innerHTML = "Square Brackets"
      button5.innerHTML = "Parentheses"
    }

    if (counter === 4){
      button2.innerHTML = "Yes"
      button3.innerHTML = "Only when assigning variables"
      button4.innerHTML = "No"
      button5.innerHTML = "Only at the end of function declarations"

    }


    if (questionNo === questions.length){
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

  






