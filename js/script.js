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

// Set event listeners for all buttons to display their contents on the display
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear-screen");
const calculatorDisplay = document.querySelector(".display");

digitButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        calculatorDisplay.textContent += event.target.textContent;
    });
});

const operations = ['+', '-', '*', '/'];

operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // If an operation has already been selected, switch it to the new one
        if (operations.includes(calculatorDisplay.textContent[calculatorDisplay.textContent.length - 2])) {
            calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -2) + ` ${event.target.textContent} `;
        } else {
            calculatorDisplay.textContent += ` ${event.target.textContent} `;
        }
    });
});

clearButton.addEventListener("click", () => {
    calculatorDisplay.textContent = '';
});