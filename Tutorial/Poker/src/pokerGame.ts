function separateHands(str: string): string[] {
    let handArray: string[] = [];
    handArray.push(str.slice(0, 21));
    handArray.push(str.slice(23));
    return handArray;
}

function convertHandToObject(str: string): any {
    let handObject = {};
    let handArray = str.split(" ");
    handObject["player"] = handArray[0].slice(0,5);
    handObject["cards"] = [];
    for (let i = 1; i < 6; i++){
        var cardArray = [];
        cardArray.push(handArray[i][0]);
        cardArray.push(handArray[i][1]);
        handObject["cards"].push(cardArray);
    }
    return handObject;
}

function convertCardsToIntegers(obj: any): any {
    for (let i = 0; i < 5; i++){
        let currentCardValue = obj["cards"][0][i][0];
        console.log(currentCardValue);
    }
    return 5;
}