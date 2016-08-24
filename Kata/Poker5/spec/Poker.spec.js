"use strict";
var Poker_1 = require("../src/Poker");
describe("Card", function () {
    it("should return the card's value of 5", function () {
        var card = new Poker_1.Card("5C");
        expect(card.getValue()).toEqual(5);
    });
    it("should return the card's value of 6", function () {
        var card = new Poker_1.Card("6C");
        expect(card.getValue()).toEqual(6);
    });
    it("should return the card's value of 10 for T", function () {
        var card = new Poker_1.Card("TC");
        expect(card.getValue()).toEqual(10);
    });
    it("should return the card's value of 11 for J", function () {
        var card = new Poker_1.Card("JC");
        expect(card.getValue()).toEqual(11);
    });
});
describe("Hand", function () {
    it("Should return the highest card as string 9", function () {
        var hand = new Poker_1.Hand("8C 7H 6C 5D 2H");
        expect(hand.getHighCard()).toEqual("8");
    });
    it("Should return the highest card", function () {
        var hand = new Poker_1.Hand("9C 8H 6C 5D 2H");
        expect(hand.getHighCard()).toEqual("9");
    });
    it("Should return the Ten for T", function () {
        var hand = new Poker_1.Hand("TC 8H 6C 5D 2H");
        expect(hand.getHighCard()).toEqual("Ten");
    });
    it("Should return the Jack for J", function () {
        var hand = new Poker_1.Hand("JC 8H 6C 5D 2H");
        expect(hand.getHighCard()).toEqual("Jack");
    });
    it("Should return the highest card even when its at the end", function () {
        var hand = new Poker_1.Hand("2C 8H 6C 5D JH");
        expect(hand.getHighCard()).toEqual("Jack");
    });
    it("Should return the winning rule of high card wins with the high card", function () {
        var hand = new Poker_1.Hand("2C 8H 6C 5D JH");
        expect(hand.getWinningRule()).toEqual("High Card Wins: Jack");
    });
    it("Should return the winning rule of high card wins with the high card Ten", function () {
        var hand = new Poker_1.Hand("2C 8H 6C TD 3H");
        expect(hand.getWinningRule()).toEqual("High Card Wins: Ten");
    });
    it("Should return the winning rule of two pair wins", function () {
        var hand = new Poker_1.Hand("2C TH 3C TD 3H");
        expect(hand.getWinningRule()).toEqual("Two Pair Wins");
    });
    it("Should return the winning rule of two pair wins", function () {
        var hand = new Poker_1.Hand("2C TH JC TD JH");
        expect(hand.getWinningRule()).toEqual("Two Pair Wins");
    });
    it("Should return the winning rule of flush wins", function () {
        var hand = new Poker_1.Hand("2H 9H 3H TH JH");
        expect(hand.getWinningRule()).toEqual("Flush");
    });
    it("Should return the winning rule of strait flush wins", function () {
        var hand = new Poker_1.Hand("7H 9H 8H TH JH");
        expect(hand.getWinningRule()).toEqual("Strait Flush");
    });
});
//# sourceMappingURL=Poker.spec.js.map