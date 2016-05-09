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
                    this._mapAsAGrid = gameMap.split("\n");
                    this._mapWidth = this._mapAsAGrid[0].length;
                    this._mapHeight = this._mapAsAGrid.length;
                    this.createMapWithNumbers();
                }
                Minesweeper.prototype.getMapWithNumbers = function () {
                    return this._mapWithNumbers;
                };
                Minesweeper.prototype.createMapWithNumbers = function () {
                    for (var row = 0; row < this._mapHeight; row++) {
                        if (this.aPreviousRowExists(row)) {
                            this._mapWithNumbers += '\n';
                        }
                        this.createRowWithNumbers(row);
                    }
                };
                Minesweeper.prototype.createRowWithNumbers = function (row) {
                    for (var column = 0; column < this._mapWidth; column++) {
                        if (this.spaceHasABomb(row, column)) {
                            this._mapWithNumbers += "*";
                        }
                        else {
                            this._mapWithNumbers += this.countSurroundingBombs(row, column);
                        }
                    }
                };
                Minesweeper.prototype.countSurroundingBombs = function (row, column) {
                    var count = 0;
                    count += this.countRow(row, column);
                    if (this.aPreviousRowExists(row)) {
                        count += this.countPreviousRow(row, column);
                    }
                    if (this.aFollowingRowExists(row)) {
                        count += this.countNextRow(row, column);
                    }
                    return count;
                };
                Minesweeper.prototype.countRow = function (row, column) {
                    var count = 0;
                    if (this.spaceHasABomb(row, column - 1)) {
                        count++;
                    }
                    if (this.spaceHasABomb(row, column)) {
                        count++;
                    }
                    if (this.spaceHasABomb(row, column + 1)) {
                        count++;
                    }
                    return count;
                };
                Minesweeper.prototype.spaceHasABomb = function (row, column) {
                    return this._mapAsAGrid[row][column] == "*";
                };
                Minesweeper.prototype.countPreviousRow = function (row, column) {
                    return this.countRow(row - 1, column);
                };
                Minesweeper.prototype.countNextRow = function (row, column) {
                    return this.countRow(row + 1, column);
                };
                Minesweeper.prototype.aPreviousRowExists = function (row) {
                    return row - 1 >= 0;
                };
                Minesweeper.prototype.aFollowingRowExists = function (row) {
                    return row + 1 < this._mapHeight;
                };
                return Minesweeper;
            }());
            exports_1("Minesweeper", Minesweeper);
        }
    }
});
//# sourceMappingURL=minesweeper.js.map