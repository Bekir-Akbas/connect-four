const ROWS = 6;
const COLUMNS = 7;
let board = [];

function createBoard() {
    for (let row = 0; row < ROWS; row++) {
        board[row] = [];
        for (let col = 0; col < COLUMNS; col++) {
            board[row][col] = null;
        }
    }
}

// game.js
// ... Diğer fonksiyonlar

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
    for (let row = ROWS - 1; row >= 0; row--) {
        if (!board[row][column]) {
            board[row][column] = currentPlayer.color;
            drawBoard();
            if (checkWin(row, column)) {
                alert(`Player ${currentPlayer.name} wins!`);
                highlightWinningSequence(row, column);
                resetGame();
            } else if (checkDraw()) {
                alert('Draw!'); // Berabere durumu
                resetGame();
            } else {
                switchPlayer();
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
    // Bu fonksiyon kazanan sırayı döndürmeli, örneğin, şu anki kazanma kontrolünden alabilirsiniz.
    // Şu an için boş bir dizi döndürüyorum.
    return [];
}





function checkDraw() {
    for (let col = 0; col < COLUMNS; col++) {
        if (!board[0][col]) {
            return false; // Oyun devam ediyor
        }
    }
    return true; // Oyun berabere
}

function resetGame() {
    createBoard();
    currentPlayer = player1;
    drawBoard();

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // Temizleme
    const restartButton = document.getElementById('restartButton');
    restartButton.style.display = 'none'; // restart butonunu gizleme
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

function customFunction1() {
    alert('Button "Against the Computer" Clicked!');
    // İlk buton için özel işlemleri burada gerçekleştirebilirsiniz.
}

function customFunction2() {
    alert('Button "2 Players" Clicked!');
    // İkinci buton için özel işlemleri burada gerçekleştirebilirsiniz.
}


let player1 = {
    name: '',
    color: ''
};

let player2 = {
    name: '',
    color: ''
};

let currentPlayer = player1; 


function startGame() {
    player1.name = document.getElementById('playerName').value;
    player1.color = document.getElementById('playerColor').value;

    player2.name = 'Player 2'; // Varsayılan isim, isteğe bağlı olarak değiştirilebilir
    player2.color = player1.color === 'yellow' ? 'red' : 'yellow'; // İkinci oyuncunun rengini belirle

    if (player1.name && player1.color) {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';

        // İlk oyun tahtasını çiz ve başlangıç oyuncu rengini belirle
        createBoard();
        drawBoard();
        updateCurrentPlayerIndicator();

    } else {
        alert('Please enter your name and choose a color.');
    }
}

function updateCurrentPlayerIndicator() {
    const indicatorElement = document.getElementById('currentColorIndicator');
    indicatorElement.innerHTML = `Current Player: ${currentPlayer.name} (${currentPlayer.color})`;
}



function customFunction2() {
    player1.name = prompt('Enter Player 1 name:');
    
    let validColors = ['red', 'sarı', 'yellow', 'kırmızı'];
    let player1Color = prompt(`Choose Player 1 color (${validColors.join('/')}):`).toLowerCase();

    while (!validColors.includes(player1Color)) {
        player1Color = prompt(`Invalid color! Choose Player 1 color (${validColors.join('/')}):`).toLowerCase();
    }

    player1Color = (player1Color === 'sarı') ? 'yellow' : player1Color; // Convert 'sarı' to 'yellow'
    
    player1.color = player1Color;
    
    player2.name = prompt('Enter Player 2 name:');
    player2.color = (player1Color === 'yellow') ? 'red' : 'yellow';

    if (player1.name && player1.color && player2.name && player2.color) {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';

        currentPlayer = player1; // Başlangıçta birinci oyuncu başlar
        createBoard();
        drawBoard();
        updateCurrentPlayerIndicator();
    } else {
        alert('Please enter names and choose colors for both players.');
    }
}

function applySettings() {
    const backgroundColor = document.getElementById('backgroundColor').value;
    const gameName = document.getElementById('gameName').value;

    document.body.style.backgroundColor = backgroundColor;
    document.getElementById('game-screen').getElementsByTagName('h1')[0].innerText = gameName;

    // İstediğiniz diğer stil değişikliklerini burada yapabilirsiniz.

    document.getElementById('settings-form').style.display = 'none';
}

function showSettingsForm() {
    document.getElementById('settings-form').style.display = 'block';
}