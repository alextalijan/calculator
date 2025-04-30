function add(addend1, addend2) {
    return addend1 + addend2;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(factor, multiplier) {
    return factor * multiplier;
}

function divide(dividend, divisor) {
    return dividend / divisor;
}

function operate(operator, firstNumber, secondNumber) {
    // Based on the operator inputed, perform the proper operation
    switch(operator) {
        case '+':
            return add(firstNumber, secondNumber);

        case '-':
            return subtract(firstNumber, secondNumber);

        case '*':
            return multiply(firstNumber, secondNumber);

        case '/':
            return divide(firstNumber, secondNumber);
    }
}