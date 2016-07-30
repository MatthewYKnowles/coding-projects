class Poker {
    static ruleObject: any = {"high card": 0, "pair": 1, "two pair": 2};
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
        if (winningString === "") {winningString += this.highTwoPairWins(hand1, hand2);}
        if (winningString === "") {winningString += this.highPairWins(hand1, hand2);}
        if (winningString === "") {winningString += this.highCardWins(hand1, hand2);}
        return winningString;
    }

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
        let rule: string = "high card";
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
}

class Hand {
    playerColor: string;
    hand: any = [];
    cardValueToNumberObject: any = {"A": 14, "K": 13, "Q": 12, "J": 11, "T": 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2};
    cardNumberToStringObject: any = {14: "Ace", 13: "King", 12: "Queen", 11: "Jack", 10: "Ten", 9: "9", 8: "8", 7: "7", 6: "6", 5: "5", 4: "4", 3: "3", 2: "2"};
    winningRule: string = "high card";
    winningString: string;
    pairValue: number = 0;
    secondPairValue: number = 0;

    constructor(pokerHand) {
        this.playerColor = pokerHand.slice(0, 5);
        let handString = pokerHand.slice(7, 30);
        this.createHandArray(handString.split(" "));
        this.convertFaceCardsToIntegers();
        this.hand.sort(function(a,b) {return b[0] - a[0]});
        this.setPairValues();
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
        console.log(this.winningRule);
        console.log(this.pairValue + " pair value");
        console.log(this.secondPairValue + " 2 pair value");
    }

    private isFirstPair(i:number) {
        return this.hand[i][0] === this.hand[i + 1][0] && this.pairValue === 0;
    }

    private isSecondPair(i:number) {
        return this.hand[i][0] === this.hand[i + 1][0] && this.pairValue != 0;
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
}

export {Poker, Hand}