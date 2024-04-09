/*-------------------------------- Constants --------------------------------*/
const numbers = document.querySelectorAll(".button")
// 1. create a variable for .display
const display = document.querySelector(".display")

/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/




/*----------------------------- Event Listeners -----------------------------*/


numbers.forEach(number => {
  number.addEventListener("click", (event) => {
    const buttonText = event.target.innerText;


    console.log(buttonText);

    
    addToDisplay(buttonText);

    if (buttonText === "C") {
      clearCalc();
    } else if (buttonText === "=") {
      calculateResult();
    }
  });
});




/*-------------------------------- Functions --------------------------------*/

let clearCalc = () => {
  display.innerHTML = "0";
};

let addToDisplay = (text) => {
  if (display.innerHTML === "0" || display.innerHTML === "Error") {
    display.innerHTML = text;
  } else {
    display.innerHTML += text;
  }
};

let calculateResult = () => {
  
    display.innerHTML = eval(display.innerHTML);
}





