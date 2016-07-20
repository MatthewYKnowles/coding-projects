export class Poker {
    static getWinner(pokerHands): string {
        let blackHand: Hand = new Hand(pokerHands.slice(0, 21));
        let whiteHand: Hand = new Hand(pokerHands.slice(22, 43));
        if (blackHand.hand[0][0] > whiteHand.hand[0][0]) {
            return "Black wins. - with high card: 9";   
        }
        else {
            return "White wins. - with high card: 8";
        }
    }
}

export class Hand {
    playerColor: string;
    hand: any;
    
    constructor(pokerHand) {
    this.playerColor = pokerHand.slice(0, 5);
    let handString = pokerHand.slice(7, 30);
    this.hand = handString.split(" ");
    }
}