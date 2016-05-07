export class Minesweeper {
    private _mapInOneString: string;
    private _mapAsAGrid: any;
    private _mapWidth: number;
    private _mapWithNumbers: string = "";

    constructor(gameMap: string){
        this._mapInOneString = gameMap;// maybe not be needed
        this._mapAsAGrid = gameMap.split("\n");
        this._mapWidth = this._mapAsAGrid[0].length;
        this.createMapWithNumbers();
    }
    getMapWithNumbers(): string {
        return this._mapWithNumbers;
    }
    createMapWithNumbers() {
        this.topRow();
        let numberOfMiddleRows: number = this._mapAsAGrid.length - 2;
        for (let i = 0; i < numberOfMiddleRows; i++) {this.middleRow(i);}
        if (this._mapAsAGrid.length > 1) {this.lastRow()}
    }
    topRow(){
        let row: number = 0;
        for (let column = 0; column < this._mapWidth; column++){
            if (this.spaceHasABomb(row,column)){this._mapWithNumbers += "*";}
            else {
                let tempVar: number = 0;
                tempVar += this.countCurrentRow(row, column);
                if(this._mapAsAGrid[1]){tempVar += this.countNextRow(row, column)}
                this._mapWithNumbers += tempVar;
            }
        }
    }
    middleRow(middleRowNumber: number){
        this._mapWithNumbers += "\n";
        for (let column = 0; column < this._mapWidth; column++) {
            let row = middleRowNumber + 1;
            if (this.spaceHasABomb(row, column)) {this._mapWithNumbers += "*";}
            else {
                let tempVar: number = 0;
                tempVar += this.countCurrentRow(row, column);
                tempVar += this.countPreviousRow(row, column);
                tempVar += this.countNextRow(row, column);
                this._mapWithNumbers += tempVar;
            }
        }
    }
    lastRow(){
        this._mapWithNumbers += "\n";
        for (let column = 0; column < this._mapWidth; column++) {
            let row = this._mapAsAGrid.length - 1;
            if (this.spaceHasABomb(row, column)) {this._mapWithNumbers += "*";}
            else {
                let tempVar: number = 0;
                if(this.spaceHasABomb(row, column-1)){tempVar++;}
                if(this.spaceHasABomb(row, column+1)){tempVar++;}
                tempVar += this.countPreviousRow(row, column);
                this._mapWithNumbers += tempVar;
            }
        }
    }
    spaceHasABomb(row: number, column: number): boolean {
        return this._mapAsAGrid[row][column] == "*";
    }
    countCurrentRow(row: number, column: number): number {
        let count: number = 0;
        if(this.spaceHasABomb(row, column-1)){count++;}
        if(this.spaceHasABomb(row, column+1)){count++;}
        return count;
    }
    countPreviousRow(row: number, column: number): number {
        let count: number = 0;
        let lastRow: number = row - 1;
        if(this.spaceHasABomb(lastRow, column-1)){count++}
        if(this.spaceHasABomb(lastRow, column)){count++}
        if(this.spaceHasABomb(lastRow, column+1)){count++}
        return count;
    }
    countNextRow(row: number, column: number): number {
        let count: number = 0;
        let nextRow: number = row + 1;
        if(this.spaceHasABomb(nextRow, column-1)){count++}
        if(this.spaceHasABomb(nextRow, column)){count++}
        if(this.spaceHasABomb(nextRow, column+1)){count++}
        return count;
    }
}