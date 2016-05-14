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
                it("should work in a 3 x 3 grid", function () {
                    var minesweeper = new minesweeper_1.Minesweeper("...\n*..\n...");
                    expect(minesweeper.getMapWithNumbers()).toBe("110\n*10\n110");
                });
                it("should work with a bomb on each level", function () {
                    var minesweeper = new minesweeper_1.Minesweeper(".*.\n*..\n..*");
                    expect(minesweeper.getMapWithNumbers()).toBe("2*1\n*32\n12*");
                });
                it("should work with 4 levels", function () {
                    var minesweeper = new minesweeper_1.Minesweeper(".*.\n*..\n..*\n...");
                    expect(minesweeper.getMapWithNumbers()).toBe("2*1\n*32\n12*\n011");
                });
                it("should work with 5x5 grid", function () {
                    var minesweeper = new minesweeper_1.Minesweeper("*...*\n**.**\n*.*.*\n*...*\n*...*");
                    expect(minesweeper.getMapWithNumbers()).toBe("*323*\n**3*\n*5*5*\n*414*\n*202*");
                });
                it("should work with an 8x8 grid", function () {
                    var minesweeper = new minesweeper_1.Minesweeper("*...*..*\n.*.**.**\n*.*.****\n*.*.*.**\n***...*.\n.*..**.*\n***..***\n.....**.");
                    expect(minesweeper.getMapWithNumbers()).toBe("*");
                });
            });
        }
    }
});
//# sourceMappingURL=minesweeper.spec.js.map