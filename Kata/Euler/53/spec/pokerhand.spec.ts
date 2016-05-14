import {PokerHandNoPlayer} from "src/pokerhand"
describe("PokerHand", ()=> {
    it("should split the hand", ()=> {
        let pokerHandNoPlayer: PokerHandNoPlayer = new PokerHandNoPlayer("8C TS KC 9H 4S 7D 2S 5D 3S AC");
        expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
    });
});