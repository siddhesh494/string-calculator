function replaceWithComma(text, replaceString) {
  return text.replace(replaceString, ',');
}

function handleMultipleDelimiter(s) {
  return s.split("][").map((i) => {
    const close = i.indexOf("]")
    const open = i.indexOf("[")
    if(close>-1 && open>-1) {
      return i.slice(open+1, close)
    }else if(open > -1) {
      return i.slice(open+1)
    } else if(close > -1) {
      return i.slice(0,close)
    } else {
      return i
    }
  }).map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|")
}

function add(numbers) {
  let delimiterPattern = new RegExp(/\n/, 'g'); // default delimiter: newline
  let numString = numbers;

  // Check for custom delimiter at the start: //{delimiter}\n
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n/);
    if (match) {
      const customDelimiter = match[1];
      const d = handleMultipleDelimiter(customDelimiter)
      
      delimiterPattern = new RegExp(d, 'g'); // creating new regex with custom delimiter
      
      numString = numbers.slice(match[0].length); // Remove the //... line
    }
  }
  numString = replaceWithComma(numString, delimiterPattern);
  const numArray = numString.split(",").map(Number);
  
  // handle negative number
  const negatives = numArray.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
  let sum = 0
  numArray.forEach((n) => {
    if(n <= 1000) sum += n  // handle number greater than 1000
  })
  return sum
}

module.exports = { add };