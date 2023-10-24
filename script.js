let number = 77;

let button = document.getElementById("button");
let resultSpan = document.getElementById("result");

function checkGuess() {
  let guess = Number(document.getElementById("guess").value);
  let numGuess = parseInt(guess);

  if (0 < numGuess > 100 && number !== numGuess) {
    resultSpan.innerText = "Wrong";
  } else if (number === numGuess) {
    resultSpan.innerText = "You got it";
  } else {
    resultSpan.innerText = "Number is not in range";
  }
};

button.addEventListener("click", checkGuess);