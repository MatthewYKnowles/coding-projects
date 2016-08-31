"use strict";
var Card = (function () {
    function Card(card) {
        this.specialCardToValueObject = { "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14 };
        var cardValue = card[0];
        this._value = parseInt(cardValue) ? parseInt(cardValue) : this.specialCardToValueObject[cardValue];
    }
    Card.prototype.getValue = function () {
        return this._value;
    };
    return Card;
}());
exports.Card = Card;
var Hand = (function () {
    function Hand(hand) {
        this._handArray = [];
        this.createSortedHandArray(hand);
    }
    Hand.prototype.createSortedHandArray = function (hand) {
        var splitHand = hand.split(" ");
        this._handArray = splitHand.map(function (card) { return new Card(card); });
        this.sortHandArray();
    };
    Hand.prototype.sortHandArray = function () {
        this._handArray.sort(function (a, b) { return b.getValue() - a.getValue(); });
    };
    Hand.prototype.getWinningRule = function () {
        if (this.hasAStrait()) {
            return "Strait";
        }
        if (this.hasFullHouse()) {
            return "Full House";
        }
        if (this.hasTwoPair()) {
            return "Two Pair";
        }
        return "";
    };
    Hand.prototype.hasAStrait = function () {
        var consecutiveNumbers = 1;
        for (var i = 0; i < this._handArray.length - 1; i++) {
            if (this.cardValuesAreDecendingByOne(i)) {
                consecutiveNumbers++;
            }
        }
        return consecutiveNumbers === 5;
    };
    Hand.prototype.cardValuesAreDecendingByOne = function (i) {
        return this._handArray[i].getValue() === this._handArray[i + 1].getValue() + 1;
    };
    Hand.prototype.hasFullHouse = function () {
        return this.hasThreeOfAKind() && this.hasAPairWithDifferentValueThanThreeOfAKind();
    };
    Hand.prototype.hasThreeOfAKind = function () {
        var sameNumbers = this._handArray.reduce(function (acc, current) {
            var newSameNumber = (acc.prev === current.getValue()) ? acc.sameNumber + 1 : acc.sameNumber;
            return { prev: current.getValue(), sameNumber: newSameNumber };
        }, { prev: 0, sameNumber: 0 });
        this.threeOfAKindValue = this._handArray[2].getValue();
        return sameNumbers.sameNumber === 3;
    };
    Hand.prototype.hasAPairWithDifferentValueThanThreeOfAKind = function () {
        var sameNonThreeOfAKindNumbers = 0;
        for (var i = 0; i < this._handArray.length - 1; i++) {
            if (this._handArray[i].getValue() === this._handArray[i + 1].getValue() && this._handArray[i + 1].getValue() !== this.threeOfAKindValue) {
                sameNonThreeOfAKindNumbers++;
            }
        }
        return sameNonThreeOfAKindNumbers === 1;
    };
    Hand.prototype.hasTwoPair = function () {
        var firstPair = false;
        var twoPair = false;
        for (var i = 0; i < this._handArray.length - 1; i++) {
            if (this.twoConsecutiveValuesAreTheSame(i) && firstPair === true) {
                twoPair = true;
            }
            if (this.twoConsecutiveValuesAreTheSame(i)) {
                firstPair = true;
            }
        }
        return twoPair;
    };
    Hand.prototype.twoConsecutiveValuesAreTheSame = function (i) {
        return this._handArray[i].getValue() === this._handArray[i + 1].getValue();
    };
    return Hand;
}());
exports.Hand = Hand;
//# sourceMappingURL=Poker.js.map