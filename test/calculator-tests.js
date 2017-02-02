const expect = require ('chai').expect
const calculator = require ('../src/calculator')

describe('calculator', () => {
    it('add should correctly add two numbers', () => {
        const result = calculator.add(3, 5)
        expect(result).to.equal(8)
    })
    it('subtract should correctly subtract two numbers', () => {
        const result = calculator.subtract(8, 2)
        expect(result).to.equal(6)
    })
    it('subtract should correctly subtract two numbers', () => {
        const result = calculator.multiply(4,3)
        expect(result).to.equal(12)
    })
})