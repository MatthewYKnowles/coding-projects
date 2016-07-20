System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Poker, Hand;
    return {
        setters:[],
        execute: function() {
            class Poker {
                static getWinner(pokerHands) {
                    let blackHand = new Hand(pokerHands.slice(0, 21));
                    let whiteHand = new Hand(pokerHands.slice(22, 43));
                    if (blackHand.hand[0][0] > whiteHand.hand[0][0]) {
                        console.log(blackHand.hand[0][0]);
                        return "Black wins. - with high card: 9";
                    }
                    else {
                        return "White wins. - with high card: 8";
                    }
                }
            }
            exports_1("Poker", Poker);
            class Hand {
                constructor(pokerHand) {
                    this.playerColor = pokerHand.slice(0, 5);
                    let handString = pokerHand.slice(7, 30);
                    this.hand = handString.split(" ");
                }
            }
            exports_1("Hand", Hand);
        }
    }
});
//# sourceMappingURL=poker.js.map