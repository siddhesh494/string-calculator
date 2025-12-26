function add(numbers) {
  if (numbers === "") return 0;

  // return parseInt(numbers);
  let delimiter = /,|\n/; // default delimiters
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // extract custom delimiter
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map(Number);
  const negatives = numArray.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
  let sum = 0
  numArray.forEach((n) => sum += n)
  return sum
}

// function replaceWithComma(text) {
//   return text.replace(/\n/g, ',');
// }

module.exports = { add };