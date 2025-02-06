function calculate(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Cannot divide by zero";
        default: return "Invalid operator";
    }
}

const a = parseFloat(prompt("Enter first number:"));
const b = parseFloat(prompt("Enter second number:"));
const operator = prompt("Enter an operator (+, -, *, /):");

console.log(`Result: ${calculate(a, b, operator)}`);
