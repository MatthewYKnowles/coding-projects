"use strict";
var Poker_1 = require("../src/Poker");
describe("Card", function () {
    it("should return its own value of 5", function () {
        var card = new Poker_1.Card("5C");
        expect(card.getValue()).toEqual(5);
    });
    it("should return its own value of 6", function () {
        var card = new Poker_1.Card("6C");
        expect(card.getValue()).toEqual(6);
    });
    it("should return a value of 10 for T", function () {
        var card = new Poker_1.Card("TC");
        expect(card.getValue()).toEqual(10);
    });
    it("should return a value of 11 for J", function () {
        var card = new Poker_1.Card("JC");
        expect(card.getValue()).toEqual(11);
    });
    it("should return a value of 12 for Q", function () {
        var card = new Poker_1.Card("QC");
        expect(card.getValue()).toEqual(12);
    });
});
describe("Hand", function () {
    it("should return high card as the winning rule with the highest card for 9", function () {
        var hand = new Poker_1.Hand("9C 8D 7C 5D 4S");
        expect(hand.getWinningRule()).toEqual("High Card: 9");
    });
    it("should return high card as the winning rule with the highest card for 8", function () {
        var hand = new Poker_1.Hand("8C 7D 6C 5D 3S");
        expect(hand.getWinningRule()).toEqual("High Card: 8");
    });
    it("should return high card with Ten", function () {
        var hand = new Poker_1.Hand("TC 7D 6C 5D 3S");
        expect(hand.getWinningRule()).toEqual("High Card: Ten");
    });
    it("should return high card with Jack", function () {
        var hand = new Poker_1.Hand("JC 7D 6C 5D 3S");
        expect(hand.getWinningRule()).toEqual("High Card: Jack");
    });
    it("should return the high card even when its not at the front", function () {
        var hand = new Poker_1.Hand("7C JD 6C 5D 3S");
        expect(hand.getWinningRule()).toEqual("High Card: Jack");
    });
    it("should return the high card even when its not at the front", function () {
        var hand = new Poker_1.Hand("7C JD 6C 5D AS");
        expect(hand.getWinningRule()).toEqual("High Card: Ace");
    });
    it("should return pair", function () {
        var hand = new Poker_1.Hand("7C JD 6C AD AS");
        expect(hand.getWinningRule()).toEqual("Pair");
    });
    it("should return pair", function () {
        var hand = new Poker_1.Hand("7C 6D 6C QD AS");
        expect(hand.getWinningRule()).toEqual("Pair");
    });
    it("should return three of a kind", function () {
        var hand = new Poker_1.Hand("7C 6D 6C 6D AS");
        expect(hand.getWinningRule()).toEqual("Three of a Kind");
    });
});
//# sourceMappingURL=Poker.spec.js.map