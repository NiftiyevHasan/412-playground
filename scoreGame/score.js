var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#resetButton");
var p1Display = document.querySelector("#p1ScoreDisplay");
var p2Display = document.querySelector("#p2ScoreDisplay");
var numInput = document.querySelector("input");
var targetScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var targetScore = 5;
var gameOver = false;


p1Button.addEventListener("click", function(){
	playerAction(p1Score,p1Display);
});

p2Button.addEventListener("click", function(){
	playerAction(p2Score,p2Display);
});

function playerAction(playerScore, playerDisplay){
if (!gameOver){
playerScore++;
if (p1Score == targetScore){
gameOver = true;
playerDisplay.style.color = "green";
}
playerDisplay.textContent = p1Score;
}
}

p1Button.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
		if (p1Score == targetScore){
			gameOver = true;
			p1Display.style.color = "green";
		}
		p1Display.textContent = p1Score;
	}
});


p2Button.addEventListener("click", function(){
	if (!gameOver){
		p2Score++;
		if (p2Score == targetScore){
			gameOver = true;
			p2Display.style.color = "green";
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();

});

function reset(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.style.color = "black";
	p2Display.style.color = "black";
}

numInput.addEventListener("change", function(){
	targetScore = this.value;
	targetScoreDisplay.textContent = targetScore;
	reset();

});





