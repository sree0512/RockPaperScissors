let userScore = 0
let computerScore = 0
let result = ""
let ties = 0
let computerHand
let hand = ["Rock", "Paper", "Scissors"]

let message =""
let messageEl = document.getElementById("message-el")
let resultEl = document.getElementById("result-el")
let scoreEl = document.getElementById("score-el")

function getRandomHand(){
    let randomIndex = Math.floor(Math.random()*hand.length)
    return hand[randomIndex]
}
console.log (getRandomHand())


function player(userHand){
    computerHand = getRandomHand()
    if(userHand === computerHand){
        result = "It's a Tie"
        ties++
    }else
    if((userHand === "Rock" && computerHand === "Scissors")||
    (userHand === "Paper" && computerHand === "Rock")||
    (userHand === "Scissors" && computerHand === "Paper")){
        result = "You Won"
        userScore++
    } else {
    result = "You Lose"
    computerScore++
    }
    messageEl.textContent = result
    resultEl.innerHTML = `your Hand: <strong>${userHand}, 
                          Computer Hand: <strong>${computerHand}`
    scoreEl.textContent = `Wins: ${userScore},
                           Loses: ${computerScore},
                           Ties: ${ties}`
}

function startNew(){
    userScore = 0
    computerScore = 0
    result = ""
    ties = 0    
    messageEl.textContent = "Choose your Hand";
    resultEl.innerHTML = ""; // Clear result display
    scoreEl.textContent = ""; // Clear score display
}