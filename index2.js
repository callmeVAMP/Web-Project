
let randomNum = Math.floor(Math.random()*3)
let choice = ["rock", "Paper","Scissor"]
let player = document.getElementById("yourChoice")
let computer = document.getElementById("compChoice")
let playerSc = document.getElementById("yourScore")
let computerSc = document.getElementById("compScore")
let resultt = document.getElementById("final")
let sump =0
let sumc =0
function startGame(){
    console.log("I was clicked")
}
let your = ""

function startGame1(){
    your = "rock"
    let randomNum = Math.floor(Math.random()*3)
    player.textContent = "Your Choice: " + "Rock"
    computer.textContent = "Computer's Choice: " +choice[randomNum]
    result(randomNum,'rock')
}
function startGame2(){
    your = "paper"
    let randomNum = Math.floor(Math.random()*3)
    player.textContent = "Your Choice: " + "Paper"
    computer.textContent = "Computer's Choice: " +choice[randomNum]
    result(randomNum,'paper')
}
function startGame3(){
    your = "scissors"
    let randomNum = Math.floor(Math.random()*3)
    player.textContent = "Your Choice: " + "Scissors"
    computer.textContent = "Computer's Choice: " +choice[randomNum]
    result(randomNum,'scissor')
}
function result(randomNum1,user){
    if(user === 'rock'){
        if((choice[randomNum1] === 'rock')){
            computerSc.textContent  += "0" + " "
            playerSc.textContent += "0" + " "

    
        }
        else if(choice[randomNum1] === 'Paper'){
            computerSc.textContent  += "1" + " "
            playerSc.textContent += "0" + " "
            sumc+= 1
    
        }
        else{
            computerSc.textContent  += "0" + " "
            playerSc.textContent += "1" + " "
            sump +=1
        }
    }
    else if(user === 'paper'){
        if((choice[randomNum1] === 'rock')){
            computerSc.textContent  += "0" + " "
            playerSc.textContent += "1" + " "
            sump+=1
        }
        else if(choice[randomNum1] === 'Paper'){
            computerSc.textContent  += "0" + " "
            playerSc.textContent += "0" + " "
            
        }
        else{
            computerSc.textContent  += "1" + " "
            playerSc.textContent += "0" + " "
            sumc +=1
        }
    }
    else{
        if((choice[randomNum1] === 'rock')){
            computerSc.textContent  += "1" + " "
            playerSc.textContent += "0" + " "
            sumc+=1
        }
        else if(choice[randomNum1] === 'Paper'){
            computerSc.textContent  += "0" + " "
            playerSc.textContent += "1" + " "
            sump+=1
        }
        else{
            computerSc.textContent  += "0" + " "
            playerSc.textContent += "0" + " "
    
        }
    }
    if(sumc>sump){
        resultt.textContent = "Result:" + " " + "You Lose"
    }
    else if(sumc<sump){
        resultt.textContent = "Result:" + " " + "You Win"
    } 
    else{
        resultt.textContent = "Result:" + " "+ "Draw"
    }
}