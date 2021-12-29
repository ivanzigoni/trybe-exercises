const readline = require('readline-sync');

const numCheck = () => {
  const num = readline.questionInt('Guess a number between 1 and 10 ');
  const getRandomNum = () => Math.floor(Math.random() * 10);

  const randomNum = getRandomNum();
  if (num === randomNum) {
    console.log('You got it! :D');
  } else {
    console.log(`Missed it. The number was ${randomNum}.`);
  }

  const question = readline.question('Want to play again? y/n ');
  if (question === 'y' || question === '') {
    numCheck()
  } else {
    return;
  }
}

numCheck();