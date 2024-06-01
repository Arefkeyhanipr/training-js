const randomNum = Math.ceil(Math.random() * 100);

const validateNumber = (value) => {
  if (isNaN(value)) {
    return `You can only enter Numbers`;
  } else if (+value < 1 || +value > 100) {
    return `Enter a number between 1 and 100,Not more not less`;
  }
};
console.log(randomNum);

const checkGuess = (guess) => {
  if (guess === randomNum) {
    console.log(`You guessed right!`);
  } else if (guess > randomNum) {
    console.log(
      `Your guess (${guess}) was higher then The number, Try again! `
    );
  } else {
    console.log(`Your guess (${guess}) was lower then The number, Try again! `);
  }
};

const play = () => {
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
