var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");

dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!🎉";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🎉";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!🎲";
}