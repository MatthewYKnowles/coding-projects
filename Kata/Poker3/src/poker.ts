class Poker {
    static ruleObject: any = {"high card": 0, "pair": 1, "two pair": 2, "three of a kind": 3, "strait": 4, "flush": 5, "full house": 6, "four of a kind": 7};
    static getWinner(pokerHands): string {
        let hand1: Hand = new Hand(pokerHands.slice(0, 21));
        let hand2: Hand = new Hand(pokerHands.slice(22, 43));
        if (hand1.winningRule != hand2.winningRule){
            return this.handsHaveDifferentWinningConditions(hand1, hand2);
        }
        return this.bothHandsHaveSameWinningCondition(hand1, hand2);
    }

    static handsHaveDifferentWinningConditions(hand1, hand2) {
        return this.ruleObject[hand1.winningRule] > this.ruleObject[hand2.winningRule]
            ? hand1.winningString : hand2.winningString;
    }

    static bothHandsHaveSameWinningCondition(hand1, hand2) {
        let winningString: string = "";
        winningString += this.higherFullHouseWins(hand1, hand2);
        if (hand1.flush === true) {winningString += this.handWithHigherCardWins(hand1, hand2, "flush");}
        if (winningString === "") {winningString += this.higherStraitWins(hand1, hand2);}
        if (winningString === "") {winningString += this.highTwoPairWins(hand1, hand2);}
        if (winningString === "") {winningString += this.highPairWins(hand1, hand2);}
        if (winningString === "") {winningString += this.handWithHigherCardWins(hand1, hand2, "high card");}
        return winningString;
    }

    static handWithHigherCardWins(hand1, hand2, rule) {
        for (let i = 0; i < 5; i++) {
            if (hand1.getCardNumberAtIndex(i) > hand2.getCardNumberAtIndex(i)) {
                return hand1.getWinningString(rule, i)
            }
            if (hand2.getCardNumberAtIndex(i) > hand1.getCardNumberAtIndex(i)) {
                return hand2.getWinningString(rule, i)
            }
        }
        return "tie.";
    }

    static highPairWins(hand1, hand2) {
        return this.higherSpecialCardWins(hand1.pairValue, hand2.pairValue, hand1, hand2);
    }

    private static higherStraitWins(hand1:any, hand2:any) {
        return this.higherSpecialCardWins(hand1.straitHighCard, hand2.straitHighCard, hand1, hand2);
    }

    private static highTwoPairWins(hand1:any, hand2:any) {
        let rule = "two pair";
        if (hand1.secondPairValue > hand2.secondPairValue) {
            hand1.setWinningString(rule, hand1.secondPairValue);
            return hand1.winningString;
        }
        if (hand2.secondPairValue > hand1.secondPairValue) {
            hand2.setWinningString(rule, hand2.secondPairValue);
            return hand2.winningString;
        }
        return "";
    }

    static higherFullHouseWins(hand1, hand2) {
        return this.higherSpecialCardWins(hand1.threeOfAKindValue, hand2.threeOfAKindValue, hand1, hand2);
    }

    static higherSpecialCardWins(hand1Card, hand2Card, hand1, hand2){
        if (hand1Card > hand2Card) {
            return hand1.winningString;
        }
        if (hand2Card > hand1Card) {
            return hand2.winningString;
        }
        return "";
    }
}

class Hand {
    playerColor: string;
    hand: any = [];
    cardValueToNumberObject: any = {"A": 14, "K": 13, "Q": 12, "J": 11, "T": 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2};
    cardNumberToStringObject: any = {14: "Ace", 13: "King", 12: "Queen", 11: "Jack", 10: "Ten", 9: "9", 8: "8", 7: "7", 6: "6", 5: "5", 4: "4", 3: "3", 2: "2"};
    winningRule: string = "high card";
    winningString: string = "";
    pairValue: number = 0;
    secondPairValue: number = 0;
    threeOfAKindValue: number = 0;
    fourOfAKindValue: number = 0;
    straitHighCard: number = 0;
    flush: boolean = false;
    fullHouse: boolean = false;

    constructor(pokerHand) {
        this.playerColor = pokerHand.slice(0, 5);
        let handString = pokerHand.slice(7, 30);
        this.createHandArray(handString.split(" "));
        this.convertFaceCardsToIntegers();
        this.hand.sort(function(a,b) {return b[0] - a[0]});
        this.checkForFlush();
        this.setStraitHighCard();
        this.setFourOfAKindValue();
        if (this.winningString === ""){this.setThreeOfAKindValue();}
        this.checkForFullHouse();
        if (this.winningString === ""){this.setPairValues();}
    }

