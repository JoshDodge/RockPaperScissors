//Set a function called computer play. This will randomly return rock, paper or scissors
let computerChoice = 0

function computerPlay() {
  computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    console.log("Rock");
  } else if (computerChoice === 1) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}
