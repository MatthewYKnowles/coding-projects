"use strict";
var Poker = (function () {
    function Poker() {
    }
    Poker.getWinner = function (pokerHands) {
        var hand1 = new Hand(pokerHands.slice(0, 21));
        var hand2 = new Hand(pokerHands.slice(22, 43));
        return hand1.winningRule != hand2.winningRule
            ? this.differentWinningConditions(hand1, hand2) : this.sameWinningConditions(hand1, hand2);
    };
    Poker.differentWinningConditions = function (hand1, hand2) {
        return this.winningRuleValue(hand1) > this.winningRuleValue(hand2)
            ? hand1.winningString : hand2.winningString;
    };
    Poker.sameWinningConditions = function (hand1, hand2) {
        if (this.isTwoPair(hand1) && this.firstPairsAreTheSame(hand1, hand2)) {
            hand1.setWinningCard(hand1.secondPairValue);
            hand2.setWinningCard(hand2.secondPairValue);
        }
        return this.higherSpecialCardWins(hand1, hand2);
    };
    Poker.higherSpecialCardWins = function (hand1, hand2) {
        if (hand1.winningCard > hand2.winningCard) {
            hand1.setWinningString(hand1.winningRule, hand1.winningCard);
            return hand1.winningString;
        }
        if (hand2.winningCard > hand1.winningCard) {
            hand2.setWinningString(hand2.winningRule, hand2.winningCard);
            return hand2.winningString;
        }
        return this.higherHighCardWins(hand1, hand2);
    };
    Poker.higherHighCardWins = function (hand1, hand2) {
        var winningRule = hand1.flush === true ? "flush" : "high card";
        for (var i = 0; i < 5; i++) {
            if (hand1.getCardNumberAtIndex(i) > hand2.getCardNumberAtIndex(i)) {
                return hand1.getWinningString(winningRule, i);
            }
            if (hand2.getCardNumberAtIndex(i) > hand1.getCardNumberAtIndex(i)) {
                return hand2.getWinningString(winningRule, i);
            }
        }
        return "tie.";
    };
    Poker.winningRuleValue = function (hand1) {
        return this.ruleObject[hand1.winningRule];
    };
    Poker.isTwoPair = function (hand1) {
        return hand1.winningRule === "two pair";
    };
    Poker.firstPairsAreTheSame = function (hand1, hand2) {
        return hand1.pairValue === hand2.pairValue;
    };
    Poker.ruleObject = { "high card": 0, "pair": 1, "two pair": 2, "three of a kind": 3, "strait": 4, "flush": 5,
        "full house": 6, "four of a kind": 7, "strait flush": 8 };
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
        this.winningCard = 0;
        this.highCard = 0;
        this.pairValue = 0;
        this.secondPairValue = 0;
        this.threeOfAKindValue = 0;
        this.fourOfAKindValue = 0;
        this.straitHighCard = 0;
        this.flush = false;
        this.fullHouse = false;
        this.playerColor = pokerHand.slice(0, 5);
        var handString = pokerHand.slice(7, 30);
        this.createHandArray(handString.split(" "));
        this.convertFaceCardsToIntegers();
        this.hand.sort(function (a, b) { return b[0] - a[0]; });
        this.setWinningRule();
    }
    Hand.prototype.setWinningRule = function () {
        this.setHighCard();
        this.checkForFlush();
        this.setStraitHighCard();
        this.setFourOfAKindValue();
        if (this.winningString === "") {
            this.setThreeOfAKindValue();
        }
        this.checkForFullHouse();
        if (this.winningString === "") {
            this.setPairValues();
        }
        if (this.flush && this.straitHighCard > 0) {
            this.setStraitFlush();
        }
    };
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
                this.winningCard = this.pairValue;
                this.setWinningString(this.winningRule, this.pairValue);
            }
        }
    };
    Hand.prototype.setThreeOfAKindValue = function () {
        for (var i = 0; i < this.hand.length - 2; i++) {
            if (this.containsThreeOfAKind(i)) {
                this.threeOfAKindValue = this.hand[i][0];
                this.winningRule = "three of a kind";
                this.winningCard = this.threeOfAKindValue;
                this.setWinningString(this.winningRule, this.threeOfAKindValue);
            }
        }
    };
    Hand.prototype.setFourOfAKindValue = function () {
        if (this.hand[1][0] === this.hand[3][0] && (this.hand[2][0] === this.hand[0][0] || this.hand[2][0] === this.hand[4][0])) {
            this.fourOfAKindValue = this.hand[2][0];
            this.winningRule = "four of a kind";
            this.winningCard = this.fourOfAKindValue;
            this.setWinningString(this.winningRule, this.fourOfAKindValue);
        }
    };
    Hand.prototype.setStraitHighCard = function () {
        var consecutiveNumbers = 1;
        if (this.hasAceNextToFive()) {
            consecutiveNumbers++;
        }
        for (var i = 0; i < 4; i++) {
            if (this.secondNumberIsOneLessThanPreviousNumber(i)) {
                consecutiveNumbers++;
            }
        }
        if (this.containsAStrait(consecutiveNumbers)) {
            this.setStraitAsTheWinningHand();
        }
    };
    Hand.prototype.checkForFlush = function () {
        var sameSuit = 1;
        for (var i = 0; i < 4; i++) {
            if (this.hand[i][1] === this.hand[i + 1][1]) {
                sameSuit++;
            }
        }
        if (sameSuit === 5) {
            this.flush = true;
            this.winningRule = "flush";
            this.winningCard = this.highCard;
            this.setWinningString(this.winningRule, this.hand[0][0]);
        }
    };
    Hand.prototype.checkForFullHouse = function () {
        if (this.threeOfAKindValue > 0) {
            for (var i = 0; i < 4; i++) {
                if (this.areConsecutiveNumbersTheSame(i) && this.hand[i][0] != this.threeOfAKindValue) {
                    this.fullHouse = true;
                    this.winningRule = "full house";
                    this.winningCard = this.threeOfAKindValue;
                    this.setWinningString(this.winningRule, this.threeOfAKindValue);
                }
            }
        }
    };
    Hand.prototype.setStraitFlush = function () {
        this.winningRule = "strait flush";
        this.winningCard = this.straitHighCard;
        this.setWinningString(this.winningRule, this.straitHighCard);
    };
    Hand.prototype.setStraitAsTheWinningHand = function () {
        this.straitHighCard = this.hand[0][0];
        if (this.isAFiveHighStrait()) {
            this.straitHighCard = 5;
        }
        this.winningRule = "strait";
        this.winningCard = this.straitHighCard;
        this.setWinningString(this.winningRule, this.straitHighCard);
    };
    Hand.prototype.containsAStrait = function (consecutiveNumbers) {
        return consecutiveNumbers === 5;
    };
    Hand.prototype.isAFiveHighStrait = function () {
        return this.hand[1][0] === 5;
    };
    Hand.prototype.hasAceNextToFive = function () {
        return this.hand[0][0] === 14 && this.hand[1][0] === 5;
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
    Hand.prototype.secondNumberIsOneLessThanPreviousNumber = function (i) {
        return this.hand[i][0] - 1 === this.hand[i + 1][0];
    };
    Hand.prototype.areConsecutiveNumbersTheSame = function (i) {
        return this.hand[i][0] === this.hand[i + 1][0];
    };
    Hand.prototype.setWinningCard = function (winningCard) {
        this.winningCard = winningCard;
    };
    Hand.prototype.setHighCard = function () {
        this.highCard = this.hand[0][0];
    };
    return Hand;
}());
exports.Hand = Hand;
//# sourceMappingURL=poker.js.map