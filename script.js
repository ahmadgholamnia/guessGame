'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = guess;
    displayMessage('Correct Number');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    ///////////
    ///////////
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else if (score < highScore) {
      highScore = highScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    ///////////
    ///////////

    //////
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      document.querySelector('.score').textContent = --score;
    } else {
      displayMessage = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
  //////
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  console.log(secretNumber);
});
