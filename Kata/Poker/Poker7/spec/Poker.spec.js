"use strict";
var Poker_1 = require("../src/Poker");
describe("Card", function () {
    it("should return the value of the card 6", function () {
        var card = new Poker_1.Card("6C");
        expect(card.getValue()).toEqual(6);
    });
    it("should return the value of the card 7", function () {
        var card = new Poker_1.Card("7C");
        expect(card.getValue()).toEqual(7);
    });
    it("should return the value of the card 10 for T", function () {
        var card = new Poker_1.Card("TC");
        expect(card.getValue()).toEqual(10);
    });
});
describe("Full House", function () {
    it("Should return full house", function () {
        var hand = new Poker_1.Hand("6S 6H 6C 8C 8H");
        expect(hand.getWinningRule()).toEqual("Full House");
    });
    it("Should not return full house", function () {
        var hand = new Poker_1.Hand("5S 7H 7C 9C 9H");
        expect(hand.getWinningRule()).not.toEqual("Full House");
    });
    it("Should return full house when the numbers are not sorted", function () {
        var hand = new Poker_1.Hand("5S 7H 5C 7C 5H");
        expect(hand.getWinningRule()).toEqual("Full House");
    });
    it("Should return full house when there is a ten", function () {
        var hand = new Poker_1.Hand("TS 7H TC 7C TH");
        expect(hand.getWinningRule()).toEqual("Full House");
    });
    it("Should return not full house when there is a three of a kind", function () {
        var hand = new Poker_1.Hand("TS 7H 7C 7C 2H");
        expect(hand.getWinningRule()).not.toEqual("Full House");
    });
});
describe("Strait", function () {
    it("Should return strait", function () {
        var hand = new Poker_1.Hand("TS 9H 7C 8C 6H");
        expect(hand.getWinningRule()).toEqual("Strait");
    });
    it("Should return not a strait", function () {
        var hand = new Poker_1.Hand("TS 9H 2C 8C 6H");
        expect(hand.getWinningRule()).not.toEqual("Strait");
    });
});
describe("Two Pair", function () {
    it("Should return two pair", function () {
        var hand = new Poker_1.Hand("TS TH 8C 8C 6H");
        expect(hand.getWinningRule()).toEqual("Two Pair");
    });
    it("Should return two pair", function () {
        var hand = new Poker_1.Hand("TS QH 8C QC TH");
        expect(hand.getWinningRule()).toEqual("Two Pair");
    });
});
//# sourceMappingURL=Poker.spec.js.map