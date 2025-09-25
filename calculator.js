function replaceWithComma(text, replaceString) {
  return text.replace(replaceString, ',');
}

function add(numbers) {
  let delimiterPattern = new RegExp(/\n/, 'g'); // default delimiter: newline
  let numString = numbers;

  // Check for custom delimiter at the start: //{delimiter}\n
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n/);
    if (match) {
      const customDelimiter = match[1];
      
      delimiterPattern = new RegExp(customDelimiter, 'g'); // creating new regex with custom delimiter
      
      numString = numbers.slice(match[0].length); // Remove the //... line
    }
  }

  numString = replaceWithComma(numString, delimiterPattern);
  const numArray = numString.split(",").map(Number);
  let sum = 0
  numArray.forEach((n) => sum += n)
  return sum
}

module.exports = { add };