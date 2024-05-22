//Alert will give a pop up and says something,prompt will give an empty input so you can awnser
// alert("This is an alert");
// const value = prompt();
// console.log(value);

// we have only Rock & Paper & Scissors
const choices = ["rock", "paper", "scissors"];

// ask the player to choose RPS
const playerChoice = prompt("choose rock,paper,scissors");

//show the choice of the player
if (
  playerChoice === "rock" ||
  playerChoice === "paper" ||
  playerChoice === "scissors"
) {
  console.log(`You choose ${playerChoice}`);
} else {
  console.log(`You cheated !!! only use rock or paper or scissors !`);
}
//computer needs to choose RPS
const randomNum = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomNum];

//show the choice of computer
console.log(`computer chooses ${computerChoice}`);

//who win who lose

if (playerChoice === computerChoice) {
  console.log(`Its a tie`);
} else if (playerChoice === "rock") {
  if (computerChoice === "scissors") {
    console.log(`Yeaaaah you WIN !!!`);
  } else {
    console.log(`Damnnn.sorry dude you lost ! :(`);
  }
} else if (playerChoice === "paper") {
  if (computerChoice === "rock") {
    console.log(`Yeaaaah you WIN !!!`);
  } else {
    console.log(`Damnnn.sorry dude you lost ! :(`);
  }
} else {
  if (computerChoice === "paper") {
    console.log(`Yeaaaah you WIN !!!`);
  } else {
    console.log(`Damnnn.sorry dude you lost ! :(`);
  }
}
