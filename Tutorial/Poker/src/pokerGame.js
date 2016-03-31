function separateHands(str) {
    var handArray = [];
    handArray.push(str.slice(0, 21));
    handArray.push(str.slice(23));
    return handArray;
}
function convertHandToObject(str) {
    var handObject = {};
    var handArray = str.split(" ");
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
function convertFaceCardsToValues(obj) {
}
//# sourceMappingURL=pokerGame.js.map