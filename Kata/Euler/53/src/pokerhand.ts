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
        if (winningArray == "tie"){this._winningHand = "tie";}
        else {this._winningHand = winningArray[0];}
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
    private _winningArray: any = [];
    private _cardValue: number = 0;
    private _suitValue: number = 1;
    constructor(hand1: any, hand2: any){
        this._hand1 = hand1;
        this._hand2 = hand2;
    }

    getWinningArray() {
        this.determineWinningArray();
        return this._winningArray;
    }

    determineWinningArray() {
        this.twoPairWins();
        if(this._winningArray.length == 0){this.highCardWins();}
    }

    highCardWins(){
        let ruleName = ["high card"];
        var hand1HighestCard = this._hand1[0][this._cardValue];
        var hand2HighestCard = this._hand2[0][this._cardValue];
        if (hand1HighestCard > hand2HighestCard){this._winningArray = ["hand1", ruleName, hand1HighestCard];}
        else if (hand2HighestCard > hand1HighestCard){this._winningArray = ["hand2", ruleName, hand2HighestCard];}
        else{
            this._hand1.shift();
            this._hand2.shift();
            if (this._hand1.length === 0){this._winningArray = "tie";}
            else {this.highCardWins();}
        }
    }

    highPairWins(){
        let ruleName = "Pair";
        let hand1HighPair = this.valueOfPairInHand(this._hand1);
        let hand2HighPair = this.valueOfPairInHand(this._hand2);
        if (hand1HighPair > hand2HighPair){this._winningArray = ["hand1", ruleName, hand1HighPair];}
        if (hand2HighPair > hand1HighPair){this._winningArray = ["hand2", ruleName, hand2HighPair];}
    }

    twoPairWins(){
        let ruleName = "2 Pair";
        let hand1PairArray = this.arrayOfPairValues(this._hand1);
        let hand2PairArray = this.arrayOfPairValues(this._hand2);
        if (hand1PairArray.length > hand2PairArray.length) {this._winningArray = ["hand1", ruleName, hand1PairArray[0]]}
        else if (hand2PairArray.length > hand1PairArray.length) {this._winningArray = ["hand2", ruleName, hand2PairArray[0]]}
        else {this.highPairWins();}
    }

    arrayOfPairValues(hand) {
        let handVar = hand;
        let firstPairValue = this.valueOfPairInHand(handVar);
        if (firstPairValue > 0) {
            handVar = handVar.filter((a)=> a[0] != firstPairValue);
            if (this.valueOfPairInHand(handVar) > 0){
                return [this.valueOfPairInHand(handVar), firstPairValue];
            }
            return [firstPairValue];
        }
        return [];
    }
    

    valueOfPairInHand (cardsInHand: any){
        var handPairValue = 0;
        for (let i = cardsInHand.length - 1; i > 1; i--) {
            if (this.areTwoConsecutiveCardsTheSame(cardsInHand, i)) {handPairValue = cardsInHand[i][this._cardValue];}}
        return handPairValue;
    }

    areTwoConsecutiveCardsTheSame(hand: any, index: number){
        return hand[index][this._cardValue] === hand[index - 1][this._cardValue];
    }
}

export {PokerHandNoPlayer, RatePokerHand};

