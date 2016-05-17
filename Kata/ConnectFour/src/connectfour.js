System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ConnectFour;
    return {
        setters:[],
        execute: function() {
            class ConnectFour {
                constructor() {
                    this.grid = "......./n......./n......./n......./n......./n.......";
                    this._gridAsAString = "";
                    this.gridInArrayOfArrays = [];
                    this._winningString = "";
                    this.createGrid();
                }
                createGrid() {
                    this.gridInArrays = this.grid.split("/n");
                    for (let row = 0; row < this.gridInArrays.length; row++) {
                        this.gridInArrayOfArrays.push(this.createRowForArray(row));
                    }
                }
                createRowForArray(row) {
                    let localArray = [];
                    for (let i = 0; i < this.gridInArrays[0].length; i++) {
                        let stringRow = this.gridInArrays[row];
                        localArray.push(stringRow.substring(i, i + 1));
                    }
                    return localArray;
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
                setCurrentPlayerAndLetter(playerColor) {
                    this.currentColor = playerColor;
                    this.currentColorLetter = playerColor.substring(0, 1);
                }
                dropToken(playerColor, columnNumber) {
                    this.setCurrentPlayerAndLetter(playerColor);
                    for (let rowNumber = 5; rowNumber >= 0; rowNumber--) {
                        if (this.gridInArrayOfArrays[rowNumber][columnNumber - 1] === ".") {
                            this.gridInArrayOfArrays[rowNumber][columnNumber - 1] = this.currentColorLetter;
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
                    this.checkStringToSeeWhoWins(currentDiagonalAsString);
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
                    this.checkStringToSeeWhoWins(currentDiagonalAsString);
                }
                checkRowForFourInARow(row) {
                    let currentRow = this.gridInArrayOfArrays[row];
                    let currentRowAsString = currentRow.join("");
                    this.checkStringToSeeWhoWins(currentRowAsString);
                }
                checkColumnForFourInARow(columnNumber) {
                    let currentColumnAsString = "";
                    for (let i = 0; i < this.gridInArrayOfArrays.length; i++) {
                        currentColumnAsString += this.gridInArrayOfArrays[i][columnNumber];
                    }
                    this.checkStringToSeeWhoWins(currentColumnAsString);
                }
                checkStringToSeeWhoWins(str) {
                    let winningString = this.currentColorLetter + this.currentColorLetter + this.currentColorLetter + this.currentColorLetter;
                    if (str.includes(winningString)) {
                        this._winningString = this.currentColor + " wins!";
                    }
                }
            }
            exports_1("ConnectFour", ConnectFour);
        }
    }
});
//# sourceMappingURL=connectfour.js.map