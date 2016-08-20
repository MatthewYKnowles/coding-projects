"use strict";
var Card = (function () {
    function Card(card) {
        this.faceCardToInt = { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14 };
        this.value = this.faceCardToInt[card[0]];
        this.suit = card[1];
    }
    Card.prototype.getValue = function () {
        return this.value;
    };
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    return Card;
}());
exports.Card = Card;
var Hand = (function () {
    function Hand(hand) {
        this.handArray = [];
        this.createHandObject(hand);
        this.sortHandArray();
    }
    Hand.prototype.sortHandArray = function () {
        this.handArray.sort(function (a, b) {
            return b.getValue() - a.getValue();
        });
    };
    Hand.prototype.createHandObject = function (hand) {
        var handOfCards = hand.split(" ");
        for (var i = 0; i < 5; i++) {
            this.handArray.push(new Card(handOfCards[i]));
        }
    };
    Hand.prototype.getHighestValue = function () {
        return this.handArray[0].getValue();
    };
    Hand.prototype.getWinningRule = function () {
        if (this.handArray[0].getValue() === this.handArray[1].getValue()) {
            return "Two Pair";
        }
        if (this.hasFlush()) {
            return "Flush";
        }
        if (this.hasAPair()) {
            return "Pair";
        }
        return "High Card";
    };
    Hand.prototype.hasFlush = function () {
        var sameSuit = 1;
        for (var i = 0; i < this.handArray.length - 1; i++) {
            if (this.handArray[i].getSuit() === this.handArray[i + 1].getSuit()) {
                sameSuit++;
            }
        }
        return sameSuit === 5;
    };
    Hand.prototype.hasAPair = function () {
        for (var i = 0; i < this.handArray.length - 1; i++) {
            if (this.handArray[i].getValue() === this.handArray[i + 1].getValue()) {
                return true;
            }
        }
    };
    return Hand;
}());
exports.Hand = Hand;
//# sourceMappingURL=Poker.js.map