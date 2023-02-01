console.log('js');

const numberbtns = Array.from(document.getElementsByClassName('num'));
const dot = document.getElementById('dot');
const operators = Array.from(document.getElementsByClassName('operator'));
const reset = document.getElementById('clear');
const equals = document.getElementById('equals');
const switchPlusMinus = document.getElementById('plusminus');
const result = document.getElementById('result');

let arrayOfNum = [];
let realNumbers = [];
let operation;
let i = 0;
let dotClicked = false;

dot.addEventListener('click', () => {
    if (dotClicked == true) {
        return;
    }
    arrayOfNum.push(dot.textContent);
    console.log(arrayOfNum);
    combinedNum = arrayOfNum.join('');
    result.textContent = combinedNum;
    dotClicked = true;
    return combinedNum;
});

equals.addEventListener('click', () => {
    realNumbers[i] = combinedNum;
    i++;
    dotClicked = false;
    if (i > 1) {
        doOperation(operation);
    }
});

reset.addEventListener('click', clear);

numberbtns.forEach(numbtn => {
    numbtn.addEventListener('click', () => {
        getNumber(numbtn);
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        result.textContent = 0;
        arrayOfNum = [];
        realNumbers[i] = combinedNum;
        operation = operator.textContent;
        i++;
        dotClicked = false;
        if (i > 1) {
            doOperation(operation);
        }
        return operation;
    });
});

let finalNum = 0;
let z = 0;

function doOperation(operation) {
    if (operation == '+') {
        if (z < 1) {
            finalNum = add(realNumbers[z], realNumbers[z+1]);
        } else {
            finalNum = add(finalNum, realNumbers[z+1]);
        }
    }
    else if (operation == '-') {
        if (z < 1) {
            finalNum = subtract(realNumbers[z], realNumbers[z+1]);
        } else {
            finalNum = subtract(finalNum, realNumbers[z+1]);
        }
    }
    else if (operation == 'x') {
        if (z < 1) {
            finalNum = multiply(realNumbers[z], realNumbers[z+1]);
        } else {
            finalNum = multiply(finalNum, realNumbers[z+1]);
        }
    }
    else if (operation == '/') {
        if (z < 1) {
            finalNum = divide(realNumbers[z], realNumbers[z+1]);
        } else {
            finalNum = divide(finalNum, realNumbers[z+1]);
        }
    };
    result.textContent = finalNum;
    z++;
    arrayOfNum = [];
    return finalNum;
};

//areaListener.abort()
let combinedNum;

function getNumber(numbtn) {
    arrayOfNum.push(numbtn.textContent);
    combinedNum = arrayOfNum.join('');
    result.textContent = combinedNum;
    return combinedNum;
};

function clear() {
    result.textContent = 0;
    arrayOfNum = [];
    realNumbers = [];
    i = 0;
    z = 0;
    finalNum = 0;
    dotClicked = false;
};

function add(num1,num2) {
    return parseFloat(num1) + parseFloat(num2);
};

function subtract(num1,num2) {
    return parseFloat(num1) - parseFloat(num2);
};

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
};

function divide(num1,num2) {
    return num2 != 0 ? parseFloat(num1) / parseFloat(num2) : "You can't divide by zero!";
};