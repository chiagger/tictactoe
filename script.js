const cells = document.querySelectorAll(".cell");


const GameBoard = (
    () => {
        let gameBoard = Array.apply(null, Array(9)).map(function () { });

        const logTest = () => console.log(gameBoard);

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

        const checkWin = () => {
            let won = false;
            for (let i = 0; i < 9; i += 3) {
                if (gameBoard.at(i) === gameBoard.at(i + 1) &&
                    gameBoard.at(i) === gameBoard.at(i + 2) &&
                    gameBoard.at(i) != null &&
                    gameBoard.at(i + 1) != null &&
                    gameBoard.at(i + 2) != null) {
                    console.log(playerSymbol(gameBoard.at(i)) + " wins!");
                }
            }
            for (let i = 0; i < 3; i++) {
                if (gameBoard.at(i) === gameBoard.at(i + 3) &&
                    gameBoard.at(i) === gameBoard.at(i + 6) &&
                    gameBoard.at(i) != null &&
                    gameBoard.at(i + 3) != null &&
                    gameBoard.at(i + 6) != null) {
                    console.log(playerSymbol(gameBoard.at(i)) + " wins!");
                }
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
                console.log("That's a tie");
            }
        }
        return { logTest, move, checkWin };
    }
)();

function game() {
    cells.forEach((cell, i) => {
        cell.addEventListener('click', () => { GameBoard.move(i); GameBoard.checkWin(); });

    });
}

const startBtn = document.getElementById("startgame");
const rules = document.getElementById("rules");
rules.style.visibility="hidden";
startBtn.addEventListener("click", ()=>{game(); startBtn.style.visibility="hidden";
rules.style.visibility="visible";
}
);





