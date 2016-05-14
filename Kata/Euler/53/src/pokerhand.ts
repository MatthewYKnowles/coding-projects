class PokerHandNoPlayer {
    private _gameString: string;
    private _handOne: any;
    private _handTwo: any;
    private _winningHand: string;

    constructor(gameString: string) {
        this._gameString = gameString;
        this.createHands();
        this.sortHands();
        this.setWinningString();
    }

    setWinningString() {
        let ratePokerHand: RatePokerHand = new RatePokerHand(this._handOne, this._handTwo);
        let winningArray = ratePokerHand.getWinningArray();
        this._winningHand = winningArray[0][0];
    }

    getWinningString() {
        return this._winningHand;
    }
    createHands() {
        let separatedHand = this._gameString.split(" ");
        let handOneWithFacecards = this.createHandArray(separatedHand.slice(0, 5));
        let handTwoWithFacecards = this.createHandArray(separatedHand.slice(5, 10));
        this._handOne = this.convertFaceCardsToIntegers(handOneWithFacecards);
        this._handTwo = this.convertFaceCardsToIntegers(handTwoWithFacecards);
    }

    sortHands(){
        this._handOne.sort((a,b)=>{return b[0] - a[0]});
        this._handTwo.sort((a,b)=>{return b[0] - a[0]});
}

    createHandArray(hand) {
        let handArray = [];
        for (let i = 0; i < 5; i++){
            let card = [];
            card.push(hand[i][0]);
            card.push(hand[i][0]);
            handArray.push(card);
        }
        return handArray;
    }
    convertFaceCardsToIntegers(hand: any): any {
        for (let i = 0; i < 5; i++){
            let currentCardValue = hand[i][0];
            switch (currentCardValue) {
                case "A":
                    hand[i][0] = 14;
                    break;
                case "K":
                    hand[i][0] = 13;
                    break;
                case "Q":
                    hand[i][0] = 12;
                    break;
                case "J":
                    hand[i][0] = 11;
                    break;
                case "T":
                    hand[i][0] = 10;
                    break;
                default:
                    hand[i][0] = parseInt(currentCardValue);
                    break;
            }
        }
        return hand;
    }
}

class RatePokerHand {
    private _hand1: any;
    private _hand2: any;
    private _winningArray: any;
    private _cardValue: number = 0;
    private _suitValue: number = 1;
    constructor(hand1: any, hand2: any){
        this._hand1 = hand1;
        this._hand2 = hand2;
        this.highCardWins();
    }
    getWinningArray() {
        return this._winningArray;
    }

    highCardWins(){
        let ruleName = ["high card"];
        console.log(this._hand1);
        console.log(this._hand2);
        var hand1HighestCard = this._hand1[0][this._cardValue];
        var hand2HighestCard = this._hand2[0][this._cardValue];
        console.log(hand1HighestCard);
        console.log(hand2HighestCard);
        if (hand1HighestCard > hand2HighestCard){this._winningArray = [["hand1"], ruleName,  hand1HighestCard];}
        else if (hand2HighestCard > hand1HighestCard){this._winningArray = [["hand2"], ruleName,  hand2HighestCard];}
        else{this._winningArray = ["tie"];}
    }
}

export {PokerHandNoPlayer};

