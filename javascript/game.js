const compChoiceDisplay = document.getElementById('comp-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const gameResultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let compChoice
let result

possibleChoices.forEach(possibleSelection => possibleSelection.addEventListener('click', (e)=>{
    userChoice =e.target.id 
    userChoiceDisplay.innerHTML = userChoice 

    generateComputerChoice()
    getResult();
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

function getResult(){

    switch(compChoice = userChoice){
        case 'PaperRock':
        case 'RockSiccors':
        case 'SiccorsPaper':
            result = 'You Lose'
            break;
        case 'RockPaper':
        case 'SiccorsRock':
        case 'PaperSiccors':
            result = 'You Win'
            break;
        case compChoice === userChoice:
            result ='Draw'

        }

        gameResultDisplay,innerHTML =result

}