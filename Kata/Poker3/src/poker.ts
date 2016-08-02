class Poker {
    static ruleObject: any = {"high card": 0, "pair": 1, "two pair": 2, "three of a kind": 3, "strait": 4, "flush": 5,
        "full house": 6, "four of a kind": 7, "strait flush": 8};

    static getWinner(pokerHands): string {
        let hand1: Hand = new Hand(pokerHands.slice(0, 21));
        let hand2: Hand = new Hand(pokerHands.slice(22, 43));
        return hand1.winningRule != hand2.winningRule
            ? this.differentWinningConditions(hand1, hand2) : this.sameWinningConditions(hand1, hand2);
    }

    static differentWinningConditions(hand1, hand2) {
        return this.winningRuleValue(hand1) > this.winningRuleValue(hand2)
            ? hand1.winningString : hand2.winningString;
    }

    static sameWinningConditions(hand1, hand2) {
        if (this.isTwoPair(hand1) && this.firstPairsAreTheSame(hand1, hand2)){
            hand1.setWinningCard(hand1.secondPairValue);
            hand2.setWinningCard(hand2.secondPairValue);
        }
        return this.higherSpecialCardWins(hand1, hand2);
    }

    static higherSpecialCardWins(hand1, hand2){
        if (hand1.winningCard > hand2.winningCard) {
            hand1.setWinningString(hand1.winningRule, hand1.winningCard);
            return hand1.winningString;
        }
        if (hand2.winningCard > hand1.winningCard) {
            hand2.setWinningString(hand2.winningRule, hand2.winningCard);
            return hand2.winningString;
        }
        return this.higherHighCardWins(hand1, hand2);
    }

    static higherHighCardWins(hand1, hand2) {
        let winningRule = hand1.flush === true ? "flush": "high card";
        for (let i = 0; i < 5; i++) {
            if (hand1.getCardNumberAtIndex(i) > hand2.getCardNumberAtIndex(i)) {
                return hand1.getWinningString(winningRule, i)
            }
            if (hand2.getCardNumberAtIndex(i) > hand1.getCardNumberAtIndex(i)) {
                return hand2.getWinningString(winningRule, i)
            }
        }
        return "tie.";
    }

    private static winningRuleValue(hand1) {
        return this.ruleObject[hand1.winningRule];
    }

    private static isTwoPair(hand1) {
        return hand1.winningRule === "two pair";
    }

    private static firstPairsAreTheSame(hand1:any, hand2:any) {
        return hand1.pairValue === hand2.pairValue;
    }
}

class Hand {
    playerColor: string;
    hand: any = [];
    cardValueToNumberObject: any = {"A": 14, "K": 13, "Q": 12, "J": 11, "T": 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2};
    cardNumberToStringObject: any = {14: "Ace", 13: "King", 12: "Queen", 11: "Jack", 10: "Ten", 9: "9", 8: "8", 7: "7", 6: "6", 5: "5", 4: "4", 3: "3", 2: "2"};
    winningRule: string = "high card";
    winningString: string = "";
    winningCard: number = 0;
    highCard: number = 0;
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
        this.setWinningRule();
    }

    setWinningRule() {
        this.setHighCard();
        this.checkForFlush();
        this.setStraitHighCard();
        this.setFourOfAKindValue();
        if (this.winningString === ""){this.setThreeOfAKindValue();}
        this.checkForFullHouse();
        if (this.winningString === ""){this.setPairValues();}
        if (this.flush && this.straitHighCard > 0){this.setStraitFlush();}
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
                this.winningCard = this.pairValue;
                this.setWinningString(this.winningRule, this.pairValue);
            }
        }
    }

    private setThreeOfAKindValue() {
        for (let i = 0; i < this.hand.length - 2; i++) {
            if (this.containsThreeOfAKind(i)){
                this.threeOfAKindValue = this.hand[i][0];
                this.winningRule = "three of a kind";
                this.winningCard = this.threeOfAKindValue;
                this.setWinningString(this.winningRule, this.threeOfAKindValue);
            }
        }
    }

    setFourOfAKindValue() {
        if(this.hand[1][0] === this.hand[3][0] && (this.hand[2][0] === this.hand[0][0] || this.hand[2][0] === this.hand[4][0]) ) {
            this.fourOfAKindValue = this.hand[2][0];
            this.winningRule = "four of a kind";
            this.winningCard = this.fourOfAKindValue;
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
            this.winningCard = this.highCard;
            this.setWinningString(this.winningRule, this.hand[0][0])
        }
    }

    checkForFullHouse() {
        if (this.threeOfAKindValue > 0) {
            for (let i = 0; i < 4; i++){
                if (this.areConsecutiveNumbersTheSame(i) && this.hand[i][0] != this.threeOfAKindValue){
                    this.fullHouse = true;
                    this.winningRule = "full house";
                    this.winningCard = this.threeOfAKindValue;
                    this.setWinningString(this.winningRule, this.threeOfAKindValue);
                }
            }
        }
    }

    setStraitFlush() {
        this.winningRule = "strait flush";
        this.winningCard = this.straitHighCard;
        this.setWinningString(this.winningRule, this.straitHighCard);
    }

    private setStraitAsTheWinningHand() {
        this.straitHighCard = this.hand[0][0];
        if (this.isAFiveHighStrait()) {
            this.straitHighCard = 5;
        }
        this.winningRule = "strait";
        this.winningCard = this.straitHighCard;
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
    setWinningCard(winningCard) {
        this.winningCard = winningCard;
    }

    private setHighCard() {
        this.highCard = this.hand[0][0];
    }
}

export {Poker, Hand}