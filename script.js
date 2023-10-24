let number = 77;

let button = document.getElementById("button");
let resultSpan = document.getElementById("result");

function checkGuess() {
  let guess = Number(document.getElementById("guess").value);
  let numGuess = parseInt(guess);

  while (numGuess !== NaN) {
    if (numGuess < 1 || numGuess > 100) {
        prompt("Number is not in range, try again.");
    } else if (numGuess !== number) {
        prompt("Wrong number, try again.")
    } else if (number === numGuess) {
        prompt("You got it!")
    }
}


};

button.addEventListener("click", checkGuess);