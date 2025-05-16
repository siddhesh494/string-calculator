function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // default delimiters
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterSpec = parts[0].slice(2);

    const matches = delimiterSpec.match(/\[([^\]]+)\]/g);
    if (matches) {
      const delimiters = matches.map(d =>
        d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      );
      delimiter = new RegExp(delimiters.join("|"));
    } else {
      delimiter = new RegExp(delimiterSpec);
    }

    numbers = parts[1];
  }
  console.log("delimiter", delimiter)

  const numArray = numbers.split(delimiter).map(Number);

  const negatives = numArray.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray
    .filter(num => num <= 1000)
    .reduce((sum, num) => sum + num, 0)
}

module.exports = { add };