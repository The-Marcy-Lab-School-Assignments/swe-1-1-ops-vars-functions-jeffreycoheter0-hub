const {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
} = require('./from-scratch');

// Test your functions here!
console.log(calculateArea(6, 7));
console.log(isEven(69));
console.log(convertToFahrenheit(67));
createGreeting('Jeffrey');
console.log(getInitials('Jeffrey', 'Cohetero'));
console.log(formatPrice(3));
console.log(getLarger(7, 9));
console.log(isValidAge(23));