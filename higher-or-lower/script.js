let currentNumber = []
let wins = 0
let losses = 0
window.onload = function () {
  currentNumber.push(Math.floor(Math.random()*13 + 1))
  document.getElementById('numberCard').src = "./hearts/" + currentNumber[0] + ".png"
}
function doStuff (value) {
  let nextNumber = Math.floor(Math.random()*13 + 1)
  console.log(currentNumber)
  console.log(nextNumber)
  if (value === 'higher') {
    if (currentNumber[0] < nextNumber) {
      document.getElementById('winMessage').innerHTML = 'Correct!'
      wins++
      document.getElementById('wins').innerHTML = 'Wins: ' + wins
      console.log(currentNumber)
      console.log(nextNumber)
    }
    else if (currentNumber[0] > nextNumber) {
      document.getElementById('winMessage').innerHTML = 'Incorrect :('
      losses++
      document.getElementById('losses').innerHTML = 'Losses: ' + losses
      console.log(currentNumber)
      console.log(nextNumber)
    }
  }
  if (value === 'lower') {
    if (currentNumber[0] > nextNumber) {
      document.getElementById('winMessage').innerHTML = 'Correct!'
      wins++
      document.getElementById('wins').innerHTML = 'Wins: ' + wins
      console.log(currentNumber)
      console.log(nextNumber)
    }
    else if (currentNumber[0] < nextNumber) {
      document.getElementById('winMessage').innerHTML = 'Incorrect :('
      losses++
      document.getElementById('losses').innerHTML = 'Losses: ' + losses
      console.log(currentNumber)
      console.log(nextNumber)
    }
  }
  currentNumber.shift()
  currentNumber.push(nextNumber)
  document.getElementById('numberCard').src = "./hearts/" + currentNumber[0] + ".png"
}
