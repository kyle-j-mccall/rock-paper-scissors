
// begin with a funtion call computerPlay
// function should randomly return either rock paper or scissors
// this function will be used to make the computers play
function computerPlay() {
    moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * moves.length)]
}

function playerMove() {
    let message = "choose rock, paper or scissors";
    result = prompt(message);
    return result;
}



//write a function that plays a single round of of rock paper scissors. this function should take two parameters (the playerSelection and computerSelection) and then return a string that declares the winner of the round. 

let playerScore = 0;
let computerScore = 0;
let winMessage = "Game over! You win!";
let loseMessage = "Game over! You lost!";

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        playerScore++ && computerScore++
        return "tie";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock")) {
        playerScore++
        return "You scored!";
       } else if ((playerSelection == "paper" && computerSelection == "scissors") || 
    (playerSelection == "scissors" & computerSelection == "rock") || 
    (playerSelection == "rock" && computerSelection == "paper")) {
        computerScore++
        return "Computer Scored!";
    } 
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound(playerMove(), computerPlay()));
    } if (computerScore > playerScore) {
        console.log(loseMessage);
    } else if (computerScore < playerScore) {
        console.log(winMessage);
    }
}



console.log(game());




// make player selection case insensitive