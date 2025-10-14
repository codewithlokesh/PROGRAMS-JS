const num = document.querySelector('.guessField')
const submit = document.querySelector('.guessSubmit')
const showGuess = document.querySelector('.guesses')
const remain = document.querySelector('.lastResult')
const lowhigh = document.querySelector('.lowOrHi')
const result = document.querySelector('.resultParas')
let random = Math.floor(Math.random()*100+1)

let chances =1
const p = document.createElement('p')
let gameStatus = true
if(gameStatus){
    submit.addEventListener('click',function(ex){
        ex.preventDefault();
        let guess = Number(num.value)
        
        validateGuess(guess);

    })
}


function validateGuess(number){
    if(isNaN(number)){
        alert("This is not a number")
    }
    else if(number>100){
        alert("Number cannot be greater than 100")
    }
    else if(number<0){
        alert("Number should be greater than 0")
    }
    else{
        if(chances===10){
            displayGuess(number)
            displayMessage(`GameOver... Your random number was ${random}`)
            endGame()
        }
        else{
            checkGuess(number)
            displayGuess(number) 
        }
    }
}
function checkGuess(number){
    if(random == number){
        displayMessage(`You guessed it right`)
        endGame();
    }
    else if(random > number){
        displayMessage(`Number is low`)
    }
    else{
        displayMessage(`Number is high`)
    }
   
}
function displayGuess(number){
    console.log(num.value)
    num.value = ''
    showGuess.innerHTML += `${number}  `
    chances++
    remain.innerHTML = `${11-chances}`
}

function displayMessage(message){
   lowhigh.innerHTML = `<h4>${message}</h4>`
}
function endGame(){
   num.setAttribute('disabled','')
   submit.setAttribute('disabled','')
   
   p.setAttribute('class','start')
   p.textContent = 'Start New Game'
   result.appendChild(p);
   gameStatus = false
   startGame()
}

function startGame(){
        const newGame = document.querySelector('.start')
        newGame.addEventListener('click',function(ex){
        chances=1;
        remain.textContent = `${11-chances}`
        lowhigh.innerHTML = ''
        console.log(result)
        console.log(p.parentNode  )
        result.removeChild(p)
        showGuess.innerHTML = ''
        num.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        random = Math.floor(Math.random()*100+1)
        gameStatus = true;
    })
}
