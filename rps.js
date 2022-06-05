//? Initialize variables
const options = [ 'rock', 'paper', 'scissors' ];
let playerChoice;
let cpuChoice;
let cpuScore = 0;
let playerScore = 0;

const cpuSelection = () => {
	return options[Math.floor(Math.random() * options.length)];
};
//TODO Add a stop after 5 games
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
	button.addEventListener('click', function() {
		let playerChoice = button.id;
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
					break;
				//? Case for CPU
				case 'scissors rock':
				case 'rock paper':
				case 'paper scissors':
					cpuScore++;
					break;

				case 'rock rock':
				case 'paper paper':
				case 'scissors scissors':
					break;

				default:
					'Invalid choice';
			}

			const player = document.querySelector('.player');
			const computer = document.querySelector('.computer');
			const winner = document.querySelector('.winner');

			player.textContent = `${playerChoice} \n`;
			player.textContent += `${playerScore}`;

			computer.textContent = `${cpuChoice} \n`;
			computer.textContent += `${cpuScore}`;

			if (playerScore === 5) {
				winner.textContent = 'You Win!';
			} else if (cpuScore === 5) {
				winner.textContent = 'You Lose!';
			}
		}
	});
});
