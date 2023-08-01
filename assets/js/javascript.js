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
let playerEmoji = "";
let compEmoji = "";

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
    switch (playerSelection) {
        case "rock":
            playerEmoji = "✊";
            break;
        case "paper":
            playerEmoji = "✋";
            break;
        default:
            playerEmoji = "✌";
            break;
    }
    switch (computerSelection) {
        case "rock":
            compEmoji = "✊";
            break;
        case "paper":
            compEmoji = "✋";
            break;
        default:
            compEmoji = "✌";
            break;
    }
    if(playerSelection != computerSelection){
        if(playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "scissors" && computerSelection == "paper"){
                message = `You win! ${playerSelection} beats ${computerSelection}`;
                playerPoint++;
        }else{
            message = `You lose! ${computerSelection} beats ${playerSelection}`;
            compPoint++;
        }
    }
    else {
        message = "Tie! Nobody wins"
    }
    
    playerScore.textContent = `${playerEmoji} Player: ${playerPoint}`;
    computerScore.textContent = `${compEmoji} Computer: ${compPoint}`;
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
ScissorsBtn.addEventListener('click', () => playRound('scissors',getComputerChoice()));


function resultFinal() {
    if(playerPoint > compPoint){
        return "You win!";
    }else if(playerPoint < compPoint){
        return "You lose!, the computer win";
    }
    else{
        return "Draw";
    }
}
