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

test('throws exception when negative number is present', () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
});

test('throws exception with all negative numbers listed', () => {
  expect(() => add("-1,2,-3")).toThrow("negative numbers not allowed -1,-3");
});

test('ignores numbers greater than 1000', () => {
  expect(add("2,1001")).toBe(2);
});

test('sums only numbers <= 1000 when mixed with large numbers', () => {
  expect(add("1000,1,1001,2")).toBe(1003);
});

test('supports custom delimiter of any length using brackets', () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});

test('supports multiple custom delimiters', () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test('supports multiple delimiters of any length', () => {
  expect(add("//[***][%%]\n1***2%%3")).toBe(6);
});