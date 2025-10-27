
const input = document.querySelector('#guessField');
const prevGuesses = document.querySelector(".guesses");
const remain = document.querySelector('.remaining_guess')
const btn = document.querySelector('#subt');
const display_res = document.querySelector('.lowOrHi')
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let store = []
let count = 10

function submit() {
    const userInput = Number(input.value);

    if (!userInput || userInput < 1 || userInput > 100) {
        display_res.textContent = "Please enter a number between 1 and 100.";
        return;
    }
    store.push(userInput);
    prevGuesses.innerHTML = store.join(" ");
    remain.innerHTML = --count;

    if (userInput == randomNumber) {
        display_res.innerHTML = 'Yayy..!You Guess correctly.Number'
        btn.disabled = true;
        input.disabled = true;
    }
    else if (count === 0) {
        display_res.textContent = `Game Over! The number was ${randomNumber}`;
        btn.disabled = true;
        input.disabled = true;
    } 
    else if (userInput < randomNumber) {
        display_res.textContent = "Too low! Try again.";
    } 
    else {
        display_res.textContent = "Too high! Try again.";
    }

    input.value = "";
    input.focus();
};


btn.addEventListener("click", () => {
  submit();
});

btn.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submit(event);
  }
});










