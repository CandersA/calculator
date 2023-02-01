console.log('js');

const numberbtns = Array.from(document.getElementsByClassName('num'));
const dot = document.getElementById('dot');
const operators = Array.from(document.getElementsByClassName('operator'));
const reset = document.getElementById('clear');
const equals = document.getElementById('equals');
const switchPlusMinus = document.getElementById('plusminus');
const result = document.getElementById('result');

const areaListener = new AbortController();

let arrayOfNum = [];
let realNumbers = [];
let operation;
let i = 0;

dot.addEventListener('click', () => {
    arrayOfNum.push(dot.textContent);
    console.log(arrayOfNum);
    combinedNum = arrayOfNum.join('');
    result.textContent = combinedNum;
    return combinedNum;
});

equals.addEventListener('click', () => {
    realNumbers[i] = combinedNum;
    i++;
    if (i > 1) {
        doOperation(operation);
    }
});

reset.addEventListener('click', clear);

numberbtns.forEach(numbtn => {
    numbtn.addEventListener('click', () => {
        getNumber(numbtn);
    }, { signal: areaListener.signal });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        result.textContent = 0;
        arrayOfNum = [];
        realNumbers[i] = combinedNum;
        console.log(realNumbers);
        operation = operator.textContent;
        i++;
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
        result.textContent = finalNum;
        z++;
        arrayOfNum = [];
        return finalNum;
    };
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
};

function add(num1,num2) {
    return parseInt(num1) + parseInt(num2);
};

function subtract(num1,num2) {
    return num1-num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1,num2) {
    return num2 != 0 ? num1 / num2 : "You can't divide by zero!";
};