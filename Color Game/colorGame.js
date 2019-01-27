var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons
	setupModeButtons();
	//set square colors
	setupSquares();

	reset();
}

function setupModeButtons(){
	for( var i=0;i < modeBtns.length;i++){
		modeBtns[i].addEventListener("click",function(){
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
		reset();
		});
	}
}

function setupSquares(){
	for(var i=0;i < squares.length;i++){
		squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "PLAY AGAIN?"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
		});
	}
}

function reset(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = " ";
	for(var i=0;i < squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display="none";
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
});

function changeColors(color){
	//loop through all square to change their color to correct color
	for(var i=0;i< squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0;i < num;i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	// pick a "red" from0-255
	var r = Math.floor(Math.random()*256);
	// pick a "green" from0-255
	var g = Math.floor(Math.random()*256);
	// pick a "blue" from0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}