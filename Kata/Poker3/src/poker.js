System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Poker, Hand;
    return {
        setters:[],
        execute: function() {
            class Poker {
                static getWinner(pokerHands) {
                    let hand1 = new Hand(pokerHands.slice(0, 21));
                    let hand2 = new Hand(pokerHands.slice(22, 43));
                    if (hand1.winningRule != hand2.winningRule) {
                        return this.handsHaveDifferentWinningConditions(hand1, hand2);
                    }
                    return this.bothHandsHaveSameWinningCondition(hand1, hand2);
                }
                static handsHaveDifferentWinningConditions(hand1, hand2) {
                    return this.ruleObject[hand1.winningRule] > this.ruleObject[hand2.winningRule]
                        ? hand1.winningString : hand2.winningString;
                }
                static bothHandsHaveSameWinningCondition(hand1, hand2) {
                    let winningString = "";
                    winningString += this.highPairWins(hand1, hand2);
                    if (winningString === "") {
                        winningString += this.highCardWins(hand1, hand2);
                    }
                    return winningString;
                }
                //refactor this
                static highPairWins(hand1, hand2) {
                    if (hand1.pairValue > hand2.pairValue) {
                        return hand1.winningString;
                    }
                    if (hand2.pairValue > hand1.pairValue) {
                        return hand2.winningString;
                    }
                    return "";
                }
                static highCardWins(hand1, hand2) {
                    let rule = "high card";
                    for (let i = 0; i < 5; i++) {
                        if (hand1.getCardNumberAtIndex(i) > hand2.getCardNumberAtIndex(i)) {
                            return hand1.getWinningString(rule, i);
                        }
                        if (hand2.getCardNumberAtIndex(i) > hand1.getCardNumberAtIndex(i)) {
                            return hand2.getWinningString(rule, i);
                        }
                    }
                    return "tie.";
                }
            }
            Poker.ruleObject = { "high card": 0, "pair": 1 };
            class Hand {
                constructor(pokerHand) {
                    this.hand = [];
                    this.cardValueToNumberObject = { "A": 14, "K": 13, "Q": 12, "J": 11, "T": 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2 };
                    this.cardNumberToStringObject = { 14: "Ace", 13: "King", 12: "Queen", 11: "Jack", 10: "Ten", 9: "9", 8: "8", 7: "7", 6: "6", 5: "5", 4: "4", 3: "3", 2: "2" };
                    this.ruleObject = { 0: "high card", 1: "pair" };
                    this.winningRule = "high card";
                    this.pairValue = 0;
                    this.playerColor = pokerHand.slice(0, 5);
                    let handString = pokerHand.slice(7, 30);
                    this.createHandArray(handString.split(" "));
                    this.convertFaceCardsToIntegers();
                    this.hand.sort(function (a, b) { return b[0] - a[0]; });
                    this.setPairValue();
                    this.determineBestHand();
                }
                createHandArray(hand) {
                    for (let i = 0; i < 5; i++) {
                        let card = [];
                        card.push(hand[i][0]);
                        card.push(hand[i][1]);
                        this.hand.push(card);
                    }
                }
                convertFaceCardsToIntegers() {
                    for (let i = 0; i < 5; i++) {
                        this.hand[i][0] = this.cardValueToNumberObject[this.hand[i][0]];
                    }
                }
                determineBestHand() {
                    if (this.pairValue > 0) {
                        this.winningRule = "pair";
                    }
                }
                setPairValue() {
                    for (let i = 0; i < this.hand.length - 1; i++) {
                        if (this.hand[i][0] === this.hand[i + 1][0]) {
                            this.pairValue = this.hand[i][0];
                            this.setWinningString("pair", this.pairValue);
                        }
                    }
                }
                getCardNumberAtIndex(index) {
                    return this.hand[index][0];
                }
                getCardValueAtIndex(index) {
                    return this.cardNumberToStringObject[this.hand[index][0]];
                }
                getWinningString(winningRule, index) {
                    return this.playerColor + " wins. - with " + winningRule + ": " + this.getCardValueAtIndex(index);
                }
                setWinningString(winningRule, value) {
                    this.winningString = this.playerColor + " wins. - with " + winningRule + ": " + this.cardNumberToStringObject[value];
                }
            }
            exports_1("Poker", Poker);
            exports_1("Hand", Hand);
        }
    }
});
//# sourceMappingURL=poker.js.map