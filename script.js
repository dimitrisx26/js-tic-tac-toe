const gameBoard = (() => {
    let board = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    const getBoard = () => board;
    const setBoard = (i, value) => {
        board[i] = value;
    };
    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };
    return {
        getBoard,
        setBoard,
        resetBoard,
    };
})();

const displayController = (() => {
    const board = gameBoard.getBoard();
    const cells = document.querySelectorAll(".cell");
    for (let i = 0; i < board.length; i++) {
        if (board[i] !== "") {
            cells[i].textContent = board[i];
        }
        
    }
    
})();

const player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return { getName, getSymbol };
}

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");

const game = (() => {

})();