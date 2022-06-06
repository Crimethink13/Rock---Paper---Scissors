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
const final1 = document.querySelector('.final1');
const final2 = document.querySelector('.final2');
const final3 = document.querySelector('.final3');

const cpuSelection = () => {
	return options[Math.floor(Math.random() * options.length)];
};

winner.classList.add('choose');
winner.textContent = 'Choose Your Weapon';

//TODO Add a stop after 5 games
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
	button.addEventListener('click', function() {
		let playerChoice = button.id;
		winner.classList.remove('win', 'lose', 'tie', 'choose');
		outcome.classList.remove('win', 'lose', 'tie');
		playGame();

		//? Run the game
		function playGame() {
			let cpuChoice = cpuSelection();
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
			cpuImage();
			playerImage();

			function cpuImage() {
				const image = document.querySelector('#cpu-choice');
				if (cpuChoice === 'rock') {
					image.src = 'imgs/rock.png';
				} else if (cpuChoice === 'paper') {
					image.src = 'imgs/paper.png';
				} else if (cpuChoice === 'scissors') {
					image.src = 'imgs/scissors.png';
				}
			}

			function playerImage() {
				const image = document.querySelector('#player-choice');
				if (playerChoice === 'rock') {
					image.src = 'imgs/rock.png';
				} else if (playerChoice === 'paper') {
					image.src = 'imgs/paper.png';
				} else if (playerChoice === 'scissors') {
					image.src = 'imgs/scissors.png';
				}
			}

			if (playerScore === 5) {
				winner.remove();
				final1.textContent = 'You ';
				final2.textContent = 'Are ';
				final3.textContent = 'Winner!';
			} else if (cpuScore === 5) {
				winner.remove();
				final1.textContent = 'You ';
				final2.textContent = 'Are ';
				final3.textContent = 'Loser!';
			}
		}
	});
});
