'use strict';

/*
console.log(document.querySelector('.messageText').textContent);

document.querySelector('.messageText').textContent = 'Correct Number';

console.log(document.querySelector('.messageText').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/
const body = document.querySelector('body');
const messageText = document.querySelector('.message');
const secretNumberText = document.querySelector('.number');
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const guessInput = document.querySelector('.guess');

let secretNumber = getRandomNumber();
let highscore = 0;
let score = 20;

secretNumberText.textContent = secretNumber;

checkButton.addEventListener('click', () => {
	const guess = Number(guessInput.value);

	if (score === 0) {
		return;
	}

	if (!guess) {
		messageText.textContent = 'No number';
		
	} else if (guess === secretNumber) {
		messageText.textContent = 'Correct number';
		highscoreText.textContent = score;
		secretNumberText.textContent = secretNumber;

		body.style.backgroundColor = '#60b347';
		secretNumberText.style.width = '30rem';

		if (score > highscore) {
			highscore = score;
			highscoreText.textContent = score;
		}

	} else if (guess > secretNumber) {
		scoreText.textContent = --score;
		messageText.textContent = score === 0 ? 'Lose' : 'Too high';

	} else if (guess < secretNumber) {
		scoreText.textContent = --score;
		messageText.textContent = score === 0 ? 'Lose' : 'Too low';
	}
});

againButton.addEventListener('click', () => {
	secretNumber = getRandomNumber();
	score = 20;

	scoreText.textContent = 20;
	secretNumberText.textContent = '?';
	guessInput.value = '';
});

function getRandomNumber() {
	return Math.trunc(Math.random() * 20) + 1;
}