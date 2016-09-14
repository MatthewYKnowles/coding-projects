import {ConnectFour} from "../src/connectfour"
describe("Connect Four", ()=> {
    it("should create a grid", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        expect(connectFour.grid).toBe("......./n......./n......./n......./n......./n.......")
    });
    it("should drop a Red token in the first column", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Red", 1);
        expect(connectFour.getReturnGridAsAString()).toBe("......./n......./n......./n......./n......./nR......")
    });
    it("should drop a Red token in the second column", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Red", 2);
        expect(connectFour.getReturnGridAsAString()).toBe("......./n......./n......./n......./n......./n.R.....")
    });
    it("should drop a Black token in the first column", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Black", 1);
        expect(connectFour.getReturnGridAsAString()).toBe("......./n......./n......./n......./n......./nB......")
    });
    it("should drop a Black token in the first column and a Red in the second", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Black", 1);
        connectFour.dropToken("Red", 2);
        expect(connectFour.getReturnGridAsAString()).toBe("......./n......./n......./n......./n......./nBR.....")
    });
    it("should drop a Black token in the first column and then a Red on top of it", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Black", 1);
        connectFour.dropToken("Red", 1);
        expect(connectFour.getReturnGridAsAString()).toBe("......./n......./n......./n......./nR....../nB......")
    });
    it("should fill a column and try to add an additional token", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Black", 1);
        connectFour.dropToken("Red", 1);
        connectFour.dropToken("Black", 1);
        connectFour.dropToken("Red", 1);
        connectFour.dropToken("Black", 1);
        connectFour.dropToken("Red", 1);
        expect(connectFour.dropToken("Black", 1)).toBe("Cannot add more tokens here!")
    });
    it("four tokens in a row in first row should return red/win", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Red", 1);
        connectFour.dropToken("Red", 2);
        connectFour.dropToken("Red", 3);
        expect(connectFour.dropToken("Red", 4)).toBe("Red wins!");
        expect(connectFour.getReturnGridAsAString()).toBe("......./n......./n......./n......./n......./nRRRR...")
    });

    it("four tokens in a row vertically should return a red win", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Red", 1);
        connectFour.dropToken("Red", 1);
        connectFour.dropToken("Red", 1);
        expect(connectFour.dropToken("Red", 1)).toBe("Red wins!");
    });

    it("four tokens in the second row should return red/win", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Red", 1);
        connectFour.dropToken("Red", 2);
        connectFour.dropToken("Red", 3);
        connectFour.dropToken("Black", 4);
        connectFour.dropToken("Red", 1);
        connectFour.dropToken("Red", 2);
        connectFour.dropToken("Red", 3);
        expect(connectFour.dropToken("Red", 4)).toBe("Red wins!");
        // expect(connectFour.getReturnGridAsAString()).toBe("......./n......./n......./n......./n......./nRRRR...")
    });

    it("four tokens in a row vertically should return a black win", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Red", 7);
        connectFour.dropToken("Red", 7);
        connectFour.dropToken("Black", 7);
        connectFour.dropToken("Black", 7);
        connectFour.dropToken("Black", 7);
        expect(connectFour.dropToken("Black", 7)).toBe("Black wins!");
    });

    it("four diagonal tokens should return black/win", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Black", 1);
        connectFour.dropToken("Red", 2);
        connectFour.dropToken("Red", 3);
        connectFour.dropToken("Black", 4);
        connectFour.dropToken("Red", 1);
        connectFour.dropToken("Black", 2);
        connectFour.dropToken("Red", 3);
        connectFour.dropToken("Black", 3);
        connectFour.dropToken("Red", 4);
        connectFour.dropToken("Red", 4);
        expect(connectFour.dropToken("Black", 4)).toBe("Black wins!");
    });
    it("four diagonal tokens should return black/win", ()=> {
        let connectFour: ConnectFour = new ConnectFour();
        connectFour.dropToken("Black", 1);
        connectFour.dropToken("Red", 1);
        connectFour.dropToken("Red", 1);
        connectFour.dropToken("Black", 1);
        connectFour.dropToken("Red", 2);
        connectFour.dropToken("Black", 2);
        connectFour.dropToken("Black", 2);
        connectFour.dropToken("Black", 3);
        connectFour.dropToken("Black", 3);
        connectFour.dropToken("Red", 5);
        expect(connectFour.dropToken("Black", 4)).toBe("Black wins!");
    });
});