const compChoiceDisplay = document.getElementById('comp-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const gameResult = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleSelection => possibleSelection.addEventListener('click', (e)=>{
    userChoice =e.target.id 
    userChoiceDisplay.innerHTML = userChoice 
}))

function generateComputerCoice(){
    const randomNumber = Math.random() * possibleChoices.length
}