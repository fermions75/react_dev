// Example 1: Simple Object
const person = {
  name: 'John',
  age: 30,
  isEmployed: true
};
console.log(person);

// Example 2: Nested Object
const company = {
  name: 'TechCorp',
  location: 'New York',
  employees: [
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' }
  ]
};
console.log(company);

// Example 3: Object with Methods
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};
console.log('Addition:', calculator.add(5, 3));
console.log('Subtraction:', calculator.subtract(5, 3));