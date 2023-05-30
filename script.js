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
    let turn = 1;
    let board = gameBoard.getBoard();
    let cells = document.querySelectorAll(".cell");
    const announcement = document.querySelector(".announcement");
    const newGame = document.querySelector(".new-game");

    const endGame = () => {
        for (let i = 0; i < 10; i++) {
            cells[i].classList.add("unclickable");
        }
    };

    const checkWinner = () => { 
        if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
            announcement.textContent = board[0] + " wins";
            endGame();
        } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
            announcement.textContent = board[3] + " wins";
            endGame();
        } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
            announcement.textContent = board[6] + " wins";
            endGame();
        } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
            announcement.textContent = board[0] + " wins";
            endGame();
        } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
            announcement.textContent = board[1] + " wins";
            endGame();
        } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
            announcement.textContent = board[2] + " wins";
            endGame();
        } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
            announcement.textContent = board[0] + " wins";
            endGame();
        } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
            announcement.textContent = board[2] + " wins";
            endGame();
        } else if (turn === 10) {
            announcement.textContent = "Draw";
            endGame();
        }
    };

    newGame.addEventListener("click", () => {
        board = gameBoard.resetBoard();
        board = gameBoard.getBoard();
        turn = 1;
        announcement.textContent = "Player 1's turn";
        for (let i = 0; i < 10; i++) {
            cells[i].textContent = "";
            cells[i].classList.remove("unclickable");
        }   
    });

    for (let i = 0; i < 10; i++) {
        cells[i].addEventListener("click", () => {
            if (turn % 2 !== 0 && board[i] === "") {
                cells[i].textContent = player1.getSymbol();
                board[i] = player1.getSymbol();
                turn++;
                announcement.textContent = "Player 2's turn";
            } else if (turn % 2 === 0 && board[i] === "") {
                cells[i].textContent = player2.getSymbol();
                board[i] = player2.getSymbol();
                turn++;
                announcement.textContent = "Player 1's turn";
            }
            checkWinner();
        });
    }
})();