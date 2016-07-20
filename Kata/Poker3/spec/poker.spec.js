System.register(["src/poker"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var poker_1;
    return {
        setters:[
            function (poker_1_1) {
                poker_1 = poker_1_1;
            }],
        execute: function() {
            describe("Poker", () => {
                it("should return Black wins with high card 9", () => {
                    expect(poker_1.Poker.getWinner("Black: 9H 8C 6S 5D 4H White: 8H 7C 5H 4S 3C")).toBe("Black wins. - with high card: 9");
                });
                it("should return White wins with high card 9", () => {
                    expect(poker_1.Poker.getWinner("Black: 2H 8C 6S 5D 4H White: 8H 7C 5H 4S 3C")).toBe("White wins. - with high card: 8");
                });
            });
            describe("Hand", () => {
                it("should take in the string pokerhand and set playerColor", () => {
                    let blackHand = new poker_1.Hand("Black: 2H 3D 5S 9C KD");
                    expect(blackHand.playerColor).toBe("Black");
                });
                it("should take in the string pokerhand and set hand array", () => {
                    let blackHand = new poker_1.Hand("Black: 2H 3D 5S 9C KD");
                    expect(blackHand.hand).toEqual(["2H", "3D", "5S", "9C", "KD"]);
                });
            });
        }
    }
});
//# sourceMappingURL=poker.spec.js.map