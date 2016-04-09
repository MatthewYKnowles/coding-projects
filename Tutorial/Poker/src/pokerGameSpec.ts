describe('pokerGame', function () {
    it('Should return the winner and which hand they won with', function () {
        return expect(pokerGame("Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH")).toEqual("White wins. - with high card: Ace");
    });
    it('Should return tie if the values for both hands are the same', function () {
        return expect(pokerGame("Black: 2H 3D 5S 9C KD  White: 2C 3H 5H 9S KH")).toEqual("Tie.");
    });
    it('Should return pair if a hand has a pair in it', function () {
        return expect(pokerGame("Black: 2H 3D 5S 9C KD  White: 2C 5C 5H 9S KH")).toEqual("White wins. - with a pair of 5's");
    });
    it('Should return Black as the winner if it has a higher pair', function () {
        return expect(pokerGame("Black: 2H 3D 9H 9C KD  White: 2C 5C 5H 9S KH")).toEqual("Black wins. - with a pair of 9's");
    });
    it('Should return Black as the winner with a high card if each hand has the same pair', function () {
        return expect(pokerGame("Black: 2H 3D 9H 9C KD  White: 2C 5C 9D 9S KH")).toEqual("White wins. - with high card: 5");
    });
    it('Should return Black as the winner with a higher two pair', function () {
        return expect(pokerGame("Black: 3H 3D 9H 9C KD  White: 2C 2C 8D 8S KH")).toEqual("Black wins. - with a 9 high two pair");
    });
    it('Should return White as the winner with a higher two pair', function () {
        return expect(pokerGame("Black: 3H 3D 9H 9C KD  White: 2C 2C 8D KS KH")).toEqual("White wins. - with a King high two pair");
    });
    it('Should return Black as the winner with a two pair', function () {
        return expect(pokerGame("Black: 3H 3D 9H 9C KD  White: 2C 4C 8D KS KH")).toEqual("Black wins. - with a 9 high two pair");
    });
    it('Should return White as the winner with a three of a kind', function () {
        return expect(pokerGame("Black: 3H 3D 9H 9C KD  White: 8S 8C 8D 6S KH")).toEqual("White wins. - with three 8's");
    });
    it('Should return Black as the winner with the higher three of a kind', function () {
        return expect(pokerGame("Black: 3H 9D 9H 9C KD  White: 8S 8C 8D 6S KH")).toEqual("Black wins. - with three 9's");
    });
    it('Should return Black as the winner with a strait', function () {
        return expect(pokerGame("Black: 9H 8D 7H 6C 5D  White: 8S 8C 8D 6S KH")).toEqual("Black wins. - with an 9 high strait");
    });
    it('Should return White as the winner with a strait', function () {
        return expect(pokerGame("Black: 9H 9D 7H 6C 5D  White: KS JC QD TS 9S")).toEqual("White wins. - with an King high strait");
    });
    it('Should return tie since they both have the same strait value', function () {
        return expect(pokerGame("Black: KH QD JH TC 9D  White: KS JC QD TS 9S")).toEqual("Tie.");
    });
});
describe('separateHands', function () {
    it('Should return an array of both hands', function () {
        return expect(separateHands("Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH")).toEqual(["Black: 2H 3D 5S 9C KD", "White: 2C 3H 4S 8C AH"]);
    });
});
describe('convertHandToObject', function(){
    it('Should convert string of one hand into an object representing that hand', function(){
        var blackHand = {player : "Black", cards: [["2", "H"], ["3", "D"], ["5", "S"], ["9", "C"], ["K", "D"]]};
        return expect(convertHandToObject("Black: 2H 3D 5S 9C KD")).toEqual(blackHand)
    })
    it('Should convert string of White hand correctly', function(){
        var whiteHand = {player : "White", cards: [["2", "C"], ["3", "H"], ["4", "S"], ["8", "C"], ["A", "H"]]};
        return expect(convertHandToObject("White: 2C 3H 4S 8C AH")).toEqual(whiteHand)
    })
});
describe('convertFaceCardsToValues', function () {
    it('Should take in an object with face card values and convert them to 11,12,13 or 14', function () {
        var handWithFaceCardValues = {player : "Black", cards: [["J", "H"], ["Q", "D"], ["5", "S"], ["A", "C"], ["K", "D"]]};
        var handWithIntegerValues = {player : "Black", cards: [[11, "H"], [12, "D"], [5, "S"], [14, "C"], [13, "D"]]};
        return expect(convertCardsToIntegers(handWithFaceCardValues)).toEqual(handWithIntegerValues);
    });
});
describe('sortPokerHand', function () {
    it('Should sort a hand so that the highest card is at index 0', function () {
        var unsortedHand = {player : "Black", cards: [[11, "H"], [12, "D"], [5, "S"], [14, "C"], [13, "D"]]};
        var sortedHand = {player : "Black", cards: [[14, "C"], [13, "D"], [12, "D"], [11, "H"], [5, "S"]]};
        return expect(sortPokerHand(unsortedHand)).toEqual(sortedHand);
    });
});
describe('highCardWins', function () {
    it('Should take in two hands and return a string of which player won and with which card', function () {
        var blackHand = {player : "Black", cards: [[12, "H"], [11, "D"], [10, "S"], [9, "C"], [2, "D"]]};
        var whiteHand = {player : "White", cards: [[14, "C"], [13, "D"], [12, "D"], [11, "H"], [5, "S"]]};
        return expect(highCardWins(blackHand,whiteHand)).toEqual(["White wins. - with high card: xxx", 14]);
    });
    it('Should look at the next highest card if the first card in each hand is the same', function () {
        var blackHand = {player : "Black", cards: [[14, "H"], [13, "D"], [10, "S"], [9, "C"], [2, "D"]]};
        var whiteHand = {player : "White", cards: [[14, "C"], [12, "D"], [11, "D"], [9, "H"], [5, "S"]]};
        return expect(highCardWins(blackHand,whiteHand)).toEqual(["Black wins. - with high card: xxx", 13]);
    });
    it('Should return tie if they have the same card values in both hands', function () {
        var blackHand = {player : "Black", cards: [[14, "H"], [13, "D"], [11, "S"], [9, "C"], [5, "D"]]};
        var whiteHand = {player : "White", cards: [[14, "C"], [13, "C"], [11, "D"], [9, "H"], [5, "S"]]};
        return expect(highCardWins(blackHand,whiteHand)).toEqual("Tie.");
    });
});
describe('highPairWins', function () {
    it('Should recognize when two values are the same and return Pair', function () {
        var blackHand = {player : "Black", cards: [[14, "H"], [13, "D"], [11, "S"], [11, "C"], [5, "D"]]};
        var whiteHand = {player : "White", cards: [[14, "C"], [13, "C"], [11, "D"], [9, "H"], [5, "S"]]};
        return expect(highPairWins(blackHand, whiteHand)).toEqual(["Black wins. - with a pair of xxx's", 11]);
    });
});
describe('highTwoPairWins', function () {
    it('Should take in two hands and return the winning two pair hand', function () {
        var blackHand = {player : "Black", cards: [[13, "H"], [13, "D"], [11, "S"], [11, "C"], [5, "D"]]};
        var whiteHand = {player : "White", cards: [[14, "C"], [11, "H"], [11, "D"], [5, "H"], [5, "S"]]};
        return expect(highTwoPairWins(blackHand, whiteHand)).toEqual(["Black wins. - with a xxx high two pair", 13]);
    });
});
describe('twoPairWins', function () {
    it('Should take in two hands and return the winning two pair hand', function () {
        var blackHand = {player : "Black", cards: [[13, "H"], [13, "D"], [11, "S"], [11, "C"], [5, "D"]]};
        var whiteHand = {player : "White", cards: [[14, "C"], [12, "H"], [11, "D"], [5, "H"], [5, "S"]]};
        return expect(twoPairWins(blackHand, whiteHand)).toEqual(["Black wins. - with a xxx high two pair", 13]);
    });
});

