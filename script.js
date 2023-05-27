const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
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
    
    
})();
