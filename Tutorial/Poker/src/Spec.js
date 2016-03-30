describe('separateHands', function () {
    it('Should return an array of both hands', function () {
        return expect(separateHands("Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH")).toEqual(["Black: 2H 3D 5S 9C KD", "White: 2C 3H 4S 8C AH"]);
    });
});
describe('convertHandToObject', function(){
    it('Should convert string of one hand into an object representing that hand', function(){
        return expect(convertHandToObject("Black: 2H 3D 5S 9C KD")).toEqual(blackHand)
    })
});

var blackHand = {
    player : "Black",
    card1: {
        value: 2,
        suit: "H"
    },
    card2: {
        value: 3,
        suit: "D"
    },
    card3: {
        value: 5,
        suit: "S"
    },
    card4: {
        value: 9,
        suit: "C"
    },
    card5: {
        value: 13,
        suit: "D"
    }
};