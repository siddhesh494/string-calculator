# String Calculator

## Step 0 - Project setup

- Initialize Node.js project
  ```bash
  mkdir string-calculator
  cd string-calculator
  npm init -y
  ```
- Install Jest for testing
  ```bash
  npm install --save-dev jest
  ```
- Configure Jest in package.json
  ```json
  "scripts": {
    "test": "jest"
  }
  ```
- Create your files
  ```bash
  touch calculator.js calculator.test.js
  ```

## Step 1 - Return 0 for empty string input in add()
- Write a failing test for empty input
  ```js
  const { add } = require('./calculator');

  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });
  ```
- Write the minimal code to make it pass
  ```js
  function add(numbers) {
    if (numbers === "") return 0;
  }

  module.exports = { add };
  ```

## Step 2 - Handle a single number input.
- Add a test for a single number
  ```javascript
  test('returns number itself when only one number is provided', () => {
    expect(add("1")).toBe(1);
  });
  ```
- Update implementation to pass the new test
  ```javascript
  return parseInt(numbers);
  ```

## Step 3 - Handle two comma-separated numbers
- Add a test for two numbers
  ```js
    test('returns sum of two comma-separated numbers', () => {
      expect(add("1,2")).toBe(3);
    });
  ```
- Update implementation to pass the test
  ```js
    const numArray = numbers.split(",").map(Number);
    let sum = 0
    numArray.forEach((n) => sum += n)
    return sum
  ```

## Step 4 - Handle any amount of numbers (still comma-separated)
- Add a test for multiple numbers
  ```js
    test('returns sum of multiple comma-separated numbers', () => {
      expect(add("1,2,3,4")).toBe(10);
    });
  ```
- No changes needed to implementation!

## Step 5 - Supporting newlines as separators (\n) in addition to commas
- Add a test for newline and comma as mixed delimiters
  ```js
  test('handles newlines as delimiters along with commas', () => {
    expect(add("1\n2,3")).toBe(6);
  });
  ```
- Update the implementation to replace \n with ,
  ```js
  function replaceWithComma(text) {
    return text.replace(/\n/g, ',');
  }
  numbers = replaceWithComma(numbers)
  ```

## Step 6 - Custom delimiters with the //[delimiter]\n[numbers] syntax.
- Add a test for custom delimiter
  ```js
    test('supports custom delimiter defined with // at the start', () => {
      expect(add("//;\n1;2")).toBe(3);
    });
  ```
- Update implementation to handle custom delimiter
  ```js
  let delimiter = /,|\n/; // default delimiters
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // extract custom delimiter
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map(Number);
  ```

## Step 7 - Handle negative number input.
- Add test for negative numbers
  ```js
    test('throws exception when negative number is present', () => {
      expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
    });

    test('throws exception with all negative numbers listed', () => {
      expect(() => add("-1,2,-3")).toThrow("negative numbers not allowed -1,-3");
    });
  ```
- Update implementation to handle negatives
  ```js
  const negatives = numArray.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
  ```

## Step 8 - Ignoring numbers > 1000
- Test case
  ```js
    test('ignores numbers greater than 1000', () => {
      expect(add("2,1001")).toBe(2);
    });

    test('sums only numbers <= 1000 when mixed with large numbers', () => {
      expect(add("1000,1,1001,2")).toBe(1003);
    });
  ```
- Update implementation to ignore numbers > 1000
  ```js
    numArray.forEach((n) => {
      if(n <= 1000) sum += n
    })
  ```