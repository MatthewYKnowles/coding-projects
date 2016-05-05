System.register(["src/minesweeper"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var minesweeper_1;
    return {
        setters:[
            function (minesweeper_1_1) {
                minesweeper_1 = minesweeper_1_1;
            }],
        execute: function() {
            describe("minesweeper", function () {
                it("should return an star when a star is passed in", function () {
                    expect(minesweeper_1.minesweeper.findBombs("*")).toBe("*");
                });
                it("should return replace . with a 1", function () {
                    expect(minesweeper_1.minesweeper.findBombs("*.")).toBe("*1");
                });
                it("should return replace the second . with a 0", function () {
                    expect(minesweeper_1.minesweeper.findBombs("*..")).toBe("*10");
                });
                it("should return replace a dot that preceeds the bomb", function () {
                    expect(minesweeper_1.minesweeper.findBombs("..*")).toBe("01*");
                });
                it("should return replace a dot that is betweet two bombs", function () {
                    expect(minesweeper_1.minesweeper.findBombs("*.*")).toBe("*2*");
                });
                it("should return replace a dot that is betweet two bombs", function () {
                    expect(minesweeper_1.minesweeper.findBombs("*.\n..")).toBe("*1\n11");
                });
            });
        }
    }
});
//# sourceMappingURL=minesweeper.spec.js.map