    createHandArray(hand) {
        for (let i = 0; i < 5; i++) {
            let card = [];
            card.push(hand[i][0]);
            card.push(hand[i][1]);
            this.hand.push(card);
        }
    }
    convertFaceCardsToIntegers(): any {
        for (let i = 0; i < 5; i++) {this.hand[i][0] = this.cardValueToNumberObject[this.hand[i][0]];}
    }
    setPairValues() {
        for (let i = 0; i < this.hand.length - 1; i++) {
            if (this.isSecondPair(i)){
                this.secondPairValue = this.hand[i][0];
                this.winningRule = "two pair";
                this.setWinningString(this.winningRule, this.pairValue);
            }

            if (this.isFirstPair(i)){
                this.pairValue = this.hand[i][0];
                this.winningRule = "pair";
                this.setWinningString(this.winningRule, this.pairValue);
            }
        }
    }

    private setThreeOfAKindValue() {
        for (let i = 0; i < this.hand.length - 2; i++) {
            if (this.containsThreeOfAKind(i)){
                this.threeOfAKindValue = this.hand[i][0];
                this.winningRule = "three of a kind";
                this.setWinningString(this.winningRule, this.threeOfAKindValue);
            }
        }
    }

    setFourOfAKindValue() {
        if(this.hand[1][0] === this.hand[3][0] && (this.hand[2][0] === this.hand[0][0] || this.hand[2][0] === this.hand[4][0]) ) {
            this.fourOfAKindValue = this.hand[2][0];
            this.winningRule = "four of a kind";
            this.setWinningString(this.winningRule, this.fourOfAKindValue);
        }
    }

    private setStraitHighCard() {
        let consecutiveNumbers: number = 1;
        if (this.hasAceNextToFive()){
            consecutiveNumbers++;
        }
        for (let i = 0; i < 4; i++) {
            if (this.secondNumberIsOneLessThanPreviousNumber(i)){
                consecutiveNumbers++;
            }
        }
        if (this.containsAStrait(consecutiveNumbers)) {
            this.setStraitAsTheWinningHand();
        }
    }

    checkForFlush() {
        let sameSuit = 1;
        for (let i = 0; i < 4; i++) {
            if (this.hand[i][1] === this.hand[i + 1][1]){
                sameSuit ++;
            }
        }
        if (sameSuit === 5) {
            this.flush = true;
            this.winningRule = "flush";
            this.setWinningString(this.winningRule, this.hand[0][0])
        }
    }

    checkForFullHouse() {
        if (this.threeOfAKindValue > 0) {
            for (let i = 0; i < 4; i++){
                if (this.areConsecutiveNumbersTheSame(i) && this.hand[i][0] != this.threeOfAKindValue){
                    this.fullHouse = true;
                    this.winningRule = "full house";
                    this.setWinningString(this.winningRule, this.threeOfAKindValue);
                }
            }
        }
    }

    private setStraitAsTheWinningHand() {
        this.straitHighCard = this.hand[0][0];
        if (this.isAFiveHighStrait()) {
            this.straitHighCard = 5;
        }
        this.winningRule = "strait";
        this.setWinningString(this.winningRule, this.straitHighCard);
    }

    private containsAStrait(consecutiveNumbers:number) {
        return consecutiveNumbers === 5;
    }

    private isAFiveHighStrait() {
        return this.hand[1][0] === 5;
    }

    private hasAceNextToFive() {
        return this.hand[0][0] === 14 && this.hand[1][0] === 5;
    }

    getCardNumberAtIndex(index) {
        return this.hand[index][0];
    }
    getCardValueAtIndex(index) {
        return this.cardNumberToStringObject[this.hand[index][0]];
    }
    getWinningString(winningRule, index){
        return this.playerColor + " wins. - with " + winningRule + ": " + this.getCardValueAtIndex(index);
    }
    setWinningString(winningRule, value){
        this.winningString = this.playerColor + " wins. - with " + winningRule + ": " + this.cardNumberToStringObject[value];
    }
    private isFirstPair(i:number) {
        return this.hand[i][0] === this.hand[i + 1][0] && this.pairValue === 0;
    }
    private isSecondPair(i:number) {
        return this.hand[i][0] === this.hand[i + 1][0] && this.pairValue != 0;
    }
    private containsThreeOfAKind(i:number) {
        return this.hand[i][0] === this.hand[i + 1][0] && this.hand[i][0] === this.hand[i + 2][0];
    }
    private secondNumberIsOneLessThanPreviousNumber(i:number) {
        return this.hand[i][0] - 1 === this.hand[i + 1][0];
    }
    private areConsecutiveNumbersTheSame(i:number) {
        return this.hand[i][0] === this.hand[i + 1][0];
    }
}

export {Poker, Hand}