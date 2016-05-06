System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Minesweeper;
    return {
        setters:[],
        execute: function() {
            Minesweeper = (function () {
                function Minesweeper(gameMap) {
                    this._mapWithNumbers = "";
                    this._mapInOneString = gameMap; // maybe not be needed
                    this._mapAsAGrid = gameMap.split("\n");
                    this._mapWidth = this._mapAsAGrid[0].length;
                }
                Minesweeper.prototype.getMapWithNumbers = function () {
                    this.topRow();
                    var numberOfMiddleRows = this._mapAsAGrid.length - 2;
                    var currentMiddleRow = 0;
                    while (numberOfMiddleRows > 0) {
                        this.middleRow(currentMiddleRow);
                        numberOfMiddleRows--;
                        currentMiddleRow++;
                    }
                    if (this._mapAsAGrid.length > 1) {
                        this.lastRow();
                    }
                    return this._mapWithNumbers;
                };
                Minesweeper.prototype.spaceHasABomb = function (row, column) {
                    return this._mapAsAGrid[row][column] == "*";
                };
                Minesweeper.prototype.topRow = function () {
                    var row = 0;
                    for (var column = 0; column < this._mapWidth; column++) {
                        if (this.spaceHasABomb(row, column)) {
                            this._mapWithNumbers += "*";
                        }
                        else {
                            var tempVar = 0;
                            if (this.spaceHasABomb(row, column - 1)) {
                                tempVar++;
                            }
                            if (this.spaceHasABomb(row, column + 1)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row + 1, column - 1)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row + 1, column)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row + 1, column + 1)) {
                                tempVar++;
                            }
                            this._mapWithNumbers += tempVar;
                        }
                    }
                };
                Minesweeper.prototype.middleRow = function (middleRowNumber) {
                    this._mapWithNumbers += "\n";
                    for (var column = 0; column < this._mapWidth; column++) {
                        var row = middleRowNumber + 1;
                        if (this.spaceHasABomb(row, column)) {
                            this._mapWithNumbers += "*";
                        }
                        else {
                            var tempVar = 0;
                            if (this.spaceHasABomb(row, column - 1)) {
                                tempVar++;
                            }
                            if (this.spaceHasABomb(row, column + 1)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row - 1, column - 1)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row - 1, column)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row - 1, column + 1)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row + 1, column - 1)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row + 1, column)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row + 1, column + 1)) {
                                tempVar++;
                            }
                            this._mapWithNumbers += tempVar;
                        }
                    }
                };
                Minesweeper.prototype.lastRow = function () {
                    this._mapWithNumbers += "\n";
                    for (var column = 0; column < this._mapWidth; column++) {
                        var row = this._mapAsAGrid.length - 1;
                        if (this.spaceHasABomb(row, column)) {
                            this._mapWithNumbers += "*";
                        }
                        else {
                            var tempVar = 0;
                            if (this.spaceHasABomb(row, column - 1)) {
                                tempVar++;
                            }
                            if (this.spaceHasABomb(row, column + 1)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row - 1, column - 1)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row - 1, column)) {
                                tempVar++;
                            }
                            if (this._mapAsAGrid[1] && this.spaceHasABomb(row - 1, column + 1)) {
                                tempVar++;
                            }
                            this._mapWithNumbers += tempVar;
                        }
                    }
                };
                return Minesweeper;
            }());
            exports_1("Minesweeper", Minesweeper);
        }
    }
});
//# sourceMappingURL=minesweeper.js.map