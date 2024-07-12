//Below calls on the document and then intializes the tic-tac-toe board
document.addEventListener('DOMContentLoaded', function() {
    const board = ['', '', '', '', '', '', '', '', '']; //starts the board with an array of empty strings
    let turn = 'X'; //begins the game with x going first 
    let moves = 0; //begins the game with 0 moves
    const cells = document.querySelectorAll('.board td'); //gets all table cells 
    const turnText = document.querySelector('.turn'); //gets the text for who's turn it is
    const restartBtn = document.getElementById('restartBtn'); //gets the restart button
    const result = document.getElementById('result'); //gets the text that displays game result 

//Below gives a reference for what is consider a "win"
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

// Below is the function that handles what happens when cells are clicked. 
    function handleCellClick(index) {
        console.log(`Cell ${index} clicked`);
        if (board[index] === '') {
            board[index] = turn;
            cells[index].textContent = turn;
            moves++;
            console.log(`Move made: ${turn} at index ${index}, moves: ${moves}`);
            
//below is the function for what to do for winners and ties
            if (checkWinner(turn)) {
                displayResult(`${turn} wins!`);
                disableBoard();
            } else if (moves === 9) {
                displayResult("It's a tie!");
            } else {
                turn = turn === 'X' ? 'O' : 'X';
                updateTurnText(); // Update the turn text dynamically
            }
        }
    }

// below is the function to check for a winner
    function checkWinner(player) {
        console.log(`Checking winner for player: ${player}`);
        return winningCombos.some(combination => {
            const [a, b, c] = combination;
            const isWinningCombo = board[a] === player && board[b] === player && board[c] === player;
            if (isWinningCombo) {
                console.log(`Winning combination: ${combination}`);
            }
            return isWinningCombo;
        });
    }

// below is the function to display game result
    function displayResult(message) {
        console.log(`Game result: ${message}`);
        result.textContent = message;
        result.style.display = 'block';
    }

// below is the function to restart the game
    function restartGame() {
        console.log('Game restarted');
        board.fill('');
        cells.forEach(cell => {
            cell.textContent = '';
        });
        moves = 0;
        turn = 'X';
        updateTurnText(); // Update turn text after restart
        result.style.display = 'none';
        enableBoard();
    }

//  below is the function to disable board after game ends
    function disableBoard() {
        console.log('Board disabled');
        cells.forEach(cell => {
            cell.removeEventListener('click', handleCellClick);
        });
    }

// below is the function to start or restart game
    function enableBoard() {
        console.log('Board enabled');
        cells.forEach((cell, index) => {
            cell.addEventListener('click', () => handleCellClick(index));
        });
    }

// below is the function to update the turn text 
    function updateTurnText() {
        console.log(`Turn updated: It's ${turn}'s turn`);
        turnText.textContent = `It's ${turn}'s turn`;
    }

    // Event listener for restart button
    restartBtn.addEventListener('click', restartGame);

    // Initial board setup
    enableBoard();
    updateTurnText(); // Initialize turn text
});