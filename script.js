const cells = document.querySelectorAll(".cell");


const GameBoard = (
    () => {

        let gameBoard = Array.apply(null, Array(9)).map(function () { });
        //checkWin() checks if a player has won

        const logTest = () => console.log(gameBoard);
        let player = 0;
        const move = (index) => {

            if (gameBoard.at(index) === 1 ||
                gameBoard.at(index) === 0) {
                //non fare niente
            } else {
                gameBoard.splice(index, 1, player);
                //update html
                if (player === 0) {
                    cells.item(index).textContent = "X";
                    player = 1;
                } else if (player === 1) {
                    cells.item(index).textContent = "O";
                    player = 0;
                } else {
                    alert("playernr incorrect");
                }

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
                    console.log("You win");
                }
            }
            for (let i = 0; i < 3; i++) {
                if (gameBoard.at(i) === gameBoard.at(i + 3) &&
                    gameBoard.at(i) === gameBoard.at(i + 6) &&
                    gameBoard.at(i) != null &&
                    gameBoard.at(i + 3) != null &&
                    gameBoard.at(i + 6) != null) {
                    console.log("You win");
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
                console.log("tie")
            }

            /* if (gameBoard.at(i) === gameBoard.at(i + 3) &&
                 gameBoard.at(i) === gameBoard.at(i + 6) &&
                 gameBoard.at(i) != null &&
                 gameBoard.at(i + 3) != null &&
                 gameBoard.at(i + 6) != null) {
                 console.log("You win");
             } else if (gameBoard.at(0) != null &&
                 gameBoard.at(1) != null &&
                 gameBoard.at(2) != null &&
                 gameBoard.at(3) != null &&
                 gameBoard.at(4) != null &&
                 gameBoard.at(5) != null &&
                 gameBoard.at(6) != null &&
                 gameBoard.at(7) != null &&
                 gameBoard.at(8) != null) { console.log("tie") }
 
 */


        }


        return { logTest, move, checkWin };
    }
)();


cells.forEach((cell, i) => {
    cell.addEventListener('click', () => { GameBoard.move(i); GameBoard.checkWin(); });

});



