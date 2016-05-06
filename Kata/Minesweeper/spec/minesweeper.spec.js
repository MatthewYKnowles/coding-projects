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
                    var minesweeper = new minesweeper_1.Minesweeper("*");
                    expect(minesweeper.getMapWithNumbers()).toBe("*");
                });
                it("should return replace . with a 1", function () {
                    var minesweeper = new minesweeper_1.Minesweeper("*.");
                    expect(minesweeper.getMapWithNumbers()).toBe("*1");
                });
                it("should return replace the second . with a 0", function () {
                    var minesweeper = new minesweeper_1.Minesweeper("*..");
                    expect(minesweeper.getMapWithNumbers()).toBe("*10");
                });
                it("should return replace a dot that proceeds the bomb", function () {
                    var minesweeper = new minesweeper_1.Minesweeper("..*");
                    expect(minesweeper.getMapWithNumbers()).toBe("01*");
                });
                it("should return replace a dot that is between two bombs", function () {
                    var minesweeper = new minesweeper_1.Minesweeper("*.*");
                    expect(minesweeper.getMapWithNumbers()).toBe("*2*");
                });
                it("should look for bombs in the upper left corner and above the current number", function () {
                    var minesweeper = new minesweeper_1.Minesweeper("*.\n..");
                    expect(minesweeper.getMapWithNumbers()).toBe("*1\n11");
                });
                it("should look for bombs below the first line", function () {
                    var minesweeper = new minesweeper_1.Minesweeper("..\n*.");
                    expect(minesweeper.getMapWithNumbers()).toBe("11\n*1");
                });
                it("should look for bombs from the middle line", function () {
                    var minesweeper = new minesweeper_1.Minesweeper("..\n*.\n..");
                    expect(minesweeper.getMapWithNumbers()).toBe("11\n*1\n11");
                });
            });
        }
    }
});
//# sourceMappingURL=minesweeper.spec.js.map