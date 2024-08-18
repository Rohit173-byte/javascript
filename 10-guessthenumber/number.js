let randomnumber = parseInt(Math.random() * 100 + 1);

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const lastGuess=document.querySelector('.lastResult')
const lowOrhi=document.querySelector('.lowOrHi')
const StartOver=document.querySelector('.resultParas')
 
const p = document.createElement('p')

let playgame = true

let prevguess=[]
let numguess=1

if(playgame){
  submit.addEventListener('click',function(e){
e.preventDefault()
const guess=parseInt(userInput.value)
console.log(guess)
validateguess(guess)  
  })
  
}
function validateguess(guess){
if(isNaN(guess)){
  alert("please enter valid number") 
  }
  else if(guess<1){
    alert("please enter valid number")
  }
  else if(guess>100){
    alert("please enter valid number")
  }
  else{
    prevguess.push(guess)
    if(numguess===11){
      cleanguess(guess)
      displayMessage(`the random no. is ${randomnumber}`)
      endgame()
    }
    else{
      
      cleanguess(guess);
      checkguess(guess)
    }
  }
  
}



function checkguess(guess){
if(guess===randomnumber){
  displayMessage("your guess is correct")
  endgame()
}
else if(guess>randomnumber){
  displayMessage("your guess is high")
}
else if(guess<randomnumber){
  displayMessage("your guess is low")
}
}
function cleanguess(guess){
userInput.value=``
guessSlot.innerHTML+=`${guess}  `
numguess++
lastGuess.innerHTML=`${11-numguess}`



}

function displayMessage(message){
lowOrhi.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
userInput.innerHTML=''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="new game">START NEW GAME</h2>`
StartOver.appendChild(p)
playgame=false;
newgame()
}

function newgame(){
const newgamebutton=document.querySelector("#newgame")
newgamebutton.addEventListener('click',function(e){
randomnumber = parseInt(Math.random() * 100 + 1);
prevguess=[]
numguess=1
guessSlot.innerHTML=''
lastGuess.innerHTML=`${11-numguess}`
userInput.removeAttribute('disabled')
StartOver.removeChild('p')
playgame=true



})
}







