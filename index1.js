//document.getElementById("count-el").innerText = 5
//let firstBatch =5

//let num = document.getElementById("save-el")
//let count = 0
alert("RULES: You can draw as many cards as you want. If the sum of numbers on the cards is greater than21 you are out of the game. If its 21 then you won!!!")
let cards =[]
let sum =0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let result = document.getElementById("message-el2")
let card = document.getElementById("message-el1")
let playerEl = document.getElementById("player-el")

function getRandomCard(){
  let randomNum = Math.floor(Math.random()*13) +1
  if (randomNum===1) {
    return 11
  }
  else if (randomNum>=11) {
    return 10
  }
  else {
    return randomNum
  }

}
function startGame(){
  isAlive = true
  let firstCard =getRandomCard()
  let secondCard =  getRandomCard()
  cards = [firstCard,secondCard]
  sum = firstCard + secondCard
  renderGame()
}
function renderGame(){
  result.textContent = "Sum: " + sum
  card.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    card.textContent += cards[i] + " "
  }

  if (sum<=20) {
    message = "Do you want to draw a new card??"
  }
  else if (sum===21) {
    message = "You got the Black-Jack"
    hasBlackJack = true
  }
  else {
    message = "Out of the game"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard(){
  if (isAlive===true && hasBlackJack===false) {
    let cardd = getRandomCard()
    cards.push(cardd)
    sum = sum + cardd

    renderGame()
  }
  else {
    console.log("Sorry!!!")
  }

}
