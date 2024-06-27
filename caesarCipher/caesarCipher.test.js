const cipher = require('./caesarCipher');

test('Turns xyz to abc with the key set to 3', () => {
    expect(cipher('xyz', 3)).toBe('abc');
})

test('Turns HeLLo to KhOOr with the key set to 3', () => {
    expect(cipher('HeLLo', 3)).toBe('KhOOr');
})

test('Turns Hello, World! to Khoor, Zruog! with the key set to 3', () => {
    expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})