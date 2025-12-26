const { add } = require('./calculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number itself when only one number is provided', () => {
  expect(add("1")).toBe(1);
});