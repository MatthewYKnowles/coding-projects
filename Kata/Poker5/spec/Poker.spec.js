"use strict";
var Poker_1 = require("../src/Poker");
describe("Card", function () {
    it("should show card value as 5", function () {
        var card = new Poker_1.Card("5S");
        expect(card.getValue()).toEqual(5);
    });
    it("should show card value as 6", function () {
        var card = new Poker_1.Card("6S");
        expect(card.getValue()).toEqual(6);
    });
    it("should show card value as 10", function () {
        var card = new Poker_1.Card("TS");
        expect(card.getValue()).toEqual(10);
    });
    it("should show card value as 11", function () {
        var card = new Poker_1.Card("JS");
        expect(card.getValue()).toEqual(11);
    });
});
describe("Hand", function () {
    it("should the highest value", function () {
        var hand = new Poker_1.Hand("9C 8C 5S 6C 2C");
        expect(hand.getHighestValue()).toEqual(9);
    });
    it("should the highest value card when it is not the first card", function () {
        var hand = new Poker_1.Hand("7C 8C 5S 6C 2C");
        expect(hand.getHighestValue()).toEqual(8);
    });
    it("should the highest value card when it is the last card", function () {
        var hand = new Poker_1.Hand("7C 8C 5S 6C AC");
        expect(hand.getHighestValue()).toEqual(14);
    });
    it("should the winning rule of pair", function () {
        var hand = new Poker_1.Hand("7C 8C 6S 6C AC");
        expect(hand.getWinningRule()).toEqual("Pair");
    });
    it("should the winning rule of high card", function () {
        var hand = new Poker_1.Hand("7C 8C 6S 9C KC");
        expect(hand.getWinningRule()).toEqual("High Card");
    });
    it("should return the winning rule of flush", function () {
        var hand = new Poker_1.Hand("7C 8C 6C 9C KC");
        expect(hand.getWinningRule()).toEqual("Flush");
    });
    it("should return the winning rule of two pair", function () {
        var hand = new Poker_1.Hand("8D 8C 9D 9C KC");
        expect(hand.getWinningRule()).toEqual("Two Pair");
    });
    it("should return the winning rule of two pair", function () {
        var hand = new Poker_1.Hand("8D 8C 9D KC KC");
        expect(hand.getWinningRule()).toEqual("Two Pair");
    });
    it("should return the winning rule of strait", function () {
        var hand = new Poker_1.Hand("8D 9C JD TC QC");
        expect(hand.getWinningRule()).toEqual("Strait");
    });
    it("should return the winning rule of strait flush", function () {
        var hand = new Poker_1.Hand("8D 9D JD TD QD");
        expect(hand.getWinningRule()).toEqual("Strait Flush");
    });
});
//# sourceMappingURL=Poker.spec.js.map