export class Card {
    private value: number;
    private letterToValueObject: any = {"T": 10, "J": 11, "Q": 12, "K": 13, "A": 14};

    constructor(hand: string) {
        var valueCard = hand[0];
        var integerValueOfCard = parseInt(valueCard);
        this.value = (!integerValueOfCard) ? this.letterToValueObject[valueCard] : integerValueOfCard;
    }
    public getValue() {
        return this.value;
    }
}

export class Hand {
    private hand;
    private handArray = [];
    private valueToStringObject: any = {10: "Ten", 11: "Jack", 12: "Queen", 13: "King", 14: "Ace"};
    private winningRule = "";

    constructor(hand: string) {
        this.hand = hand.split(" ");
        for (let i = 0; i < this.hand.length; i++){
            this.handArray.push(new Card(this.hand[i]));
        }
        this.handArray.sort(function (a, b) {return b.getValue() - a.getValue()})
    }

    public getWinningRule() {
        this.threeOfAKindWins();
        if (this.winningRule === "") {this.pairWins();}
        if (this.winningRule === "") {this.highCardWins();}
        return this.winningRule;
    }

    private highCardWins() {
        this.winningRule = "High Card: " + ((this.handArray[0].getValue() > 9) ? this.valueToStringObject[this.handArray[0].getValue()] : this.handArray[0].getValue());
    }

    private threeOfAKindWins() {
        for (let i = 0; i < this.handArray.length - 2; i++){
            if (this.handArray[i].getValue() === this.handArray[i+1].getValue() && this.handArray[i].getValue() === this.handArray[i+2].getValue()){
                this.winningRule = "Three of a Kind";
            }
        }
    }

    private pairWins() {
        for (let i = 0; i < this.handArray.length - 1; i++){
            if (this.handArray[i].getValue() === this.handArray[i+1].getValue()){
                this.winningRule = "Pair";
            }
        }
    }
}