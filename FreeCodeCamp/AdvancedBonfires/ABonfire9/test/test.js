describe("pairwise", ()=> {
    it("should return 0", ()=> {
      expect(pairwise([], 1)).toEqual(0);
    });
    it("should return 1", ()=> {
      expect(pairwise([2, 3], 5)).toEqual(1);
    });
    it("should return 2", ()=> {
      expect(pairwise([2, 4, 3], 5)).toEqual(2);
    });
    it("should return 3", ()=> {
      expect(pairwise([2, 4, 3], 7)).toEqual(3);
    });
    it("should return 1 with 4 items", ()=> {
      expect(pairwise([1, 3, 2, 4], 4)).toEqual(1);
    });
    it("should not use the same index more than once", ()=> {
      expect(pairwise([1, 1, 1], 2)).toEqual(1);
    });
});
