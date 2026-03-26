let guess = parseInt(Math.random()*100 + 1)
console.log(guess)

const checkBtn = document.querySelector('#check-button')
const userInput = document.querySelector("#guess")
const messageSec = document.getElementById('allmessages')
const preGuess = document.getElementById('previous-guess')
const attempts = document.getElementById('attempts') 
const result = document.getElementById('result')
let gameRun = true
let count = 0
let guessList = []

if(gameRun){
    checkBtn.addEventListener('click',function(e){
        e.preventDefault()
        const userGuess = parseInt(userInput.value)
        console.log(userGuess);
        validateGuess(userGuess);
    })
}

function validateGuess(userGuess){
    if(isNaN(userGuess)){
        alert("Enter a valid number")
    }
    else if(userGuess > 100){
        alert("number should be less than 100 ")
    } 
    else if(userGuess < 0){
        alert("number should be greater than 0 ")
    }
    else {
        guessList.push(userGuess);
        if (count === 10) {
        displayGuess(userGuess);
        displayMessage(`Game Over. Random number was ${guess}`)
        endGame();
        } 
        else {
        displayGuess(userGuess);
        checkGuess(userGuess);
        } 
    }
}
function displayMessage(message) {
  result.innerHTML = `<h2>${message}</h2>`;
}
function checkGuess(userGuess){
    if(userGuess === guess){
        displayMessage("You guess it right")
        endGame()
    }
    else if(userGuess < guess){
        displayMessage("You guess is too low")
        
    }
    else if(userGuess > guess){
        displayMessage("You guess is too high")
        
    }
    
}

function displayGuess(gue){
    if(count > 10){
        displayMessage(`Game Over. Number was ${guess}`);
        endGame();
    }
    userInput.value = '';
    preGuess.innerHTML += `${gue} - `;
    count++;
    attempts.innerHTML = `${10 - count} `;
}

function StartGame(){
    const newGame = document.getElementById('start-over')
    newGame.addEventListener('click',function(e){
        e.preventDefault()
        gameRun=true
        guessList = []
        userInput.removeAttribute('disabled')
        guess = parseInt(Math.random()*100 + 1)
        count = 0
        attempts.innerHTML = '10'
        result.innerHTML = ''
        preGuess.innerHTML = ''
        newGame.remove()
    })
}

function endGame(){
    gameRun = false
    userInput.setAttribute('disabled','')
    const h3 = document.createElement('h3')
    h3.setAttribute('id',"start-over")
    h3.innerText = "Start New Game"
    messageSec.appendChild(h3)
    StartGame()
}