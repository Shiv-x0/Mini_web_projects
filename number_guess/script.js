let gameResult = document.getElementById('gameResult');
let userInput = document.getElementById('userInput');
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
  let guessedNumber = parseInt(userInput.value);

  // Helper function to set message and style
  function setResult(message, bgColor, textColor = 'white') {
    gameResult.textContent = message;
    gameResult.style.backgroundColor = bgColor;
    gameResult.style.color = textColor;
    gameResult.style.padding = '12px';
    gameResult.style.borderRadius = '6px';
  }

  // Check conditions
  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
    setResult('Please enter a valid number', '#e5e7eb', '#1f2937');
  } else if (guessedNumber === randomNumber) {
    setResult('Good Guess!', '#22c55e', 'white');
  } else if (guessedNumber > randomNumber) {
    setResult('Too high', '#ef4444', 'white');
  } else if (guessedNumber < randomNumber) {
    setResult('Too low', '#ef4444', 'white');
  }
}
