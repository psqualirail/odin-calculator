let value = null;
let prevExpression = null;
let prevOperator = null;

const display = document.querySelector('#display');
display.textContent = value;

const numbers = document.querySelectorAll('button.number');
const operators = document.querySelectorAll('button.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

numbers.forEach(number => number.addEventListener('click', function() {
    display.textContent = display.textContent.concat(this.textContent);
}));
operators.forEach(operator => operator.addEventListener('click', function() {
    prevOperator = this.textContent;
    prevExpression = display.textContent;
    display.textContent = null;
}));
clear.addEventListener('click', function() {
    display.textContent = null;
    value = null;
    prevExpression = null;
    prevOperator = null;
});
equals.addEventListener('click', function() {
    if (prevOperator === null) {
        // Do nothing
    } else if (prevOperator === '+') {
        display.textContent = String(+prevExpression + +display.textContent);
    } else if (prevOperator === '-') {
        display.textContent = String(+prevExpression - +display.textContent);
    } else if (prevOperator === '*') {
        display.textContent = String(+prevExpression * +display.textContent);
    } else if (prevOperator === '/') {
        display.textContent = String(+prevExpression / +display.textContent);
    }
});