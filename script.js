// JavaScript
const boxes = document.querySelectorAll('.box');
const player1 = document.getElementById('player1');
const resetButton = document.getElementById('resetButton');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// Function to check for a winner
function checkWinner() {
  // Implementing winning conditions here
//   console.log("checking winning condition");
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a];
    }
}

if (!gameBoard.includes('')) {
    return 'Draw';
}

return null;
}

// Function to update the game state and UI
function updateGame() {
  // Update the game board, check for a winner, and update the UI
//   console.log("updating...");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = gameBoard[i];
    // console.log(gameBoard[i], " : ", i);
    // console.log(boxes[i].textContent, " : ", i);
  
}

const winner = checkWinner();
// console.log(winner);
if (winner) {
    gameOver = true;
    if (winner === 'Draw') {
        player1.textContent = "It's a Draw!";
    } else {
        player1.textContent = `Player ${winner} wins!`;
        currentPlayer = winner;
    }
} else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    player1.textContent = `Player ${currentPlayer}'s turn`;
}
}

// Event listener for box clicks
boxes.forEach((box, index) => {
   // console.log(box," ",index);
  box.addEventListener('click', () => {
   //!gameOver: It checks if the game is not over. If gameOver is true, it means the game has ended, and no further moves are allowed.
   if (!gameOver && gameBoard[index] === '') {
    gameBoard[index] = currentPlayer;
    updateGame();
}

  });
});

 // Event listener for reset button
 resetButton.addEventListener('click', () => {
    // Reset the game state and UI
    // console.log("winner : " + " " + checkWinner());
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;  
    updateGame();
});
