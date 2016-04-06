var cardValue = 0;

function pokerGame(gameInput: string){
    let winningString;
    let separatedHands = separateHands(gameInput);
    let firstHand = convertHandToObject(separatedHands[0]);
    let secondHand = convertHandToObject(separatedHands[1]);
    let firstHandWithIntegers = convertCardsToIntegers(firstHand);
    let secondHandWithIntegers = convertCardsToIntegers(secondHand);
    let firstHandSorted = sortPokerHand(firstHandWithIntegers);
    let secondHandSorted = sortPokerHand(secondHandWithIntegers);
    if (eitherHandHasAHigherPair(firstHandSorted,secondHandSorted)){
        winningString = highPairWins(firstHandSorted, secondHandSorted);
    } else {
        winningString = highCardWins(firstHandSorted, secondHandSorted);
    }
    return parseWinningHand(winningString);

}

function highCardWins(hand1: any, hand2: any){
    var hand1HighestCard = hand1["cards"][0][0];
    var hand2HighestCard = hand2["cards"][0][0];
    if (hand2HighestCard > hand1HighestCard){
        return [hand2["player"] + " wins. - with high card: xxx", hand2HighestCard];
    }
    else if (hand1HighestCard > hand2HighestCard){
        return [hand1["player"] + " wins. - with high card: xxx", hand1HighestCard];
    } else{
        hand1["cards"] = hand1["cards"].slice(1,hand1["cards"].length);
        hand2["cards"] = hand2["cards"].slice(1,hand2["cards"].length);
        if (hand1["cards"].length === 0){return "Tie."}
        return highCardWins(hand1, hand2);
    }
}

function highPairWins(hand1: any, hand2: any){
    let hand1HighPair = valueOfPairInHand(hand1);
    let hand2HighPair = valueOfPairInHand(hand2);
    if (hand1HighPair > hand2HighPair){return [hand1["player"] + " wins. - with a pair of xxx's", hand1HighPair];}
    if (hand2HighPair > hand1HighPair){return [hand2["player"] + " wins. - with a pair of xxx's", hand2HighPair];}
}

function valueOfPairInHand (hand: any){
    var handPairValue = 0;
    for (let i = 0; i < hand["cards"].length - 1; i++) {
        if (hand["cards"][i][cardValue] === hand["cards"][i + 1][cardValue]) {
            handPairValue = hand["cards"][i][cardValue];
        }
    }
     return handPairValue;   
}

function separateHands(gameInput: string): string[] {
    let handArray: string[] = [];
    handArray.push(gameInput.slice(0, 21));
    handArray.push(gameInput.slice(23));
    return handArray;
}

function convertHandToObject(Hand: string): any {
    let handObject = {};
    let handArray = Hand.split(" ");
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

function convertCardsToIntegers(hand: any): any {
    for (let i = 0; i < 5; i++){
        let currentCardValue = hand["cards"][i][0];
        switch (currentCardValue) {
            case "A":
                hand["cards"][i][0] = 14;
                break;
            case "K":
                hand["cards"][i][0] = 13;
                break;
            case "Q":
                hand["cards"][i][0] = 12;
                break;
            case "J":
                hand["cards"][i][0] = 11;
                break;
            default:
                hand["cards"][i][0] = parseInt(currentCardValue);
                break;
        }
    }
    return hand;
}

function sortPokerHand(hand: any): any {
    hand["cards"].sort((a,b)=>{return b[0] - a[0]});
    return hand;
}

function convertIntegersToCards(cardInteger: number): string {
    switch (cardInteger) {
        case 14:
            return "Ace";
        case 13:
            return "King";
        case 12:
            return "Queen";
        case 11:
            return "Jack";
        default:
            return cardInteger.toString();
        }
    }


function parseWinningHand(winningMessage: any): string {
    if (typeof winningMessage === "string"){return winningMessage;}
    else {return winningMessage[0].replace("xxx", convertIntegersToCards(winningMessage[1]));}
}

function eitherHandHasAHigherPair(hand1: any, hand2: any){
    return valueOfPairInHand(hand1)!= valueOfPairInHand(hand2);
}

