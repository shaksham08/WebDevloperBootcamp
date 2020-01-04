var numofsquares = 6;
var colors = [];

var pickedColor;
var square = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetbutton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	setupModeButtons();
	setupSquare();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			if (this.textContent === 'Easy') {
				numofsquares = 3;
			} else {
				numofsquares = 6;
			}
			reset();
			//figure out how many squares to show
			//pick a colours
		});
	}
}

function setupSquare() {
	for (var i = 0; i < square.length; i++) {
		//add click listeners to the squares
		square[i].addEventListener('click', function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetbutton.textContent = 'Play Again?';
				changeColor(clickedColor);
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

function reset() {
	colors = generateRandomColors(numofsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		if (colors[i]) {
			square[i].style.display = 'block';
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = 'none';
		}
		square[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
	resetbutton.textContent = 'NEW COLOR';
}

resetbutton.addEventListener('click', function() {
	reset();
});

colorDisplay.textContent = pickedColor;

function changeColor(color) {
	for (var i = 0; i < colors.length; i++) {
		square[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	//pick a red from  0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
