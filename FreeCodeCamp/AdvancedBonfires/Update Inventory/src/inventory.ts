export class Inventory {
    updateInventory(currentInventory: any, deliveredInventory: any): any {
        if (deliveredInventory.length > 0) {
            currentInventory.push(deliveredInventory[0]);
        }
        currentInventory.sort(this.sortTwoDimensionalArray);
        return currentInventory;
    }

    sortTwoDimensionalArray(a: any, b: any): any {
        return a[1] > b[1];
    }
}