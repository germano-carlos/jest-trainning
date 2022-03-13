import { sum } from '../../entities/Calculadora'


describe("tests", () => {
    it("should return 3, because 1+2 is 3", async () => {
        expect(sum(1, 2)).toBe(4);
    })

})
