export class Card {
    value: number;
    faceCardToValue = {
        "T": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    };
    constructor(input: string) {
        let cardValue = input[0];
        var cardIsGreaterThanNine = !parseInt(cardValue);
        this.value = (cardIsGreaterThanNine) ? this.faceCardToValue[cardValue]: parseInt(cardValue);
    }
}

export class Hand {
    handOfCardsObjects = [];
    constructor(hand: string) {
        let cardsInHand = hand.split(" ");
        for (let i = 0; i < cardsInHand.length; i++){
            this.handOfCardsObjects.push(new Hand(cardsInHand[i]))
        }
        console.log(this.handOfCardsObjects);
    }

    getWinningRule() {
        return "pair";
    }
}