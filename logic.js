function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
// function getHumanChoice() {
//   let humanChoice = prompt("Enter Rock, Paper or Scissors");
//   return humanChoice.toLowerCase();
// }

const result = document.querySelector("#results");
const round_results = document.querySelector("#round_results");
// round_results.id = "round_results";

let humanScore = 0;
let computerScore = 0;
let playCount = 0;

function playRound(humanChoice, computerChoice) {
  if(playCount == 0){
    round_results.innerHTML = "";
  }
  if (humanChoice === computerChoice) {
    const current_round = document.createElement("li");
    current_round.textContent = `It's a tie! Both played ${humanChoice}`;
    round_results.appendChild(current_round);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    const current_round = document.createElement("li");
    current_round.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    round_results.appendChild(current_round);
    humanScore++;
  } else {
    const current_round = document.createElement("li");
    current_round.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
    round_results.appendChild(current_round);
    computerScore++;
  }
  playCount++;
  if (playCount === 5) {
    playGame();
    playCount = 0;
    humanScore = 0;
    computerScore = 0;
  }
}

function playGame() {
  if (humanScore === computerScore) {
    const current_round = document.createElement("li");
    current_round.textContent =
      "Tie game!" +
      `The score was You: ${humanScore} and Computer: ${computerScore}`;
      round_results.appendChild(current_round);
  } else if (humanScore > computerScore) {
    const current_round = document.createElement("li");
    current_round.textContent=
      "You win the game!!!" +
        `The score was You: ${humanScore} and Computer: ${computerScore}`;
        round_results.appendChild(current_round);
  } else {
    const current_round = document.createElement("li");
    current_round.textContent = 
      "Computer wins the game!!!" +
        `The score was You: ${humanScore} and Computer: ${computerScore}`;
    round_results.appendChild(current_round);
  }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
