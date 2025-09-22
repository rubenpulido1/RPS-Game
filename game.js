let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 100);
  let choice = "";
  if (num <= 33) {
    choice = "rock";
  } else if (num > 33 && num <= 66) {
    choice = "scissors";
  } else {
    choice = "paper";
  }
  return choice;
}

/*
  window.prompt() instructs the browser to display a dialog box that prompts the user for input.
  The prompt() method returns the input value if the user clicks "ok", otherwise it returns null.
*/
function getHumanChoice() {
  let message = prompt("Select Rock, Paper, or Scissors");
  return message.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
  console.log(computerChoice, humanChoice);
  if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore += 1;
  }  else {
    humanScore += 1;
  }
}

function playGame() {
  let gamesPlayed = 0;
  let totalGames = 5;
  while (gamesPlayed < totalGames) {
    playRound(getComputerChoice(), getHumanChoice());
    gamesPlayed++;
  };
  if (computerScore > humanScore) {
    console.log(`The computer wins with ${computerScore} points to your ${humanScore}`);
  } else if (computerScore == humanScore){
    console.log("It's a tie!")
  } else {
    console.log("You win!")
  }
}

playGame();