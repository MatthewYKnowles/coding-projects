System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PokerHandNoPlayer, CountWinningHands, RatePokerHand;
    return {
        setters:[],
        execute: function() {
            class PokerHandNoPlayer {
                constructor(gameString) {
                    this._gameString = gameString;
                    this.createHands();
                    this.sortHands();
                    this.setWinningString();
                }
                setWinningString() {
                    let ratePokerHand = new RatePokerHand(this._handOne, this._handTwo);
                    let winningArray = ratePokerHand.getWinningArray();
                    if (winningArray == "tie") {
                        this._winningHand = "tie";
                    }
                    else {
                        this._winningHand = winningArray[0];
                    }
                }
                getWinningString() {
                    return this._winningHand;
                }
                createHands() {
                    let separatedHand = this._gameString.split(" ");
                    let handOneWithFaceCards = this.createHandArray(separatedHand.slice(0, 5));
                    let handTwoWithFaceCards = this.createHandArray(separatedHand.slice(5, 10));
                    this._handOne = this.convertFaceCardsToIntegers(handOneWithFaceCards);
                    this._handTwo = this.convertFaceCardsToIntegers(handTwoWithFaceCards);
                }
                sortHands() {
                    this._handOne.sort((a, b) => { return b[0] - a[0]; });
                    this._handTwo.sort((a, b) => { return b[0] - a[0]; });
                }
                createHandArray(hand) {
                    let handArray = [];
                    for (let i = 0; i < hand.length; i++) {
                        let card = [];
                        card.push(hand[i][0]);
                        card.push(hand[i][1]);
                        handArray.push(card);
                    }
                    return handArray;
                }
                convertFaceCardsToIntegers(hand) {
                    for (let i = 0; i < 5; i++) {
                        let currentCardValue = hand[i][0];
                        switch (currentCardValue) {
                            case "A":
                                hand[i][0] = 14;
                                break;
                            case "K":
                                hand[i][0] = 13;
                                break;
                            case "Q":
                                hand[i][0] = 12;
                                break;
                            case "J":
                                hand[i][0] = 11;
                                break;
                            case "T":
                                hand[i][0] = 10;
                                break;
                            default:
                                hand[i][0] = parseInt(currentCardValue);
                                break;
                        }
                    }
                    return hand;
                }
            }
            class CountWinningHands {
                constructor(file) {
                    this.pokerHands = this.readTextFile(file);
                    this.winningSummaryArray = this.calculateWinningHands();
                }
                readTextFile(file) {
                    let rawFile = new XMLHttpRequest();
                    let text = "";
                    rawFile.open("GET", file, false);
                    rawFile.onreadystatechange = function () {
                        text += rawFile.responseText;
                    };
                    rawFile.send(null);
                    return text;
                }
                calculateWinningHands() {
                    let hand1Wins = 0;
                    let hand2Wins = 0;
                    let ties = 0;
                    for (let i = 0; i < 1000; i++) {
                        let currentHands = this.pokerHands.slice(i * 30, (i + 1) * 30);
                        let pokerHandNoPlayer = new PokerHandNoPlayer(currentHands);
                        let winningString = pokerHandNoPlayer.getWinningString();
                        if (winningString === "hand1") {
                            hand1Wins += 1;
                        }
                        if (winningString === "hand2") {
                            hand2Wins += 1;
                        }
                        if (winningString === "tie") {
                            ties += 1;
                        }
                    }
                    return [hand1Wins, hand2Wins, ties];
                }
            }
            class RatePokerHand {
                constructor(hand1, hand2) {
                    this._winningArray = [];
                    this._cardValue = 0;
                    this._suitValue = 1;
                    this._hand1 = hand1;
                    this._hand2 = hand2;
                    this.determineWinningArray();
                }
                getWinningArray() {
                    return this._winningArray;
                }
                determineWinningArray() {
                    this.straitFlushWins();
                    if (this._winningArray.length == 0) {
                        this.fourOfAKindWins();
                    }
                    if (this._winningArray.length == 0) {
                        this.fullHouseWins();
                    }
                    if (this._winningArray.length == 0) {
                        this.flushWins();
                    }
                    if (this._winningArray.length == 0) {
                        this.straitWins();
                    }
                    if (this._winningArray.length == 0) {
                        this.threeOfAKindWins();
                    }
                    if (this._winningArray.length == 0) {
                        this.twoPairWins();
                    }
                    if (this._winningArray.length == 0) {
                        this.highCardWins();
                    }
                }
                highCardWins() {
                    let ruleName = "high card";
                    var hand1HighestCard = this._hand1[0][this._cardValue];
                    var hand2HighestCard = this._hand2[0][this._cardValue];
                    if (hand1HighestCard > hand2HighestCard) {
                        this._winningArray = ["hand1", ruleName, hand1HighestCard];
                    }
                    else if (hand2HighestCard > hand1HighestCard) {
                        this._winningArray = ["hand2", ruleName, hand2HighestCard];
                    }
                    else {
                        this.checkNextHighestCard();
                        if (this._winningArray.length === 0) {
                            this.highCardWins();
                        }
                    }
                }
                highPairWins() {
                    let ruleName = "Pair";
                    let hand1HighPair = this.valueOfPairInHand(this._hand1);
                    let hand2HighPair = this.valueOfPairInHand(this._hand2);
                    if (hand1HighPair > hand2HighPair) {
                        this._winningArray = ["hand1", ruleName, hand1HighPair];
                    }
                    if (hand2HighPair > hand1HighPair) {
                        this._winningArray = ["hand2", ruleName, hand2HighPair];
                    }
                }
                twoPairWins() {
                    let ruleName = "2 Pair";
                    let hand1PairArray = this.arrayOfPairValues(this._hand1);
                    let hand2PairArray = this.arrayOfPairValues(this._hand2);
                    if (hand1PairArray.length > hand2PairArray.length) {
                        this._winningArray = ["hand1", ruleName, hand1PairArray[0]];
                    }
                    else if (hand2PairArray.length > hand1PairArray.length) {
                        this._winningArray = ["hand2", ruleName, hand2PairArray[0]];
                    }
                    else {
                        this.highPairWins();
                    }
                }
                threeOfAKindWins() {
                    let ruleName = "3 of a Kind";
                    let hand1ThreeOfAKind = this.threeOfAKindValue(this._hand1);
                    let hand2ThreeOfAKind = this.threeOfAKindValue(this._hand2);
                    if (hand1ThreeOfAKind > hand2ThreeOfAKind) {
                        this._winningArray = ["hand1", ruleName, hand1ThreeOfAKind];
                    }
                    if (hand2ThreeOfAKind > hand1ThreeOfAKind) {
                        this._winningArray = ["hand2", ruleName, hand2ThreeOfAKind];
                    }
                }
                straitWins() {
                    let ruleName = "Strait";
                    let hand1Strait = this.hasAStrait(this._hand1);
                    let hand2Strait = this.hasAStrait(this._hand2);
                    if (hand1Strait) {
                        this._winningArray = ["hand1", ruleName, this.highestCard(this._hand1)];
                    }
                    if (hand2Strait) {
                        this._winningArray = ["hand2", ruleName, this.highestCard(this._hand2)];
                    }
                    if (hand1Strait && hand2Strait) {
                        this.higherStraitWins(ruleName);
                    }
                }
                flushWins() {
                    let ruleName = "Flush";
                    let hand1Flush = this.hasAFlush(this._hand1);
                    let hand2Flush = this.hasAFlush(this._hand2);
                    if (hand1Flush && !hand2Flush) {
                        this._winningArray = ["hand1", ruleName, this.highestCard(this._hand1)];
                    }
                    if (hand2Flush && !hand1Flush) {
                        this._winningArray = ["hand2", ruleName, this.highestCard(this._hand2)];
                    }
                    if (hand1Flush && hand2Flush) {
                        this.higherFlushWins();
                    }
                }
                fullHouseWins() {
                    let ruleName = "Full House";
                    let hand1FullHouse = this.hasAFullHouse(this._hand1);
                    let hand2FullHouse = this.hasAFullHouse(this._hand2);
                    let hand1ThreeOfAKind = this.threeOfAKindValue(this._hand1);
                    let hand2ThreeOfAKind = this.threeOfAKindValue(this._hand2);
                    if (hand1FullHouse && !hand2FullHouse) {
                        this._winningArray = ["hand1", ruleName, hand1ThreeOfAKind];
                    }
                    if (hand2FullHouse && !hand1FullHouse) {
                        this._winningArray = ["hand2", ruleName, hand2ThreeOfAKind];
                    }
                    if (hand1FullHouse && hand2FullHouse) {
                        if (hand1ThreeOfAKind > hand2ThreeOfAKind) {
                            this._winningArray = ["hand1", ruleName, hand1ThreeOfAKind];
                        }
                        if (hand2ThreeOfAKind > hand1ThreeOfAKind) {
                            this._winningArray = ["hand2", ruleName, hand1ThreeOfAKind];
                        }
                    }
                }
                fourOfAKindWins() {
                    let ruleName = "4 of a Kind";
                    let hand1FourOfKindValue = this.fourOfAKindValue(this._hand1);
                    let hand2FourOfKindValue = this.fourOfAKindValue(this._hand2);
                    if (hand1FourOfKindValue > hand2FourOfKindValue) {
                        this._winningArray = ["hand1", ruleName, hand1FourOfKindValue];
                    }
                    if (hand2FourOfKindValue > hand1FourOfKindValue) {
                        this._winningArray = ["hand2", ruleName, hand2FourOfKindValue];
                    }
                }
                straitFlushWins() {
                    let ruleName = "strait flush";
                    let hand1HasAStraitFlush = this.hasAStraitFlush(this._hand1);
                    let hand2HasAStraitFlush = this.hasAStraitFlush(this._hand2);
                    let hand1HighestCard = this.highestCard(this._hand1);
                    let hand2HighestCard = this.highestCard(this._hand2);
                    if (hand1HasAStraitFlush && !hand2HasAStraitFlush) {
                        this._winningArray = ["hand1", ruleName, hand1HighestCard];
                    }
                    if (hand2HasAStraitFlush && !hand1HasAStraitFlush) {
                        this._winningArray = ["hand2", ruleName, hand2HighestCard];
                    }
                    if (hand1HasAStraitFlush && hand2HasAStraitFlush) {
                        this.highCardWins();
                    }
                }
                hasAStraitFlush(hand) {
                    return this.hasAFlush(hand) && this.hasAStrait(hand);
                }
                fourOfAKindValue(hand) {
                    let fourOfAKindValue = 0;
                    if (hand[0][this._cardValue] === hand[3][this._cardValue] || hand[1][this._cardValue] === hand[4][this._cardValue]) {
                        fourOfAKindValue = hand[2][this._cardValue];
                    }
                    return fourOfAKindValue;
                }
                hasAFullHouse(hand) {
                    let temporaryHand = hand;
                    let threeOfAKindValue = this.threeOfAKindValue(temporaryHand);
                    let pairValue = 0;
                    if (threeOfAKindValue > 0) {
                        function notThreeOfAKindValue(value) { return value[0] != threeOfAKindValue; }
                        let handWithoutThreeOfAKind = temporaryHand.filter(notThreeOfAKindValue);
                        pairValue = this.valueOfPairInHand(handWithoutThreeOfAKind);
                    }
                    return pairValue > 0;
                }
                higherStraitWins(ruleName) {
                    let hand1HighCard = this.highestCard(this._hand1);
                    let hand2HighCard = this.highestCard(this._hand2);
                    if (hand1HighCard > hand2HighCard) {
                        this._winningArray = ["hand1", ruleName, hand1HighCard];
                    }
                    if (hand2HighCard > hand1HighCard) {
                        this._winningArray = ["hand2", ruleName, hand2HighCard];
                    }
                    if (hand1HighCard === hand2HighCard) {
                        this._winningArray = "tie";
                    }
                }
                higherStraitWins(ruleName) {
                    let hand1HighCard = this.highestCard(this._hand1);
                    let hand2HighCard = this.highestCard(this._hand2);
                    if (hand1HighCard > hand2HighCard) {
                        this._winningArray = ["hand1", ruleName, hand1HighCard];
                    }
                    if (hand2HighCard > hand1HighCard) {
                        this._winningArray = ["hand2", ruleName, hand2HighCard];
                    }
                    if (hand1HighCard === hand2HighCard) {
                        this._winningArray = "tie";
                    }
                }
                higherFlushWins() {
                    let ruleName = "Flush";
                    let hand1HighCard = this.highestCard(this._hand1);
                    let hand2HighCard = this.highestCard(this._hand2);
                    if (hand1HighCard > hand2HighCard) {
                        this._winningArray = ["hand1", ruleName, hand1HighCard];
                    }
                    else if (hand2HighCard > hand1HighCard) {
                        this._winningArray = ["hand2", ruleName, hand2HighCard];
                    }
                    else {
                        this.checkNextHighestCard();
                        if (this._winningArray.length === 0) {
                            this.higherFlushWins();
                        }
                    }
                }
                hasAFlush(hand) {
                    let cardsWithSameSuit = 1;
                    for (let i = 1; i < 5; i++) {
                        if (hand[0][this._suitValue] === hand[i][this._suitValue]) {
                            cardsWithSameSuit += 1;
                        }
                    }
                    return cardsWithSameSuit === 5;
                }
                hasAStrait(hand) {
                    let consecutiveNumbers = 1;
                    for (let i = 0; i < 4; i++) {
                        if (hand[i][this._cardValue] - 1 === hand[i + 1][this._cardValue]) {
                            consecutiveNumbers += 1;
                        }
                    }
                    return consecutiveNumbers === 5;
                }
                threeOfAKindValue(hand) {
                    let threeOfAKindValue = 0;
                    for (let i = 0; i < hand.length - 2; i++) {
                        if (hand[i][this._cardValue] === hand[i + 1][this._cardValue] && hand[i][this._cardValue] === hand[i + 2][this._cardValue]) {
                            threeOfAKindValue = hand[i][this._cardValue];
                        }
                    }
                    return threeOfAKindValue;
                }
                arrayOfPairValues(hand) {
                    let firstPair = this.valueOfPairInHand(hand);
                    return this.checkForSecondPair(hand, firstPair);
                }
                checkForSecondPair(hand, firstPair) {
                    let handWithoutFirstPair = hand.filter((a) => a[0] != firstPair);
                    if (this.valueOfPairInHand(handWithoutFirstPair) > 0) {
                        return [this.valueOfPairInHand(handWithoutFirstPair), firstPair];
                    }
                    return [firstPair];
                }
                highestCard(hand) {
                    return hand[0][this._cardValue];
                }
                valueOfPairInHand(cardsInHand) {
                    var handPairValue = 0;
                    for (let i = cardsInHand.length - 1; i >= 1; i--) {
                        if (this.areTwoConsecutiveCardsTheSame(cardsInHand, i)) {
                            handPairValue = cardsInHand[i][this._cardValue];
                        }
                    }
                    return handPairValue;
                }
                areTwoConsecutiveCardsTheSame(hand, index) {
                    return hand[index][this._cardValue] === hand[index - 1][this._cardValue];
                }
                checkNextHighestCard() {
                    this._hand1.shift();
                    this._hand2.shift();
                    if (this._hand1.length === 0) {
                        this._winningArray = "tie";
                    }
                }
            }
            exports_1("PokerHandNoPlayer", PokerHandNoPlayer);
            exports_1("CountWinningHands", CountWinningHands);
        }
    }
});
//# sourceMappingURL=pokerhand.js.map