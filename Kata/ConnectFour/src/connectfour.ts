export class ConnectFour {
    public grid: string = "......./n......./n......./n......./n......./n.......";
    public gridInArrays: any;
    private _gridAsAString: string = "";
    public gridInArrayOfArrays: any = [];
    private _winningString: string = "";
    private currentColor: string;

    constructor() {
        this.createGrid();
    }

    createGrid() {
        this.gridInArrays = this.grid.split("/n");
        for (let row = 0; row < this.gridInArrays.length; row++){
            this.gridInArrayOfArrays.push(this.createRowForArray(row));
        }
    }
    createRowForArray(row){
        let localArray = [];
        for (let i = 0; i < this.gridInArrays[0].length; i++){
            let stringRow = this.gridInArrays[row];
            localArray.push(stringRow.substring(i, i+1));
        }
        return localArray;
    }
    getStringFromArrayOfArrays(){
        for (let i = 0; i < this.gridInArrayOfArrays.length; i++){
            if (i != 0){this._gridAsAString += "/n";}
            for (let j = 0; j < this.gridInArrayOfArrays[0].length; j++){
                this._gridAsAString += this.gridInArrayOfArrays[i][j];
            }
        }
    }
    getReturnGridAsAString() {
        this.getStringFromArrayOfArrays();
        return this._gridAsAString;
    }

    dropToken(playerColor: string, columnNumber: number){
        this.currentColor = playerColor.substring(0,1);
        for (let rowNumber = 5; rowNumber >= 0; rowNumber--) {
            if(this.gridInArrayOfArrays[rowNumber][columnNumber-1] === ".") {
                this.gridInArrayOfArrays[rowNumber][columnNumber-1] = this.currentColor;
                this.checkForWin(rowNumber, columnNumber);
                if (this._winningString != ""){
                    return this._winningString;
                }
                return;
            }
             if(rowNumber === 0) {
                 return "Cannot add more tokens here!";
             }
        }
    }

    checkForWin(rowNumber, columnNumber){
        this.checkRowForFourInARow(rowNumber);
        this.checkColumnForFourInARow(columnNumber - 1);
        this.checkForAscendingDiagonalWin(rowNumber, columnNumber-1);
        this.checkForDescendingDiagonalWin(rowNumber, columnNumber-1);
    }

    checkForDescendingDiagonalWin(row, col) {
        let currentCol = col;
        let currentRow = row;
        let leftCol = 0;
        let topRow = 0;
        while (currentRow > -1 && currentCol > -1) {
            leftCol = currentCol - 1;
            topRow = currentRow - 1;
            currentRow --;
            currentCol --;
        }
        leftCol++;
        topRow++;
        let currentDiagonalAsString = "";
        while(topRow < 6 && leftCol < 7){
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
            currentRow ++;
            currentCol --;
        }
        leftCol++;
        bottomRow--;
        let currentDiagonalAsString = "";
        while(bottomRow > 0 && leftCol < 7){
            currentDiagonalAsString += this.gridInArrayOfArrays[bottomRow][leftCol];
            bottomRow--;
            leftCol++;
        }
        this.checkStringToSeeWhoWins(currentDiagonalAsString);
    }

    checkRowForFourInARow(row){
        let currentRow = this.gridInArrayOfArrays[row];
        let currentRowAsString = currentRow.join("");
        this.checkStringToSeeWhoWins(currentRowAsString)
    }

    private checkColumnForFourInARow(columnNumber:number) {
        let currentColumnAsString = "";
        for (let i = 0; i < this.gridInArrayOfArrays.length; i++) {
            currentColumnAsString += this.gridInArrayOfArrays[i][columnNumber];
        }
        this.checkStringToSeeWhoWins(currentColumnAsString);
    }
    checkStringToSeeWhoWins(str: string) {
        if (str.includes("RRRR")) {
            this._winningString = "Red wins!";
        }
        if (str.includes("BBBB")) {
            this._winningString = "Black wins!";
        }
    }
}