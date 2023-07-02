const p1 = document.querySelector("#txt-1");
const p2 = document.querySelector("#txt-2");
const makeGuessBtn = document.querySelector("#make-guess-btn");
const guessInput = document.querySelector("#guess-number-input");
const lowerInput = document.querySelector("#lower-bound");
const upperInput = document.querySelector("#upper-bound");
const form = document.querySelector("form");
const statusTxt = document.querySelector(".status strong");

lowerInput.value = 1;
upperInput.value = 10;
let lastGuess = "None";
let random = getRandomNumber(+lowerInput.value, +upperInput.value);
guessInput.min = lowerInput.value;
guessInput.max = upperInput.value;

p1.innerHTML = `Guess a number between ${lowerInput.value} and ${upperInput.value}`;
p2.innerHTML = `Last guess: ${lastGuess}`;

makeGuessBtn.addEventListener("click", guessFunction);

function guessFunction(e) {
  // Creating a new variable for status
  let status;
  const value = guessInput.value; // value is actually string, such as '4',
  // we need to convert to Number with '+' sign infront, or as Number(value)
  // or use == which helps with coercion

  //   if (+value === random) {
  //   if (Number(value) === random) {
  if (value.length) {
    // make sure that value is not an empty string
    console.log(value, random);
    if (value == random) {
      status = "You got it!";
    } else if (+value > random) {
      status = "Nope. Lower";
    } else {
      status = "Nope. Higher";
    }

    lastGuess = guessInput.value;
  } else {
    status = "Please enter a number!";
  }
  statusTxt.innerHTML = status;
}

// This form resets lower and upper bounds for the guessing number
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  if (
    guessInput.min !== lowerInput.value ||
    guessInput.max !== upperInput.value
  ) {
    p1.innerHTML = `Guess a number between ${lowerInput.value} and ${upperInput.value}`;
    p2.innerHTML = `Last guess: ${lastGuess}`;

    guessInput.min = lowerInput.value;
    guessInput.max = upperInput.value;

    // We need to convert lowerInput and upperInput values into Number before
    // sending to getRandomNumber function
    random = getRandomNumber(+lowerInput.value, +upperInput.value);
    lastGuess = "None";
    guessInput.value = "";
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
