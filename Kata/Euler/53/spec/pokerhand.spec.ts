import {PokerHandNoPlayer} from "src/pokerhand"
describe("PokerHand", ()=> {
    it("should split the hand and return higher card", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("8C TS KC 9H 4S 7D 2S 5D 3S AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
    });
    it("should check the second highest card", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("AS TS KC 9H 4S 7D 2S 5D 3S AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
    });
    it("should check the 5th highest card if tied", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("AS TS KC 9H 4S 9D 2S KD TC AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
    });
    it("should return tie for all cards the same value", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("AS TS KC 9H 2C 9D 2S KD TC AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("tie");
    });
    it("should return the hand with the pair", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("AS TS KC 9H 9C QD 2S KD TC AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
    });
    it("should return the hand with the higher pair", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("AS TS KC 9H 9C QD 2S KD KS AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
    });
    it("should return the high card hand if they both have pairs", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("AS TS KC KH 9C QD 2S KD KS AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
    });
    it("should return the hand with two pairs", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("AS TS QC QH TC QD 2S KD KS AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
    });
    it("should return the hand with the higher two pair", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("AS TS QC QH TC 2D 2S KD KS AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
    });
    it("should return the hand with the three of a kind", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("AS QS QC QH TC 2D 2S KD KS AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
    });
    it("should return the hand with the higher three of a kind", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("AS QS QC QH TC 2D KH KD KS AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
    });
    it("should return the hand with the strait", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("AS QS QC QH TC 2D 3H 4D 5S 6C");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
    });
    it("should return the hand with the higher strait", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("TS 8S 9C 7H 6C 2D 3H 4D 5S 6C");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
    });
    it("should return tie with same strait", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("TS 8S 9C 7H 6C TD 9H 8D 7S 6C");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("tie");
    });
    it("should return the hand with the flush", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("TS 8S 9C 7H 6C 6D 8D 2D TD 5D");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
    });
    it("should return the hand with the higher flush", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("TS 8S 2S 7S 6S 6D 8D 2D TD 5D");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
    });
    it("should return the hand with the full house", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("TS 8S 2S 7S 6S 6D 6C 6H TD TH");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
    });
    it("should return the other hand with its full house", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("8C 8S 7D 7C 7S 6D 6C 6H QD TH");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
    });
    it("should return the other hand with the higher full house", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("8C 8S 7D 7C 7S 6D 6C 6H TD TH");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
    });
    it("should return the hand with the 4 of a kind", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("8C 8S 8D 8H 7S 6D 6C 6H TD TH");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
    });
    it("should return the hand with the higher 4 of a kind", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("8C 8S 8D 8H 7S 6D 6C 6H 6S TH");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
    });
});
