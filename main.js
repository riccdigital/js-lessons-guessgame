let randomNumber = Math.floor(Math.random() * 50) + 1

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowHi = document.querySelector('.lowHi')

const guessSubmit = document.querySelector('.guessSubmit')
const guessInput = document.querySelector('.guessInput')

let guessCount = 1
let resetButton

function checkGuess () {
  let userGuess = Number(guessInput.value)
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: '
  }
  guesses.textContent += userGuess + '' + '. '

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congrats!! You got it!'
    lastResult.style.backgroundColor = 'green'
    lowHi.textContent = ''
    setGameOver()
  } else if (guessCount === 5) {
    lastResult.textContent = '!!Out of Turns!!'
    setGameOver()
  } else {
    lastResult.textContent = 'Wrong!'
    lastResult.style.backgroundColor = 'red'
    if (userGuess < randomNumber) {
      lowHi.textContent = 'Too low!!'
    } else if (userGuess > randomNumber) {
      lowHi.textContent = 'Too Hi'
    }
  }
  guessCount++
  guessInput.value = ''
  guessInput.focus()
}
guessSubmit.addEventListener('click', checkGuess)

function setGameOver () {
  guessInput.disabled = true
  guessSubmit.disabled = true
  resetButton = document.createElement('button')
  resetButton.textContent = 'Start New Game!'
  document.body.append(resetButton)
  resetButton.addEventListener('click', resetGame)
}

function resetGame () {
  guessCount = 1

  const resetParas = document.querySelectorAll('.results')
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = ''
  }
  resetButton.parentNode.removeChild(resetButton)

  guessInput.disabled = false
  guessSubmit.disabled = false
  guessInput.value = ''
  guessInput.focus()

  lastResult.style.backgroundColor = 'pink'

  randomNumber = Math.floor(Math.random() * 50) + 1
}
