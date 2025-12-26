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