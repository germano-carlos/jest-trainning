import { sum, subtract, multiple, division, percentage, potencyOfTwo, history} from '../../entities/Calculadora'

describe("simple operations", () => {
    // Sum Operation
    it("Sum operation has to return 3, because 1 + 2 is 3", async () => {
        let a = 1
        let b = 2

        expect(sum(a, b)).toBe(3);
    })

    // Subtract Operation
    it("Subtract Operation has to return 2, becausa 2 - 0 is 2", async () => {
        let a = 2
        let b = 0

        expect(subtract(a, b)).toBe(2);
    })

    // Multiple Operation
    it("Multiple Operation has to return 12, because 2 * 6 = 12", async () => {
        let a = 2
        let b = 6

        expect(multiple(a, b)).toBe(12);
    })
    
    // Division Operation
    it("Division Operation has return 2, because 2/1 is 2", async () => {
        let a = 2
        let b = 1

        expect(division(a, b)).toBe(2);
    })
    
    it("Division Operation has return error, because 2/0 is invalid", async () => {
        let a = 2
        let b = 0

        expect(() => { division(a, b) }).toThrow(/is not valid/);;
    })

    // Percentage Operation
    it("Percetange Operation has to return .5, because 50/100 is 1/2 or 0.5", async () => {
        let a = 50;
        expect(percentage(50)).toBe(.5);
    })

    // Potency of Two Operation
    it("Potency Operation has to return 9, because 3^2 is 9", async () => {
        let a = 3;
        expect(potencyOfTwo(a)).toBe(9);
    })
})

describe('complex operations', () => {
    it("Subtract + Sum has to return 4, because 2-1 is 1 and 1+3 is 4", () => {
        let a = 1
        let b = 2
        let c = 3

        expect(subtract(b,a)).toBe(1)
        expect(sum(subtract(b, a), c)).toBe(4)
    })

    it("Sum + Subtract has to return -2, because 15+5 is 20 and 20-22 is -2", () => {
        let a = 5
        let b = 15
        let c = 22

        expect(sum(b, a)).toBe(20)
        expect(subtract(sum(b, a), c)).toBe(-2)
    })

    it("Sum + Multiple has to return -155, because 11+20 is 31 and 31 * -5 is -155", () => {
        let a = 11
        let b = 20
        let c = -5

        expect(sum(a, b)).toBe(31)
        expect(multiple(sum(a,b), c)).toBe(-155)
    })

    it("Multiple + Sum has to return 17, because 5*2 is 10 and 10 + 7 is 17 ", () => {
        let a = 2
        let b = 5
        let c = 7

        expect(multiple(a, b)).toBe(10)
        expect(sum(multiple(a, b), c)).toBe(17)
    })

    it("Division + Multiple has to return 2, because 4/2 is 2 and 2 * 1 is 2", () => {
        let a = 1
        let b = 2
        let c = 4

        expect(division(c, b)).toBe(2)
        expect(multiple(division(c, b), a)).toBe(2)
    })

    it("Multiple + Division has to return 6, because 2*3 is 6 and 6/1 is 6 ", () => {
        let a = 1
        let b = 2
        let c = 3

        expect(multiple(c, b)).toBe(6)
        expect(division(multiple(c, b), a)).toBe(6)
    })

    it("Potency Of Two + Sum has to return 11, because Potency of 3 is 9 and 9+2 is 11", () => {
        let b = 2
        let c = 3

        expect(potencyOfTwo(c)).toBe(9)
        expect(sum(potencyOfTwo(c), b)).toBe(11)
    })

    it("Potency Of Two + Multiple has to return 2, because Potency of 1 is 1 and 1*2 is 2 ", () => {
        let a = 1
        let b = 2

        expect(potencyOfTwo(a)).toBe(1)
        expect(multiple(potencyOfTwo(a), b)).toBe(2)
    })

    it("Multiple + Sum + Potency Of Two has to return 1600, because 5*6 is 30 and 30+10 is 40 and the potency of 40 is 1600", () => {
        let a = 5
        let b = 6
        let c = 10

        expect(multiple(a, b)).toBe(30)
        expect(sum(multiple(a, b), c)).toBe(40)
        expect(potencyOfTwo(sum(multiple(a, b), c))).toBe(1600)
    })

    it("Multiple + Sum + Percentage has to return 0,12, because 1*2 is 2 and 2+10 is 12 and the potency of 12 is 0,12", () => {
        let a = 1
        let b = 2
        let c = 10

        expect(multiple(a, b)).toBe(2)
        expect(sum(multiple(a, b), c)).toBe(12)
        expect(percentage(sum(multiple(a, b), c))).toBe(.12)
        
    })
})

describe('history', () => {
    it("history 1 operation", () => {
        let a = 1
        let b = 2
        let expectObj = [{
            result: 3,
            history: "1 + 2 = 3"
        }]

        expect(history([{param1: a, param2: b}], ['sum'])).toMatchObject(expectObj)
    })

    it("history 2 operations", () => {
        let a = 2
        let b = 4
        let c = 1
        let obj = [
            {
                result: 6,
                history: "2 + 4 = 6"
            },
            {
                result: 5,
                history: "6 - 1 = 5"
            }
        ]

        expect(history([{param1: a, param2: b}, {param1: sum(a, b), param2: c}], ['sum', 'subtract'])).toMatchObject(obj)
    })

    it("history 3 operations", () => {
        let a = 3
        let b = 4
        let c = 2
        let obj = [
            {
                result: 7,
                history: "3 + 4 = 7"
            },
            {
                result: 14,
                history: "7 x 2 = 14"
            },
            {
                result: 196,
                history: "14 * 14 = 196"
            }
        ]

        expect(history([{param1: a, param2: b}, {param1: sum(a, b), param2: c}, {param1: multiple(sum(a, b), c), param2: c}], ['sum', 'multiple', 'potencyOfTwo'])).toMatchObject(obj)
    })
})