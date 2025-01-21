const secretNumber = Math.floor(Math.random() * 100) + 1;
let guessesRemaining = 7;

const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('check');
const message = document.getElementById('message');

checkButton.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  guessesRemaining--;

  if (guess === secretNumber) {
    message.textContent = `Congratulations! You guessed the number in ${7 - guessesRemaining} tries!`;
    checkButton.disabled = true; //Disable button after win
  } else if (guessesRemaining === 0) {
    message.textContent = `You ran out of guesses. The number was ${secretNumber}.`;
    checkButton.disabled = true; //Disable button after loss
  } else {
    let messageText = guess < secretNumber ? "Too low!" : "Too high!";
    messageText += ` You have ${guessesRemaining} guesses left.`;
    message.textContent = messageText;
  }

  guessInput.value = ''; //Clear input field
});