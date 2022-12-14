// Define options, possible outcomes and default scores

let choices = ["rock", "paper", "scissors"];
let rematchOptions = ["yes", "no"];
let computerScore = 0;
let playerScore = 0;
let playerWin = "You win, Computer loses.";
let computerWin = "Computer wins, you lose."
let roundNumber = 0;

// Round Function with conditional statements and corresponding score changes

function playRound(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        roundNumber++;
            return (`|ROUND ${roundNumber}| It's a draw, next round!
            Player:${playerScore} Computer:${computerScore}`);
    } else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            playerScore++;
            roundNumber++;
            return (`|ROUND: ${roundNumber}| ${playerWin}
            Paper beats Rock!
            Player:${playerScore} Computer:${computerScore}`);
        } else {
            computerScore++
            roundNumber++;
            return (`|ROUND: ${roundNumber}| ${computerWin}
            Rock beats Scissors!
            Player:${playerScore} Computer:${computerScore}`);
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            computerScore++
            roundNumber++;
            return (`|ROUND: ${roundNumber}| ${computerWin} 
            Paper beats Rock!
            Player:${playerScore} Computer:${computerScore}`);
        } else {
            playerScore++;
            roundNumber++;
            return (`|ROUND: ${roundNumber}| ${playerWin}
            Scissors beats Paper!
            Player:${playerScore} Computer:${computerScore}`);
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            playerScore++;
            roundNumber++;
            return (`|ROUND: ${roundNumber}| ${playerWin} 
            Rock beats Scissors! 
            Player:${playerScore} Computer:${computerScore}`);
        } else {
            computerScore++
            roundNumber++;
            return (`|ROUND: ${roundNumber}| ${computerWin} 
            Scissors beats Paper! 
            Player:${playerScore} Computer:${computerScore}`);
        }
    }
}

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
            i--;
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
    console.log(`|GAME OVER| Final score is Player:${playerScore} Computer:${computerScore} `);

    if (playerScore === computerScore) {
        console.log("It's a DRAW ????!");
    } else if (playerScore < computerScore) {
        console.log("COMPUTER won the game!????");
    } else {
        console.log("YOU won the game????");
    }


 } //Game function end || rematch === null 

//Rematch offer
    function rematchOffer() {
    let rematch = prompt("Would you like a rematch? Yes/No");
    rematch = rematch.toLowerCase();
    rematch = rematch.trim();
    if (!rematchOptions.includes(rematch)) {
        rematchOffer();
        return;
    } else if (rematch === "yes") {
        game();
        return;
    } else if (rematch === "no") {
        alert("Thanks for playing");
    }
}

// 1st function call to begin the game
game();
rematchOffer();

