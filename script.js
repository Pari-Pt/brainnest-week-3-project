// Define options, possible outcomes and default scores

let choices = ["rock", "paper", "scissors"];
let rematchOptions = ["yes", "no"];
let computerScore = 0;
let playerScore = 0;
let playerWin = "You win, Computer loses.";
let computerWin = "Computer wins, you lose."


// Game Function, involving a loop for repetition (for 5 rounds)

function game() {
    //Greeting and instructions
    alert("Welcome to Pari's Game of Rock-Paper-Scissors! To play, simply choose from rock/paper/scissors. Good luck!");
    //Loop start
    for (let i=0; i<5; i++) { 
        let playerSelection = prompt("Choose one: rock/paper/scissors");
        playerSelection = playerSelection.toLowerCase(); 
        playerSelection = playerSelection.trim();
        if (!choices.includes(playerSelection) || playerSelection == null) {
            alert("Please only select from the choices: rock, paper or scissors.");
        } else {
            let computerSelection = choices[Math.floor(Math.random() * choices.length)]; 
            //Math.random will produce a number >= 0 but < 1
            //This number is then multiplied by the length of the choices array (3)
            //This number is then "floored"/rounded down to the nearest integer
            console.log(`Computer's move: ${computerSelection} vs. Player's move: ${playerSelection}`);
            //Calls the playRound function from inside game function while staying within loop 
            console.log(playRound(computerSelection, playerSelection));
        }
    } //Loop end

    //Score analysis
    console.log(`The final score is Player:${playerScore} Computer:${computerScore} `);
    if (playerScore === computerScore) {
        console.log("It's a DRAW 🤝!");
    } else if (playerScore < computerScore) {
        console.log("COMPUTER won the game!🏆");
    } else {
        console.log("YOU won the game");
    }
    //Rematch offer
    let rematch = prompt("Would you like a rematch? Yes/No");
    rematch = rematch.toLowerCase();
    rematch = rematch.trim();
    if (rematchChoices.includes(rematch)) {
        game();
    } else {
        alert("Please input either Yes or No")
        rematch = prompt("Would you like a rematch? Yes/No");
    }

 } //Game function end


// Round Function with conditional statements and corresponding score changes

function playRound(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
            return (`It's a draw, next round! Player:${playerScore} Computer:${computerScore}`);
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            playerScore++;
            return (`Paper beats Rock! ${playerWin} Player:${playerScore} Computer:${computerScore}`);
        } else {
            computerScore++
            return (`Rock beats Scissors! ${computerWin} Player:${playerScore} Computer:${computerScore}`);
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            computerScore++
            return (`Paper beats Rock! ${computerWin} Player:${playerScore} Computer:${computerScore}`);
        } else {
            playerScore++;
            return (`Scissors beats Paper! ${playerWin} Player:${playerScore} Computer:${computerScore}`);
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            playerScore++;
            return (`Rock beats Scissors! ${playerWin} Player:${playerScore} Computer:${computerScore}`);
        } else {
            computerScore++
            return (`Scissors beats Paper! ${computerWin} Player:${playerScore} Computer:${computerScore}`);
        }
    }
}

// 1st function call to begin the game
game();

