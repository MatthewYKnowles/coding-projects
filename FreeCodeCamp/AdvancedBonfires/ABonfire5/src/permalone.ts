export class PermAlone {
    public _arrayToGetPermutationsFrom: any;
    private _arrayOfPermutations: any = [];
    private _numberOfNonRepeatingPermutations: number;

    constructor(stringToCheck: string) {
        this._arrayToGetPermutationsFrom = stringToCheck.split("");
    }

    calculateNumberOfNonRepeatingPermutations(arrayToCheck){
        if (arrayToCheck.length === 1){return 1;}
        let count = 0;
        for(let i = 0; i < arrayToCheck.length; i++){
            let isThisUnique = true;
            for (let j = 0; j < arrayToCheck[0].length -1; j++){
                console.log(arrayToCheck[i][j]);
                console.log(arrayToCheck[i][j+1]);
                if(arrayToCheck[i][j] === arrayToCheck[i][j+1]){
                    console.log(isThisUnique);
                    isThisUnique = false;
                    console.log(isThisUnique);
                }
            }
            if (isThisUnique){
                count+= 1;
            }
        }
        return count;
    }

    static swap(array:any, pos1:number, pos2:number) {
        let temp:string = array[pos1];
        array[pos1] = array[pos2];
        array[pos2] = temp;
    }

    heapsPermute(array:any, output:any, n?:any) {
        n = n || array.length;
        if (n === 1) {
            output(array);
        }
        else {
            for (let i:number = 1; i <= n; i++) {
                this.heapsPermute(array, output, n - 1);
                let j:number = 0;
                if (n % 2) {
                    j = 1;
                }
                else {
                    j = i
                }
                PermAlone.swap(array, j - 1, n - 1);
            }
        }
    }

    pushToArray(arrayToPush) {
        let middle = [];
        for (let i = 0; i < arrayToPush.length; i++) {
            middle.push(arrayToPush[i]);
        }
        this._arrayOfPermutations.push(middle);
    }
}