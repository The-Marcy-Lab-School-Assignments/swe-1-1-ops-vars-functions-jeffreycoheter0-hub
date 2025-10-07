const add = (a, b) => {
  const result = a + b;
  console.log(`The sum of ${a} and ${b} is ${result}`);
  return result;
}

const subtract = (a, b) => {
  const result = a - b;
  console.log(`The difference between ${a} and ${b} is ${result}`);
  return result;
}

const multiply = (a, b) => {
  const result = a * b;
  console.log(`The product of ${a} and ${b} is ${result}`);
  return result;
}

const power = (a, b) => {
  const result = a ** b;
  console.log(`${a} to the power of ${b} is ${result}`);
  return result;
}

module.exports = {
  add,
  subtract,
  multiply,
  power,
};
