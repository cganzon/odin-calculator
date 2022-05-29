const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const decimalBtn = document.querySelector("#decimal");
const equalsBtn = document.querySelector("#equals");
const allClearBtn = document.querySelector("#all-clear");
const deleteBtn = document.querySelector("#delete");
const currentOperationDisplay = document.querySelector(".current-operation");

let currentOperation = "";
let previousOperation = "";
let currentOperator = "";

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

const evaluate = (operator, numOne, numTwo) => {
  let result = operate(operator, numOne, numTwo);
  result = Math.round(result * 100000000) / 100000000;
  currentOperation = result.toString();
  currentOperationDisplay.textContent = currentOperation;
  previousOperation = "";
  currentOperator = "";
};

numberBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (currentOperation.length > 10) return;
    currentOperation += e.target.textContent;
    currentOperationDisplay.textContent = currentOperation;
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (currentOperator) {
      evaluate(currentOperator, +previousOperation, +currentOperation);
    }
    currentOperator = e.target.textContent;
    previousOperation = currentOperation;
    currentOperation = "";
  });
});

decimalBtn.addEventListener("click", (e) => {
  if (currentOperation.includes(".")) return;
  currentOperation += e.target.textContent;
  currentOperationDisplay.textContent = currentOperation;
});

equalsBtn.addEventListener("click", () => {
  evaluate(currentOperator, +previousOperation, +currentOperation);
});

allClearBtn.addEventListener("click", () => {
  currentOperation = "";
  previousOperation = "";
  currentOperator = "";
  currentOperationDisplay.textContent = "";
});

deleteBtn.addEventListener("click", () => {
  currentOperation = currentOperation.slice(0, -1);
  currentOperationDisplay.textContent = currentOperation;
});
