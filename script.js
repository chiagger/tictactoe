const cells = document.querySelectorAll(".cell");
const startBtn = document.getElementById("startgame");
const rules = document.getElementById("rules");
const restart = document.getElementById("restart");
const resultContainer = document.getElementById("result");


const GameBoard = (
    () => {
        let gameBoard = Array.apply(null, Array(9)).map(function () { });

        let player = Math.round(Math.random());

        function playerSymbol(nr) {
            let symbol;
            if (nr === 0) {
                symbol = "X";
            } else if (nr === 1) {
                symbol = "O";
            } else {
                alert("Error");
            }
            return symbol;
        }

        function winMessage(nr) {
            rules.style.visibility = "hidden";
            const result = document.createElement('div');
            result.textContent = "Player \"" + playerSymbol(nr) + "\" wins!";
            if (resultContainer.hasChildNodes()) {
                resultContainer.removeChild(resultContainer.firstChild);
            } 
            resultContainer.appendChild(result);
            restart.style.visibility = "visible";
        }

        const whoStarts = document.getElementById("rules");
        whoStarts.textContent = "Player \"" + playerSymbol(player) + "\" starts.";

        function oppositePlayer(nr) {
            let player;
            if (nr === 0) {
                player = 1;
            } else if (nr === 1) {
                player = 0;
            } else {
                alert("Error");
            }
            return player;
        }

        const move = (index) => {
            if (gameBoard.at(index) === 1 ||
                gameBoard.at(index) === 0) {
                //Can't change spot that's already taken
            } else {
                gameBoard.splice(index, 1, player);
                cells.item(index).textContent = playerSymbol(player);
                player = oppositePlayer(player);
            }
        };

        const reset = (i) => {
            for (let i = 0; i < 9; i++) {
                gameBoard.splice(i, 1, null);
            }
        }

        const checkWin = () => {
            let won = false;
            for (let i = 0; i < 9; i += 3) {
                if (won===false && gameBoard.at(i) === gameBoard.at(i + 1) &&
                    gameBoard.at(i) === gameBoard.at(i + 2) &&
                    gameBoard.at(i) != null &&
                    gameBoard.at(i + 1) != null &&
                    gameBoard.at(i + 2) != null) {
                    resultContainer.style.visibility = "visible";
                    won=true;
                    winMessage(gameBoard.at(i));

                }
            }
            for (let i = 0; i < 3; i++) {
                if (won===false && gameBoard.at(i) === gameBoard.at(i + 3) &&
                    gameBoard.at(i) === gameBoard.at(i + 6) &&
                    gameBoard.at(i) != null &&
                    gameBoard.at(i + 3) != null &&
                    gameBoard.at(i + 6) != null) {
                    resultContainer.style.visibility = "visible";
                    won=true;
                    winMessage(gameBoard.at(i));
                }
            }
            if (won===false && gameBoard.at(0) === gameBoard.at(4) &&
                gameBoard.at(0) === gameBoard.at(8) &&
                gameBoard.at(0) != null &&
                gameBoard.at(4) != null &&
                gameBoard.at(8) != null) {
                resultContainer.style.visibility = "visible";
                won=true;
                winMessage(gameBoard.at(0));
            }
            if (won===false && gameBoard.at(2) === gameBoard.at(4) &&
                gameBoard.at(2) === gameBoard.at(6) &&
                gameBoard.at(2) != null &&
                gameBoard.at(4) != null &&
                gameBoard.at(6) != null) {
                resultContainer.style.visibility = "visible";
                won=true;
                winMessage(gameBoard.at(2));
            }
            if (won === false && gameBoard.at(0) != null &&
                gameBoard.at(1) != null &&
                gameBoard.at(2) != null &&
                gameBoard.at(3) != null &&
                gameBoard.at(4) != null &&
                gameBoard.at(5) != null &&
                gameBoard.at(6) != null &&
                gameBoard.at(7) != null &&
                gameBoard.at(8) != null) {
                rules.style.visibility = "hidden";
                const result = document.createElement('div');
                result.textContent = "That's a Tie!";
                if (resultContainer.hasChildNodes()) {
                    resultContainer.removeChild(resultContainer.firstChild);
                } 
                resultContainer.appendChild(result);
                resultContainer.style.visibility = "visible";
                restart.style.visibility = "visible";
            }
        }
        return { move, checkWin, reset };
    }
)();

function game() {
    cells.forEach((cell, i) => {
        cell.addEventListener('click', () => { GameBoard.move(i); GameBoard.checkWin(); });

    });
}

restart.style.visibility = "hidden";
rules.style.visibility = "hidden";
startBtn.addEventListener("click", () => {
    game();
    startBtn.style.visibility = "hidden";
    rules.style.visibility = "visible";
}
);

restart.addEventListener("click", () => {
    while (resultContainer.hasChildNodes()) {
        resultContainer.removeChild(resultContainer.firstChild);

    }
    restart.style.visibility = "hidden";
    rules.style.visibility = "hidden";
    cells.forEach(cell => {
        cell.textContent = "";
    });
    GameBoard.reset();
    game();
    startBtn.style.visibility = "hidden";
    rules.style.visibility = "visible";
});





