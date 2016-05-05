import {minesweeper} from "src/minesweeper";

describe("minesweeper", ()=> {
    it("should return an star when a star is passed in", ()=> {
        expect(minesweeper.findBombs("*")).toBe("*")
    });
    it("should return replace . with a 1", ()=> {
        expect(minesweeper.findBombs("*.")).toBe("*1");
    });
    it("should return replace the second . with a 0", ()=> {
        expect(minesweeper.findBombs("*..")).toBe("*10");
    });
    it("should return replace a dot that preceeds the bomb", ()=> {
        expect(minesweeper.findBombs("..*")).toBe("01*");
    });
    it("should return replace a dot that is betweet two bombs", ()=> {
        expect(minesweeper.findBombs("*.*")).toBe("*2*");
    });
    it("should return replace a dot that is betweet two bombs", ()=> {
        expect(minesweeper.findBombs("*.\n..")).toBe("*1\n11");
    });
});