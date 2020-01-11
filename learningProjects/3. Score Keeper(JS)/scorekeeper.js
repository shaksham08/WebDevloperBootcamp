var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var input = document.getElementById("input");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;


//Getting the input of maximum score
input.addEventListener("change", function () {
    winningScore = Number(input.value);
    document.getElementById("count").innerHTML = winningScore;


});

// Fucntion to Count Score for Player 1
p1Button.addEventListener("click", function () {
    if (p1Score < winningScore && p2Score < winningScore) {
        p1Score = p1Score + 1;
        document.getElementById("rslt1").innerHTML = p1Score;
        if (p1Score === winningScore) {
            document.getElementById("win1").style.display = "block";
            document.getElementById("rslt1").style.color = "green";
            document.getElementById("rslt2").style.color = "red";


        }
    }

})


// Fucntion to Count Score for Player 2
p2Button.addEventListener("click", function () {
    if (p2Score < winningScore && p1Score < winningScore) {
        p2Score = p2Score + 1;
        document.getElementById("rslt2").innerHTML = p2Score;
        if (p2Score === winningScore) {
            document.getElementById("win2").style.display = "block";
            document.getElementById("rslt1").style.color = "red";
            document.getElementById("rslt2").style.color = "green";
        }
    }
})

// Fucntion to Reset Everything
resetButton.addEventListener("click", function () {
    p2Score = 0;
    p1Score = 0;
    document.getElementById("rslt2").innerHTML = 0;
    document.getElementById("rslt1").innerHTML = 0;

    document.getElementById("win1").style.display = "none";
    document.getElementById("win2").style.display = "none";
    document.getElementById("rslt1").style.color = "white";
    document.getElementById("rslt2").style.color = "white";

})