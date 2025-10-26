let display = document.getElementById('display');
let memoryIndicator = document.getElementById('memoryIndicator');
let currentInput = '';
let operator = '';
let previousInput = '';
let memory = 0;

// Update memory indicator
function updateMemoryIndicator() {
    if (memory !== 0) {
        memoryIndicator.textContent = 'M';
    } else {
        memoryIndicator.textContent = '';
    }
}

// Memory Recall - displays the value stored in memory
function memoryRecall() {
    if (memory !== 0) {
        currentInput = memory.toString();
        display.value = currentInput;
    }
}

// Memory Clear - clears the memory
function memoryClear() {
    memory = 0;
    updateMemoryIndicator();
}

// Memory Add - adds current display value to memory
function memoryAdd() {
    if (currentInput !== '') {
        memory += parseFloat(currentInput);
        updateMemoryIndicator();
    }
}

// Memory Subtract - subtracts current display value from memory
function memorySubtract() {
    if (currentInput !== '') {
        memory -= parseFloat(currentInput);
        updateMemoryIndicator();
    }
}

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function appendDecimal() {
    if (currentInput.includes('.')) return;
    currentInput += '.';
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '^':
            result = Math.pow(prev, current);
            break;
        default:
            return;
    }
    
    display.value = result;
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}

function calculatePercentage() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    display.value = currentInput;
}

function calculateSquareRoot() {
    if (currentInput === '') return;
    const value = parseFloat(currentInput);
    if (value < 0) {
        display.value = 'Error';
        currentInput = '';
        return;
    }
    currentInput = Math.sqrt(value).toString();
    display.value = currentInput;
}

function calculateSquare() {
    if (currentInput === '') return;
    currentInput = Math.pow(parseFloat(currentInput), 2).toString();
    display.value = currentInput;
}

function toggleSign() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) * -1).toString();
    display.value = currentInput;
}
