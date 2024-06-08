//Alert will give a pop up and says something,prompt will give an empty input so you can awnser
// alert("This is an alert");
// const value = prompt();
// console.log(value);

// we have only Rock & Paper & Scissors
const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

//who win who lose

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "its DRAW!";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

//The result of the game
const showResult = (result) => {
  if (result === "player") {
    console.log(`Congrats you won!`);
    playerScore++;
  } else if (result === "computer") {
    console.log(`Damn, you lost. :(`);
    computerScore++;
  } else {
    console.log(`It's a tie. Try again!`);
  }

  if (playerScore === 3) {
    console.log(`Congrats! you won the game!`);
    alert(`Congrats! YOU WON THE GAME,CHAMPION!
     Your score: ${playerScore}
     VS
    computer's score: ${computerScore}`);
  }
  if (computerScore === 3) {
    console.log(`GAME OVER ! YOU LOST THE GAME`);
    alert(`GAME OVER ! YOU LOST THE GAME :(
      Your score: ${playerScore}
     VS
    computer's score: ${computerScore}`);
  }

  console.log(`Your score: ${playerScore}`);
  console.log(`Computer's score: ${computerScore}`);
  console.log(`__________________________________`);
};

const play = () => {
  // ask the player to choose RPS

  const playerChoice = prompt("choose rock,paper,scissors").toLowerCase();
  if (playerScore === 3 || computerScore === 3) {
  }
  //show the choice of the player
  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`You choose ${playerChoice}`);
  } else {
    console.log(`You cheated !!! only use rock or paper or scissors !`);
    return;
  }
  //computer needs to choose RPS
  const randomNum = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNum];

  //show the choice of computer
  console.log(`computer chooses ${computerChoice}`);

  const gameResult = checkWinner(playerChoice, computerChoice);
  showResult(gameResult);
  if (playerScore === 3 || computerScore === 3) {
    console.log(`GAME OVER !`);
  } else {
    play();
  }
};

play();

//
//
//we are goint to move the code below to an function so if the player doesnt use RPS we can stop the game
//and we are cleaning the code so it gets better
//
// const playerChoice = prompt("choose rock,paper,scissors");

// if (
//   playerChoice === "rock" ||
//   playerChoice === "paper" ||
//   playerChoice === "scissors"
// ) {
//   console.log(`You choose ${playerChoice}`);
// } else {
//   console.log(`You cheated !!! only use rock or paper or scissors !`);
// }
// const randomNum = Math.floor(Math.random() * choices.length);
// const computerChoice = choices[randomNum];
// console.log(`computer chooses ${computerChoice}`);
// const result = checkWinner(playerChoice, computerChoice);
// console.log(result);
//
//
//
//
// the code below will go to a function and will be remaked with Ternary Operator *hint* ? :
//this will make the code cleaner and better
//
//who win who lose

// if (playerChoice === computerChoice) {
//   console.log(`Its a tie`);
// } else if (playerChoice === "rock") {
//   if (computerChoice === "scissors") {
//     console.log(`Yeaaaah you WIN !!!`);
//   } else {
//     console.log(`Damnnn.sorry dude you lost ! :(`);
//   }
// } else if (playerChoice === "paper") {
//   if (computerChoice === "rock") {
//     console.log(`Yeaaaah you WIN !!!`);
//   } else {
//     console.log(`Damnnn.sorry dude you lost ! :(`);
//   }
// } else {
//   if (computerChoice === "paper") {
//     console.log(`Yeaaaah you WIN !!!`);
//   } else {
//     console.log(`Damnnn.sorry dude you lost ! :(`);
//   }
// }
