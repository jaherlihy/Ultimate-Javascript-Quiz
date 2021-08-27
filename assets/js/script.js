var intro = document.getElementById("intro-title-card");
var game = document.getElementById("game");
var startButton = document.getElementById("begin");
var scoreBtn = document.getElementById("high-scores-btn");
var outro = document.getElementById("outro");

var form = document.getElementById("outro-container");

var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var right = document.getElementById("correct");
var wrong = document.getElementById("incorrect");

var timerElement = document.querySelector(".timer-count");

var scrbrdForm = document.getElementById("score-board-entry");
var textBox = document.getElementById("text-box");
var ol = document.getElementById("ol");
var li = document.createElement("li");
var submitBtn = document.getElementById("submit-btn");
var clearBtn = document.getElementById("clear-btn");
var score = "";

var scoreBoard = document.getElementById("score-board");
// Check for saved scores
var savedInitals = localStorage.getItem("initialItems");

// Updates the scoreboard if there are any saved scores
if (savedInitals) {
	ol.textContent = savedInitals;
}

var questions = [
	{
		question: "Which global object is held by square brackets?",
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
		choiceA: "Math.round( )",
		choiceB: "Math.ceil( )",
		choiceC: "Math.floor( )",
		choiceD: "Math.abs( )",
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
	console.log("game has started");
	questionDisplay();
	startTimer()
	timerCount = 60;
	right.hidden = true;
	wrong.hidden = true;
	scoreBtn.disable = true;
	game.style.display = "block";
	intro.style.display = "none";
	outro.style.display = "none";
	scoreBoard.style.display = "none";
}


  //VERIFY ANSWER HERE
  function answerVerify(answer){
	if(answer == questions[currentQuestion].correct){
		console.log("correct!");
		correctAnswer();
	}else{
		console.log("wrong!");
		timerCount = timerCount - 10;
		incorrectAnswer();
	}

	//this uses the indexes of questions object keys to cycle increment through quiz cards
	if(currentQuestion < prevQuestion){
		currentQuestion++;
		setTimeout (questionDisplay, 1000);
		//if the indexes are the same it stops the game
	}else if (currentQuestion == prevQuestion)  {
		clearInterval(timer);
		console.log("all done!");
		score = timerCount
		console.log("your score is: " + score);
		setTimeout (gameWin, 1000);
	//safety feature to clear the timer
	} else {
		clearInterval(timer);	
	}
}


//Displays feedback correct/incorrect text at bottom of card when user clicks mult. choice answer
function correctAnswer() {
	right.hidden = false;
}

function incorrectAnswer() {
	wrong.hidden = false;
}


//brings user to scoreboard entry form
function gameWin () {
	right.hidden = true;
	wrong.hidden = true;
	scoreBtn.disable = true;
	game.style.display = "none";
	outro.style.display = "block";
	scoreBoard.style.display = "none";
}


//Toggles between intro card and the scoreboard
function scoreClick(){
	console.log("high score click!");

	if (intro.style.display == "block"){
		
		intro.style.display = "none";
		scoreBoard.style.display = "block";
		scoreBtn.textContent = "Return";

	} else if (intro.style.display = "none"){ 

		intro.style.display = "block";
		scoreBoard.style.display = "none";
		scoreBtn.textContent = "High Scores";
	}
}




//This is the entry form for the player to enter their name after winning a round
scrbrdForm.addEventListener("submit", function (event) {

		// stops the form from submitting
		event.preventDefault();

		// Ignore if the name is too long or short
		if (textBox.value.length < 1 || textBox.value.length > 10) return;

		ol.appendChild(li)
		// Add name to the scoreboard
		li.textContent += textBox.value + " - " + score;

		

		// Clear input after submitting
		textBox.value = "";

		// Save the list to localStorage
		localStorage.setItem("initialsItems", textBox.textContent);

		//prevent multiple entries by disabling button
		submitBtn.disable = true;

		outro.style.display = "none";

		scoreBoard.style.display = "block";

		//changes nav button text to return when viewing high scores after form submission 
		scoreBtn.textContent = "Return";

		console.log ("player score submitted!");

	}, false);



//Clears user names and scores from local memory
function scoreClear() {
console.log("scoreboard cleared!");

}



//This is the game timer
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