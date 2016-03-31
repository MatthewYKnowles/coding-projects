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
    it('Should take in an object with face card values and conver them to 11,12,13 or 14', function () {
        var handWithFaceCardValues = {player : "Black", cards: [["J", "H"], ["Q", "D"], ["5", "S"], ["A", "C"], ["K", "D"]]};
        var handWithIntegerValues = {player : "Black", cards: [["J", "H"], ["Q", "D"], ["5", "S"], ["A", "C"], ["K", "D"]]};
        return expect(convertCardsToIntegers(handWithFaceCardValues)).toEqual(handWithIntegerValues);
    });
});