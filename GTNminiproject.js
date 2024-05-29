const randomNum = Math.ceil(Math.random() * 100);

console.log(randomNum);

const play = () => {
  let num = prompt(`Choose a number between 1 & 100`);
  if (num === null || num === "") {
    console.log(`Enter a Number to play!`);
  }
};
play();
