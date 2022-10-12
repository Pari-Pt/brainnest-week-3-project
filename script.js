
// Define choices available within an array

let choices = ["rock", "paper", "scissors"];

//Math.random will produce a number >= 0 but < 1
//This number is then multiplied by the length of the choices array (3)
//This number is then "floored"/rounded down to the nearest integer

function computerPlay() {
    alert("Welcome to Pari's Rock, Paper Scissors game! To play, simply choose from rock/paper/scissors");
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer's move: ${computerSelection}`);
    return computerSelection;
}

 

function playRound(computerSelection, playerSelection) {
    for (i=1; i<5; i++) {
    if (computerSelection === playerSelection) {
            return ("It's a draw, let's play again!");
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            return ("Paper beats Rock! You win, Computer loses.");
        } else {
            return ("Rock beats Scissors! Computer wins, you lose.");
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            return ("Paper beats Rock! Computer wins, you lose.");
        } else {
            return ("Scissors beats Paper! You win, Computer loses");
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            return ("Rock beats Scissors! You win, Computer loses");
        } else {
            return ("Scissors beats Paper! Computer wins, you lose");
        }
    }
}
}


function game() {
    for(i=0; i<5; i++) {
        //console.log(playRound(computerSelection, playerSelection));
    }
}



let computerSelection = computerPlay();
let playerSelection = prompt("Choose one: rock/paper/scissors");
playerSelection = playerSelection.toLowerCase();
playerSelection = playerSelection.trim();
if (!choices.includes(playerSelection)) {
    alert("Please only select from the choices rock, paper or scissors.");
} else {
    console.log(`Player move: ${playerSelection}`);
    console.log(playRound(computerSelection, playerSelection));
}

//console.log(game());



//let playerSelection = prompt("Choose one: rock/paper/scissors");
//if (!choices.includes(playerSelection)) {
   // alert("Please only select from the choices rock, paper or scissors.");
//} else {
  //  console.log(`Player move: ${playerSelection}`);
//}


