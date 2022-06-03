console.log('Lets Play Rock - Paper - Scissors!');
console.log('Enter "playGame()" to play');
console.log('----------------------------------');

//? Initialize variables
const options = [ 'rock', 'paper', 'scissors' ];
let playerChoice;
let cpuChoice;

const cpuSelection = () => {
	return options[Math.floor(Math.random() * options.length)];
};

//? Run the game
function playGame() {
	let cpuScore = 0;
	let playerScore = 0;
	let proceed = 0;
	let cpuChoice = cpuSelection();

	//? Loop while input is incorrect
	while (proceed === 0) {
		playerChoice = prompt('Rock, Paper, Scissors?').toLowerCase().trim();
		if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
			proceed++;
		}
	}

	//? Determine outcome of one round
	function playRound(playerChoice, cpuChoice) {
		let choices = playerChoice + ' ' + cpuChoice;
		switch (choices) {
			case 'rock scissors':
			case 'paper rock':
			case 'scissors paper':
				playerScore++;
				return 'You Win!';

			case 'scissors rock':
			case 'rock paper':
			case 'paper scissors':
				cpuScore++;
				return 'You Lose!';

			case 'rock rock':
			case 'paper paper':
			case 'scissors scissors':
				return 'Tie Game!';

			default:
				'Invalid choice';
		}
	}

	let winner = playRound(playerChoice, cpuChoice);
	console.log('----------------------------------');
	console.log(winner);
	console.log(`You: ${playerChoice} || CPU ${cpuChoice}`);
	proceed--;
}
