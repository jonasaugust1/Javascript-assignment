const resultSpan = document.getElementById('result')
const playAgaingBtn = document.getElementById('play-again')

const computerPlay = () => {
    const moves = ['ROCK', 'PAPER', 'SCISSORS']
    let random = Math.floor(Math.random() * (moves.length - 1))

    return moves[random]
}

const play = () => {
    let playerSelection = window.prompt('Choose between Rock, Paper or Scissors').toUpperCase()

    const computerSelection = computerPlay()

    if (computerSelection == 'ROCK') {
        switch (playerSelection) {
            case 'ROCK': resultSpan.innerHTML = `<strong>It was a Draw!</strong>
                                                    Your move: ${playerSelection}
                                                    Computer move: ${computerSelection}`
    
                break
            case 'PAPER': resultSpan.innerHTML = `<strong>You won!</strong>
                                                    Your move: ${playerSelection}
                                                    Computer move: ${computerSelection}`
                break
            case 'SCISSORS': resultSpan.innerHTML = `<strong>You lose!</strong>
                                                        Your move: ${playerSelection}
                                                        Computer move: ${computerSelection}`
                break
            default: resultSpan.innerHTML =
                'It was not possible to set a winner. Choose between Rock, Paper or Scissors'
                break
        }
    }

    if (computerSelection == 'PAPER') {
        switch (playerSelection) {
            case 'ROCK': resultSpan.innerHTML = `<strong>You lose!</strong>
                                                    Your move: ${playerSelection}
                                                    Computer move: ${computerSelection}`
                break
            case 'PAPER': resultSpan.innerHTML = `<strong>It was a Draw!</strong>
                                                    Your move: ${playerSelection}
                                                    Computer move: ${computerSelection}`
                break
            case 'SCISSORS': resultSpan.innerHTML = `<strong>You won!</strong>
                                                        Your move: ${playerSelection}\n
                                                        Computer move: ${computerSelection}`
                break
            default: resultSpan.innerHTML =
                'It was not possible to set a winner. Choose between Rock, Paper or Scissors'
                break
        }
    }

    if (computerSelection == 'SCISSORS') {
        switch (playerSelection) {
            case 'ROCK': resultSpan.innerHTML = `<strong>You won!</strong>
                                                    Your move: ${playerSelection}
                                                    Computer move: ${computerSelection}`
                break
            case 'PAPER': resultSpan.innerHTML = `<strong>You lose!</strong>
                                                    Your move: ${playerSelection}
                                                    Computer move: ${computerSelection}`
                break
            case 'SCISSORS': resultSpan.innerHTML = `<strong>It was a Draw!</strong>
                                                        Your move: ${playerSelection}
                                                        Computer move: ${computerSelection}`
                break
            default: resultSpan.innerHTML =
                'It was not possible to set a winner. Choose between Rock, Paper or Scissors'
                break
        }
    }

}

play()

playAgaingBtn.addEventListener('click', play)