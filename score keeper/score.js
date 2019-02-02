var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1display = document.getElementById("first");
var p2display = document.getElementById("second");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1score++;
		if(p1score === winningScore){
			p1display.classList.add("winner");
			gameOver=true;
		}
		p1display.textContent=p1score;
	}
});

p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2score++;
		if(p2score === winningScore){
			p2display.classList.add("winner");
			gameOver=true;
		}
		p2display.textContent=p2score;
	}
});

resetButton.addEventListener("click",function(){
	reset();
});

function reset(){
	p1display.textContent=0;
	p2display.textContent=0;
	p1score=0;
	p2score=0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset()
});