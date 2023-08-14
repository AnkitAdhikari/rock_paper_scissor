const btns = document.querySelectorAll(".option");
const gameStatus = document.querySelector(".status");
const playerScoreEl = document.querySelector(".player-scoreEl");
const computerScoreEl = document.querySelector(".computer-scoreEl");
const currentRoundEl = document.querySelector(".current-round");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");

const sign = {
  rock: "🤜",
  paper: "🫳",
  scissor: "✌️",
};

let computerScore = 0;
let playerScore = 0;
let currentRound = 1;

btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    const gameInfo = playRound(this.dataset.value, getComputerChoice());
    console.log(gameInfo);
    gameStatus.textContent = gameInfo;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    currentRoundEl.textContent = currentRound;

    if (currentRound === 5) {
      if (computerScore === playerScore) {
        gameStatus.textContent = "It's a Draw";
      }
      if (computerScore > playerScore) {
        gameStatus.textContent = "Computer Won";
      } else if (computerScore < playerScore) {
        gameStatus.textContent = "You won";
      }
    }
    currentRound++;
  })
);

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

function playRound(playerSelection, computerSelection) {
  playerChoice.textContent = sign[`${playerSelection}`];
  computerChoice.textContent = sign[`${computerSelection}`];
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
  if (playerSelection === "scissor" && computerSelection === "paper") {
    playerScore++;
    return "You Win! Pcissor beats Paper";
  }
}
