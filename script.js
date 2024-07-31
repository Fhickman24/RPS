let wins = 0, ties = 0, losses = 0;

// Function to generate a random choice for the opponent
function generateOpponentChoice() {
    const choices = ['R', 'P', 'S'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to update counters based on game results
function updateCounters(result) {
    if (result === 'win') {
        wins++;
        document.getElementById('wins').textContent = wins;
    } else if (result === 'tie') {
        ties++;
        document.getElementById('ties').textContent = ties;
    } else if (result === 'loss') {
        losses++;
        document.getElementById('losses').textContent = losses;
    }
}

// Main function to play the game
function playGame() {
    const userChoice = prompt("Enter your choice: R for Rock, P for Paper, or S for Scissors").toUpperCase();
    if (!['R', 'P', 'S'].includes(userChoice)) {
        alert("Invalid choice. Please choose 'R' for Rock, 'P' for Paper, or 'S' for Scissors");
        return;
    }

    const opponentChoice = generateOpponentChoice();
    alert(`Opponent chose: ${opponentChoice}`);

    if (userChoice === opponentChoice) {
        alert("It's a tie!");
        updateCounters('tie');
    } else if (
        (userChoice === 'R' && opponentChoice === 'S') ||
        (userChoice === 'P' && opponentChoice === 'R') ||
        (userChoice === 'S' && opponentChoice === 'P')
    ) {
        alert("You win!");
        updateCounters('win');
    } else {
        alert("Opponent wins!");
        updateCounters('loss');
    }
}

// Function to start the game and handle replaying
function startGame(){
    let playAgain;
    do {
        playGame();
        playAgain = confirm("Do you want to play again?");
    }while (playAgain);
}
// Event listener for the play button
document.getElementById('play-btn').addEventListener('click', startGame);