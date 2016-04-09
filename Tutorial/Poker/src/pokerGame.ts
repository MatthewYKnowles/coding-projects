var cardValue = 0;

function pokerGame(gameInput: string): any{
    let separatedHands = separateHands(gameInput);
    let hand1 = createSortedHandWithValues(separatedHands[0]);
    let hand2 = createSortedHandWithValues(separatedHands[1]);
    if (eitherHandHasAThreeOfAKind(hand1, hand2)){return parseWinningHand(threeOfAKindWins(hand1, hand2));}
    if (bothHandsHaveATwoPair(hand1, hand2)){return parseWinningHand(highTwoPairWins(hand1, hand2));}
    if (eitherHandHasATwoPair(hand1, hand2)){return parseWinningHand(twoPairWins(hand1, hand2));}
    if (eitherHandHasAHigherPair(hand1, hand2)) {return parseWinningHand(highPairWins(hand1, hand2));}
    return parseWinningHand(highCardWins(hand1, hand2));
}

function threeOfAKindValue(hand){
    let threeOfAKindValueInHand = 0
    for (let i = 0; i < hand.length - 2; i++){
        if (hand[i][cardValue] === hand[i + 1][cardValue] && hand[i][cardValue] === hand[i + 2][cardValue]){
            threeOfAKindValueInHand = hand[i][cardValue];
        }
    }
    return threeOfAKindValueInHand;
}

function threeOfAKindWins(hand1, hand2){
    let hand1ThreeOfAKindValue = threeOfAKindValue(hand1["cards"]);
    let hand2ThreeOfAKindValue = threeOfAKindValue(hand2["cards"]);
    if (hand1ThreeOfAKindValue > hand2ThreeOfAKindValue){
        return [hand1["player"] + " wins. - with three xxx's", hand1ThreeOfAKindValue];}
    return [hand2["player"] + " wins. - with three xxx's", hand2ThreeOfAKindValue];
}

function twoPairWins(hand1: any, hand2: any){
    let hand1HasTwoPair = arrayOfPairValues(hand1).length > 1;
    let hand2HasTwoPair = arrayOfPairValues(hand2).length > 1;
    if (hand1HasTwoPair){return [hand1["player"] + " wins. - with a xxx high two pair", arrayOfPairValues(hand1)[cardValue]];}
    if (hand2HasTwoPair){return [hand2["player"] + " wins. - with a xxx high two pair", arrayOfPairValues(hand2)[cardValue]];}
}

function highTwoPairWins(hand1: any, hand2: any){
    let hand1HighPairValue = arrayOfPairValues(hand1)[0];
    let hand2HighPairValue = arrayOfPairValues(hand2)[0];
    if (hand1HighPairValue > hand2HighPairValue){return [hand1["player"] + " wins. - with a xxx high two pair", hand1HighPairValue];}
    if (hand2HighPairValue > hand1HighPairValue){return [hand2["player"] + " wins. - with a xxx high two pair", hand2HighPairValue];}
}

function highPairWins(hand1: any, hand2: any){
    let hand1HighPair = valueOfPairInHand(hand1["cards"]);
    let hand2HighPair = valueOfPairInHand(hand2["cards"]);
    if (hand1HighPair > hand2HighPair){return [hand1["player"] + " wins. - with a pair of xxx's", hand1HighPair];}
    if (hand2HighPair > hand1HighPair){return [hand2["player"] + " wins. - with a pair of xxx's", hand2HighPair];}
}

function highCardWins(hand1: any, hand2: any){
    var hand1HighestCard = hand1["cards"][0][cardValue];
    var hand2HighestCard = hand2["cards"][0][cardValue];
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

function valueOfPairInHand (cardsInHand: any){
    var handPairValue = 0;
    for (let i = 0; i < cardsInHand.length - 1; i++) {
        if (cardsInHand[i][cardValue] === cardsInHand[i + 1][cardValue]) {
            handPairValue = cardsInHand[i][cardValue];
        }
    }
     return handPairValue;   
}

function arrayOfPairValues(hand: any): number[] {
    let cardsInHand = hand["cards"];
    let firstPairValue = valueOfPairInHand(cardsInHand);
    if (firstPairValue > 0){
        cardsInHand = cardsInHand.filter((a)=> a[0] != firstPairValue);
        if (valueOfPairInHand(cardsInHand) > 0){
            return [valueOfPairInHand(cardsInHand), firstPairValue];}
        return [firstPairValue];
    }
    return [];
}

function separateHands(gameInput: string): string[] {
    let handArray: string[] = [];
    handArray.push(gameInput.slice(0, 21));
    handArray.push(gameInput.slice(23));
    return handArray;
}

function createSortedHandWithValues(hand: string){
    let handAsObject = convertHandToObject(hand);
    let handWithIntegers = convertCardsToIntegers(handAsObject);
    return sortPokerHand(handWithIntegers);
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
    return valueOfPairInHand(hand1["cards"])!= valueOfPairInHand(hand2["cards"]);
}
function bothHandsHaveATwoPair(hand1: any, hand2: any){
    let hand1HasATwoPair = arrayOfPairValues(hand1).length > 1;
    let hand2HasATwoPair = arrayOfPairValues(hand2).length > 1;
    return (hand1HasATwoPair && hand2HasATwoPair);
}
function eitherHandHasATwoPair(hand1: any, hand2: any){
    let hand1HasATwoPair = arrayOfPairValues(hand1).length > 1;
    let hand2HasATwoPair = arrayOfPairValues(hand2).length > 1;
    return (hand1HasATwoPair || hand2HasATwoPair);
}
function eitherHandHasAThreeOfAKind(hand1: any, hand2: any){
    let hand1HasAThreeOfAKind = threeOfAKindValue(hand1["cards"]) > 0;
    let hand2HasAThreeOfAKind = threeOfAKindValue(hand2["cards"]) > 0;
    return (hand1HasAThreeOfAKind || hand2HasAThreeOfAKind);
}