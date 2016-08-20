"use strict";
var Card = (function () {
    function Card(input) {
        this.faceCardToValue = {
            "T": 10,
            "J": 11,
            "Q": 12,
            "K": 13,
            "A": 14
        };
        var cardValue = input[0];
        var cardIsGreaterThanNine = !parseInt(cardValue);
        this.value = (cardIsGreaterThanNine) ? this.faceCardToValue[cardValue] : parseInt(cardValue);
    }
    return Card;
}());
exports.Card = Card;
var Hand = (function () {
    function Hand(hand) {
        this.handOfCardsObjects = [];
        var cardsInHand = hand.split(" ");
        for (var i = 0; i < cardsInHand.length; i++) {
            this.handOfCardsObjects.push(new Hand(cardsInHand[i]));
        }
        console.log(this.handOfCardsObjects);
    }
    Hand.prototype.getWinningRule = function () {
        return "pair";
    };
    return Hand;
}());
exports.Hand = Hand;
//# sourceMappingURL=sample.js.map