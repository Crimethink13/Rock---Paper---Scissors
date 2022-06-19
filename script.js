//? Initialize variables
const options = [ 'rock', 'paper', 'scissors' ];
let playerChoice;
let cpuChoice;
let cpuScore = 0;
let playerScore = 0;

const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const winner = document.querySelector('.weapon');
const outcome = document.querySelector('.outcome');
const cpuImage = document.querySelector('#cpu-choice');
const playerImage = document.querySelector('#player-choice');
const final1 = document.querySelector('.final1');
const final2 = document.querySelector('.final2');
const final3 = document.querySelector('.final3');
const endMessage = document.querySelector('.popup-area');
const allContent = document.querySelector('.all-Content');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('.btn');

const cpuSelection = () => {
	return options[Math.floor(Math.random() * options.length)];
};

buttons.forEach((button) => {
	button.addEventListener('click', function() {
		let playerChoice = button.id;
		let cpuChoice = cpuSelection();
		winner.classList.remove('win', 'lose', 'tie', 'choose');
		outcome.classList.remove('win', 'lose', 'tie');
		playGame(playerChoice, cpuChoice);
		getImages(cpuChoice, playerChoice);
		console.log(playerScore);
	});
});

//? Run the game
function playGame(playerChoice, cpuChoice) {
	let choices = playerChoice + ' ' + cpuChoice;

	switch (choices) {
		//? Case for player
		case 'rock scissors':
		case 'paper rock':
		case 'scissors paper':
			playerScore++;
			outcome.classList.add('win');
			outcome.textContent = '>';
			winner.classList.add('win');
			winner.textContent = 'You Win!';
			break;
		//? Case for CPU
		case 'scissors rock':
		case 'rock paper':
		case 'paper scissors':
			cpuScore++;
			outcome.classList.add('lose');
			outcome.textContent = '<';
			winner.classList.add('lose');
			winner.textContent = 'You Lose!';
			break;

		case 'rock rock':
		case 'paper paper':
		case 'scissors scissors':
			outcome.classList.add('tie');
			outcome.textContent = '=';
			winner.classList.add('tie');
			winner.textContent = "It's a Tie!";
			break;

		default:
			'Invalid choice';
	}

	player.textContent = `${playerScore}`;
	computer.textContent = `${cpuScore}`;

	if (playerScore === 5) {
		final3.textContent = 'Winner!';
	} else if (cpuScore === 5) {
		final3.textContent = 'Loser!';
	}
	if (gameOver()) {
		endGameMessage();
	}
}

function getImages(cpuChoice, playerChoice) {
	if (cpuChoice === 'rock') {
		cpuImage.src = 'imgs/rock.png';
	} else if (cpuChoice === 'paper') {
		cpuImage.src = 'imgs/paper.png';
	} else if (cpuChoice === 'scissors') {
		cpuImage.src = 'imgs/scissors.png';
	}

	if (playerChoice === 'rock') {
		playerImage.src = 'imgs/rock.png';
	} else if (playerChoice === 'paper') {
		playerImage.src = 'imgs/paper.png';
	} else if (playerChoice === 'scissors') {
		playerImage.src = 'imgs/scissors.png';
	}
}

function gameOver() {
	return playerScore >= 5 || cpuScore >= 5;
}

function endGameMessage() {
	endMessage.showModal();
}
yes.addEventListener('click', function() {
	resetGame();
	endMessage.close();
});
no.addEventListener('click', function() {
	soreLoser();
	endMessage.close();
});

function resetGame() {
	cpuScore = 0;
	playerScore = 0;
	player.textContent = `${playerScore}`;
	computer.textContent = `${cpuScore}`;
	playerImage.src = 'imgs/question.png';
	cpuImage.src = 'imgs/question.png';
	rock.src = 'imgs/rock.png';
	paper.src = 'imgs/paper.png';
	scissors.src = 'imgs/scissors.png';
	winner.classList.add('choose');
	winner.classList.remove('win', 'lose', 'tie');
	outcome.classList.remove('win', 'lose', 'tie');
	winner.textContent = 'First to 5 Wins';
	outcome.textContent = '=';
}

function soreLoser() {
	cpuScore = 69;
	playerScore = 69;
	player.textContent = `${playerScore}`;
	computer.textContent = `${cpuScore}`;
	playerImage.src = 'imgs/middle.png';
	cpuImage.src = 'imgs/middle.png';
	rock.src = 'imgs/middle.png';
	paper.src = 'imgs/middle.png';
	scissors.src = 'imgs/middle.png';
	winner.classList.add('tie');
	winner.classList.remove('win', 'lose');
	outcome.classList.remove('win', 'lose', 'tie');
	winner.textContent = 'You Suck!';
	outcome.textContent = '=';
}
