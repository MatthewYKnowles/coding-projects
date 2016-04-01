function highCardWins(hand1, hand2) {
    return [];
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
        console.log(currentCardValue);
    }
    return hand;
}
function sortPokerHand(hand) {
    hand["cards"].sort(function (a, b) { return b[0] - a[0]; });
    return hand;
}
