const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const ScissorsBtn = document.getElementById('ScissorsBtn');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const roundMessage = document.getElementById('roundMessage');
const gameResult = document.getElementById('gameResult');


let playerPoint = 0;
let compPoint = 0;
let message = "";
let round = 0;
let resultMessage = "";

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "paper"){
        message = "You lose! Paper beats Rock";
        compPoint++;
    }else if (playerSelection == "rock" && computerSelection == "scissors"){
        message = "You win! Rock beats scissors";
        playerPoint++;
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        message = "You win! Paper beats Rock";
        playerPoint++;
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        message = "You lose! Scissors beats Paper";
        compPoint++;
    }else if (playerSelection == "scissors" && computerSelection == "rock"){ 
        message = "You lose! Rock beats Scissors";
        compPoint++;
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        message = "You win! Scissors beats Paper";
        playerPoint++;
    }else{
        message = "Tie! Nobody wins";
    }
    playerScore.textContent = `Player: ${playerPoint}`;
    computerScore.textContent = `Computer: ${compPoint}`;
    roundMessage.textContent = `Round ${++round}: ${message}`;
    if(round == 5) {
        gameResult.textContent = `Final score: ${resultFinal()}`;
        paperBtn.style.pointerEvents = "none";
        ScissorsBtn.style.pointerEvents = "none";
        rockBtn.style.pointerEvents = "none";
    }
}

rockBtn.addEventListener('click', () => playRound('rock',getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper',getComputerChoice()));
ScissorsBtn.addEventListener('click', () => playRound('Scissors',getComputerChoice()));


function resultFinal() {
    if(playerPoint > compPoint){
        return "You win!";
    }else if(playerPoint < compPoint){
        return "You lose!, the computer win";
    }
    else{
        return "Draw";
    }
    rockBtn.addEventListener('')
}
