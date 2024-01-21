const ROWS = 6;
const COLUMNS = 7;
let currentPlayer = null;
let board = [];

function initializeGame(userName, userColor) {
    currentPlayer = userColor;
    createBoard();
    drawBoard();
}

function makeMove(column) {
    if (currentPlayer === null) {
        alert('Please register your name and color to play the game.');
        return;
    }

    for (let row = ROWS - 1; row >= 0; row--) {
        if (!board[row][column]) {
            board[row][column] = currentPlayer;
            drawBoard();
            if (checkWin(row, column)) {
                alert(`Player ${currentPlayer === 'yellow' ? 'Yellow' : 'Red'} wins!`);
                resetGame();
            } else if (isDraw()) {
                displayResult('It\'s a draw!');
                endGame();
            } else {
                currentPlayer = currentPlayer === 'yellow' ? 'red' : 'yellow';
            }
            return;
        }
    }

    alert('Column is full! Please choose another column.');
}

function checkWin(row, col) {
    return (
        checkDirection(row, col, 1, 0) ||
        checkDirection(row, col, 0, 1) ||
        checkDirection(row, col, 1, 1) ||
        checkDirection(row, col, 1, -1)
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

// function resetGame() {
//     createBoard();
//     currentPlayer = 'yellow';
//     drawBoard();
// }

function resetGame() {
    currentPlayer = 'yellow'; // Set currentPlayer first
    createBoard();
    drawBoard();
}


document.addEventListener('DOMContentLoaded', function () {
    const userName = localStorage.getItem('userName');
    const userColor = localStorage.getItem('userColor');

    if (userName && userColor) {
        initializeGame(userName, userColor);
    } else {
        showModal();
    }
});

function showModal() {
    const modal = document.getElementById('userInputModal');
    modal.style.display = 'block';

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function saveUserInfo() {
    const userNameInput = document.getElementById('userName');
    const userColorSelect = document.getElementById('userColor');

    const userName = userNameInput.value;
    const userColor = userColorSelect.value;

    if (userName.trim() !== '') {
        localStorage.setItem('userName', userName);
        localStorage.setItem('userColor', userColor);

        initializeGame(userName, userColor);
        document.getElementById('userInputModal').style.display = 'none';
    } else {
        alert('Please enter your name.');
    }
}

// ...

function initializeGame(userName, userColor) {
    currentPlayer = userColor;
    createBoard();
    drawBoard();
    showGameScreen();
    alert('Game initialized');
}

// ...

function saveUserInfo() {
    const userNameInput = document.getElementById('userName');
    const userColorSelect = document.getElementById('userColor');

    const userName = userNameInput.value;
    const userColor = userColorSelect.value;

    if (userName.trim() !== '') {
        localStorage.setItem('userName', userName);
        localStorage.setItem('userColor', userColor);

        initializeGame(userName, userColor);
        document.getElementById('userInputModal').style.display = 'none';
        showGameScreen();
        alert('User information saved');
    } else {
        alert('Please enter your name.');
    }
}
;
