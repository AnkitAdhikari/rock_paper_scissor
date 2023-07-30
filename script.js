function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3 + 1);
  switch (rand) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissor";
  }
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    computerScore++;
    playerScore++;
    return "It's a tie!";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  }
  if (playerSelection === "rock" && computerSelection === "scissor") {
    playerScore++;
    return "You Win! Rock beats Scissor";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You Win! Paper beats rock";
  }
  if (playerSelection === "paper" && computerSelection === "scissor") {
    computerScore++;
    return "You Lose! Scissor beats Paper";
  }
  if (playerSelection === "scissor" && computerSelection === "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissor";
  }
  if (playerSelection === "scrissor" && computerSelection === "paper") {
    playerScore++;
    return "You Win! Pcissor beats Paper";
  }
}

for (let index = 0; index < 5; index++) {
  const playerSelection = prompt("Enter Rock, Paper or Scissor").toLowerCase();
  console.log(playRound(playerSelection, getComputerChoice()));
}

if (computerScore === playerScore) {
  console.log("It's a Draw");
}
if (computerScore > playerScore) {
  console.log("Computer Won");
} else if (computerScore < playerScore) {
  console.log("You won");
}
