const capitalize = require('./capitalize');

test('First letter capitalized', () => {
  expect(capitalize('alone')).toBe('Alone');
})