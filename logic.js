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
function getHumanChoice() {
  let humanChoice = prompt("Enter Rock, Paper or Scissors");
  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both played ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let humanSelectiion = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelectiion, computerSelection);
  }
  if (humanScore === computerScore) {
    console.log(
      "Tie game!" +
        `The score was You: ${humanScore} and Computer: ${computerScore}`
    );
  } else if (humanScore > computerScore) {
    console.log(
      "You win the game!!!" +
        `The score was You: ${humanScore} and Computer: ${computerScore}`
    );
  } else {
    console.log(
      "Computer wins the game!!!" +
        `The score was You: ${humanScore} and Computer: ${computerScore}`
    );
  }
}

playGame();
