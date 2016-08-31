import {Card, Hand} from "../src/Poker";
describe("Card", () => {
    it("should return its own value of 5", ()=> {
        let card: Card = new Card("5C");
        expect(card.getValue()).toEqual(5);
    });
    it("should return its own value of 6", ()=> {
        let card: Card = new Card("6C");
        expect(card.getValue()).toEqual(6);
    });
    it("should return a value of 10 for T", ()=> {
        let card: Card = new Card("TC");
        expect(card.getValue()).toEqual(10);
    });
    it("should return a value of 11 for J", ()=> {
        let card: Card = new Card("JC");
        expect(card.getValue()).toEqual(11);
    });
    it("should return a value of 12 for Q", ()=> {
        let card: Card = new Card("QC");
        expect(card.getValue()).toEqual(12);
    });
});
describe("Hand", ()=> {
   it("should return high card as the winning rule with the highest card for 9", ()=> {
       let hand: Hand = new Hand("9C 8D 7C 5D 4S");
       expect(hand.getWinningRule()).toEqual("High Card: 9");
   });
   it("should return high card as the winning rule with the highest card for 8", ()=> {
       let hand: Hand = new Hand("8C 7D 6C 5D 3S");
       expect(hand.getWinningRule()).toEqual("High Card: 8");
   });
   it("should return high card with Ten", ()=> {
       let hand: Hand = new Hand("TC 7D 6C 5D 3S");
       expect(hand.getWinningRule()).toEqual("High Card: Ten");
   });
   it("should return high card with Jack", ()=> {
       let hand: Hand = new Hand("JC 7D 6C 5D 3S");
       expect(hand.getWinningRule()).toEqual("High Card: Jack");
   });
   it("should return the high card even when its not at the front", ()=> {
       let hand: Hand = new Hand("7C JD 6C 5D 3S");
       expect(hand.getWinningRule()).toEqual("High Card: Jack");
   });
   it("should return the high card even when its not at the front", ()=> {
       let hand: Hand = new Hand("7C JD 6C 5D AS");
       expect(hand.getWinningRule()).toEqual("High Card: Ace");
   });
   it("should return pair", ()=> {
       let hand: Hand = new Hand("7C JD 6C AD AS");
       expect(hand.getWinningRule()).toEqual("Pair");
   });
   it("should return pair", ()=> {
       let hand: Hand = new Hand("7C 6D 6C QD AS");
       expect(hand.getWinningRule()).toEqual("Pair");
   });
});