describe("orbitalPeriod", ()=> {
    it("should return the orbital Period", ()=> {
      expect(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])).toEqual([{name: "sputnik", orbitalPeriod: 86400}]);
    });
    it("should return the orbital Period", ()=> {
      var twoObjectsIn = [{name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]
      var objectsOut = [{name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
      expect(orbitalPeriod(twoObjectsIn)).toEqual(objectsOut);
    });
});
