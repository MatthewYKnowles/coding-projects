System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ConnectFour;
    return {
        setters:[],
        execute: function() {
            class ConnectFour {
                constructor() {
                    this._gridAsAString = "";
                    this.gridInArrayOfArrays = [];
                    this._winningString = "";
                    this.createGrid();
                }
                createGrid() {
                    this.grid = "......./n......./n......./n......./n......./n.......";
                    this.gridInArrays = this.grid.split("/n");
                    for (let i = 0; i < this.gridInArrays.length; i++) {
                        let localArray = [];
                        for (let j = 0; j < this.gridInArrays[0].length; j++) {
                            let stringRow = this.gridInArrays[i];
                            localArray.push(stringRow.substring(j, j + 1));
                        }
                        this.gridInArrayOfArrays.push(localArray);
                    }
                }
                getStringFromArrayOfArrays() {
                    for (let i = 0; i < this.gridInArrayOfArrays.length; i++) {
                        if (i != 0) {
                            this._gridAsAString += "/n";
                        }
                        for (let j = 0; j < this.gridInArrayOfArrays[0].length; j++) {
                            this._gridAsAString += this.gridInArrayOfArrays[i][j];
                        }
                    }
                }
                getReturnGridAsAString() {
                    this.getStringFromArrayOfArrays();
                    return this._gridAsAString;
                }
                dropToken(playerColor, columnNumber) {
                    this.currentColor = playerColor.substring(0, 1);
                    for (let rowNumber = 5; rowNumber >= 0; rowNumber--) {
                        if (this.gridInArrayOfArrays[rowNumber][columnNumber - 1] === ".") {
                            this.gridInArrayOfArrays[rowNumber][columnNumber - 1] = this.currentColor;
                            this.checkForWin(rowNumber, columnNumber);
                            if (this._winningString != "") {
                                return this._winningString;
                            }
                            return;
                        }
                        if (rowNumber === 0) {
                            return "Cannot add more tokens here!";
                        }
                    }
                }
                checkForWin(rowNumber, columnNumber) {
                    this.checkRowForFourInARow(rowNumber);
                    this.checkColumnForFourInARow(columnNumber - 1);
                    this.checkForAscendingDiagonalWin(rowNumber, columnNumber - 1);
                    this.checkForDescendingDiagonalWin(rowNumber, columnNumber - 1);
                }
                checkForDescendingDiagonalWin(row, col) {
                    let currentCol = col;
                    let currentRow = row;
                    let leftCol = 0;
                    let topRow = 0;
                    while (currentRow > -1 && currentCol > -1) {
                        leftCol = currentCol - 1;
                        topRow = currentRow - 1;
                        currentRow--;
                        currentCol--;
                    }
                    leftCol++;
                    topRow++;
                    let currentDiagonalAsString = "";
                    while (topRow < 6 && leftCol < 7) {
                        currentDiagonalAsString += this.gridInArrayOfArrays[topRow][leftCol];
                        topRow++;
                        leftCol++;
                    }
                    if (currentDiagonalAsString.includes("RRRR")) {
                        this._winningString = "Red wins!";
                    }
                    if (currentDiagonalAsString.includes("BBBB")) {
                        this._winningString = "Black wins!";
                    }
                }
                checkForAscendingDiagonalWin(row, col) {
                    let currentCol = col;
                    let currentRow = row;
                    let leftCol = 0;
                    let bottomRow = 5;
                    while (currentRow < 6 && currentCol > -1) {
                        leftCol = currentCol - 1;
                        bottomRow = currentRow + 1;
                        currentRow++;
                        currentCol--;
                    }
                    leftCol++;
                    bottomRow--;
                    let currentDiagonalAsString = "";
                    while (bottomRow > 0 && leftCol < 7) {
                        currentDiagonalAsString += this.gridInArrayOfArrays[bottomRow][leftCol];
                        bottomRow--;
                        leftCol++;
                    }
                    if (currentDiagonalAsString.includes("RRRR")) {
                        this._winningString = "Red wins!";
                    }
                    if (currentDiagonalAsString.includes("BBBB")) {
                        this._winningString = "Black wins!";
                    }
                }
                checkRowForFourInARow(row) {
                    let currentRow = this.gridInArrayOfArrays[row];
                    let currentRowAsString = currentRow.join("");
                    if (currentRowAsString.includes("RRRR")) {
                        this._winningString = "Red wins!";
                    }
                    if (currentRowAsString.includes("BBBB")) {
                        this._winningString = "Black wins!";
                    }
                }
                checkColumnForFourInARow(columnNumber) {
                    let currentColumnAsString = "";
                    for (let i = 0; i < this.gridInArrayOfArrays.length; i++) {
                        currentColumnAsString += this.gridInArrayOfArrays[i][columnNumber];
                    }
                    if (currentColumnAsString.includes("RRRR")) {
                        this._winningString = "Red wins!";
                    }
                    if (currentColumnAsString.includes("BBBB")) {
                        this._winningString = "Black wins!";
                    }
                }
            }
            exports_1("ConnectFour", ConnectFour);
        }
    }
});
//# sourceMappingURL=connectfour.js.map