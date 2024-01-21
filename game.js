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



let playerName = '';
let playerColor = '';

function startGame() {
    playerName = document.getElementById('playerName').value;
    playerColor = document.getElementById('playerColor').value;

    if (playerName && playerColor) {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';

        // Your existing game initialization code goes here
        createBoard();
        drawBoard();
    } else {
        alert('Please enter your name and choose a color.');
    }
}


