function pokerGame(gameInput) {
    var separatedHands = separateHands(gameInput);
    var firstHand = convertHandToObject(separatedHands[0]);
    var secondHand = convertHandToObject(separatedHands[1]);
    var firstHandWithIntegers = convertCardsToIntegers(firstHand);
    var secondHandWithIntegers = convertCardsToIntegers(secondHand);
    var firstHandSorted = sortPokerHand(firstHandWithIntegers);
    var secondHandSorted = sortPokerHand(secondHandWithIntegers);
    var winningString = highCardWins(firstHandSorted, secondHandSorted);
    return parseWinningHand(winningString);
}
function highCardWins(hand1, hand2) {
    var hand1HighestCard = hand1["cards"][0][0];
    var hand2HighestCard = hand2["cards"][0][0];
    if (hand2HighestCard > hand1HighestCard) {
        return [hand2["player"] + " wins. - with high card: xxx", hand2HighestCard];
    }
    else if (hand1HighestCard > hand2HighestCard) {
        return [hand1["player"] + " wins. - with high card: xxx", hand1HighestCard];
    }
    else {
        hand1["cards"] = hand1["cards"].slice(1, hand1["cards"].length);
        hand2["cards"] = hand2["cards"].slice(1, hand2["cards"].length);
        if (hand1["cards"].length === 0) {
            return "Tie.";
        }
        return highCardWins(hand1, hand2);
    }
}
function separateHands(gameInput) {
    var handArray = [];
    handArray.push(gameInput.slice(0, 21));
    handArray.push(gameInput.slice(23));
    return handArray;
}
function convertHandToObject(Hand) {
    var handObject = {};
    var handArray = Hand.split(" ");
    handObject["player"] = handArray[0].slice(0, 5);
    handObject["cards"] = [];
    for (var i = 1; i < 6; i++) {
        var cardArray = [];
        cardArray.push(handArray[i][0]);
        cardArray.push(handArray[i][1]);
        handObject["cards"].push(cardArray);
    }
    return handObject;
}
function convertCardsToIntegers(hand) {
    for (var i = 0; i < 5; i++) {
        var currentCardValue = hand["cards"][i][0];
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
function sortPokerHand(hand) {
    hand["cards"].sort(function (a, b) { return b[0] - a[0]; });
    return hand;
}
function convertIntegersToCards(cardInteger) {
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
function parseWinningHand(winningMessage) {
    if (typeof winningMessage === "string") {
        return winningMessage;
    }
    else {
        return winningMessage[0].replace("xxx", convertIntegersToCards(winningMessage[1]));
    }
}
