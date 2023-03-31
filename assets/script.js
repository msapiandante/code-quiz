var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var isWin = false;
var timer;
var timerCount;

//quiz questions and answers 
let questions = [{
  question: "How many domestic cats are there in the world?",

  choices: { 
    a: "5 million",
    b: "50 million",
    c: "250 million",
    d: "500 million",
    correctAnswer: "d",
  },
},
{
  question: "How many teeth does a cat have? ",

  choices: { 
    a: "20",
    b: "30",
    c: "40",
    d: "50",
    correctAnswer: "b",
  },
},
{
    question: "What was Grumpy Cat's real name?",

    choices: {
      a: "Tardar Sauce", 
      b: "Salsa", 
      c: "Mayonaise", 
      d: "Worcestershire Sauce",
    correctAnswer: "a",
}
},
{
    question: "How long have cats been domesticated?",

    choices: {
      a: "100 years", 
      b: "500 years", 
      c: "1,000 years", 
      d: "1,500 years",
    correctAnswer: "c", 
  },

}
];
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
//Here's function to render the question and the choices everytime we click the buttons. 
function startQuestions() {

  let show = document.getElementById('question');
  let q = questions[questionIndex];
  
  show.innerHTML = q.question;
  questionIndex++;
  console.log(questionIndex)
  
  button1.innerHTML = q.answers.a;
  button2.innerHTML = q.answers.b;
  button3.innerHTML = q.answers.c;
  button4.innerHTML = q.answers.d;
  }

  function endGame() {
    var x = document.getElementById("questions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
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
(startTimer(startGame));
scoreBoard(); 
winGame(endGame());
loseGame(endGame());