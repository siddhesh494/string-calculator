const { add } = require('./calculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number itself when only one number is provided', () => {
  expect(add("1")).toBe(1);
});

test('returns sum of two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns sum of multiple comma-separated numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('handles newlines as delimiters along with commas', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiter defined with // at the start', () => {
  expect(add("//;\n1;2")).toBe(3);
});