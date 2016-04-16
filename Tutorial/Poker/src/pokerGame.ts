function pokerGame(gameInput: string): any{
    let arrayOfBothHands = separateHands(gameInput);
    let hand1 = createSortedHandObjectWithValues(arrayOfBothHands[0]);
    let hand2 = createSortedHandObjectWithValues(arrayOfBothHands[1]);
    if (eitherHandHasAStraitFlush(hand1, hand2)){return straitFlushWins(hand1, hand2)}
    if (eitherHandHasAFourOfAKind(hand1, hand2)){return fourOfAKindWins(hand1, hand2);}
    if (eitherHandHasAFullHouse(hand1, hand2)){return fullHouseWins(hand1, hand2);}
    return parseWinningHand(winningHandHierarchy(hand1, hand2));
}

function winningHandHierarchy(hand1, hand2){
    if (eitherHandHasAFlush(hand1, hand2)){return flushWins(hand1, hand2);}
    if (eitherHandHasAStrait(hand1, hand2)){return straitWins(hand1, hand2);}
    if (eitherHandHasAThreeOfAKind(hand1, hand2)){return threeOfAKindWins(hand1, hand2);}
    if (eitherHandHasATwoPair(hand1, hand2)){return twoPairWins(hand1, hand2);}
    if (eitherHandHasAHigherPair(hand1, hand2)) {return highPairWins(hand1, hand2);}
    return highCardWins(hand1, hand2);
}

function straitFlushWins(hand1: any, hand2: any){
    if (hasAStraitFlush(hand1) && hasAStraitFlush(hand2)){return highStraitFlushWins(hand1, hand2);}
    if (hasAStraitFlush(hand1)){return winningString(hand1, "strait flush");}
    else {return winningString(hand2, "strait flush");}
}
function highStraitFlushWins(hand1: any, hand2: any){
    if (highestCardInHand(hand1)> highestCardInHand(hand2)){return winningString(hand1, "strait flush", highestCardInHand(hand1));}
    else{return winningString(hand2, "strait flush", highestCardInHand(hand2));}
}

function fourOfAKindWins(hand1: any, hand2: any){
    if (valueOfAFourOfAKind(hand1)> valueOfAFourOfAKind(hand2)){return winningString(hand1, "4 of a kind");}
    else {return winningString(hand1, "4 of a kind");}
}
function hasAFourOfAKind(hand:any): boolean{
    return valueOfAFourOfAKind(hand) > 0;
}

function valueOfAFourOfAKind(hand: any): number{
    let cardsInHand = hand["cards"];
    if (cardsInHand[0][cardValue] === cardsInHand[3][cardValue] || cardsInHand[1][cardValue] === cardsInHand[4][cardValue]){
        return cardsInHand[2][cardValue];
    }
    return 0;
}
function higherFullHouseWins(hand1: any, hand2: any){
    if (threeOfAKindValue(hand1) > threeOfAKindValue(hand2)){return winningString(hand1, "full house", threeOfAKindValue(hand1));}
    else {return winningString(hand2, "full house", threeOfAKindValue(hand2));}}


function fullHouseWins(hand1: any, hand2: any){
    if (bothHandsHaveAFullHouse(hand1, hand2)){return higherFullHouseWins(hand1, hand2);}
    if (hasAFullHouse(hand1)){return winningString(hand1, "full house");}
    else {return winningString(hand2, "full house");}
}

function handWithHigherFlushWins(hand1: any, hand2: any){
    if (highestCardInHand(hand1) > highestCardInHand(hand2)){return [hand1["player"] + " wins. - with a xxx high flush", highestCardInHand(hand1)];}
    if (highestCardInHand(hand2) > highestCardInHand(hand1)){return [hand2["player"] + " wins. - with a xxx high flush", highestCardInHand(hand2)];}
    else{
        hand1["cards"] = hand1["cards"].slice(1,hand1["cards"].length);
        hand2["cards"] = hand2["cards"].slice(1,hand2["cards"].length);
        if (hand1["cards"].length === 0){return "Tie."}
        return handWithHigherFlushWins(hand1, hand2);
    }
}

