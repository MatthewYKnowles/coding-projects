import {Card, Hand} from "../src/sample";
describe("Card", ()=> {
    it("should return card value 0f 5", ()=> {
        let card: Card = new Card("5S");
        expect(card.value).toBe(5);
    });
    it("should return card value of 6", ()=> {
        let card: Card = new Card("6S");
        expect(card.value).toBe(6);
    });
    it("should return card value of 10 for T", ()=> {
        let card: Card = new Card("TS");
        expect(card.value).toBe(10);
    });
    it("should return card value of 11 for J", ()=> {
        let card: Card = new Card("JS");
        expect(card.value).toBe(11);
    });
});

describe("Hand", ()=> {
    it("should return pair if two values are the same", ()=> {
        let hand: Hand = new Hand("5S 6H 7D 6S 9D");
        expect(hand.getWinningRule()).toBe("pair");
    });
    it("should return high card if there is no winning rule", ()=> {
        let hand: Hand = new Hand("5S 6H 7D JS 9D");
        expect(hand.getWinningRule()).toBe("high card");
    });
});
