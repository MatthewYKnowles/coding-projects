"use strict";
var Poker = (function () {
    function Poker() {
    }
    Poker.getWinner = function (pokerHands) {
        var hand1 = new Hand(pokerHands.slice(0, 21));
        var hand2 = new Hand(pokerHands.slice(22, 43));
        console.log(hand1.winningRule + " hand1");
        console.log(hand2.winningRule + " hand2");
        if (hand1.winningRule != hand2.winningRule) {
            return this.handsHaveDifferentWinningConditions(hand1, hand2);
        }
        return this.bothHandsHaveSameWinningCondition(hand1, hand2);
    };
    Poker.handsHaveDifferentWinningConditions = function (hand1, hand2) {
        return this.ruleObject[hand1.winningRule] > this.ruleObject[hand2.winningRule]
            ? hand1.winningString : hand2.winningString;
    };
    Poker.bothHandsHaveSameWinningCondition = function (hand1, hand2) {
        var winningString = "";
        if (winningString === "") {
            winningString += this.highTwoPairWins(hand1, hand2);
        }
        if (winningString === "") {
            winningString += this.highPairWins(hand1, hand2);
        }
        if (winningString === "") {
            winningString += this.highCardWins(hand1, hand2);
        }
        return winningString;
    };
    Poker.highCardWins = function (hand1, hand2) {
        var rule = "high card";
        for (var i = 0; i < 5; i++) {
            if (hand1.getCardNumberAtIndex(i) > hand2.getCardNumberAtIndex(i)) {
                return hand1.getWinningString(rule, i);
            }
            if (hand2.getCardNumberAtIndex(i) > hand1.getCardNumberAtIndex(i)) {
                return hand2.getWinningString(rule, i);
            }
        }
        return "tie.";
    };
    Poker.highPairWins = function (hand1, hand2) {
        if (hand1.pairValue > hand2.pairValue) {
            return hand1.winningString;
        }
        if (hand2.pairValue > hand1.pairValue) {
            return hand2.winningString;
        }
        return "";
    };
    Poker.highTwoPairWins = function (hand1, hand2) {
        var rule = "two pair";
        if (hand1.secondPairValue > hand2.secondPairValue) {
            hand1.setWinningString(rule, hand1.secondPairValue);
            return hand1.winningString;
        }
        if (hand2.secondPairValue > hand1.secondPairValue) {
            hand2.setWinningString(rule, hand2.secondPairValue);
            return hand2.winningString;
        }
        return "";
    };
    Poker.ruleObject = { "high card": 0, "pair": 1, "two pair": 2, "three of a kind": 3, "strait": 4 };
    return Poker;
}());
exports.Poker = Poker;
var Hand = (function () {
    function Hand(pokerHand) {
        this.hand = [];
        this.cardValueToNumberObject = { "A": 14, "K": 13, "Q": 12, "J": 11, "T": 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2 };
        this.cardNumberToStringObject = { 14: "Ace", 13: "King", 12: "Queen", 11: "Jack", 10: "Ten", 9: "9", 8: "8", 7: "7", 6: "6", 5: "5", 4: "4", 3: "3", 2: "2" };
        this.winningRule = "high card";
        this.winningString = "";
        this.pairValue = 0;
        this.secondPairValue = 0;
        this.threeOfAKindValue = 0;
        this.straitHighCard = 0;
        this.playerColor = pokerHand.slice(0, 5);
        var handString = pokerHand.slice(7, 30);
        this.createHandArray(handString.split(" "));
        this.convertFaceCardsToIntegers();
        this.hand.sort(function (a, b) { return b[0] - a[0]; });
        this.setStraitHighCard();
        this.setThreeOfAKindValue();
        if (this.winningString === "") {
            this.setPairValues();
        }
    }
    Hand.prototype.createHandArray = function (hand) {
        for (var i = 0; i < 5; i++) {
            var card = [];
            card.push(hand[i][0]);
            card.push(hand[i][1]);
            this.hand.push(card);
        }
    };
    Hand.prototype.convertFaceCardsToIntegers = function () {
        for (var i = 0; i < 5; i++) {
            this.hand[i][0] = this.cardValueToNumberObject[this.hand[i][0]];
        }
    };
    Hand.prototype.setPairValues = function () {
        for (var i = 0; i < this.hand.length - 1; i++) {
            if (this.isSecondPair(i)) {
                this.secondPairValue = this.hand[i][0];
                this.winningRule = "two pair";
                this.setWinningString(this.winningRule, this.pairValue);
            }
            if (this.isFirstPair(i)) {
                this.pairValue = this.hand[i][0];
                this.winningRule = "pair";
                this.setWinningString(this.winningRule, this.pairValue);
            }
        }
    };
    Hand.prototype.setThreeOfAKindValue = function () {
        for (var i = 0; i < this.hand.length - 2; i++) {
            if (this.containsThreeOfAKind(i)) {
                this.threeOfAKindValue = this.hand[i][0];
                this.winningRule = "three of a kind";
                this.setWinningString(this.winningRule, this.threeOfAKindValue);
            }
        }
    };
    Hand.prototype.setStraitHighCard = function () {
        var consecutiveNumbers = 1;
        for (var i = 0; i < 4; i++) {
            if (this.twoConsecutiveNumbersAreTheSame(i)) {
                consecutiveNumbers++;
            }
        }
        if (consecutiveNumbers === 5) {
            this.straitHighCard = this.hand[0][0];
            this.winningRule = "strait";
            this.setWinningString(this.winningRule, this.straitHighCard);
        }
    };
    Hand.prototype.getCardNumberAtIndex = function (index) {
        return this.hand[index][0];
    };
    Hand.prototype.getCardValueAtIndex = function (index) {
        return this.cardNumberToStringObject[this.hand[index][0]];
    };
    Hand.prototype.getWinningString = function (winningRule, index) {
        return this.playerColor + " wins. - with " + winningRule + ": " + this.getCardValueAtIndex(index);
    };
    Hand.prototype.setWinningString = function (winningRule, value) {
        this.winningString = this.playerColor + " wins. - with " + winningRule + ": " + this.cardNumberToStringObject[value];
    };
    Hand.prototype.isFirstPair = function (i) {
        return this.hand[i][0] === this.hand[i + 1][0] && this.pairValue === 0;
    };
    Hand.prototype.isSecondPair = function (i) {
        return this.hand[i][0] === this.hand[i + 1][0] && this.pairValue != 0;
    };
    Hand.prototype.containsThreeOfAKind = function (i) {
        return this.hand[i][0] === this.hand[i + 1][0] && this.hand[i][0] === this.hand[i + 2][0];
    };
    Hand.prototype.twoConsecutiveNumbersAreTheSame = function (i) {
        return this.hand[i][0] - 1 === this.hand[i + 1][0];
    };
    return Hand;
}());
exports.Hand = Hand;
//# sourceMappingURL=poker.js.map