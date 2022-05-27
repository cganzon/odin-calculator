const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const decimalBtn = document.querySelector('#decimal');
const equalsBtn = document.querySelector('#equals');
const allClearBtn = document.querySelector('#all-clear');
const deleteBtn = document.querySelector('#delete');
const currentOperationDisplay = document.querySelector('.current-operation');

let currentOperation = '';
let previousOperation = '';
let currentOperator = '';

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

numberBtns.forEach(button => {
  button.addEventListener('click', e => {
    currentOperation += e.target.textContent;
    currentOperationDisplay.textContent = currentOperation;
  })
})

operatorBtns.forEach(button => {
  button.addEventListener('click', e => {
    alert(e.target.textContent);
  })
})

decimalBtn.addEventListener('click', e => {
  alert(e.target.textContent);
})

allClearBtn.addEventListener('click', e => {
  alert(e.target.textContent);
})

deleteBtn.addEventListener('click', e => {
  alert(e.target.textContent);
})
