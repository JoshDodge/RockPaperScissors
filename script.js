//Set reused vars.
let playerSelection = prompt('Please choose rock, paper or scissors:');
computerSelection = computerPlay();

//Set a function called computer play. This will randomly return rock, paper or scissors
function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  if(computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//Function to play a round.
function playRound() {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    alert('Its a tie');
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    alert('You lost! Paper beats rock.');
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    alert('You won! Rock beats scissors.');
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    alert('You won! Paper beats rock.');
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    alert('It is a tie.');
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    alert('You lost. Scissors beats paper')
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    alert('You lost. Rock beats scissors');
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    alert('You won. Scissors beats paper');
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    alert('It is a tie.')
  } else {
    alert('You are a dumbass. Enter rock, paper or scissors');
  }
}

playRound();