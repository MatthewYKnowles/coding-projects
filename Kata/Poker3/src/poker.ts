class Poker {
    static ruleObject: any = {"high card": 0, "pair": 1};
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
        if (winningString === "") {
            winningString += this.highCardWins(hand1, hand2);
        }
        if (winningString === "") {
            return "tie.";
        }
        return winningString;
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
        return "";
    }
}

class Hand {
    playerColor: string;
    hand: any = [];
    cardValueToNumberObject: any = {"A": 14, "K": 13, "Q": 12, "J": 11, "T": 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2};
    cardNumberToStringObject: any = {14: "Ace", 13: "King", 12: "Queen", 11: "Jack", 10: "Ten", 9: "9", 8: "8", 7: "7", 6: "6", 5: "5", 4: "4", 3: "3", 2: "2"};
    ruleObject: any = {0: "high card", 1: "pair"};
    winningRule: string = "high card";
    winningString: string;
    pairValue: number = 0;

    constructor(pokerHand) {
        this.playerColor = pokerHand.slice(0, 5);
        let handString = pokerHand.slice(7, 30);
        this.createHandArray(handString.split(" "));
        this.convertFaceCardsToIntegers();
        this.hand.sort(function(a,b) {return b[0] - a[0]});
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
    convertFaceCardsToIntegers(): any {
        for (let i = 0; i < 5; i++) {this.hand[i][0] = this.cardValueToNumberObject[this.hand[i][0]];}
    }
    determineBestHand() {
        if(this.pairValue > 0){this.winningRule = "pair";}
    }
    setPairValue() {
        for (let i = 0; i < this.hand.length - 1; i++) {
            if (this.hand[i][0] === this.hand[i+1][0]){
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
    getWinningString(winningRule, index){
        return this.playerColor + " wins. - with " + winningRule + ": " + this.getCardValueAtIndex(index);
    }
    setWinningString(winningRule, value){
        this.winningString = this.playerColor + " wins. - with " + winningRule + ": " + this.cardNumberToStringObject[value];
    }
}

export {Poker, Hand}