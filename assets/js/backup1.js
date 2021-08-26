
var body = document.body;
var intro = document.getElementById("intro-title-card");

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

// var card1 = document.getElementById("card-1").hidden = true;
// var card2 = document.getElementById("card-2").hidden = true;
// var card3 = document.getElementById("card-3").hidden = true;
// var card4 = document.getElementById("card-4").hidden = true;

// var cardResponse = document.getElementById(".answers")

var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#begin");

// var buttonA = document.querySelector("#Answer-1");
// var buttonB = document.querySelector("#Answer-2");
// var buttonC = document.querySelector("#Answer-3");
// var buttonD = document.querySelector("#Answer-4");

let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;




let questions = [
{
	question: "This is the FIRST question you should pick one of the four answers below. The correct answer is B.",
	choiceA: "A",
	choiceB: "B",
	choiceC: "C",
	choiceD: "D",
	correct: "B"
},
{
	question: "This is the SECOND question you should pick one of the four answers below. The correct answer is D.",
	choiceA: "A",
	choiceB: "B",
	choiceC: "C",
	choiceD: "D",
	correct: "D"
}



]

function renderQuestion() {
	let q = questions[runningQuestionIndex];
	question.innerHTML = "<p>" + q.question+ "</p>;"
	choiceA.innerHTML = q.choiceA;
	choiceB.innerHTML = q.choiceB;
	choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
}


function checkAnswer() {
	

}




startButton.addEventListener("click", startGame); 


// buttonA.addEventListener("click", checkAnswer());
// buttonB.addEventListener("click", checkAnswer());
// buttonC.addEventListener("click", checkAnswer());
// buttonD.addEventListener("click", checkAnswer());

	

function startGame() {
	isWin = false;
	timerCount = 60;
	// Prevents start button from being clicked when round is in progress
	startButton.disabled = true;
	startButton.style.display = "none";
	document.getElementById("intro-title-card").hidden = true;
	document.getElementById("card-1").hidden = false;
	var q1 = document.getElementById("card-1").hidden = false;
	// cardResponse.setAttribute("data-state", "hidden")
	startTimer()


	

  }


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




