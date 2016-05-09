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
            describe("function name", () => {
                it("should return true", () => {
                    expect(true).toBe(true);
                });
                it("should return true", () => {
                    let pokerhand = new pokerhand_1.Pokerhand();
                    expect(pokerhand.true()).toBe(true);
                });
            });
        }
    }
});
