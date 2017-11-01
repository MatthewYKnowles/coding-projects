import {Inventory} from "../src/inventory";

describe("update inventory", () => {
    let inventory: Inventory;

    beforeEach(() => {
        inventory = new Inventory();
    });

    it("should return empty array when nothing passed in", () => {
        expect(inventory.updateInventory([], [])).toEqual([]);
    });
    it("should return current inventory when delivery inventory is empty", () => {
        expect(inventory.updateInventory([[1, "ball"]], [])).toEqual([[1, "ball"]]);
    });
    it("should return delivery inventory when current inventory is empty", () => {
        expect(inventory.updateInventory([], [[2, "ball"]])).toEqual([[2, "ball"]]);
    });
    it("should one item to current inventory", () => {
        expect(inventory.updateInventory([[1, "ball"]], [[2, "hair pin"]])).toEqual([[1, "ball"], [2, "hair pin"]]);
    });
    it("should return inventory in alphabetical order", () => {
        expect(inventory.updateInventory([[2, "hair pin"]], [[1, "ball"]])).toEqual([[1, "ball"], [2, "hair pin"]]);
    });

});