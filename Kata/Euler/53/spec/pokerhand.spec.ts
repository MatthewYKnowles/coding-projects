import {PokerHandNoPlayer, RatePokerHand} from "src/pokerhand"
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
});
