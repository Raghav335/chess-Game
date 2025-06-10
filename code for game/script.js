const board = document.getElementById('chessboard');
const initialBoard = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];

let selectedSquare = null;

function createBoard() {
  board.innerHTML = '';
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
      square.textContent = initialBoard[row][col];
      square.dataset.row = row;
      square.dataset.col = col;

      square.addEventListener('click', handleSquareClick);
      board.appendChild(square);
    }
  }
}

function handleSquareClick(e) {
  const square = e.currentTarget;
  const row = parseInt(square.dataset.row);
  const col = parseInt(square.dataset.col);

  if (selectedSquare) {
    // Move piece
    const fromRow = parseInt(selectedSquare.dataset.row);
    const fromCol = parseInt(selectedSquare.dataset.col);
    const piece = initialBoard[fromRow][fromCol];

    // Basic move (no rules enforced)
    initialBoard[fromRow][fromCol] = "";
    initialBoard[row][col] = piece;
    selectedSquare = null;
    createBoard();
  } else if (initialBoard[row][col] !== "") {
    // Select piece
    selectedSquare = square;
    square.style.outline = "3px solid red";
  }
}

createBoard();