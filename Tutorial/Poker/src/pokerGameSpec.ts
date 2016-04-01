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
        var blackHand = {player : "Black", cards: [[2, "H"], [3, "D"], [5, "S"], [9, "C"], [13, "D"]]};
        var whiteHand = {player : "Black", cards: [[14, "C"], [13, "D"], [12, "D"], [11, "H"], [5, "S"]]};
        return expect(highCardWins(blackHand,whiteHand)).toEqual(["White wins. - with high card: xxx", 14]);
    });
});