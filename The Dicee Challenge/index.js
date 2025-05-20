// objects to latch to
let playerOneDice = document.querySelector("dice player1");
let playerTwoDice = document.querySelector("dice player2");
let imageOne = document.querySelector("img.img1");
let imageTwo = document.querySelector("img.img2");
let header = document.getElementsByTagName("h1")[0];

// dice rolls
let playerOneScore = Math.floor((Math.random() * 6) + 1);
let playerTwoScore = Math.floor((Math.random() * 6) + 1);
const rolls = 6;

// displays the scores in the console for debugging
console.log("Player One: " + playerOneScore + " Player Two: " + playerTwoScore);

// displays the appropriate dice face with the dice roll for player one
if (playerOneScore === 1)
    imageOne.setAttribute("src", "./images/dice1.png");
else if (playerOneScore === 2)
    imageOne.setAttribute("src", "./images/dice2.png");
else if (playerOneScore === 3) 
    imageOne.setAttribute("src", "./images/dice3.png");
else if (playerOneScore === 4)
    imageOne.setAttribute("src", "./images/dice4.png");
else if (playerOneScore === 5)
    imageOne.setAttribute("src", "./images/dice5.png");
else if (playerOneScore === 6)
    imageOne.setAttribute("src", "./images/dice6.png");

// displays the appropriate dice face with the dice roll for player two
if (playerTwoScore === 1)
    imageTwo.setAttribute("src", "./images/dice1.png");
else if (playerTwoScore === 2)
    imageTwo.setAttribute("src", "./images/dice2.png");
else if (playerTwoScore === 3) 
    imageTwo.setAttribute("src", "./images/dice3.png");
else if (playerTwoScore === 4)
    imageTwo.setAttribute("src", "./images/dice4.png");
else if (playerTwoScore === 5)
    imageTwo.setAttribute("src", "./images/dice5.png");
else if (playerTwoScore === 6)
    imageTwo.setAttribute("src", "./images/dice6.png");

// announces the winner 
if (playerOneScore > playerTwoScore) {
    header.innerHTML = "Player One is the Winner!";
}
else if (playerOneScore < playerTwoScore) {
    header.innerHTML = "Player Two is the Winner!";
}
else
    header.innerHTML = "It's a tie";

