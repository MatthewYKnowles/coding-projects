System.register(["src/pokerhand"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pokerhand_1;
    return {
        setters:[
            function (pokerhand_1_1) {
                pokerhand_1 = pokerhand_1_1;
            }],
        execute: function() {
            describe("PokerHand", () => {
                it("should split the hand and return higher card", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("8C TS KC 9H 4S 7D 2S 5D 3S AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
                });
                it("should check the second highest card", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("AS TS KC 9H 4S 7D 2S 5D 3S AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
                });
                it("should check the 5th highest card if tied", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("AS TS KC 9H 4S 9D 2S KD TC AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
                });
                it("should return tie for all cards the same value", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("AS TS KC 9H 2C 9D 2S KD TC AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("tie");
                });
                it("should return the hand with the pair", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("AS TS KC 9H 9C QD 2S KD TC AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
                });
                it("should return the hand with the higher pair", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("AS TS KC 9H 9C QD 2S KD KS AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
                });
                it("should return the high card hand if they both have pairs", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("AS TS KC KH 9C QD 2S KD KS AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
                });
                it("should return the hand with two pairs", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("AS TS QC QH TC QD 2S KD KS AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
                });
                it("should return the hand with the higher two pair", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("AS TS QC QH TC 2D 2S KD KS AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
                });
                it("should return the hand with the three of a kind", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("AS QS QC QH TC 2D 2S KD KS AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand1");
                });
                it("should return the hand with the higher three of a kind", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("AS QS QC QH TC 2D KH KD KS AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
                });
                it("should return the hand with the strait", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("AS QS QC QH TC 2D 3H 4D 5S 6C");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
                });
            });
        }
    }
});
//# sourceMappingURL=pokerhand.spec.js.map