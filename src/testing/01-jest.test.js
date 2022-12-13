import { sumNumber, multipleNum } from "./number"
import { greeting, taxCut } from "./text"

describe("basic testing group", () => {
    it("testing basic", () => {
        expect(true).toBe(true)
    })

    // skip test lain, cuman ini aja
    // it.only("sum number", () => {
    //     expect(1 + 2).toBe(3)
    //     expect(2 * 3).toBe(6)
    // })
})

describe("number group testing", () => {
    it("sum function", () => {
      expect(sumNumber(3,2)).toBe(5)
      expect(sumNumber(4,8)).toBe(12)
    })
    
    it("multiplication function", () => {
      expect(multipleNum(2,5)).toBe(10)
      expect(multipleNum(2,3)).toBe(6)
    })
})

describe("group testing text/string", () => {
    it("find net salary after tax cut", () => {
      expect(taxCut(10000000)).toBe(`Your net salary is Rp${9000000}`)
    })
    
    it("greeting with name", () => {
      expect(greeting("stupid")).toBe(`Hi stupid`)
    })
})
