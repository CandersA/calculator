console.log('js');

function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num2 != 0 ? num1 / num2 : "You can't divide by zero!";
}

console.log(divide(0,3));