//Alert will give a pop up and says something,prompt will give an empty input so you can awnser
// alert("This is an alert");
// const value = prompt();
// console.log(value);

const choices = ["rock", "paper", "scissors"];

const playerChoice = prompt("choose rock,paper,scissors");

if (
  playerChoice === "rock" ||
  playerChoice === "paper" ||
  playerChoice === "scissors"
) {
  console.log(`You choose ${playerChoice}`);
} else {
  console.log(`You cheated !!! only use rock or paper or scissors !`);
}

const randomNum = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomNum];

console.log(`computer chooses ${computerChoice}`);
