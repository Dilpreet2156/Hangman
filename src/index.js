import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
let me

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    me.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessEl.innerHTML = me.statusMessage

    me.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    me = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
