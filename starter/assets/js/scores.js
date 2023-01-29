let scoresPage = document.querySelector("#highscores")

function getLastScore() {

    console.log(localStorage.getItem("initials"))
    console.log(localStorage.getItem("score"))

    var scoreItem = document.createElement("li")

    scoreItem.innerHTML = (localStorage.getItem("initials") + " ~ " + localStorage.getItem("score"))

    scoresPage.append(scoreItem)


  }

  getLastScore()
  