const compChoiceDisplay = document.getElementById('comp-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const gameResult = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let compChoice

possibleChoices.forEach(possibleSelection => possibleSelection.addEventListener('click', (e)=>{
    userChoice =e.target.id 
    userChoiceDisplay.innerHTML = userChoice 

    generateComputerChoice()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    switch(randomNumber){
        case 0:
            compChoice = 'Rock'
            break;
        case 1:
            compChoice ='Paper'
            break;
        case 2:
            compChoice = 'Siccors'
        

    }

    compChoiceDisplay.innerHTML = compChoice
}