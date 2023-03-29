var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var isWin = false;
var timer;
var timerCount;
//quiz questions and answers 
var questions = [
  {
      title: "How many domestic cats are there in the world?",
      choices: ["5 million","50 million","250 million","500 million"],
      answer: "500 million",
  },
  {
      title: "How many teeth does a cat have? ",
      choices: ["20", "30", "40", "50"],
      answer: "30",
  },
  {
      title: "What was Grumpy Cat's real name?",
      choices: ["Tardar Sauce", "Salsa", "Mayonaise", "Worcestershire Sauce"],
      answer: "Tardar Sauce",
  },
  {
      title: "How long have cats been domesticated?",
      choices: ["100 years", "500 years", "1,000 years", "1,500 years"],
      answer: "1,000 years"
  },
]
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startQuestions()
  startTimer()
}

// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "YOU WON!!!🏆 ";
  winCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

// enter function to reference questions and answers 

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

function scoreBoard() {
  var x = document.getElementById("scoreboard");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
var storedWins = localStorage.getItem("keepingscore");

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
});
