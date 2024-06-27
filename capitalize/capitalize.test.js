const capitalize = require('./capitalize');

test('First letter capitalized', () => {
  expect(capitalize('orion')).toBe('Orion');
})