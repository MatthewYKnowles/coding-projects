"use strict";
var sample_1 = require("../src/sample");
describe("Card", function () {
    it("should return card value 0f 5", function () {
        var card = new sample_1.Card("5S");
        expect(card.value).toBe(5);
    });
    it("should return card value of 6", function () {
        var card = new sample_1.Card("6S");
        expect(card.value).toBe(6);
    });
    it("should return card value of 10 for T", function () {
        var card = new sample_1.Card("TS");
        expect(card.value).toBe(10);
    });
    it("should return card value of 11 for J", function () {
        var card = new sample_1.Card("JS");
        expect(card.value).toBe(11);
    });
});
describe("Hand", function () {
    it("should return pair if two values are the same", function () {
        var hand = new sample_1.Hand("5S 6H 7D 6S 9D");
        expect(hand.getWinningRule()).toBe("pair");
    });
    it("should return high card if there is no winning rule", function () {
        var hand = new sample_1.Hand("5S 6H 7D JS 9D");
        expect(hand.getWinningRule()).toBe("high card");
    });
});
//# sourceMappingURL=sample.spec.js.map