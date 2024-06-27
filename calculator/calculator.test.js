const calculator = require('./calculator');

test('adds 2 + 2 to be equal to 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test('subtracts 2 - 2 to be equal to 0', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
})

test('divides 2 / 2 to be equal to 1', () => {
    expect(calculator.divide(2, 2)).toBe(1);
})

test('multiplies 2 * 2 to be equal to 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
})