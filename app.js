
/*-------------------------------- Constants --------------------------------*/

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".button.C");
const operators = document.querySelectorAll(".button:not(.number, .C, .equals)"); // On my first attempt, the calculate function wasn't working,
//I asked chatGPT and it recommended using this :not method. I learned that what's happening is it's looking for all buttons that have
//a button class, but doesn't want any with number, C, or equals, which allows it to find the buttons that perform calculations. 


/*-------------------------------- Variables --------------------------------*/
let expression = '';

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach(number => {
  number.addEventListener("click", (event) => {
    expression += event.target.innerText;
    display.innerText = expression;
  });
});

operators.forEach(operator => {
  operator.addEventListener("click", (event) => {
    expression += event.target.innerText;
    display.innerText = expression;
  });
});

equalsButton.addEventListener("click", () => {
  try {
    const result = eval(expression);
    display.innerText = result;
    expression = result.toString();
  } catch (error) {
    display.innerText = 'Error';
    expression = '';
  }
});

clearButton.addEventListener("click", () => {
  display.innerText = '';
  expression = '';
});


