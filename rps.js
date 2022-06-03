console.log('Lets Play Rock - Paper - Scissors!');

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

	//? Print results of one round
	let winner = playRound(playerChoice, cpuChoice);
	console.log('----------------------------------');
	console.log(winner);
	console.log(`You picked: ${playerChoice} || CPU picked: ${cpuChoice}`);
	console.log(`Your score: ${playerScore} || CPU score: ${cpuScore}`);
	proceed--;

	//? 5 game loop finishes here

	//? Print final results of 5 rounds
	console.log('----------------------------------');
	console.log(`FINAL SCORES - You: ${playerScore} || CPU: ${cpuScore}`);

	if (playerScore > cpuScore) {
		console.log(`Nice! ${playerScore} games won!`);
		return 'You win!';
	} else if (playerScore < cpuScore) {
		console.log(`Bad luck! CPU won ${cpuScore} games!`);
		return 'You lose!';
	} else if (playerScore === cpuScore) {
		console.log(`You are both evenly matched with ${playerScore} games tied!`);
		return 'Tie game!';
	}
	console.log('Enter "playRound()" to continue!');
}

playGame();
