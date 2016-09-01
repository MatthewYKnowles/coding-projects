export class Card {
    private value: number;
    private specialToValueObject: any = {"T": 10, "J": 11};
    private suit: string;

    constructor(card: string) {
        this.value = (card[0] <=9) ? parseInt(card[0]) : this.specialToValueObject[card[0]];
        this.suit = card[1];
    }
    getValue(): number {
        return this.value;
    }

    getSuit(): string {
        return this.suit;
    }
}

export class Hand {
    private hand: string;
    private handArray: any = [];
    private specialToNameObject: any = {10: "Ten", 11: "Jack"};

    constructor(hand: string){
        this.hand = hand;
        let splitHand = hand.split(" ");
        for (let i = 0; i < splitHand.length; i++){
            this.handArray.push(new Card(splitHand[i]));
        }
        this.handArray.sort(function(a, b){return b.getValue() - a.getValue()})
    }

    getHighCard(): string {
        if (this.handArray[0].getValue() >= 10) {
            return this.specialToNameObject[this.handArray[0].getValue()];
        }
        return this.handArray[0].getValue().toString();
    }

    getWinningRule(): string {
        if (this.hasStrait()){
            return "Strait Flush";
        }
        if (this.hasFlush()){
            return "Flush";
        }
        if (this.hasTwoPair()){
            return "Two Pair Wins";
        }
        return "High Card Wins: " + this.getHighCard();
    }

    private hasStrait() {
        let consecutiveNumbers = 1;
        for (let i = 0; i < this.handArray.length - 1; i++){
            if (this.handArray[i].getValue() - this.handArray[i+1].getValue() === 1){
                consecutiveNumbers++;
            }
        }
        return consecutiveNumbers === 5;
    }

    private hasFlush() {
        let sameSuitCount = 1;
        for (let i = 0; i < this.handArray.length - 1; i++){
            if (this.handArray[i].getSuit() === this.handArray[i+1].getSuit()){
                sameSuitCount++;
            }
        }
        return sameSuitCount === 5;
    }

    private hasTwoPair() {
        let hasPair: boolean = false;
        for (let i = 0; i < this.handArray.length - 1; i++){
            if (this.twoConsecutiveNumbersAreTheSame(i) && hasPair){
                return true;
            }
            if (this.twoConsecutiveNumbersAreTheSame(i)){
                hasPair = true;
            }
        }
    }

    private twoConsecutiveNumbersAreTheSame(i: number) {
        return this.handArray[i].getValue() === this.handArray[i + 1].getValue();
    }
}