function flushWins(hand1: any, hand2: any){
    if (bothHandsHaveAFlush(hand1, hand2)){return handWithHigherFlushWins(hand1, hand2);}
    if (hasAFlush(hand1)){return [hand1["player"] + " wins. - with a flush", 0];}
    if (hasAFlush(hand2)){return [hand2["player"] + " wins. - with a flush", 0];}
}

function hasAFlush(hand){
    let cards = hand["cards"];
    let cardsWithSameSuit = 1;
    for (let i = 1; i < cards.length; i++){
        if (cards[0][suit] === cards[i][suit]){cardsWithSameSuit += 1;}}
    return cardsWithSameSuit === 5;
}

function handWithHigherStraitWins(hand1, hand2): any{
    let hand1HighCard = highestCardInHand(hand1);
    let hand2HighCard = highestCardInHand(hand2);
    if (hand1HighCard > hand2HighCard){return [hand1["player"] + " wins. - with an xxx high strait", hand1HighCard];}
    if (hand2HighCard > hand1HighCard){return [hand2["player"] + " wins. - with an xxx high strait", hand2HighCard];}
    if (hand1HighCard === hand2HighCard){return "Tie."}
}
function highestCardInHand(hand){
    return hand["cards"][0][cardValue];
}

function straitWins(hand1, hand2){
    if (bothHandsHaveAStrait(hand1, hand2)){return handWithHigherStraitWins(hand1, hand2);}
    if (hasAStrait(hand1)){return [hand1["player"] + " wins. - with an xxx high strait", hand1["cards"][0][cardValue]];}
    if (hasAStrait(hand2)){return [hand2["player"] + " wins. - with an xxx high strait", hand2["cards"][0][cardValue]];}
}

function hasAStrait(hand){
    var cards = hand["cards"];
    var consecutiveNumbers = 1;
    for (let i = 0; i < cards.length - 1;i++){
        if (cards[i][cardValue] - 1 === cards[i + 1][cardValue]){
            console.log(cards[i + 1][cardValue]);
            consecutiveNumbers += 1;}
    }
    return consecutiveNumbers === 5;
}

function threeOfAKindValue(hand){
    let cardsInHand = hand["cards"];
    let threeOfAKindValueInHand = 0;
    for (let i = 0; i < cardsInHand.length - 2; i++){
        if (cardsInHand[i][cardValue] === cardsInHand[i + 1][cardValue] && cardsInHand[i][cardValue] === cardsInHand[i + 2][cardValue]){threeOfAKindValueInHand = cardsInHand[i][cardValue];}}
    return threeOfAKindValueInHand;
}

function threeOfAKindWins(hand1, hand2){
    let hand1ThreeOfAKindValue = threeOfAKindValue(hand1);
    let hand2ThreeOfAKindValue = threeOfAKindValue(hand2);
    if (hand1ThreeOfAKindValue > hand2ThreeOfAKindValue){
        return [hand1["player"] + " wins. - with three xxx's", hand1ThreeOfAKindValue];}
    return [hand2["player"] + " wins. - with three xxx's", hand2ThreeOfAKindValue];
}

