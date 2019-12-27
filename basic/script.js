var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var numinput = document.getElementById('maxnumber');
var maxshow = document.getElementById('max');

var p1score = 0;
var p2score = 0;
var gameover = false;
var max = 5;
p1.addEventListener('click', function() {
	if (!gameover) {
		p1score++;
		document.getElementById('p1score').innerHTML = p1score;
		if (p1score == max) {
			gameover = true;
			document.getElementById('p1score').classList.add('win');
			document.getElementById('p2score').classList.add('loose');
		}
	}
});

p2.addEventListener('click', function() {
	if (!gameover) {
		p2score++;
		document.getElementById('p2score').innerHTML = p2score;
		if (p2score == max) {
			gameover = true;
			document.getElementById('p2score').classList.add('win');
			document.getElementById('p1score').classList.add('loose');
		}
	}
});

document.getElementById('reset').addEventListener('click', function() {
	p1score = 0;
	p2score = 0;
	document.getElementById('p1score').innerHTML = p1score;
	document.getElementById('p2score').innerHTML = p2score;
	gameover = false;
	document.getElementById('p2score').classList.remove('win');
	document.getElementById('p1score').classList.remove('win');
	document.getElementById('p2score').classList.remove('loose');
	document.getElementById('p1score').classList.remove('loose');
});

numinput.addEventListener('change', function() {
	maxshow.innerHTML = numinput.value;
	max = numinput.value;
});
