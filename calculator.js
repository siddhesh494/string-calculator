function add(numbers) {
  if (numbers === "") return 0;

  // return parseInt(numbers);
  numbers = replaceWithComma(numbers)
  const numArray = numbers.split(",").map(Number);
  let sum = 0
  numArray.forEach((n) => sum += n)
  return sum
}

function replaceWithComma(text) {
  return text.replace(/\n/g, ',');
}

module.exports = { add };