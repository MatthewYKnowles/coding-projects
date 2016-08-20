import {Card, Hand} from "../src/Poker";
describe("Card", ()=> {
    it("should show card value as 5", ()=> {
        let card: Card = new Card("5S");
        expect(card.getValue()).toEqual(5);
    });
    it("should show card value as 6", ()=> {
        let card: Card = new Card("6S");
        expect(card.getValue()).toEqual(6);
    });
    it("should show card value as 10", ()=> {
        let card: Card = new Card("TS");
        expect(card.getValue()).toEqual(10);
    });
    it("should show card value as 11", ()=> {
        let card: Card = new Card("JS");
        expect(card.getValue()).toEqual(11);
    });
});
describe("Hand", ()=> {
    it("should the highest value", ()=> {
        let hand: Hand = new Hand("9C 8C 5S 6C 2C");
        expect(hand.getHighestValue()).toEqual(9);
    });
    it("should the highest value card when it is not the first card", ()=> {
        let hand: Hand = new Hand("7C 8C 5S 6C 2C");
        expect(hand.getHighestValue()).toEqual(8);
    });
    it("should the highest value card when it is the last card", ()=> {
        let hand: Hand = new Hand("7C 8C 5S 6C AC");
        expect(hand.getHighestValue()).toEqual(14);
    });
    it("should the winning rule of pair", ()=> {
        let hand: Hand = new Hand("7C 8C 6S 6C AC");
        expect(hand.getWinningRule()).toEqual("Pair");
    });
    it("should the winning rule of high card", ()=> {
        let hand: Hand = new Hand("7C 8C 6S 9C KC");
        expect(hand.getWinningRule()).toEqual("High Card");
    });
    it("should return the winning rule of flush", ()=> {
        let hand: Hand = new Hand("7C 8C 6C 9C KC");
        expect(hand.getWinningRule()).toEqual("Flush");
    });
    it("should return the winning rule of two pair", ()=> {
        let hand: Hand = new Hand("8D 8C 9D 9C KC");
        expect(hand.getWinningRule()).toEqual("Two Pair");
    });
});