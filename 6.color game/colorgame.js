var colors = generateRandomColors(6);
var square = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetbutton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function() {
	hardBtn.classList.remove('selected');
	easyBtn.classList.add('selected');
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		if (colors[i]) {
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = 'none';
		}
	}
});
hardBtn.addEventListener('click', function() {
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];

		square[i].style.display = 'block';
	}
});

resetbutton.addEventListener('click', function() {
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = '#232323';
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
	//add initital colors to the squares
	square[i].style.backgroundColor = colors[i];

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
