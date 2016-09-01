import {Card, Hand} from "../src/Poker";
describe("Card", ()=> {
    it("should return the card's value of 5", ()=>{
        let card: Card = new Card("5C");
        expect(card.getValue()).toEqual(5);
    });
    it("should return the card's value of 6", ()=>{
        let card: Card = new Card("6C");
        expect(card.getValue()).toEqual(6);
    });
    it("should return the card's value of 10 for T", ()=>{
        let card: Card = new Card("TC");
        expect(card.getValue()).toEqual(10);
    });
    it("should return the card's value of 11 for J", ()=>{
        let card: Card = new Card("JC");
        expect(card.getValue()).toEqual(11);
    });
});
describe("Hand", ()=> {
    it("Should return the highest card as string 9", ()=> {
        let hand: Hand = new Hand("8C 7H 6C 5D 2H");
        expect(hand.getHighCard()).toEqual("8");
    });
    it("Should return the highest card", ()=> {
        let hand: Hand = new Hand("9C 8H 6C 5D 2H");
        expect(hand.getHighCard()).toEqual("9");
    });
    it("Should return the Ten for T", ()=> {
        let hand: Hand = new Hand("TC 8H 6C 5D 2H");
        expect(hand.getHighCard()).toEqual("Ten");
    });
    it("Should return the Jack for J", ()=> {
        let hand: Hand = new Hand("JC 8H 6C 5D 2H");
        expect(hand.getHighCard()).toEqual("Jack");
    });
    it("Should return the highest card even when its at the end", ()=> {
        let hand: Hand = new Hand("2C 8H 6C 5D JH");
        expect(hand.getHighCard()).toEqual("Jack");
    });
    it("Should return the winning rule of high card wins with the high card", ()=> {
        let hand: Hand = new Hand("2C 8H 6C 5D JH");
        expect(hand.getWinningRule()).toEqual("High Card Wins: Jack");
    });
    it("Should return the winning rule of high card wins with the high card Ten", ()=> {
        let hand: Hand = new Hand("2C 8H 6C TD 3H");
        expect(hand.getWinningRule()).toEqual("High Card Wins: Ten");
    });
    it("Should return the winning rule of two pair wins", ()=> {
        let hand: Hand = new Hand("2C TH 3C TD 3H");
        expect(hand.getWinningRule()).toEqual("Two Pair Wins");
    });
    it("Should return the winning rule of two pair wins", ()=> {
        let hand: Hand = new Hand("2C TH JC TD JH");
        expect(hand.getWinningRule()).toEqual("Two Pair Wins");
    });
    it("Should return the winning rule of flush wins", ()=> {
        let hand: Hand = new Hand("2H 9H 3H TH JH");
        expect(hand.getWinningRule()).toEqual("Flush");
    });
    it("Should return the winning rule of strait flush wins", ()=> {
        let hand: Hand = new Hand("7H 9H 8H TH JH");
        expect(hand.getWinningRule()).toEqual("Strait Flush");
    });
});