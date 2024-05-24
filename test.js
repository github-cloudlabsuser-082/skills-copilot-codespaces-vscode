const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, operator, num2) {
  switch(operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num1 / num2;
    default: return "Invalid operator";
  }
}

readline.question('Enter the first number: ', num1 => {
  readline.question('Enter an operator: ', operator => {
    readline.question('Enter the second number: ', num2 => {
      const result = calculate(parseFloat(num1), operator, parseFloat(num2));
      console.log(`The result is: ${result}`);
      readline.close();
    });
  });
});

// test.js
const calculate = require('./test');

describe('calculate', () => {
  it('adds two numbers', () => {
    expect(calculate(1, '+', 2)).toBe(3);
  });

  it('subtracts two numbers', () => {
    expect(calculate(5, '-', 2)).toBe(3);
  });

  it('multiplies two numbers', () => {
    expect(calculate(3, '*', 2)).toBe(6);
  });

  it('divides two numbers', () => {
    expect(calculate(6, '/', 2)).toBe(3);
  });

  it('returns "Invalid operator" for an invalid operator', () => {
    expect(calculate(1, 'invalid', 2)).toBe("Invalid operator");
  });
});