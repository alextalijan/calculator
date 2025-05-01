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

function operate(firstNumber, operator, secondNumber) {
    // Based on the operator inputed, perform the proper operation
    switch(operator) {
        case '+':
            return add(firstNumber, secondNumber);

        case '-':
            return subtract(firstNumber, secondNumber);

        case '*':
            return multiply(firstNumber, secondNumber);

        case '/':
            // If the user tries to divide with 0, stop them from doing so
            if (secondNumber === 0) {
                alert("Oh, no, no... Please don't divide by 0.");
            } else {
                return divide(firstNumber, secondNumber);
            }
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
        // If the display just showed the result and there's not an operator, clear the display first before new digits
        if (isResult && !operations.includes(calculatorDisplay.textContent.split(' ').filter(element => element != '')[1])) {
            clearButton.click();
            isResult = false;
        }
        calculatorDisplay.textContent += event.target.textContent;
    });
});

const operations = ['+', '-', '*', '/'];

operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // If an operation has already been selected, switch it to the new one
        if (operations.includes(calculatorDisplay.textContent[calculatorDisplay.textContent.length - 2])) {
            calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -2) + ` ${event.target.textContent} `; 
        } // Else if the display is not empty, calculate the result of the current expression and start a new one
        else if (calculatorDisplay.textContent != '') {
            equalsButton.click();
            // If the user hasn't tried to divide by zero, add the operator
            if (calculatorDisplay.textContent != '') {
                calculatorDisplay.textContent += ` ${event.target.textContent} `;
            }
        }
    });
});

clearButton.addEventListener("click", () => {
    calculatorDisplay.textContent = '';
});

let isResult = false;

// When equals button is clicked, show the result on the display
equalsButton.addEventListener("click", () => {
    // Filter out empty spaces in the display
    const expression = calculatorDisplay.textContent.split(' ').filter((element) => element != '');

    // If full expression was provided show the result
    if (expression.length === 3) {
        calculatorDisplay.textContent = operate(+expression[0], expression[1], +expression[2]);
        // Let the browser know that a result has been shown
        isResult = true;
    }
});

const dotButton = document.querySelector(".dot");
dotButton.addEventListener("click", () => {
    const displayElements = calculatorDisplay.textContent.split(' ').filter(element => element != '');
    // If the current number doesn't already contain a dot or isn't an operator, add dot to the display
    if (!(operations.includes(displayElements[displayElements.length - 1]) || displayElements[displayElements.length - 1].includes('.'))) {
        calculatorDisplay.textContent += '.';
    }
});

// Depending on the button clicked, perform a proper function
document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "Backspace":
            // If the last move was an operator, delete all three spaces associated with it, else just the last one
            if (operations.includes(calculatorDisplay.textContent.split(' ').filter(element => element != '')[calculatorDisplay.textContent.split(' ').filter(element => element != ''). length - 1])) {
                calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -3);
            } else {
                calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1);
            }
    }
});