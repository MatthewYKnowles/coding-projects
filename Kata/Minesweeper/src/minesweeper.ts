export class minesweeper {
    static findBombs(map: string): string {
        let newMap: string = "";
        let splitMap = map.split("\n");
        let mineFieldWidth = map.length;
        if (splitMap[0]){mineFieldWidth = splitMap[0].length;}
        for (let i = 0; i < mineFieldWidth; i++){
            if (map[i] == "*"){
                newMap += "*";
            }
            else {
                let tempVar: number = 0;
                if(map[i - 1] == "*"){
                    tempVar++;
                }
                if(map[i+1] == "*"){
                    tempVar++;
                }

                newMap += tempVar;
            }

        }
        if (splitMap.length > 1){
            newMap += "\n";

            for (let i = 0; i < splitMap[1].length; i++){
                if (splitMap[1][i] == "*"){
                    newMap += "*";
                }
                else {
                    let tempVar: number = 0;
                    if(splitMap[1][i - 1] == "*"){
                        tempVar++;
                    }
                    if(splitMap[1][i+1] == "*"){
                        tempVar++;
                    }
                    if (splitMap[0][i] == "*"){
                        tempVar++;
                    }
                    if (splitMap[0][i-1] == "*"){
                        tempVar++;
                    }

                    newMap += tempVar;
                }

            }
        }

        return newMap;
    }
}