const numberbtns = Array.from(document.getElementsByClassName('num'));
const dot = document.getElementById('dot');
const operators = Array.from(document.getElementsByClassName('operator'));
const reset = document.getElementById('clear');
const equals = document.getElementById('equals');
const switchPlusMinus = document.getElementById('plusminus');
const result = document.getElementById('result');

let realNumbers = [];
let dotClicked = false;
let finalNum = '';
let z = 1;
let operatorIcon;

function resetDot() {
  dot.style.filter = 'brightness(100%)';
  dotClicked = false;
}

function whenOperator(operator) {
  operatorIcon = operator.textContent;
  if (operatorIcon === '%') {
    finalNum = result.textContent;
    finalNum = parseFloat(finalNum) * 0.01;
    finalNum = finalNum.toString();
    result.textContent = finalNum;
    realNumbers[realNumbers.length - 1] = finalNum;
  } else {
    result.textContent = '0';
    // eslint-disable-next-line no-unused-expressions
    realNumbers.length < 2 ? realNumbers.push(finalNum) : false;
    finalNum = '';
  }
  resetDot();
}

function divide(num1, num2) {
  return num2 !== 0 ? parseFloat(num1) / parseFloat(num2) : 'Error';
}

function operation(operator, num1, num2) {
  if (operator === '+') {
    finalNum = parseFloat(num1) + parseFloat(num2);
  } else if (operator === '-') {
    finalNum = parseFloat(num1) - parseFloat(num2);
  } else if (operator === 'x') {
    finalNum = parseFloat(num1) * parseFloat(num2);
  } else if (operator === '/') {
    finalNum = divide(num1, num2);
  }
  result.textContent = Math.round(finalNum * 1000) / 1000;
  z += 2;
  realNumbers.push(finalNum.toString());
  finalNum = '';
}

function whenEquals() {
  realNumbers.push(finalNum);
  finalNum = '';
  operation(operatorIcon, realNumbers[z - 1], realNumbers[z]);
  resetDot();
}

function plusMinus() {
  if (result.textContent === '0') {
    finalNum += '-';
    result.textContent = '-';
  } else {
    let numberToSwitch = result.textContent;
    numberToSwitch = parseFloat(numberToSwitch) * -1;
    result.textContent = numberToSwitch;
    realNumbers[realNumbers.length - 1] = numberToSwitch.toString();
  }
}

function addDot() {
  if (dotClicked === true) {
    return;
  }
  finalNum += dot.textContent;
  result.textContent = finalNum;
  dot.style.filter = 'brightness(70%)';
  dotClicked = true;
}

function getNumber(numbtn) {
  finalNum += numbtn.textContent;
  result.textContent = finalNum;
}

function clear() {
  result.textContent = '0';
  finalNum = '';
  realNumbers = [];
  z = 1;
  resetDot();
}

dot.addEventListener('click', addDot);

switchPlusMinus.addEventListener('click', plusMinus);

equals.addEventListener('click', whenEquals);

reset.addEventListener('click', clear);

numberbtns.forEach((numbtn) => {
  numbtn.addEventListener('click', () => {
    getNumber(numbtn);
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    whenOperator(operator);
  });
});