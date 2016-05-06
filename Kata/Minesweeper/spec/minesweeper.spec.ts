import {Minesweeper} from "src/minesweeper";

describe("minesweeper", ()=> {
    it("should return an star when a star is passed in", ()=> {
        let minesweeper: Minesweeper = new Minesweeper("*");
        expect(minesweeper.getMapWithNumbers()).toBe("*")
    });
    it("should return replace . with a 1", ()=> {
        let minesweeper: Minesweeper = new Minesweeper("*.");
        expect(minesweeper.getMapWithNumbers()).toBe("*1");
    });
    it("should return replace the second . with a 0", ()=> {
        let minesweeper: Minesweeper = new Minesweeper("*..");
        expect(minesweeper.getMapWithNumbers()).toBe("*10");
    });
    it("should return replace a dot that proceeds the bomb", ()=> {
        let minesweeper: Minesweeper = new Minesweeper("..*");
        expect(minesweeper.getMapWithNumbers()).toBe("01*");
    });
    it("should return replace a dot that is between two bombs", ()=> {
        let minesweeper: Minesweeper = new Minesweeper("*.*");
        expect(minesweeper.getMapWithNumbers()).toBe("*2*");
    });
    it("should look for bombs in the upper left corner and above the current number", ()=> {
        let minesweeper: Minesweeper = new Minesweeper("*.\n..");
        expect(minesweeper.getMapWithNumbers()).toBe("*1\n11");
    });
    it("should look for bombs below the first line", ()=> {
        let minesweeper: Minesweeper = new Minesweeper("..\n*.");
        expect(minesweeper.getMapWithNumbers()).toBe("11\n*1");
    });
    it("should look for bombs from the middle line", ()=> {
        let minesweeper: Minesweeper = new Minesweeper("..\n*.\n..");
        expect(minesweeper.getMapWithNumbers()).toBe("11\n*1\n11");
    });
    it("should work in a 3 x 3 grid", ()=> {
        let minesweeper: Minesweeper = new Minesweeper("...\n*..\n...");
        expect(minesweeper.getMapWithNumbers()).toBe("110\n*10\n110");
    });
    it("should work with a bomb on each level", ()=> {
        let minesweeper: Minesweeper = new Minesweeper(".*.\n*..\n..*");
        expect(minesweeper.getMapWithNumbers()).toBe("2*1\n*32\n12*");
    });
});