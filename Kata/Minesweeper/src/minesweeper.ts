export class Minesweeper {
    private _mapAsAGrid: any;
    private _mapWidth: number;
    private _mapHeight: number;
    private _mapWithNumbers: string = "";

    constructor(gameMap: string){
        this._mapAsAGrid = gameMap.split("\n");
        this._mapWidth = this._mapAsAGrid[0].length;
        this._mapHeight = this._mapAsAGrid.length;
        this.createMapWithNumbers();
    }
    getMapWithNumbers(): string {
        return this._mapWithNumbers;
    }

    createMapWithNumbers() {
        for (let row = 0; row < this._mapHeight; row++) {
            if (this.aPreviousRowExists(row)){this._mapWithNumbers += '\n'}
            this.createRowWithNumbers(row);
        }
    }
    
    createRowWithNumbers(row: number) {
        for (let column = 0; column < this._mapWidth; column++){
            if (this.spaceHasABomb(row,column)){this._mapWithNumbers += "*";}
            else {this._mapWithNumbers += this.countSurroundingBombs(row, column)}
        }
    }

    countSurroundingBombs(row: number, column: number): number{
        let count: number = 0;
        count += this.countRow(row, column);
        if (this.aPreviousRowExists(row)){count += this.countPreviousRow(row, column);}
        if (this.aFollowingRowExists(row)){count += this.countNextRow(row, column);}
        return count;
    }

    countRow(row: number, column: number){
        let count: number = 0;
        if(this.spaceHasABomb(row, column-1)){count++}
        if(this.spaceHasABomb(row, column)){count++}
        if(this.spaceHasABomb(row, column+1)){count++}
        return count;
    }

    spaceHasABomb(row: number, column: number): boolean {
        return this._mapAsAGrid[row][column] == "*";
    }
    countPreviousRow(row: number, column: number): number {
        return this.countRow(row-1, column);
    }
    countNextRow(row: number, column: number): number {
        return this.countRow(row+1, column);
    }
    aPreviousRowExists(row: number): boolean {
        return row - 1 >= 0;
    }
    aFollowingRowExists(row: number): boolean {
        return row + 1 < this._mapHeight;
    }
}