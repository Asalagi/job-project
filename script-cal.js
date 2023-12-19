// tutorial on youtube by Web Dev Simplified. I really liked this!

class Calculator {
    constructor(previousOutput, currentOutput) {
        this.previousOutput = previousOutput;
        this.currentOutput = currentOutput;
        this.clear();
    }

    clear() {
        this.currentOperator = '';
        this.previousOperator = '';
        this.operator = undefined;
    }

    delete () {
        this.currentOperator = this.currentOperator.toString().slice(0, -1);
    }

    chooseNumber (number) {
        if (number === '.' && this.currentOperator.includes('.')) return
        this.currentOperator = this.currentOperator.toString() + number.toString();
    }

    chooseOperator (operator) {
        if (this.currentOperator === '') return;
        if (this.previousOperator !== ''){
            this.compute();
        }
        this.operator = operator;
        this.previousOperator = this.currentOperator;
        this.currentOperator = ''
    }

    compute () {
        let computation
        const prev = parseFloat(this.previousOperator); 
        const curr = parseFloat(this.currentOperator);
        if(isNaN(prev) || isNaN(curr)) return;
        switch (this.operator){
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '÷':
                computation = prev / curr;
                break;
            case '×':
                computation = prev * curr;
                break;
            default: 
                return
        }
        this.currentOperator = computation;
        this.operator = undefined;
        this.previousOperator = '';

    }

    getDisplayNum(number){
        const stringNum = number.toString();
        const digits = parseFloat(stringNum.split('.'[0]));
        const decimal = stringNum.split('.')[1];
        let numDisplay
        if (isNaN(digits)){
            numDisplay = ''
        } else {
            numDisplay = digits.toLocaleString('en', {
                maximumFractionDigits: 0}); 
        }
        if (decimal != null) {
            return `${numDisplay}.${decimal}`
        } else {
            return numDisplay;
        }
    }

    updateDisplay () {
        this.currentOutput.innerText = this.getDisplayNum(this.currentOperator);
        if (this.operator != null){
        this.previousOutput.innerText = 
            `${this.getDisplayNum(this.previousOperator)} ${this.operator}`;
      } else {
        this.previousOutput.innerText = '';
      }
    }

}

const numButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOutput = document.querySelector('[data-previous]');
const currentOutput = document.querySelector('[data-current]');

const calculator = new Calculator(previousOutput, currentOutput);

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});
