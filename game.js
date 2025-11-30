const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () =>  {
    let humanChoice = button.textContent.toLocaleLowerCase();
    playGame(humanChoice);
  });
});

const scoreDiv = document.querySelector("#score");
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
  window.prompt() instructs the browser to display a dialog box that 
  prompts the user for input. The prompt() method returns the input value 
  if the user clicks "ok", otherwise it returns null.
  Syntax:
    prompt()
    prompt(message)
    prompt(message, defaultValue)
*/

function playRound(computerChoice, humanChoice) {
  if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore += 1;
  }  else {
    humanScore += 1;
  }

  scoreDiv.textContent = `Computer: ${computerChoice}             You: ${humanChoice} \n`;
  scoreDiv.textContent += `Score: ${computerScore}                 Score: ${humanScore}`;
}

function playGame(humanChoice) {
  playRound(getComputerChoice(), humanChoice);

  if (computerScore === 5) {
    scoreDiv.textContent += `\n The computer wins with ${computerScore} points to your ${humanScore}`;
  } else if (humanScore === 5){
    scoreDiv.textContent += "\n You win!"
  } 
}

