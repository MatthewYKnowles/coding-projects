export class Card {
    private _value: number;
    private specialCardToValueObject: any = {"T": 10, "J": 11, "Q": 12, "K": 13, "A": 14};

    constructor(card: string) {
        var cardValue = card[0];
        this._value = parseInt(cardValue) ? parseInt(cardValue) : this.specialCardToValueObject[cardValue]
    }

    getValue() {
        return this._value;
    }
}

export class Hand {
    private _handArray: any = [];
    private threeOfAKindValue: number;

    constructor(hand: string) {
        this.createSortedHandArray(hand);
    }

    private createSortedHandArray(hand: string) {
        let splitHand = hand.split(" ");
        this._handArray = splitHand.map((card) => {return new Card(card);});
        this.sortHandArray();
    }

    private sortHandArray() {
        this._handArray.sort((a, b)=> {return b.getValue() - a.getValue()});
    }


    getWinningRule(): string {
        if (this.hasAStrait()){
            return "Strait";
        }
        if (this.hasFullHouse()){
            return "Full House";
        }
        if (this.hasTwoPair()){
            return "Two Pair";
        }
        return "";
    }

    private hasAStrait() {
        let consecutiveNumbers = 1;
        for (let i = 0; i <  this._handArray.length - 1; i++){
            if (this.cardValuesAreDecendingByOne(i)){
                consecutiveNumbers++
            }
        }
        return consecutiveNumbers === 5;
    }

    private cardValuesAreDecendingByOne(i: number) {
        return this._handArray[i].getValue() === this._handArray[i + 1].getValue() + 1;
    }

    private hasFullHouse() {
        return this.hasThreeOfAKind() && this.hasAPairWithDifferentValueThanThreeOfAKind();
    }

    private hasThreeOfAKind() {
        let sameNumbers = this._handArray.reduce((acc, current)=> {
            let newSameNumber = (acc.prev === current.getValue()) ? acc.sameNumber + 1 : acc.sameNumber;
            return {prev: current.getValue(), sameNumber: newSameNumber};
        }, {prev: 0, sameNumber: 0});
        this.threeOfAKindValue = this._handArray[2].getValue();
        return sameNumbers.sameNumber === 3;
    }

    private hasAPairWithDifferentValueThanThreeOfAKind() {
        let sameNonThreeOfAKindNumbers = 0;
        for (let i = 0; i < this._handArray.length - 1; i++){
            if (this._handArray[i].getValue() === this._handArray[i+1].getValue() && this._handArray[i+1].getValue() !== this.threeOfAKindValue){
                sameNonThreeOfAKindNumbers++
            }
        }
        return sameNonThreeOfAKindNumbers === 1;
    }

    private hasTwoPair() {
        let firstPair: boolean = false;
        let twoPair: boolean = false;
        for (let i = 0; i < this._handArray.length - 1; i++){
            if (this.twoConsecutiveValuesAreTheSame(i) && firstPair === true){
                twoPair = true;
            }
            if (this.twoConsecutiveValuesAreTheSame(i)){
                firstPair = true;
            }
        }
        return twoPair;
    }

    private twoConsecutiveValuesAreTheSame(i: number) {
        return this._handArray[i].getValue() === this._handArray[i + 1].getValue();
    }
}