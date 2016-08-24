"use strict";
var Card = (function () {
    function Card(card) {
        this.specialToValueObject = { "T": 10, "J": 11 };
        this.value = (card[0] <= 9) ? parseInt(card[0]) : this.specialToValueObject[card[0]];
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
        this.specialToNameObject = { 10: "Ten", 11: "Jack" };
        this.hand = hand;
        var splitHand = hand.split(" ");
        for (var i = 0; i < splitHand.length; i++) {
            this.handArray.push(new Card(splitHand[i]));
        }
        this.handArray.sort(function (a, b) { return b.getValue() - a.getValue(); });
    }
    Hand.prototype.getHighCard = function () {
        if (this.handArray[0].getValue() >= 10) {
            return this.specialToNameObject[this.handArray[0].getValue()];
        }
        return this.handArray[0].getValue().toString();
    };
    Hand.prototype.getWinningRule = function () {
        if (this.hasStrait()) {
            return "Strait Flush";
        }
        if (this.hasFlush()) {
            return "Flush";
        }
        if (this.hasTwoPair()) {
            return "Two Pair Wins";
        }
        return "High Card Wins: " + this.getHighCard();
    };
    Hand.prototype.hasStrait = function () {
        var consecutiveNumbers = 1;
        for (var i = 0; i < this.handArray.length - 1; i++) {
            if (this.handArray[i].getValue() - this.handArray[i + 1].getValue() === 1) {
                consecutiveNumbers++;
            }
        }
        return consecutiveNumbers === 5;
    };
    Hand.prototype.hasFlush = function () {
        var sameSuitCount = 1;
        for (var i = 0; i < this.handArray.length - 1; i++) {
            if (this.handArray[i].getSuit() === this.handArray[i + 1].getSuit()) {
                sameSuitCount++;
            }
        }
        return sameSuitCount === 5;
    };
    Hand.prototype.hasTwoPair = function () {
        var hasPair = false;
        for (var i = 0; i < this.handArray.length - 1; i++) {
            if (this.twoConsecutiveNumbersAreTheSame(i) && hasPair) {
                return true;
            }
            if (this.twoConsecutiveNumbersAreTheSame(i)) {
                hasPair = true;
            }
        }
    };
    Hand.prototype.twoConsecutiveNumbersAreTheSame = function (i) {
        return this.handArray[i].getValue() === this.handArray[i + 1].getValue();
    };
    return Hand;
}());
exports.Hand = Hand;
//# sourceMappingURL=Poker.js.map