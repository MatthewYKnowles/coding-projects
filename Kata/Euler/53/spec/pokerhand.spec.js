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
                it("should split the hand", () => {
                    let pokerHandNoPlayer = new pokerhand_1.PokerHandNoPlayer("8C TS KC 9H 4S 7D 2S 5D 3S AC");
                    expect(pokerHandNoPlayer.getWinningString()).toEqual("hand2");
                });
            });
        }
    }
});
//# sourceMappingURL=pokerhand.spec.js.map