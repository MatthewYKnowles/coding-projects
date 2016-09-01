"use strict";
var Card = (function () {
    function Card(hand) {
        this.letterToValueObject = { "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14 };
        var valueCard = hand[0];
        var integerValueOfCard = parseInt(valueCard);
        this.value = (!integerValueOfCard) ? this.letterToValueObject[valueCard] : integerValueOfCard;
    }
    Card.prototype.getValue = function () {
        return this.value;
    };
    return Card;
}());
exports.Card = Card;
var Hand = (function () {
    function Hand(hand) {
        this.handArray = [];
        this.valueToStringObject = { 10: "Ten", 11: "Jack", 12: "Queen", 13: "King", 14: "Ace" };
        this.winningRule = "";
        this.hand = hand.split(" ");
        for (var i = 0; i < this.hand.length; i++) {
            this.handArray.push(new Card(this.hand[i]));
        }
        this.handArray.sort(function (a, b) { return b.getValue() - a.getValue(); });
    }
    Hand.prototype.getWinningRule = function () {
        this.threeOfAKindWins();
        if (this.winningRule === "") {
            this.pairWins();
        }
        if (this.winningRule === "") {
            this.highCardWins();
        }
        return this.winningRule;
    };
    Hand.prototype.highCardWins = function () {
        this.winningRule = "High Card: " + ((this.handArray[0].getValue() > 9) ? this.valueToStringObject[this.handArray[0].getValue()] : this.handArray[0].getValue());
    };
    Hand.prototype.threeOfAKindWins = function () {
        for (var i = 0; i < this.handArray.length - 2; i++) {
            if (this.handArray[i].getValue() === this.handArray[i + 1].getValue() && this.handArray[i].getValue() === this.handArray[i + 2].getValue()) {
                this.winningRule = "Three of a Kind";
            }
        }
    };
    Hand.prototype.pairWins = function () {
        for (var i = 0; i < this.handArray.length - 1; i++) {
            if (this.handArray[i].getValue() === this.handArray[i + 1].getValue()) {
                this.winningRule = "Pair";
            }
        }
    };
    return Hand;
}());
exports.Hand = Hand;
//# sourceMappingURL=Poker.js.map