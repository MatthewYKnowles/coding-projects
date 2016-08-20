export class Card {
    value: number;
    private faceCardToInt: any = {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14};
    private suit;
    constructor(card: string) {
        this.value = this.faceCardToInt[card[0]];
        this.suit = card[1];
    }
    getValue() {
        return this.value;
    }

    getSuit() {
        return this.suit;
    }
}

export class Hand {
    handArray: any = [];

    constructor(hand: string){
        this.createHandObject(hand);
        this.sortHandArray();
    }

    private sortHandArray() {
        this.handArray.sort(function (a, b) {
            return b.getValue() - a.getValue();
        });
    }

    private createHandObject(hand: string) {
        let handOfCards = hand.split(" ");
        for (let i = 0; i < 5; i++) {
            this.handArray.push(new Card(handOfCards[i]))
        }
    }
    getHighestValue() {
        return this.handArray[0].getValue();
    }

    getWinningRule() {
        if (this.handArray[0].getValue() === this.handArray[1].getValue()) {
            return "Two Pair";
        }
        if (this.hasFlush()){
            return "Flush";
        }
        if(this.hasAPair()){
            return "Pair";
        }
        return "High Card";
    }

    private hasFlush() {
        let sameSuit = 1;
        for (let i = 0; i < this.handArray.length - 1; i++){
            if (this.handArray[i].getSuit() === this.handArray[i+1].getSuit()) {
                sameSuit++
            }
        }
        return sameSuit === 5;
    }
    hasAPair() {
        for(let i = 0; i < this.handArray.length - 1; i++){
            if(this.handArray[i].getValue() === this.handArray[i+1].getValue()){
                return true;
            }
        }
    }
}