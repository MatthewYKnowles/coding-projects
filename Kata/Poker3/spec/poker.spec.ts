import {Poker, Hand} from "src/poker"
describe("Poker", ()=> {
    it("should return Black wins with high card 9", ()=> {
        expect(Poker.getWinner("Black: 9H 8C 6S 5D 4H White: 8H 7C 5H 4S 3C")).toBe("Black wins. - with high card: 9");
    });
    it("should return White wins with high card 9", ()=> {
        expect(Poker.getWinner("Black: 2H 7C 6S 5D 4H White: 8H 7C 5H 4S 3C")).toBe("White wins. - with high card: 8");
    });
    it("should return Black wins with high card 9", ()=> {
        expect(Poker.getWinner("Black: 2H 8C 6S 9D 4H White: 8H 7C 5H 4S 3C")).toBe("Black wins. - with high card: 9");
    });
    it("should return White wins with high card Ten", ()=> {
        expect(Poker.getWinner("Black: 2H 8C 6S 9D 4H White: 8H 7C TH 4S 3C")).toBe("White wins. - with high card: Ten");
    });
    it("should return Black wins with high card Ace", ()=> {
        expect(Poker.getWinner("Black: 2H 8C AS 9D 4H White: 8H 7C TH 4S 3C")).toBe("Black wins. - with high card: Ace");
    });
    it("should return White wins with high card King since both hands have Aces", ()=> {
        expect(Poker.getWinner("Black: 2H 8C AS 9D 4H White: 8H 7C KH 4S AC")).toBe("White wins. - with high card: King");
    });
    it("should return White wins with high card 4 since both hands have 4 of the same cards", ()=> {
        expect(Poker.getWinner("Black: 2H KC AS QD JH White: 4H QC KH JS AC")).toBe("White wins. - with high card: 4");
    });
    it("should return tie since all cards are the same", ()=> {
        expect(Poker.getWinner("Black: 4C KC AS QD JH White: 4H QC KH JS AC")).toBe("tie.");
    });
    it("should return black wins with a pair of 8s", ()=> {
        expect(Poker.getWinner("Black: 4C KC AS 8D 8H White: 4H QC KH JS AC")).toBe("Black wins. - with pair: 8");
    });
});

describe("Hand", ()=> {
    it("should take in the string pokerhand and set playerColor", ()=> {
        let blackHand: Hand = new Hand("Black: 8H 7C 5H 4S 3C");
        expect(blackHand.playerColor).toBe("Black");
    });
    it("should take in the string pokerhand and set hand array", ()=> {
        let blackHand: Hand = new Hand("Black: 8H 7C 5H 4S 3C");
        expect(blackHand.hand).toEqual([ [ 8, 'H' ], [ 7, 'C' ], [ 5, 'H' ], [ 4, 'S' ], [ 3, 'C' ] ]);
    });
    it("should sort the hand with the highest numbers up front", ()=> {
        let blackHand: Hand = new Hand("Black: 2H 3D 5S 9C 6D");
        expect(blackHand.hand).toEqual([ [ 9, 'C' ], [ 6, 'D' ], [ 5, 'S' ], [ 3, 'D' ], [ 2, 'H' ] ]);
    });
    it("should convert T to 10 before sorting", ()=> {
        let blackHand: Hand = new Hand("Black: 2H 3D 5S TC 6D");
        expect(blackHand.hand).toEqual([ [ 10, 'C' ], [ 6, 'D' ], [ 5, 'S' ], [ 3, 'D' ], [ 2, 'H' ] ]);
    });
});