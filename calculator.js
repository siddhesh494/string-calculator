function add(numbers) {
  if (numbers === "") return 0;

  const numArray = numbers.split(",").map(Number);
  let sum = 0
  numArray.forEach((n) => sum += n)
  return sum
}

module.exports = { add };