describe('straitWins', function () {
    it('Should take in two hands and return the hand that contains the strait', function () {
        var whiteHand = {player : "White", cards: [[13, "S"], [12, "S"], [11, "S"], [9, "H"], [2, "S"]]};
        var blackHand = {player : "Black", cards: [[13, "C"], [12, "H"], [11, "D"], [10, "H"], [9, "S"]]};
        return expect(straitWins(blackHand, whiteHand)).toEqual(["Black wins. - with an xxx high strait", 13]);
    });
});
describe('hasAStrait', function () {
    it('Should take return true if it is a strait', function () {
        var handWithStrait = {player : "White", cards: [[13, "C"], [12, "H"], [11, "D"], [10, "H"], [9, "S"]]};
        return expect(hasAStrait(handWithStrait)).toEqual(true);
    });
    it('Should return false if it does not contain a strait', function () {
        var handWithStrait = {player : "White", cards: [[13, "C"], [12, "H"], [11, "D"], [9, "H"], [2, "S"]]};
        return expect(hasAStrait(handWithStrait)).toEqual(false);
    });
});
describe('handWithHigherStraitWins', function () {
    it('Should take return true if it is a strait', function () {
        var whiteHand = {player : "White", cards: [[13, "S"], [12, "S"], [11, "S"], [10, "H"], [9, "S"]]};
        var blackHand = {player : "Black", cards: [[14, "C"], [13, "H"], [12, "D"], [11, "H"], [10, "S"]]};
        return expect(handWithHigherStraitWins(blackHand, whiteHand)).toEqual([ 'Black wins. - with an xxx high strait', 14 ]);
    });
    it('Should take return tie if they have the same high strait card', function () {
        var whiteHand = {player : "White", cards: [[14, "S"], [13, "S"], [12, "S"], [11, "S"], [10, "H"]]};
        var blackHand = {player : "Black", cards: [[14, "C"], [13, "H"], [12, "D"], [11, "H"], [10, "S"]]};
        return expect(handWithHigherStraitWins(blackHand, whiteHand)).toEqual("Tie.");
    });
});

