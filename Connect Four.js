const ROWS = 6;
const COLUMNS = 7;
let board = [];

let player1 = {
    name: '',
    color: ''
};

let player2 = {
    name: '',
    color: ''
};

let currentPlayer = player1;

let isAgainstComputer = false;

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

            const img = document.createElement('img');
            cell.appendChild(img);

            if (board[row][col]) {
                cell.classList.add(board[row][col]);
            }

            boardElement.appendChild(cell);
        }
    }
}

function makeMove(column) {
    if (isAgainstComputer && currentPlayer === player2) {
        // Make the computer's move
        column = getRandomValidMove();
    }

    for (let row = ROWS - 1; row >= 0; row--) {
        if (!board[row][column]) {
            board[row][column] = currentPlayer.color;
            drawBoard();
            if (checkWin(row, column)) {
                alert(`Player ${currentPlayer.name} wins!`);
                highlightWinningSequence(row, column);
                updateMatchHistory(currentPlayer.name, currentPlayer === player1 ? player2.name : player1.name);
                resetGame();
            } else if (checkDraw()) {
                alert('Draw!');
                resetGame();
            } else {
                switchPlayer();
                if (isAgainstComputer && currentPlayer === player2) {
                    setTimeout(() => makeMove(getRandomValidMove()), 500);
                }
            }
            return;
        }
    }
}

function highlightWinningSequence(row, col) {
    const winningSequence = getWinningSequence(row, col);
    for (const { row, col } of winningSequence) {
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        cell.classList.add('win-animation');
    }
}

function getWinningSequence(row, col) {
    return [];
}

function checkDraw() {
    for (let col = 0; col < COLUMNS; col++) {
        if (!board[0][col]) {
            return false;
        }
    }
    return true;
}

function resetGame() {
    createBoard();
    currentPlayer = player1;
    drawBoard();

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';
    const restartButton = document.getElementById('restartButton');
    restartButton.style.display = 'none';

    document.getElementById('start-screen').style.display = 'flex';
    document.getElementById('game-screen').style.display = 'none';
}

function backToMenu() {
    document.getElementById('start-screen').style.display = 'flex';
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('match-history-screen').style.display = 'none';
}

function switchPlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    updateCurrentPlayerIndicator();
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

function updateCurrentPlayerIndicator() {
    const indicatorElement = document.getElementById('currentColorIndicator');
    indicatorElement.innerHTML = `Current Player: ${currentPlayer.name} (${currentPlayer.color})`;
}

function getRandomValidMove() {
    let column;
    do {
        column = Math.floor(Math.random() * COLUMNS);
    } while (board[0][column] !== null);

    return column;
}

function viewMatchHistory() {
    const matchHistory = JSON.parse(localStorage.getItem('matchHistory')) || [];

    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'none';
    const matchHistoryScreen = document.getElementById('match-history-screen');
    matchHistoryScreen.style.display = 'block';

    displayMatchHistory(matchHistory);
}

function displayMatchHistory(matchHistory) {
    const matchHistoryScreen = document.getElementById('match-history-screen');
    matchHistoryScreen.innerHTML = '<h1>Match History</h1>';

    if (matchHistory.length > 0) {
        const ul = document.createElement('ul');
        for (const match of matchHistory) {
            const li = document.createElement('li');
            li.textContent = `${match.winner} won against ${match.loser}`;
            ul.appendChild(li);
        }
        matchHistoryScreen.appendChild(ul);
    } else {
        const p = document.createElement('p');
        p.textContent = 'No match history available.';
        matchHistoryScreen.appendChild(p);
    }

    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit to Main Menu';
    exitButton.onclick = backToMenu;
    exitButton.className = 'exit-button';
    matchHistoryScreen.appendChild(exitButton);
}

function updateMatchHistory(winner, loser) {
    let matchHistory = JSON.parse(localStorage.getItem('matchHistory')) || [];
    matchHistory = matchHistory.slice(0, 4);
    matchHistory.unshift({ winner, loser });
    localStorage.setItem('matchHistory', JSON.stringify(matchHistory));
}

function startGame() {
    playerName = document.getElementById('playerName').value;
    playerColor = document.getElementById('playerColor').value;

    if (playerName && playerColor) {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';

        player1.name = playerName;
        player1.color = playerColor;

        player2.name = 'Computer';
        player2.color = playerColor === 'yellow' ? 'red' : 'yellow';

        currentPlayer = player1;

        createBoard();
        drawBoard();
        updateCurrentPlayerIndicator();
    } else {
        alert('Please enter your name and choose a color.');
    }
}

function customFunction1() {
    isAgainstComputer = true;

    player1.name = document.getElementById('playerName').value;
    player1.color = document.getElementById('playerColor').value;

    if (player1.name && player1.color) {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';

        player2.name = 'Computer';
        player2.color = player1.color === 'yellow' ? 'red' : 'yellow';

        createBoard();
        drawBoard();
        updateCurrentPlayerIndicator();
    } else {
        alert('Please enter your name and choose a color.');
    }
}

function customFunction2() {
    player1.name = prompt('Enter Player 1 name:');
    
    let validColors = ['red', 'yellow'];
    let player1Color = prompt(`Choose Player 1 color (${validColors.join('/')}):`).toLowerCase();

    while (!validColors.includes(player1Color)) {
        player1Color = prompt(`Invalid color! Choose Player 1 color (${validColors.join('/')}):`).toLowerCase();
    }

    player1Color = (player1Color === 'yellow') ? 'yellow' : 'red';

    player1.color = player1Color;
    
    player2.name = prompt('Enter Player 2 name:');
    player2.color = (player1Color === 'yellow') ? 'red' : 'yellow';

    if (player1.name && player1.color && player2.name && player2.color) {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';

        currentPlayer = player1;

        createBoard();
        drawBoard();
        updateCurrentPlayerIndicator();
    } else {
        alert('Please enter names and choose colors for both players.');
    }
}

function applySettings() {
    const backgroundColor = document.getElementById('backgroundColor').value;
    const boardColor = document.getElementById('boardColor').value;
    const gameName = document.getElementById('gameName').value;

    document.body.style.backgroundColor = backgroundColor;
    document.getElementById('board').style.backgroundColor = boardColor;
    document.getElementById('game-screen').getElementsByTagName('h1')[0].innerText = gameName;

    document.getElementById('settings-form').style.display = 'none';
}


function showSettingsForm() {
    document.getElementById('settings-form').style.display = 'block';
}

// Initial setup
createBoard();
drawBoard();