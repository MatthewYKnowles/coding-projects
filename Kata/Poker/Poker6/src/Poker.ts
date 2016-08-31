export class Card {
    private value: number;
    private letterToValueObject: any = {"T": 10, "J": 11, "Q": 12, "K": 13, "A": 14};

    constructor(hand: string) {
        var valueCard = hand[0];
        var integerValueOfCard = parseInt(valueCard);
        this.value = (!integerValueOfCard) ? this.letterToValueObject[valueCard] : integerValueOfCard;
    }
    getValue() {
        return this.value;
    }
}

export class Hand {
    private hand;
    private handArray = [];
    private valueToStringObject: any = {10: "Ten", 11: "Jack", 12: "Queen", 13: "King", 14: "Ace"};

    constructor(hand: string) {
        this.hand = hand.split(" ");
        for (let i = 0; i < this.hand.length; i++){
            this.handArray.push(new Card(this.hand[i]));
        }
        this.handArray.sort(function (a, b) {return b.getValue() - a.getValue()})
    }

    getWinningRule() {
        if (this.hasPair()){
            return "Pair";
        }
        let highCard = (this.handArray[0].getValue() > 9) ? this.valueToStringObject[this.handArray[0].getValue()] : this.handArray[0].getValue();
        return "High Card: " + highCard;
    }

    private hasPair() {
        for (let i = 0; i < this.handArray.length - 1; i++){
            if (this.handArray[i].getValue() === this.handArray[i+1].getValue()){
                return true;
            }
        }
    }
}