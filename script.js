let number = 77;

let button = document.getElementById("button");
let resultSpan = document.getElementById("result");

function checkGuess() {
  let guess = Number(document.getElementById("guess").value);
  let numGuess = parseInt(guess);

  while (numGuess !== number) {
    if (numGuess < 0 || numGuess > 100) {
        resultSpan.innerText = "Number not in range. Try again.";
        break;
        } else if (numGuess !== number) {
        resultSpan.innerText = "Wrong number. Try again.";
        break;
        }
    };  
    if (number === numGuess) {
        resultSpan.innerText = "You guessed correctly!";    
    };
};

button.addEventListener("click", checkGuess);