function twoPairWins(hand1: any, hand2: any){
    if (bothHandsHaveATwoPair(hand1, hand2)){return highTwoPairWins(hand1, hand2);}
    if (hasATwoPair(hand1)){return [hand1["player"] + " wins. - with a xxx high two pair", arrayOfPairValues(hand1)[cardValue]];}
    if (hasATwoPair(hand2)){return [hand2["player"] + " wins. - with a xxx high two pair", arrayOfPairValues(hand2)[cardValue]];}
}
function hasATwoPair(hand){
    return arrayOfPairValues(hand).length > 1;
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
    if (hand2HighestCard > hand1HighestCard){return [hand2["player"] + " wins. - with high card: xxx", hand2HighestCard];}
    else if (hand1HighestCard > hand2HighestCard){return [hand1["player"] + " wins. - with high card: xxx", hand1HighestCard];}
    else{
        hand1["cards"] = hand1["cards"].slice(1,hand1["cards"].length);
        hand2["cards"] = hand2["cards"].slice(1,hand2["cards"].length);
        if (hand1["cards"].length === 0){return "Tie."}
        return highCardWins(hand1, hand2);
    }
}
function hasAThreeOfAKind(hand){
    return threeOfAKindValue(hand) > 0;
}

function valueOfPairInHand (cardsInHand: any){
    var handPairValue = 0;
    for (let i = 0; i < cardsInHand.length - 1; i++) {
        if (cardsInHand[i][cardValue] === cardsInHand[i + 1][cardValue]) {handPairValue = cardsInHand[i][cardValue];}}
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

function createSortedHandObjectWithValues(hand: string){
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
            case "T":
                hand["cards"][i][0] = 10;
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
        case 10:
            return "10";
        default:
            return cardInteger.toString();
    }
}

function parseWinningHand(winningMessage: any): string {
    if (typeof winningMessage === "string"){return winningMessage;}
    else {return winningMessage[0].replace("xxx", convertIntegersToCards(winningMessage[1]));}
}

function winningString(hand, typeofHand, highCard=0){
    let winningString = hand["player"] + " wins. - with " + typeofHand;
    if (highCard === 0){return winningString}
    return winningString + ": " + convertIntegersToCards(highCard) + " high";
}

function eitherHandHasAHigherPair(hand1: any, hand2: any){
    return valueOfPairInHand(hand1["cards"])!= valueOfPairInHand(hand2["cards"]);
}
function bothHandsHaveATwoPair(hand1: any, hand2: any){
    return (hasATwoPair(hand1) && hasATwoPair(hand2));
}
function eitherHandHasATwoPair(hand1: any, hand2: any){
    return (hasATwoPair(hand1) || hasATwoPair(hand2));
}
function eitherHandHasAThreeOfAKind(hand1: any, hand2: any){
    return (hasAThreeOfAKind(hand1) || hasAThreeOfAKind(hand2));
}
function eitherHandHasAStrait(hand1: any, hand2: any): boolean{
    return (hasAStrait(hand1) || hasAStrait(hand2));
}
function bothHandsHaveAStrait(hand1: any, hand2: any): boolean{
    return (hasAStrait(hand1) && hasAStrait(hand2));
}
function eitherHandHasAFlush(hand1: any, hand2: any) {
    return (hasAFlush(hand1) || hasAFlush(hand2));
}
function bothHandsHaveAFlush(hand1: any, hand2: any) {
    return (hasAFlush(hand1) && hasAFlush(hand2));
}
function hasAFullHouse(hand){
    return (hasAThreeOfAKind(hand) && hasATwoPair(hand));
}
function eitherHandHasAFullHouse(hand1:any, hand2:any){
    return (hasAFullHouse(hand1) || (hasAFullHouse(hand2)));
}
function bothHandsHaveAFullHouse(hand1: any, hand2: any): boolean {
    return (hasAFullHouse(hand1) && hasAFullHouse(hand2));
}
function hasAStraitFlush(hand: any): boolean{
    return (hasAFlush(hand) && hasAStrait(hand));
}
function eitherHandHasAStraitFlush(hand1: any, hand2: any): boolean {
    return (hasAStraitFlush(hand1) || hasAStraitFlush(hand2));
}
function eitherHandHasAFourOfAKind(hand1, hand2){
    return (hasAFourOfAKind(hand1) || hasAFourOfAKind(hand2))
}
var cardValue = 0;
var suit = 1;
