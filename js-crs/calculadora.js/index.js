const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const equalsButton = document.getElementById("equals");
let currentInput = "";

    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentInput += button.textContent;
            display.value = currentInput;
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
          if (currentInput !== "" && !isLastCharOperator()) {
            currentInput += button.textContent;
            display.value = currentInput;
          }
        });
      });
      
    function isLastCharOperator() {
    return /[+\-*/]$/.test(currentInput);
    }

    equalsButton.addEventListener("click", () => {
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = "Erro";
        currentInput = "";
    }
    });

    clearButton.addEventListener("click", () => {
    currentInput = "";
    display.value = "";
    });

    backspaceButton.addEventListener("click", () => {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      });
      