describe('threeOfAKindValue', function () {
    it('Should take in two hands and return the winning two pair hand', function () {
        var threeOfAKindInCards= [[13, "H"], [11, "D"], [11, "S"], [11, "C"], [5, "D"]];
        return expect(threeOfAKindValue(threeOfAKindInCards)).toEqual(11);
    });
});
describe('threeOfAKindWins', function () {
    it('Should take in two hands and return the winning string for a three of a kind', function () {
        var blackHand = {player : "Black", cards: [[13, "H"], [11, "D"], [11, "S"], [11, "C"], [5, "D"]]};
        var whiteHand = {player : "White", cards: [[14, "C"], [12, "H"], [10, "D"], [5, "H"], [5, "S"]]};
        return expect(threeOfAKindWins(blackHand, whiteHand)).toEqual(["Black wins. - with three xxx's", 11]);
    });
    it('Should take in two hands and return the winning string for a three of a kind in the second hand has the three of a kind', function () {
        var blackHand = {player : "Black", cards: [[13, "H"], [11, "D"], [11, "S"], [10, "C"], [5, "D"]]};
        var whiteHand = {player : "White", cards: [[12, "C"], [12, "H"], [12, "D"], [5, "H"], [5, "S"]]};
        return expect(threeOfAKindWins(blackHand, whiteHand)).toEqual(["White wins. - with three xxx's", 12]);
    });
    it('Should take the three of a kind with the higher value', function () {
        var blackHand = {player : "Black", cards: [[13, "H"], [9, "D"], [9, "S"], [9, "C"], [5, "D"]]};
        var whiteHand = {player : "White", cards: [[12, "C"], [11, "H"], [5, "C"], [5, "H"], [5, "S"]]};
        return expect(threeOfAKindWins(blackHand, whiteHand)).toEqual(["Black wins. - with three xxx's", 9]);
    });
});

describe('valueOfPairInHand', function () {
    it('Should return the value of a pair in a hand', function () {
        var blackHandCards = [[14, "H"], [13, "D"], [11, "S"], [11, "C"], [5, "D"]];
        return expect(valueOfPairInHand(blackHandCards)).toEqual(11);
    });
});
describe('parseWinningHand', function () {
    it('Should return correct winning string', function () {
        return expect(parseWinningHand(["Black wins. - with high card: xxx", 13])).toEqual("Black wins. - with high card: King");
    });
    it('Should return correct tie string', function () {
        return expect(parseWinningHand(("Tie."))).toEqual("Tie.");
    });
});

describe('convertIntegersToCards', function () {
    it('Should take in an object with face card values and convert them to 11,12,13 or 14', function () {
        return expect(convertIntegersToCards(14)).toEqual("Ace");
    });
});
describe('arrayOfPairValues', function () {
    var handWithTwoPair = {player : "Black", cards: [[14, "H"], [14, "D"], [11, "S"], [11, "C"], [5, "D"]]};
    it('Should return an array of both hands', function () {
        return expect(arrayOfPairValues(handWithTwoPair)).toEqual([14, 11]);
    });
});
describe('eitherHandHasAStrait', function () {
    var blackHand = {player : "Black", cards: [[13, "H"], [9, "D"], [9, "S"], [9, "C"], [5, "D"]]};
    var whiteHand = {player : "White", cards: [[12, "C"], [11, "H"], [10, "C"], [9, "H"], [8, "S"]]};
    it('Should take in an object with face card values and convert them to 11,12,13 or 14', function () {
        return expect(eitherHandHasAStrait(blackHand, whiteHand)).toEqual(true);
    });
});
