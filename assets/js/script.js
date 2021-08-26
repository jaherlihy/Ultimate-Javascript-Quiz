var intro = document.getElementById("intro-title-card");
var game = document.getElementById("game");
var startButton = document.getElementById("begin");
var outro = document.getElementById("outro");
// var textBox = 

var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var right = document.getElementById("correct");
var wrong = document.getElementById("incorrect");

var timerElement = document.querySelector(".timer-count");

var submitInitals
var initials
var scoreListing





var questions = [
	{
		question: "Which global object is held by square brackets []?",
		choiceA: "Console.log",
		choiceB: "Array",
		choiceC: "For loop",
		choiceD: "String",
		correct: "B"
	},{
		question: "Addition assignment is represented by which symbols?",
		choiceA: "++",
		choiceB: "+",
		choiceC: "+-",
		choiceD: "+=",
		correct: "D"
	},{
		question: "What is the default first number of an array?",
		choiceA: "0",
		choiceB: "1",
		choiceC: "null",
		choiceD: "10",
		correct: "A"
	},{
		question: "Which function returns the largest integer less than or equal to a given number?",
		choiceA: "Math.round()",
		choiceB: "Math.ceil()",
		choiceC: "Math.floor()",
		choiceD: "Math.abs()",
		correct: "C"
	}
];

var prevQuestion = questions.length -1;
var currentQuestion = 0;


function questionDisplay() {
	let q = questions[currentQuestion];

	document.getElementById("question").textContent = q.question;
	document.getElementById("A").textContent = q.choiceA;
	document.getElementById("B").textContent = q.choiceB;
	document.getElementById("C").textContent = q.choiceC;
	document.getElementById("D").textContent = q.choiceD;

	right.hidden = true;
	wrong.hidden = true;
}

startButton.addEventListener("click", startGame); 

function startGame() {
	console.log("game started");
	intro.style.display = "none";
	questionDisplay();
	game.style.display = "block";
	startTimer()
	timerCount = 60;
	right.hidden = true;
	wrong.hidden = true;
  }



  function answerVerify(answer){
	if(answer == questions[currentQuestion].correct){
		console.log("correct!");
		correctAnswer();
		
	}else{
		console.log("wrong!");
		timerCount = timerCount - 10;
		incorrectAnswer();
		
	}


	if(currentQuestion < prevQuestion){
		
		currentQuestion++;
		setTimeout (questionDisplay, 1000);

	}else if (currentQuestion == prevQuestion)  {
		
		clearInterval(timer);
		console.log("all done!");
		var score = timerCount
		console.log("your score is: " + score);
		setTimeout (gameWin, 1000);
		
		
	} else {

		clearInterval(timer);
		
	}

	
}

function correctAnswer() {
	right.hidden = false;
}

function incorrectAnswer() {
	wrong.hidden = false;
	
}

function gameWin () {
	right.hidden = true;
	wrong.hidden = true;
	game.style.display = "none";
	outro.style.display = "block";


}


function startTimer() { 
	timer = setInterval(function() {
	  timerCount--;
	  timerElement.textContent = timerCount;
	  if (timerCount >= 0) {


		
	  }
	  
	  if (timerCount === 0) {
		clearInterval(timer);
		gameLose()

		
	  }
	}, 1000);
  }



