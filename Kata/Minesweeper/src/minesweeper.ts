export class Minesweeper {
    private _mapInOneString: string;
    private _mapAsAGrid: any;
    private _mapWidth: number;
    private _mapWithNumbers: string = "";

    constructor(gameMap: string){
        this._mapInOneString = gameMap;// maybe not be needed
        this._mapAsAGrid = gameMap.split("\n");
        this._mapWidth = this._mapAsAGrid[0].length;
    }
    
    getMapWithNumbers(): string {
        this.topRow();
        if (this._mapAsAGrid.length > 1) {this.lastRow()}
        return this._mapWithNumbers;
    }
    spaceHasABomb(row: number, column: number): boolean {
        return this._mapAsAGrid[row][column] == "*";
    }
    topRow(){
        let row: number = 0;
        for (let column = 0; column < this._mapWidth; column++){
            if (this.spaceHasABomb(row,column)){this._mapWithNumbers += "*";}
            else {
                let tempVar: number = 0;
                if(this.spaceHasABomb(row, column-1)){tempVar++;}
                if(this.spaceHasABomb(row, column+1)){tempVar++;}
                if(this._mapAsAGrid[1] && this.spaceHasABomb(row+1, column-1)){tempVar++}
                if(this._mapAsAGrid[1] && this.spaceHasABomb(row+1, column)){tempVar++}
                if(this._mapAsAGrid[1] && this.spaceHasABomb(row+1, column+1)){tempVar++}
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
                if(this._mapAsAGrid[1] && this.spaceHasABomb(row-1, column-1)){tempVar++}
                if(this._mapAsAGrid[1] && this.spaceHasABomb(row-1, column)){tempVar++}
                if(this._mapAsAGrid[1] && this.spaceHasABomb(row-1, column+1)){tempVar++}
                this._mapWithNumbers += tempVar;
            }
        }
    }
}