let wins = 0
let losses = 0
function rockIcon() {
  userInput = "Rock"
  document.getElementById('userInput').innerHTML = "Rock"
}
function paperIcon() {
  userInput = "Paper"
  document.getElementById('userInput').innerHTML = "Paper"
}
function scissorsIcon() {
  userInput = "Scissors"
  document.getElementById('userInput').innerHTML = "Scissors"
}
document.getElementById('goBtn').onclick = function runRPS() {
    let cpuResult = document.getElementById("cpuResult"),
    msgHeading = document.getElementById('msgHeading'),
    randomize = Math.random() *100,
    cpuChoice
if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
  if (randomize > 0 && randomize < 34) {
    cpuChoice = "Rock"
  }
  else if (randomize >= 34 && randomize < 66) {
    cpuChoice = "Paper"
  }
  else {
    cpuChoice = "Scissors"
  }
  cpuResult.innerHTML = cpuChoice
  if (userInput === cpuChoice) {
    msgHeading.innerHTML = "You live another day but were not able to win."
    msgHeading.style.color = "purple"
  }
  else if (userInput === "Rock" && cpuChoice === "Paper") {
    msgHeading.innerHTML = "You have fallen in battle."
    msgHeading.style.color = "red"
    losses++
  }
  else if (userInput === "Rock" && cpuChoice === "Scissors") {
    msgHeading.innerHTML = "You won the battle but not the war."
    msgHeading.style.color = "green"
    wins++
  }
  else if (userInput === "Paper" && cpuChoice === "Rock") {
    msgHeading.innerHTML = "You won the battle but not the war."
    msgHeading.style.color = "green"
    wins++
  }
  else if (userInput === "Paper" && cpuChoice === "Scissors") {
    msgHeading.innerHTML = "You have fallen in battle."
    msgHeading.style.color = "red"
    losses++
  }
  else if (userInput === "Scissors" && cpuChoice === "Rock") {
    msgHeading.innerHTML = "You have fallen in battle."
    msgHeading.style.color = "red"
    losses++
  }
  else if (userInput === "Scissors" && cpuChoice === "Paper") {
    msgHeading.innerHTML = "You won the battle but not the war."
    msgHeading.style.color = "green"
    wins++
  }
}
document.getElementById('wins').innerHTML = "Wins: " + wins
document.getElementById('losses').innerHTML = "Losses: " + losses
}
function test() {
  window.location = "startmenu.html"
}
