// const ROWS = 6;
// const COLUMNS = 7;
// let currentPlayer = 'yellow'; // Starting with yellow
// let board = [];

// function createBoard() {
//     for (let row = 0; row < ROWS; row++) {
//         board[row] = [];
//         for (let col = 0; col < COLUMNS; col++) {
//             board[row][col] = null;
//         }
//     }
// }

// function drawBoard() {
//   const boardElement = document.getElementById('board');
//   boardElement.innerHTML = '';

//   for (let row = 0; row < ROWS; row++) {
//       for (let col = 0; col < COLUMNS; col++) {
//           const cell = document.createElement('div');
//           cell.className = 'cell';
//           cell.dataset.row = row;
//           cell.dataset.col = col;
//           cell.addEventListener('click', () => makeMove(col));

//           if (board[row][col]) {
//               cell.classList.add(board[row][col]);
//           }

//           boardElement.appendChild(cell);
//       }
//   }

//   // Update the current color indicator
//   const currentColorIndicator = document.getElementById('currentColorIndicator');
//   currentColorIndicator.textContent = `Current Color: ${currentPlayer}`;
//   currentColorIndicator.style.color = currentPlayer;
// }

// // ... (your existing code)

// // ... (your existing code)


// // function makeMove(column) {
// //     for (let row = ROWS - 1; row >= 0; row--) {
// //         if (!board[row][column]) {
// //             board[row][column] = currentPlayer;
// //             drawBoard();
// //             if (checkWin(row, column)) {
// //                 alert(`Player ${currentPlayer === 'yellow' ? 'Yellow' : 'Red'} wins!`);
// //                 resetGame();
// //             } else {
// //                 currentPlayer = currentPlayer === 'yellow' ? 'red' : 'yellow';
// //             }
// //             return;
// //         }
// //     }
// // }

// function makeMove(column) {
//   for (let row = ROWS - 1; row >= 0; row--) {
//       if (!board[row][column]) {
//           board[row][column] = currentPlayer;
//           drawBoard();

//           if (checkWin(row, column)) {
//               alert(`Player ${currentPlayer === 'yellow' ? 'Yellow' : 'Red'} wins!`);
//               resetGame();
//           } else if (isDraw()) {
//               displayResult('It\'s a draw!');
//               endGame();
//           } else {
//               currentPlayer = currentPlayer === 'yellow' ? 'red' : 'yellow';
//           }
//           return;
//       }
//   }

//   // If the loop completes without making a move, the column is full
//   alert('Column is full! Please choose another column.');
// }

// function isDraw() {
//   // Check if both players have no chance of winning
//   return !canWin('yellow') && !canWin('red');
// }

// function canWin(player) {
//   // Check if the player has at least one possible winning move
//   for (let col = 0; col < COLUMNS; col++) {
//       for (let row = ROWS - 1; row >= 0; row--) {
//           if (!board[row][col] && (checkWin(row, col, player) || isDrawMove(row, col, player))) {
//               return true;
//           }
//       }
//   }
//   return false;
// }

// // ... (your existing code)

// function isDraw() {
//   // Check if all columns are filled or both players have no chance of winning
//   return isBoardFull() || (!canWin('yellow') && !canWin('red'));
// }

// function isBoardFull() {
//   // Check if all columns are filled
//   for (let col = 0; col < COLUMNS; col++) {
//       if (!isColumnFull(col)) {
//           return false;
//       }
//   }
//   return true;
// }

// function isColumnFull(col) {
//   // Check if a specific column is full
//   return board[0][col] !== null;
// }

// // ... (your existing code)

// // ... (your existing code)




// function checkWin(row, col) {
//     return (
//         checkDirection(row, col, 1, 0) || // Horizontal
//         checkDirection(row, col, 0, 1) || // Vertical
//         checkDirection(row, col, 1, 1) || // Diagonal /
//         checkDirection(row, col, 1, -1)   // Diagonal \
//     );
// }

// function checkDirection(row, col, rowDirection, colDirection) {
//     const player = board[row][col];
//     let count = 1;

//     for (let i = 1; i < 4; i++) {
//         const newRow = row + i * rowDirection;
//         const newCol = col + i * colDirection;

//         if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLUMNS) {
//             break;
//         }

//         if (board[newRow][newCol] === player) {
//             count++;
//         } else {
//             break;
//         }
//     }

//     for (let i = 1; i < 4; i++) {
//         const newRow = row - i * rowDirection;
//         const newCol = col - i * colDirection;

//         if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLUMNS) {
//             break;
//         }

//         if (board[newRow][newCol] === player) {
//             count++;
//         } else {
//             break;
//         }
//     }

//     return count >= 4;
// }

// function resetGame() {
//   createBoard();
//   currentPlayer = 'yellow'; // Corrected from 'X'
//   drawBoard();
// }


// // Initial setup
// createBoard();
// drawBoard();













const ROWS = 6;
const COLUMNS = 7;
let currentPlayer = 'yellow'; // Starting with yellow
let board = [];

function createBoard() {
    for (let row = 0; row < ROWS; row++) {
        board[row] = [];
        for (let col = 0; col < COLUMNS; col++) {
            board[row][col] = null;
        }
    }
}

function drawBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLUMNS; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', () => makeMove(col));

            if (board[row][col]) {
                cell.classList.add(board[row][col]);
            }

            boardElement.appendChild(cell);
        }
    }
}

function makeMove(column) {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (!board[row][column]) {
            board[row][column] = currentPlayer;
            drawBoard();
            if (checkWin(row, column)) {
                alert(`Player ${currentPlayer === 'yellow' ? 'Yellow' : 'Red'} wins!`);
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'yellow' ? 'red' : 'yellow';
            }
            return;
        }
    }
}

// Rest of the code remains the same

function checkWin(row, col) {
    return (
        checkDirection(row, col, 1, 0) || // Horizontal
        checkDirection(row, col, 0, 1) || // Vertical
        checkDirection(row, col, 1, 1) || // Diagonal /
        checkDirection(row, col, 1, -1)   // Diagonal \
    );
}

function checkDirection(row, col, rowDirection, colDirection) {
    const player = board[row][col];
    let count = 1;

    for (let i = 1; i < 4; i++) {
        const newRow = row + i * rowDirection;
        const newCol = col + i * colDirection;

        if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLUMNS) {
            break;
        }

        if (board[newRow][newCol] === player) {
            count++;
        } else {
            break;
        }
    }

    for (let i = 1; i < 4; i++) {
        const newRow = row - i * rowDirection;
        const newCol = col - i * colDirection;

        if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLUMNS) {
            break;
        }

        if (board[newRow][newCol] === player) {
            count++;
        } else {
            break;
        }
    }

    return count >= 4;
}

function resetGame() {
  createBoard();
  currentPlayer = 'yellow'; // Corrected from 'X'
  drawBoard();
}


// Initial setup
createBoard();
drawBoard();


;