const randomNum = Math.ceil(Math.random() * 100);
let numberOfGuess = 0;
const validateNumber = (value) => {
  if (isNaN(value)) {
    return `You can only enter Numbers`;
  } else if (+value < 1 || +value > 100) {
    return `Enter a number between 1 and 100,Not more not less`;
  }
};
console.log(randomNum);

const checkGuess = (guess) => {
  numberOfGuess++;
  console.log(`guess number ${numberOfGuess} was ${guess}`);
  if (guess === randomNum) {
    console.log(`You guessed right!`);
    alert(`You guessed right!`);
    document.write(`The Number was ${randomNum}`);
  } else if (guess > randomNum) {
    console.log(
      `Your guess (${guess}) was higher then The number, Try again! `
    );
    play();
  } else {
    console.log(`Your guess (${guess}) was lower then The number, Try again! `);
    play();
  }
};

const play = () => {
  if (numberOfGuess === 10) {
    console.log(`GAME OVER ! you ran out of guess`);
    alert(`GAME OVER ! you ran out of guess`);
    return;
  }

  let num = prompt(`Choose a number between 1 & 100`);
  if (num === null) {
    console.log(`You canceled the game!`);
  } else if (num === "") {
    console.log(`enter a number to play`);
  }
  const validation = validateNumber(num);
  if (validation) {
    console.log(validation);
    return play();
  }
  checkGuess(+num);
};
play();
