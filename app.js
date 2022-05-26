const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;

const operate = (operator, numOne, numTwo) => {
  if (operator === "+") return add(numOne, numTwo);
  if (operator === "-") return subtract(numOne, numTwo);
  if (operator === "*") return multiply(numOne, numTwo);
  if (operator === "/") return divide(numOne, numTwo);
};
